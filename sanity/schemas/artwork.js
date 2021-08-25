// import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'artwork',
  // visible title
  title: 'Artwork',
  type: 'document',
  //   icon,
  fields: [
    {
      name: 'name',
      title: 'Artwork Name',
      type: 'string',
      description: 'Name of the artwork',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Artwork Description',
      type: 'string',
      description: 'Description of the artwork',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
