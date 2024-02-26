import {defineField, defineType} from 'sanity'
import {FaPiggyBank as icon} from 'react-icons/fa'

export default defineType({
  name: 'endowment',
  title: 'Endowment',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'balance',
      title: 'Balance',
      type: 'number',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'note',
      title: 'Entry Note',
      type: 'text',
      rows: 5,
    }),
  ],
  preview: {
    select: {
      balance: 'balance',
      date: 'date',
    },
    prepare({balance, date}) {
      return {
        title: `$${balance.toLocaleString("en-US")}`,
        subtitle: date,
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
