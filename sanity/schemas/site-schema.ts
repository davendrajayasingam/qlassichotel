const site = {
    name: 'site',
    title: 'Site Details',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string'
        },
        {
            name: 'headerNavigation',
            title: 'Header Navigation',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        title: 'Title',
                        type: 'string'
                    },
                    {
                        name: 'link',
                        title: 'Link',
                        type: 'string'
                    }
                ]
            }]
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string'
        }
    ]
}

export default site