import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Country-specific links: `?country=jp` selects the country before the app renders,
// so CountrySelector / useCountry start with it. Vercel redirects `/jp/<path>` here (vercel.json)
const STORAGE_KEY = 'docusaurus.tab.country';
const COUNTRIES = ['au', 'us', 'ca', 'kr', 'jp'];

if (ExecutionEnvironment.canUseDOM) {
  const url = new URL(window.location.href);
  const country = url.searchParams.get('country')?.toLowerCase();
  if (country) {
    if (COUNTRIES.includes(country)) {
      try {
        localStorage.setItem(STORAGE_KEY, country);
      } catch {
        // ignore
      }
    }
    // Drop the param so the address bar shows the plain doc URL
    url.searchParams.delete('country');
    window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
  }
}
