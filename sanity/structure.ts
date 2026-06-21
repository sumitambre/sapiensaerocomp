import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Sapiens AeroComp')
    .items([
      S.documentTypeListItem('post').title('Blog Posts'),
      S.divider(),
      S.listItem()
        .title('Contact Submissions')
        .child(
          S.list()
            .title('Contact Submissions')
            .items([
              S.listItem()
                .title('New')
                .child(
                  S.documentList()
                    .title('New')
                    .filter('_type == "contactSubmission" && status == "new"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('In progress')
                .child(
                  S.documentList()
                    .title('In progress')
                    .filter('_type == "contactSubmission" && status == "inProgress"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('Replied')
                .child(
                  S.documentList()
                    .title('Replied')
                    .filter('_type == "contactSubmission" && status == "replied"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('All submissions')
                .child(
                  S.documentList()
                    .title('All submissions')
                    .filter('_type == "contactSubmission"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
            ])
        ),
    ]);
