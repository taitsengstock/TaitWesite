import React, { useState, useLayoutEffect, useContext } from 'react'
import { navigate } from "gatsby"
import Theme from '../styles/Theme.js';

const initialSiteState = {
  pageTitle: null,
  storeView: ``,
  theme: `design`,
  sidebarExpanded: true,
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

//component that updates the header title
export const HeaderTitle = ({ title }) => {
  const {siteState, setSiteState} = useContext(SiteContext)

  useLayoutEffect(() => {
    setSiteState(prevState => ({
      ...prevState,
      pageTitle: title,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  return null
}

// hook to access siteState globally
export const useSiteState = () => {
  const { siteState, setSiteState } = useContext(SiteContext)
  return [siteState, setSiteState]
}


