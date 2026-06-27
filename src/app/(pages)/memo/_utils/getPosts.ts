import { draftMode } from 'next/headers';
import { cache } from 'react';
import { fetchMemoPosts } from '@/libs/api/notion/api/fetchMemoPosts';

export const getPosts = cache(async (options = { ignoreDraft: false }) => {
  const { ignoreDraft } = options;
  return fetchMemoPosts({
    draft: ignoreDraft ? false : (await draftMode()).isEnabled,
    sorts: [{ property: 'Date', direction: 'descending' }],
  });
});
