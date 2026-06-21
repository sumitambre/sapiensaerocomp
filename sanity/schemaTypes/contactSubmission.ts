import { defineField, defineType } from 'sanity';

export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {
        layout: 'radio',
        list: [
          { title: 'New', value: 'new' },
          { title: 'In progress', value: 'inProgress' },
          { title: 'Replied', value: 'replied' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted at',
      type: 'datetime',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 8,
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sourcePage',
      title: 'Source page',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'notes',
      title: 'Internal notes',
      description: 'Visible only to Studio users.',
      type: 'text',
      rows: 5,
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      email: 'email',
      status: 'status',
      submittedAt: 'submittedAt',
    },
    prepare({ email, status, submittedAt }) {
      const date = submittedAt ? new Date(submittedAt).toLocaleString() : 'Unknown date';
      return {
        title: email,
        subtitle: `${status || 'new'} · ${date}`,
      };
    },
  },
});
