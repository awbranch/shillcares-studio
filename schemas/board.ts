import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'board',
  title: 'Board',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'blockContent',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      title: 'title',
      image: 'image',
    },
    prepare({name, title, image}) {
      return {
        title: name,
        subtitle: title,
        media: image,
      }
    },
  },

  orderings: [{
    title: 'Order',
    name:  'order',
    by: [
      {field: 'order', direction: 'asc'}
    ]
  }]
})
