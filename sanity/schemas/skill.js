// import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  //   icon,
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      description: 'What is the name of the skill',
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
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
