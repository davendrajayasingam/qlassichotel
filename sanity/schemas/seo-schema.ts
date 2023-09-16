const metadata = {
    name: 'seo',
    title: 'SEO',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug (DO NOT CHANGE THIS - THE WEBSITE WILL BREAK)',
            type: 'slug',
            options: { source: 'siteName' }
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