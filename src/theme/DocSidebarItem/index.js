import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import DocSidebarItemLink from './Link';
import DocSidebarItemCategory from './Category';
import {useCountry} from '../hooks/useCountry';

export default function DocSidebarItemWrapper(props) {
  const country = useCountry();
  const {item} = props;

  // If item has countries customProp, filter by selected country
  const countries = item.customProps?.countries;
  if (countries && Array.isArray(countries) && !countries.includes(country)) {
    return null;
  }

  // For categories, check if all children would be filtered out
  if (item.type === 'category' && item.items) {
    const hasVisibleChild = item.items.some((child) => {
      const childCountries = child.customProps?.countries;
      return !childCountries || !Array.isArray(childCountries) || childCountries.includes(country);
    });
    if (!hasVisibleChild) {
      return null;
    }
  }

  // Render links with the bilingual label component directly
  if (item.type === 'link') {
    return <DocSidebarItemLink {...props} />;
  }
  if (item.type === 'category') {
    return <DocSidebarItemCategory {...props} />;
  }

  return <DocSidebarItem {...props} />;
}
