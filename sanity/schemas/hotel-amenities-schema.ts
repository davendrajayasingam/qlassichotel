const hotelAmenity = {
    name: 'hotelAmenity',
    title: 'Hotel Amenities',
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
            title: 'description',
            name: 'description',
            type: 'text'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image'
        }
    ]
}

export default hotelAmenity