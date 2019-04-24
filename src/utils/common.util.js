export function dateFormatter(value) {
  if (!(value instanceof Date)) {
    value = new Date(value);
  }
  return value.toLocaleDateString();
}

export function openURL(url) {
  if (url) {
    window.location.href = url;
  }
}