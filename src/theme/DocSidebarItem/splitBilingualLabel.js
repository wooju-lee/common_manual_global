// "Sales Registration (매출(판매) 등록)" → [_, "Sales Registration", "매출(판매) 등록"]
// Splits off the trailing top-level parenthetical when it contains Korean
export default function splitBilingualLabel(label) {
  if (typeof label !== 'string' || !label.endsWith(')')) return null;
  let depth = 0;
  for (let i = label.length - 1; i >= 0; i--) {
    if (label[i] === ')') depth++;
    else if (label[i] === '(' && --depth === 0) {
      const main = label.slice(0, i).trim();
      const sub = label.slice(i + 1, -1);
      return main && /[가-힣]/.test(sub) ? [label, main, sub] : null;
    }
  }
  return null;
}
