import React, {useContext} from "react";

export const TabContext = React.createContext<{ value?: number }>({});

export const useTabContext = () => useContext(TabContext);
