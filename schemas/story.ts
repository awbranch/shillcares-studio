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
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
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
