export function minutesToHours(minutes: any) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;

  return `${hour}:${minute === 0 ? "00" : minute}`;
}
