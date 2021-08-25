import React, { useState, useLayoutEffect, useContext } from 'react'

const StoreViewContext = React.createContext();

export const StoreViewProvider = ({ children }) => {
    
    const [storeView, setStoreView] = useState('design')

    return(
      <StoreViewContext.Provider value={[storeView, setStoreView]}>
          {children}
      </StoreViewContext.Provider>
    )
}

export default StoreViewContext;