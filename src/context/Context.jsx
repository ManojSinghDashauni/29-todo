import React, { createContext, useContext, useState } from "react";

// Create the context
const Context = createContext({});

// Create a provider component
export const Provider = ({ children }) => {
  const [user, setUser] = useState({
    name: "manoj",
    email: "manoj",
    password: "dhdkh",
  });
  const login = (user) => {
    return setUser(user);
  };
  const logout = () => {
    return setUser(null);
  };

  const [notes, setNotes] = useState([
    {
      id: 1,
      name: "manoj singh Dashauni",
      title: "html",
      content: "hypertext markup language",
    },
    {
      id: 2,
      name: "tony stark",
      title: "MCU",
      content: "marvel comic univers",
    },
  ]);

  return (
    <Context.Provider value={{ notes, setNotes, login, logout, user, setUser }}>
      {children}
    </Context.Provider>
  );
};

// Custom hook for accessing the context
export const useContextApi = () => useContext(Context);
