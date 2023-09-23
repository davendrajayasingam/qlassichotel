const homepage = {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        {
            name: 'slides',
            title: 'Slides',
            type: 'array',
            of: [{
                type: 'image',
                fields: [{
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                }]
            }]
        },
        {
            name: 'rooms',
            title: 'Our Rooms',
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
        },
        {
            name: 'amenities',
            title: 'Amenities',
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
                    name: 'buttonText',
                    title: 'Button Text',
                    type: 'string'
                },
                {
                    name: 'hotelAmenitiesTitle',
                    title: 'Hotel Amenities Title',
                    type: 'string'
                },
                {
                    name: 'hotelAmenities',
                    title: 'Hotel Amenities',
                    type: 'array',
                    of: [{ type: 'reference', to: [{ type: 'hotelAmenity' }] }]
                },
                {
                    name: 'roomAmenitiesTitle',
                    title: 'Room Amenities Title',
                    type: 'string'
                },
                {
                    name: 'roomAmenities',
                    title: 'Room Amenities',
                    type: 'array',
                    of: [{ type: 'reference', to: [{ type: 'roomAmenity' }] }]
                }
            ]
        },
        {
            name: 'about',
            title: 'About Us',
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
                    type: 'text'
                }
            ]
        }
    ]
}

export default homepage