import React from 'react';
import Layout from './src/components/Layout';
import { ListViewProvider } from './src/components/ListViewContext';
import { TileContextProvider } from './src/components/TileContext';
import { StoreViewProvider } from './src/components/StoreViewContext';
import { SiteStore } from "./src/context/siteContext"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return  (
    <>
      <SiteStore>
        <StoreViewProvider>
          <TileContextProvider>
            <ListViewProvider>
              {element}
            </ListViewProvider>
          </TileContextProvider>
        </StoreViewProvider>
      </SiteStore>
    </>
  )
}

