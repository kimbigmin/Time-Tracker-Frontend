export async function getData(setFn: any) {
  const response = await fetch("http://localhost:3000/timedata");
  const result = await response.json();
  await setFn(result);
}
