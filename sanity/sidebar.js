import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { DocumentBuilder } from '@sanity/structure/lib/Document';

// Build a custom sidebar

export default function Sidebar() {
  return S.list()
    .title(`Tait's Wesite`)
    .items([
      // create a new sub item
      S.listItem().title('Home Page').child(
        S.editor()
          .schemaType('storeSettings')
          // make a new document id so we don't have a random string of numbers
          .documentId('downtown')
      ),
      // add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
