import React, { createContext, useContext, useState } from 'react';


export const PlusIconContext = createContext();


export const PlusIconProvider = ({ children }) => {
  const [showPlusIcon, setShowPlusIcon] = useState(false);

  return (
    <PlusIconContext.Provider value={{ showPlusIcon, setShowPlusIcon }}>
      {children}
    </PlusIconContext.Provider>
  );
};


export const usePlusIcon = () => useContext(PlusIconContext);

export default PlusIconProvider;