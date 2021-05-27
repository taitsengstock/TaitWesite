import React from 'react';
import Layout from './src/components/Layout';
import { ListViewProvider } from './src/components/ListViewContext';
import { TileContextProvider } from './src/components/TileContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <TileContextProvider>
          <ListViewProvider>
            {element}
          </ListViewProvider>
        </TileContextProvider>
}

