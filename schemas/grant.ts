import {defineField, defineType} from 'sanity'
import {FaTrophy as icon} from 'react-icons/fa'

export default defineType({
  name: 'grant',
  title: 'Grant',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'grantee',
      title: 'To Grantee',
      type: 'reference',
      to: [{type: 'grantee'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'grantee.name',
      date: 'date',
      note: 'note',
      media: 'grantee.logo',
    },
    prepare({title, date, note, media}) {
      return {
        title,
        subtitle: `${date.split('-')[0]} - ${note}`,
        media,
      }
    },
  },
  orderings: [{
    title: 'Grant Date',
    name:  'date',
    by: [
      {field: 'date', direction: 'desc'}
    ]
  }, {
    title: 'Grant Date - Reverse',
    name:  'date',
    by: [
      {field: 'date', direction: 'asc'}
    ]
  }, {
    title: 'Grantee',
    name:  'grantee',
    by: [
      {field: 'grantee.name', direction: 'asc'}
    ]
  }]

})
