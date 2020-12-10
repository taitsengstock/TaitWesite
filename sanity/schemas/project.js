// import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'project',
  // visible title
  title: 'Projects',
  type: 'document',
  //   icon,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the project',
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
      name: 'logo',
      title: 'Logo Full',
      type: 'image',
    },
    {
      name: 'logoicon',
      title: 'Logo Icon',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'string',
      description: 'Description of the project',
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
