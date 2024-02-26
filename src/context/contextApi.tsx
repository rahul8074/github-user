
import React, { createContext, useState } from 'react';


export const MyContext = createContext<any>(null);

export const ContextProvider = (props: any) => {
  const [user, setUser] = useState<any>([])

  function handleSetUser(value:any) {
    if (value.avatar_url) {
      if (!localStorage.getItem("users")) {
        const obj :any = [value]
        localStorage.setItem("users",JSON.stringify(obj))
      } else {
        let obj :any = localStorage.getItem("users")
        obj = JSON.parse(obj)
        obj = [...obj,value]
        localStorage.setItem("users",JSON.stringify(obj))
        
      }
    }
   
    setUser(value)
  }

  return (
    <MyContext.Provider value={{ user, handleSetUser }}>
      {props.children}
    </MyContext.Provider>
  );
};



