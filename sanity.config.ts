import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'v8ajtm0z',
    dataset: 'production',
    title: 'Qlassic Hotel',
    apiVersion: '2023-09-12',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config