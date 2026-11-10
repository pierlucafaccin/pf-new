/* Original pixel icons for Faccin OS. No external assets or icon fonts. */
(() => {
  'use strict';
  const folder = '<path d="M2 8h11l3 3h14v17H2z" fill="#171d25"/><path d="M3 9h9l3 3h14v14H3z" fill="#f2c84b"/><path d="M3 12h26v2H4v11H3z" fill="#fff2a6"/><path d="M5 16h25l-3 12H2z" fill="#171d25"/><path d="M6 17h23l-3 10H3z" fill="#f5d774"/><path d="M6 17h22v2H6z" fill="#fff4ba"/>';
  const monitor = '<path d="M3 3h26v21H19v4h6v3H7v-3h6v-4H3z" fill="#171d25"/><path d="M4 4h24v19H4z" fill="#c6c9c8"/><path d="M5 5h22v2H7v13H5z" fill="#fff"/><path d="M7 7h18v13H7z" fill="#115c92"/><path d="M8 8h16v11H8z" fill="#67cbd1"/><path d="M14 24h4v5h6v1H8v-1h6z" fill="#b0b6b8"/><path d="M24 21h2v1h-2z" fill="#20a346"/>';
  const paper = '<path d="M7 2h14l6 6v22H7z" fill="#171d25"/><path d="M8 3h12v6h6v20H8z" fill="#fffdf2"/><path d="M21 4l4 4h-4z" fill="#d6d9d8"/><path d="M11 12h12v2H11zm0 5h12v2H11zm0 5h9v2h-9z" fill="#8094a7"/>';
  const icons = {
    folder,
    projects: folder + '<path d="M17 17h9v9h-9z" fill="#204f99"/><path d="M18 18h7v1h-6v5h-1zm3 2h3v1h-2v2h-1z" fill="#fff"/>',
    work: '<path d="M11 4h10v5h8v20H3V9h8z" fill="#19222b"/><path d="M13 6h6v3h-6z" fill="#008080"/><path d="M4 10h24v18H4z" fill="#a67539"/><path d="M5 11h22v7H5z" fill="#d2a55c"/><path d="M5 19h22v2H5z" fill="#785426"/><path d="M14 17h4v6h-4z" fill="#ffe598"/><path d="M5 11h22v1H6v5H5z" fill="#efd49a"/>',
    personal: folder + '<path d="M18 18h6v2h2v4h-2v3h-6v-3h-2v-4h2z" fill="#d56843"/><path d="M20 19h2v2h2v2h-2v2h-2v-2h-2v-2h2z" fill="#ffe5b4"/>',
    academic: '<path d="M1 11L16 4l15 7-15 7z" fill="#172746"/><path d="M4 11l12-5 12 5-12 5z" fill="#517ab3"/><path d="M7 16l9 4 9-4v9l-9 4-9-4z" fill="#1c3f79"/><path d="M8 17l8 4v6l-8-3z" fill="#4272ad"/><path d="M28 13h2v13h-2zm-1 11h4v5h-4z" fill="#e0ab30"/>',
    profile: '<path d="M5 2h22v28H5z" fill="#19222b"/><path d="M6 3h20v26H6z" fill="#fffcdf"/><path d="M7 4h18v4H7z" fill="#134990"/><path d="M13 10h7v2h2v7h-2v3h-7v-3h-2v-7h2z" fill="#b7794f"/><path d="M13 12h7v7h-7z" fill="#eabe8e"/><path d="M13 10h7v3h-7zm-2 3h2v3h-2z" fill="#38322e"/><path d="M11 22h11v2h2v4H9v-4h2z" fill="#2e7093"/><path d="M7 8h18v1H7z" fill="#a7abb3"/>',
    training: '<path d="M3 3h26v20H18v5h7v2H7v-2h7v-5H3z" fill="#19222b"/><path d="M4 4h24v18H4z" fill="#fffdf1"/><path d="M4 4h24v3H4z" fill="#21645d"/><path d="M7 10h7v7H7z" fill="#d6b23e"/><path d="M17 10h8v2h-8zm0 5h6v2h-6z" fill="#628497"/><path d="M15 23h2v6h-2z" fill="#9dabae"/>',
    certificate: '<path d="M3 3h26v23H3z" fill="#19222b"/><path d="M4 4h24v21H4z" fill="#fff6cf"/><path d="M6 6h20v1H7v15H6zm1 15h18v1H7zm18-14h1v15h-1z" fill="#b58d2d"/><path d="M10 9h12v2H10zm0 4h12v1H10zm0 3h7v1h-7z" fill="#486587"/><path d="M18 20h8v11l-4-3-4 3z" fill="#254d94"/><path d="M19 19h6v2h2v5h-2v2h-6v-2h-2v-5h2z" fill="#c29420"/><path d="M20 21h4v4h-4z" fill="#ffe894"/>',
    document: paper,
    contact: '<path d="M4 4h24v25H4z" fill="#19222b"/><path d="M5 5h22v19H5z" fill="#c8e0df"/><path d="M5 6l11 10L27 6v3L16 19 5 9z" fill="#4d7c89"/><path d="M3 25h26v3H3z" fill="#c2c7c7"/><path d="M7 8h18v1H7z" fill="#f6ffff"/>',
    mail: '<path d="M2 7h28v21H2z" fill="#19222b"/><path d="M3 8h26v19H3z" fill="#fff5d5"/><path d="M3 9l13 10L29 9v3L16 22 3 12z" fill="#a0a4a7"/><path d="M3 26l9-8 2 1-8 7zm26 0-9-8-2 1 8 7z" fill="#d6caa2"/><path d="M23 10h4v5h-4z" fill="#6a9ec8"/>',
    github: '<path d="M5 2h22v28H5z" fill="#182530"/><path d="M6 3h20v26H6z" fill="#f4f5ec"/><path d="M9 8h14v2H9zm0 4h5v2H9zm9 0h5v2h-5z" fill="#6e8190"/><path d="M12 17l-5 5 5 5 2-2-3-3 3-3zm8 0 5 5-5 5-2-2 3-3-3-3z" fill="#213f76"/>',
    linkedin: '<path d="M3 3h26v26H3z" fill="#133f73"/><path d="M4 4h24v24H4z" fill="#2b73ad"/><path d="M7 7h4v4H7zm0 6h4v12H7zm7 0h4v2h2v-2h4v2h2v10h-4v-8h-4v8h-4z" fill="#fff"/>',
    start: monitor + '<path d="M10 10h7v2h-5v2h4v2h-4v2h-2zm9 0h4v2h-2v2h2v2h-2v2h-2z" fill="#13416c"/>',
    search: '<path d="M5 3h13v2h3v3h2v10h-2v3h-3v2H8v-2H5v-3H3V8h2z" fill="#182530"/><path d="M7 5h10v2h3v3h1v7h-3v3H9v-2H6V8h1z" fill="#bce4ea"/><path d="M8 7h9v2H9v8H7V9h1z" fill="#fff"/><path d="M20 20h4v3h3v3h3v4h-5v-3h-3v-3h-2z" fill="#243b5e"/>',
    arrow: '<path d="M3 14h20l-7-7 2-2 11 11-11 11-2-2 7-7H3z" fill="currentColor"/>',
    back: '<path d="M29 14H9l7-7-2-2L3 16l11 11 2-2-7-7h20z" fill="currentColor"/>',
    help: '<path d="M8 2h16v2h4v4h2v16h-2v4h-4v2H8v-2H4v-4H2V8h2V4h4z" fill="#19222b"/><path d="M9 3h14v2h4v4h2v14h-2v4h-4v2H9v-2H5v-4H3V9h2V5h4z" fill="#165aaf"/><path d="M11 7h10v2h3v6h-3v3h-3v3h-4v-5h3v-3h3v-3h-7v3H9V9h2zm3 17h4v4h-4z" fill="#f7ffff"/>',
    settings: '<path d="M12 2h8v5h5v5h5v8h-5v5h-5v5h-8v-5H7v-5H2v-8h5V7h5z" fill="#20303b"/><path d="M13 3h6v5h5v5h5v6h-5v5h-5v5h-6v-5H8v-5H3v-6h5V8h5z" fill="#adb7b9"/><path d="M12 10h8v2h2v8h-2v2h-8v-2h-2v-8h2z" fill="#182530"/><path d="M13 12h6v1h1v6h-1v1h-6v-1h-1v-6h1z" fill="#4c9eab"/>',
    running: '<path d="M3 17h7v-5h6v4h5v4h5v2h4v8H2V19h1z" fill="#162330"/><path d="M4 18h7v-5h4v4h5v4h5v2h4v5H3v-8h1z" fill="#d96b36"/><path d="M3 26h26v3H3z" fill="#fff4ce"/><path d="M13 17h4v2h-4zm4 3h4v2h-4zm-9-1h3v4H5v-2h3z" fill="#ffe4a9"/>',
    nexus: '<path d="M12 1h8v8h-8zM1 23h8v8H1zm22 0h8v8h-8z" fill="#1b2840"/><path d="M13 2h6v6h-6zM2 24h6v6H2zm22 0h6v6h-6z" fill="#e9c247"/><path d="M14 9h4v8h-4zM5 15h22v3H5zm0 3h3v5H5zm19 0h3v5h-3z" fill="#226cac"/><path d="M11 12h10v10H11z" fill="#1b2840"/><path d="M12 13h8v8h-8z" fill="#6fc7d4"/><path d="M14 15h4v4h-4z" fill="#f6ffff"/>',
    shield: '<path d="M3 5L16 1l13 4v15l-4 6-9 6-9-6-4-6z" fill="#182c39"/><path d="M4 6l12-4 12 4v14l-4 5-8 6-8-6-4-5z" fill="#628b9a"/><path d="M6 7l10-3v24l-7-5-3-4z" fill="#9ac5c7"/><path d="M10 14h4v4h3v-8h4v11h-9v-3h-2z" fill="#ffe9a0"/>',
    portal: monitor + '<path d="M10 10h4v3h-4zm7 0h5v3h-5zm-7 6h4v2h-4zm7 0h5v2h-5z" fill="#fff7d2"/>',
    car: '<path d="M8 9h16l4 9h3v10h-4v3h-5v-3H10v3H5v-3H1V18h3z" fill="#182530"/><path d="M9 10h14l3 8H6z" fill="#8ad4dc"/><path d="M10 11h5v6H7zm8 0h4l2 6h-6z" fill="#dff9f4"/><path d="M3 19h26v8H3z" fill="#c95e3e"/><path d="M4 20h5v3H4zm19 0h5v3h-5z" fill="#fff0a3"/><path d="M11 23h10v2H11z" fill="#3a4350"/>',
    price: paper + '<path d="M14 10h4v2h5v3h-8v2h8v8h-5v2h-4v-2h-4v-3h9v-2h-9v-8h4z" fill="#286e66"/>',
    close: '<path d="M7 6l9 9 9-9 2 2-9 9 9 9-2 2-9-9-9 9-2-2 9-9-9-9z" fill="currentColor"/>',
    minimize: '<path d="M6 23h20v4H6z" fill="currentColor"/>',
    maximize: '<path d="M5 5h22v22H5zm3 7v12h16V12z" fill="currentColor"/>'
  };
  window.FaccinIcons = Object.freeze({
    render(name, size = 32) {
      const dimension = Math.max(12, Math.min(96, Number(size) || 32));
      return `<svg class="pixel-icon" width="${dimension}" height="${dimension}" viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" focusable="false">${icons[name] || icons.document}</svg>`;
    }
  });
})();
