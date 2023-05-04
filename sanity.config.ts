import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { media } from 'sanity-plugin-media';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Shill Cares',

  projectId: '5gu47m8q',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    media(),
    vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
