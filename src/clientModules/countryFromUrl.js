import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Country-specific links: the address bar always carries `?country=<code>`, so a copied URL
// opens with that country. On load, `?country=` selects the country before the app renders
// (CountrySelector / useCountry read it from localStorage). Vercel redirects `/jp/<path>` here (vercel.json)
const STORAGE_KEY = 'docusaurus.tab.country';
const DEFAULT_COUNTRY = 'us';
const COUNTRIES = ['au', 'us', 'ca', 'kr', 'jp'];

function storedCountry() {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_COUNTRY;
  } catch {
    return DEFAULT_COUNTRY;
  }
}

// Mirror the selected country into the address bar without a navigation
function syncUrl() {
  const url = new URL(window.location.href);
  const country = storedCountry();
  if (url.searchParams.get('country') === country) return;
  url.searchParams.set('country', country);
  window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
}

if (ExecutionEnvironment.canUseDOM) {
  const country = new URL(window.location.href).searchParams.get('country')?.toLowerCase();
  if (COUNTRIES.includes(country)) {
    try {
      localStorage.setItem(STORAGE_KEY, country);
    } catch {
      // ignore
    }
  }
  // Country picked in the selector (dispatched by CountrySelector)
  window.addEventListener('country-change', syncUrl);
}

export function onRouteDidUpdate() {
  if (ExecutionEnvironment.canUseDOM) syncUrl();
}
