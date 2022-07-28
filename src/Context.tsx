import { createContext, useEffect, useState } from "react";

export const myContext = createContext({});
export default function Context(props: any) {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/getuser`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res: any) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data: any) => {
        if (data) {
          setUserObject(data);
        }
      })
      .catch((err) => console.log("err:", err));
  }, []);

  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
}
