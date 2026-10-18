import './styles/main.css';
import { initI18n } from './js/i18n.js';
import { initNav } from './js/nav.js';
import { initGallery } from './js/gallery.js';
import { initAnimations } from './js/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNav();
  initGallery();
  initAnimations();
});
