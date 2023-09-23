const gallery = {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image'
        },
        {
            name: 'heroImageTitle',
            title: 'Hero Image Title',
            type: 'string'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'hotelTabTitle',
            title: 'Hotel Tab Title',
            type: 'string'
        },
        {
            name: 'hotelImages',
            title: 'Hotel Images',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'roomTabTitle',
            title: 'Room Tab Title',
            type: 'string'
        },
        {
            name: 'roomImages',
            title: 'Room Images',
            type: 'array',
            of: [{ type: 'image' }]
        }
    ]
}

export default gallery