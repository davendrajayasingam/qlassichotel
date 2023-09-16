const homepage = {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image'
        },
        {
            title: 'About Us',
            name: 'about',
            type: 'object',
            fields: [
                {
                    name: 'heading',
                    title: 'Heading',
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
                    type: 'array', of: [{ type: 'block' }]
                }
            ]
        },
        {
            title: 'Our Rooms',
            name: 'rooms',
            type: 'object',
            fields: [
                {
                    name: 'heading',
                    title: 'Heading',
                    type: 'string'
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                },
                {
                    name: 'rooms',
                    title: 'Rooms',
                    type: 'array',
                    of: [{ type: 'reference', to: [{ type: 'room' }] }]
                }
            ]
        }
    ]
}

export default homepage