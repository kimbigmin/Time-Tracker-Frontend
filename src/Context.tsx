import { createContext, useEffect, useState } from "react";

export const myContext = createContext({});
export default function Context(props: any) {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    fetch(`https://timetracker-server.herokuapp.com/getuser`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res: any) => {
        console.log(res);
        return res.json();
      })
      .then((data: any) => {
        if (data) {
          setUserObject(data);
        }
      });
  }, []);

  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
}
