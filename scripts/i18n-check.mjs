// EN translation status for docs/ → i18n/en/docusaurus-plugin-content-docs/current/
//
//   npm run i18n:check                 # all docs
//   npm run i18n:check -- --country au # only docs for a country
//   npm run i18n:stamp -- <docs path>  # mark EN as up to date with the current KO source
//
// Each EN doc stores `source_hash` (hash of the KO source it was translated from)
// in its frontmatter. If the KO doc changes, the hash no longer matches → "outdated".
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const DOCS = 'docs';
const EN = 'i18n/en/docusaurus-plugin-content-docs/current';

const hash = (file) => crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex').slice(0, 10);
const frontMatter = (text) => (text.match(/^---\n([\s\S]*?)\n---/) || [])[1] ?? '';
const countriesOf = (text) =>
  (frontMatter(text).match(/^countries:\s*\[([^\]]*)\]/m)?.[1] ?? '').split(',').map((c) => c.trim()).filter(Boolean);
const sourceHashOf = (text) => frontMatter(text).match(/^source_hash:\s*"?([0-9a-f]+)"?/m)?.[1];

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

function stamp(files) {
  for (const arg of files) {
    const rel = path.relative(DOCS, path.resolve(arg.startsWith(DOCS) ? arg : path.join(DOCS, arg)));
    const ko = path.join(DOCS, rel);
    const en = path.join(EN, rel);
    if (!fs.existsSync(ko) || !fs.existsSync(en)) {
      console.error(`skip (missing KO or EN): ${rel}`);
      continue;
    }
    let text = fs.readFileSync(en, 'utf8');
    const line = `source_hash: "${hash(ko)}"`;
    text = /^source_hash:.*$/m.test(frontMatter(text))
      ? text.replace(/^source_hash:.*$/m, line)
      : text.replace(/^---\n/, `---\n${line}\n`);
    fs.writeFileSync(en, text);
    console.log(`stamped ${rel}`);
  }
}

function check(country) {
  const rows = {missing: [], outdated: [], unstamped: [], ok: []};
  for (const ko of walk(DOCS)) {
    const koText = fs.readFileSync(ko, 'utf8');
    const countries = countriesOf(koText);
    if (country && countries.length && !countries.includes(country)) continue;
    const rel = path.relative(DOCS, ko);
    const en = path.join(EN, rel);
    if (!fs.existsSync(en)) rows.missing.push(rel);
    else {
      const stamped = sourceHashOf(fs.readFileSync(en, 'utf8'));
      if (!stamped) rows.unstamped.push(rel);
      else if (stamped !== hash(ko)) rows.outdated.push(rel);
      else rows.ok.push(rel);
    }
  }
  const label = {outdated: 'KO changed after translation', missing: 'No EN translation', unstamped: 'EN without source_hash'};
  for (const key of ['outdated', 'missing', 'unstamped']) {
    if (!rows[key].length) continue;
    console.log(`\n${label[key]} (${rows[key].length})`);
    rows[key].forEach((r) => console.log(`  - ${r}`));
  }
  console.log(`\nUp to date: ${rows.ok.length}${country ? ` (country: ${country})` : ''}`);
}

const args = process.argv.slice(2);
if (args[0] === '--stamp') stamp(args.slice(1));
else check(args[args.indexOf('--country') + 1] && args.includes('--country') ? args[args.indexOf('--country') + 1] : null);
