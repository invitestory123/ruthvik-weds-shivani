/**
 * wedding-data.js — Customer-facing editable data layer for Ruthvik & Shivani
 * Configured for Ruthvik & Shivani Wedding — 5 November 2026
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Ruthvik",
    bride: "Shivani",
    tagline: "Two souls, one sacred journey",
  },

  wedding: {
    dateLabel: "Thursday, 5 November 2026",
    weddingISO: "2026-11-05T10:00:00+05:30",
  },

  venue: {
    name: "H.O. Convention Hall",
    address: "Urmilanagar, Bhavanipuram, Vijayawada, Andhra Pradesh 520012",
    mapsUrl: "https://share.google/dzXPJKhvYKG56K8dt",
    qrCode: "./editable/assets/venue-qr.png",
  },

  events: [
    {
      name: "Wedding",
      glyph: "☀",
      date: "5 Nov 2026",
      time: "10:00 AM",
      venue: "H.O. Convention Hall, Urmilanagar, Bhavanipuram, Vijayawada",
      note: "Together with our families, we invite you to celebrate our union.",
    },
  ],

  eventDates: {
    Wedding: "2026-11-05T10:00:00+05:30",
  },

  music: {
    track: "./editable/assets/bg-music.mp3",
    autoplay: true,
  },
  audio: "./editable/assets/bg-music.mp3",
  bgMusic: "./editable/assets/bg-music.mp3",

  images: {
    couple: "./editable/assets/couple.jpg",
    hero: "./editable/assets/hero-arch.jpg",
    ringsVignette: "./editable/assets/rings-seashell-vignette.png",
    venueMap: "./editable/assets/venue-map-Wf_iSDI1.jpg",
    venueQr: "./editable/assets/venue-qr.png",
    footerWash: "./editable/assets/footer-wash-DG1rtX_C.jpg",
    openerVideo: "./editable/assets/wedding-opener.mp4",
    ogImage: "./editable/assets/couple.jpg",
  },
};
