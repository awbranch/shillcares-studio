import {defineField, defineType} from 'sanity'
import {MdEdit as icon} from 'react-icons/md'

export default defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: (doc) => (`${doc.date} ${doc.title}`),
        maxLength: 80
      }
    }),

  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      image: 'image',
    },
    prepare({title, date, image}) {
      return {
        title: title,
        subtitle: date,
        media: image,
      }
    },
  },

  orderings: [{
    title: 'Date',
    name:  'date',
    by: [
      {field: 'date', direction: 'desc'}
    ]
  }]
})
