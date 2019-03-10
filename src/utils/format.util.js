export function dateFormatter(value) {
  if (!(value instanceof Date)) {
    value = new Date(value);
  }
  return value.toLocaleDateString();
}