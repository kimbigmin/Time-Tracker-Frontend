import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";

export const myContext = createContext({});
export default function Context(props: any) {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    fetch("https://a.time-trackers.com/getuser", {
      credentials: "include",
    })
      .then((res: any) => {
        res.json();
      })
      .then((data: any) => {
        console.log(data);
        if (data) {
          setUserObject(data);
        }
      });
  }, []);

  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
}
