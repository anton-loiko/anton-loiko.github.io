import { writable } from 'svelte/store';

const screenWidth = writable(typeof window !== 'undefined' ? window.innerWidth : 0);

function updateWidth() {
  if (typeof window !== 'undefined') {
    screenWidth.set(window.innerWidth);
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', updateWidth);
  window.addEventListener('unload', () => {
    window.removeEventListener('resize', updateWidth);
  });
}

export { screenWidth , updateWidth};
