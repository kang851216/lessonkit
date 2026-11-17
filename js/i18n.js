/* i18n.js — UI strings that live in JavaScript, picked by the page's <html lang>.
 *
 * Why a separate file: the site is being retargeted from Indonesian teachers to
 * English-speaking users page by page. Duplicating whole scripts per language
 * would mean two copies of the wheel/grouping logic drifting apart, so the copy
 * that JavaScript paints (canvas labels, toasts, share text) reads from here and
 * follows whatever `document.documentElement.lang` says.
 *
 * Pages that do not include this file keep working: every consumer falls back to
 * the Indonesian default string.
 */
window.I18N = (function () {
  const DICT = {
    id: {
      countText: (n) => n + ' nama',
      wheelEmpty1: 'Masukkan nama',
      wheelEmpty2: 'di kotak di atas',
      cardKicker: 'PEMENANG PUTARAN',
      cardTagline: 'Coba gratis · tanpa daftar',
      shareText: (w, url) => 'Pemenang undian: ' + w + '\nRoda putar nama gratis untuk kelas (bisa offline): ' + url,
      shareTitle: (w) => 'Pemenang: ' + w,
      shareFile: (w) => 'pemenang-' + w.replace(/\s+/g, '-').toLowerCase() + '.png',
      removeOn: 'Keluarkan: AKTIF',
      removeOff: 'Keluarkan pemenang',
      removeToastOn: 'Pemenang otomatis dikeluarkan',
      removeToastOff: 'Mode keluar dimatikan',
      shuffled: 'Urutan diacak',
      clearConfirm: 'Hapus semua nama?',
      copied: 'Disalin ke clipboard',
      copyFail: 'Gagal menyalin',
      imgFail: 'Gagal membuat gambar',
      imgSaved: 'Gambar diunduh',
    },
    en: {
      countText: (n) => n + ' name' + (n === 1 ? '' : 's'),
      wheelEmpty1: 'Add names',
      wheelEmpty2: 'in the box above',
      cardKicker: 'SPIN WINNER',
      cardTagline: 'Free · no sign-up',
      shareText: (w, url) => 'Spin winner: ' + w + '\nFree classroom name picker (works offline): ' + url,
      shareTitle: (w) => 'Winner: ' + w,
      shareFile: (w) => 'winner-' + w.replace(/\s+/g, '-').toLowerCase() + '.png',
      removeOn: 'Remove winner: ON',
      removeOff: 'Remove winner',
      removeToastOn: 'Winners are removed from the wheel',
      removeToastOff: 'Remove-winner mode off',
      shuffled: 'Order shuffled',
      clearConfirm: 'Clear all names?',
      copied: 'Copied to clipboard',
      copyFail: 'Copy failed',
      imgFail: 'Could not create the image',
      imgSaved: 'Image downloaded',
    },
  };

  const lang = (document.documentElement.lang || 'id').slice(0, 2).toLowerCase();
  const strings = DICT[lang] || DICT.id;
  return { lang: DICT[lang] ? lang : 'id', t: strings };
})();
