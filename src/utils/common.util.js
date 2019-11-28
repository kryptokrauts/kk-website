export function dateFormatter(date) {
  if(date.length == 4) {
    return date;
  }
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  function pad(n) {
    return n<10 ? '0' + n: n
  }
  return pad(date.getUTCDate() + "."
  + pad(date.getUTCMonth()+1) + "."
  + date.getUTCFullYear());
}

export function openURL(url) {
  if (url) {
    window.location.href = url;
  }
}