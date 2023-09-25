const metadata = {
    name: 'seo',
    title: 'SEO',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug (DO NOT EDIT)',
            type: 'slug'
        },
        {
            name: 'ogImage',
            title: 'Social Media Sharing Image',
            type: 'image'
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
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}

export default metadata