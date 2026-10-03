import React, {useState, useEffect, useRef} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const STORAGE_KEY = 'docusaurus.tab.country';
const COUNTRIES = [
  {value: 'us', label: 'US', flag: '\u{1F1FA}\u{1F1F8}'},
  {value: 'ca', label: 'CA', flag: '\u{1F1E8}\u{1F1E6}'},
  {value: 'au', label: 'AU', flag: '\u{1F1E6}\u{1F1FA}'},
  {value: 'kr', label: 'KR', flag: '\u{1F1F0}\u{1F1F7}'},
];

function getStoredCountry() {
  if (!ExecutionEnvironment.canUseDOM) return 'us';
  try {
    return localStorage.getItem(STORAGE_KEY) || 'us';
  } catch {
    return 'us';
  }
}

function setStoredCountry(value) {
  if (!ExecutionEnvironment.canUseDOM) return;
  try {
    localStorage.setItem(STORAGE_KEY, value);
    // Dispatch storage event so Tabs with groupId="country" can sync
    window.dispatchEvent(new StorageEvent('storage', {key: STORAGE_KEY, newValue: value}));
    // Also dispatch a custom event for same-window sync
    window.dispatchEvent(new CustomEvent('country-change', {detail: value}));
  } catch {
    // ignore
  }
}

export default function CountrySelector() {
  const [selected, setSelected] = useState(getStoredCountry);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Listen for tab changes from other components (Tabs groupId sync)
  useEffect(() => {
    function handleStorage(e) {
      if (e.key === STORAGE_KEY && e.newValue) {
        setSelected(e.newValue);
      }
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  function handleSelect(value) {
    setSelected(value);
    setStoredCountry(value);
    setOpen(false);

    // Programmatically click the matching tab on the current page
    setTimeout(() => {
      const tabBtn = document.querySelector(
        `[role="tab"][data-value="${value}"]`
      );
      if (tabBtn && !tabBtn.classList.contains('tabs__item--active')) {
        tabBtn.click();
      }
    }, 50);
  }

  // Expose the selected country on <html> so CSS can hide country-specific navbar items
  useEffect(() => {
    document.documentElement.dataset.country = selected;
  }, [selected]);

  const current = COUNTRIES.find((c) => c.value === selected) || COUNTRIES[0];

  return (
    <div ref={ref} className="country-selector" style={{position: 'relative'}}>
      <button
        className="country-selector__button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select country"
        type="button"
      >
        <span className="country-selector__field-label">Country</span>
        <span className="country-selector__divider" />
        <span className="country-selector__flag">{current.flag}</span>
        <span className="country-selector__label">{current.label}</span>
        <span className={`country-selector__caret ${open ? 'country-selector__caret--open' : ''}`} />
      </button>
      {open && (
        <ul className="country-selector__dropdown">
          {COUNTRIES.map((c) => (
            <li key={c.value}>
              <button
                className={`country-selector__option ${
                  c.value === selected ? 'country-selector__option--active' : ''
                }`}
                onClick={() => handleSelect(c.value)}
                type="button"
              >
                <span>{c.flag}</span>
                <span>{c.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
