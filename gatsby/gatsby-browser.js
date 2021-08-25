import React from 'react';
import Layout from './src/components/Layout';
import { ListViewProvider } from './src/components/ListViewContext';
import { TileContextProvider } from './src/components/TileContext';
import { StoreViewProvider } from './src/components/StoreViewContext';
import { ThemeContextProvider } from './src/components/ThemeContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return  (
    <>
    <ThemeContextProvider>
      <StoreViewProvider>
        <TileContextProvider>
          <ListViewProvider>
            {element}
          </ListViewProvider>
        </TileContextProvider>
      </StoreViewProvider>
    </ThemeContextProvider>
    </>
  )
}

