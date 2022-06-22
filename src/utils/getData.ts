// import { Dispatch, SetStateAction } from "react";
// import { OneDay } from "../type";

export async function getData(setFn: any) {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/time`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  await setFn(result);
}
