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
            name: 'shortName',
            title: 'Short Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
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