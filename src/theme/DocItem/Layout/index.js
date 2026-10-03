import React, {useEffect} from 'react';
import clsx from 'clsx';
import {useHistory} from '@docusaurus/router';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc, useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import DocMeta from '@site/src/components/DocMeta';
import styles from '@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css';
import {useCountry} from '../../hooks/useCountry';

// Country variants share a base id: `foo` (US), `foo-ca` (CA), `foo-au` (AU)
const baseDocId = (id) => id.replace(/-(au|ca)$/, '');

function flattenLinks(items, out = []) {
  for (const item of items ?? []) {
    if (item.type === 'link' && item.docId) out.push(item);
    if (item.type === 'category') flattenLinks(item.items, out);
  }
  return out;
}

function isVisibleFor(item, country) {
  const countries = item.customProps?.countries;
  return !Array.isArray(countries) || countries.includes(country);
}

// When the selected country doesn't match the open doc, move to that
// country's version of the doc (or the first doc visible for that country)
function useCountryRedirect(metadata, frontMatter) {
  const country = useCountry();
  const sidebar = useDocsSidebar();
  const history = useHistory();

  useEffect(() => {
    const countries = frontMatter.countries;
    if (!Array.isArray(countries) || countries.includes(country)) return;
    const links = flattenLinks(sidebar?.items).filter((l) => isVisibleFor(l, country));
    const fileName = (id) => baseDocId(id).split('/').pop();
    const target =
      links.find((l) => baseDocId(l.docId) === baseDocId(metadata.id)) ??
      // Country variant may live in a different folder (e.g. AU-only groups)
      links.find((l) => fileName(l.docId) === fileName(metadata.id)) ??
      links[0];
    if (target && target.href !== metadata.permalink) history.replace(target.href);
  }, [country, metadata.id]);
}

function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {hidden, mobile, desktop};
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {frontMatter, metadata} = useDoc();
  useCountryRedirect(metadata, frontMatter);

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            <DocMeta author={frontMatter.author} created={frontMatter.created} />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
