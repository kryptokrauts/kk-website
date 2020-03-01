function monthToText(month) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  return monthNames[month];
}

export function dateFormatter(date) {
  if (date.length === 4) {
    return date;
  }
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return monthToText(date.getUTCMonth())
    + ' ' + date.getUTCDate() + ', '
    + date.getUTCFullYear();
}

export function openURL(url, external) {
  if (url) {
    if (external) {
      window.gtag("event", "click", {
        event_category: "outbound",
        event_label: url,
        transport_type: "beacon",
        event_callback: function () {
          console.log("gtag click event callback is working!");
        }
      });
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  }
}