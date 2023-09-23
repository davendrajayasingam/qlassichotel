const room = {
    name: 'room',
    title: 'Rooms',
    type: 'document',
    fields: [
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug (DO NOT EDIT)',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'shortName',
            title: 'Short Name',
            type: 'string'
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }]
        }
    ]
}

export default room