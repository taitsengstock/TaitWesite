import React, { useState, useLayoutEffect, useContext, useEffect } from 'react'
import { navigate } from "gatsby"
import Theme from '../styles/Theme.js';
import { useLocation } from "@reach/router"

const initialSiteState = {
  pageTitle: null,
  storeView: ``,
  theme: `design`,
  sidebarExpanded: true,
  overlay: false,
  selectOpen: false,
  disableOutsideClick: false,
  location: undefined,
}

export const SiteContext = React.createContext({
  siteState: initialSiteState,
  setSiteState: undefined,
})

export const SiteStore = ({ children }) => {
  const [siteState, setSiteState] = useState(initialSiteState)

  return(
    <SiteContext.Provider value={{
      siteState: siteState,
      setSiteState: setSiteState
    }}>
      <Theme theme={siteState.theme}/>
      {children}
    </SiteContext.Provider>
  )
}


// Hook to access location
export const useUrlLocation = (props) => {
  const {siteState, setSiteState} = useContext(SiteContext)
  const urlLocation = useLocation();
  useEffect(() => {
    setSiteState(prevState => ({
      ...prevState,
      location: urlLocation.pathname,
    }))
  }, [props, urlLocation.pathname])

  useEffect(() => {
    if(siteState.location === '/design') {
      setSiteState(prevState => ({
        ...prevState,
        pageTitle: siteState.location.substring(1),
      }))
    } else if (siteState.location === '/art') {
      setSiteState(prevState => ({
        ...prevState,
        pageTitle: siteState.location.substring(1),
      }))
    } else if (siteState.location === '/') {
      setSiteState(prevState => ({
        ...prevState,
        pageTitle: `home`,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteState.location])
}



// hook to access siteState globally
export const useSiteState = () => {
  const { siteState, setSiteState } = useContext(SiteContext)
  return [siteState, setSiteState]
}


