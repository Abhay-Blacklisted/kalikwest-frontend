// utils/stripHtml.js
export const stripHtml = (html = "") =>
  html.replace(/<\/?[^>]+(>|$)/g, "").trim();
