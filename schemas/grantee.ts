import {defineField, defineType} from 'sanity'
import {BiDonateHeart as icon} from 'react-icons/bi'

export default defineType({
  name: 'grantee',
  title: 'Grantee',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  orderings: [{
    title: 'Order',
    name:  'order',
    by: [
      {field: 'order', direction: 'asc'}
    ]
  }]
})
