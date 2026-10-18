import frData from '../i18n/fr.json';
import enData from '../i18n/en.json';

const translations = {
  fr: frData,
  en: enData
};

const STORAGE_KEY = 'starnetauto_lang';
let currentLang = 'fr';

function getNestedValue(obj, path) {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : undefined;
  }, obj);
}

export function initI18n() {
  const savedLang = localStorage.getItem(STORAGE_KEY);
  if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
    currentLang = savedLang;
  } else {
    // Detect browser language if French is not default
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'en') {
      currentLang = 'en';
    } else {
      currentLang = 'fr';
    }
  }

  applyTranslations(currentLang);
  setupLangToggle();
}

export function getCurrentLang() {
  return currentLang;
}

export function setLanguage(lang) {
  if (lang !== 'fr' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
}

export function toggleLanguage() {
  const newLang = currentLang === 'fr' ? 'en' : 'fr';
  setLanguage(newLang);
}

function applyTranslations(lang) {
  const data = translations[lang];
  if (!data) return;

  // Update HTML tag
  document.documentElement.setAttribute('lang', lang);

  // Update title & meta description
  if (data.meta) {
    if (data.meta.title) {
      document.title = data.meta.title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.meta.description) {
      metaDesc.setAttribute('content', data.meta.description);
    }
  }

  // Update text content with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedValue(data, key);
    if (val !== undefined && typeof val === 'string') {
      el.textContent = val;
    }
  });

  // Update attributes with data-i18n-attr (format: "attrName:path.to.key")
  const attrElements = document.querySelectorAll('[data-i18n-attr]');
  attrElements.forEach((el) => {
    const raw = el.getAttribute('data-i18n-attr');
    const [attr, key] = raw.split(':');
    const val = getNestedValue(data, key);
    if (val !== undefined && typeof val === 'string') {
      el.setAttribute(attr, val);
    }
  });

  // Update language toggle buttons text (shows opposite language to switch to)
  const toggles = document.querySelectorAll('.js-lang-toggle');
  toggles.forEach((btn) => {
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    btn.setAttribute('aria-label', lang === 'fr' ? 'Passer en anglais' : 'Switch to French');
  });

  // Update WhatsApp dynamic message
  const whatsappBtns = document.querySelectorAll('.js-whatsapp-link');
  const baseMessage = lang === 'fr'
    ? 'Bonjour StarNetAuto, je souhaite réserver un créneau de detailing pour mon véhicule à Monaco.'
    : 'Hello StarNetAuto, I would like to book a detailing appointment for my vehicle in Monaco.';
  const encodedMsg = encodeURIComponent(baseMessage);
  whatsappBtns.forEach((btn) => {
    btn.setAttribute('href', `https://wa.me/37764062044?text=${encodedMsg}`);
  });
}

function setupLangToggle() {
  const toggles = document.querySelectorAll('.js-lang-toggle');
  toggles.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  });
}
