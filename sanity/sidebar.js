import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { DocumentBuilder } from '@sanity/structure/lib/Document';

// Build a custom sidebar

export default function Sidebar() {
  return S.list()
    .title(`Tait's Wesite`)
    .items([
      // create a new sub item
      S.listItem().title('Design Store').child(
        S.editor()
          .schemaType('storeSettings')
          // make a new document id so we don't have a random string of numbers
          .documentId('downtown')
      ),
      S.listItem().title('Art Store').child(
        S.editor()
          .schemaType('storeSettings')
          // make a new document id so we don't have a random string of numbers
          .documentId('a88ed9b8-7922-442d-8abe-adb283a20cd9')
      ),
      // add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ],
    );
}
