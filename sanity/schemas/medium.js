
export default {
    name: 'medium',
    title: 'Medium',
    type: 'document',
    //   icon,
    fields: [
    {
        name: 'name',
        title: 'Medium Name',
        type: 'string',
        description: 'What is the name of the medium',
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
    ],
};
