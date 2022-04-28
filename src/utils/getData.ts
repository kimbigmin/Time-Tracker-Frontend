export async function getData(setFn: any) {
  const response = await fetch("http://localhost:3000/time", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  await setFn(result);
}
