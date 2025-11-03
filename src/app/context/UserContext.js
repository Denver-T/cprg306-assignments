"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
  const [localUser, setLocalUser] = useState({
    name: "Herbert",
    isLoggedIn: false,
  });

  const toggleLocalUserLogIn = () => {
    setLocalUser((prev) => ({...prev, isLoggedIn: !prev.isLoggedIn}));
  };
  return (
    <UserContext.Provider value={{ localUser }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => useContext(UserContext);