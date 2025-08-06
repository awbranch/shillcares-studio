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
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'blockContent',
      validation: Rule => Rule.required()
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
