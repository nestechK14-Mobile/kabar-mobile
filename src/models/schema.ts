import { TABLE_NAME } from '@/constants';
import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: TABLE_NAME.USER,
      columns: [
        { name: 'user_id', type: 'string' },
        { name: 'user_name', type: 'string' },
        { name: 'avatar', type: 'string' },
        { name: 'create_at', type: 'string' },
        { name: 'update_at', type: 'string' }
      ]
    }),
    tableSchema({
      name: TABLE_NAME.NEWS,
      columns: [
        { name: 'news_id', type: 'string' },
        { name: 'news_content', type: 'string' },
        { name: 'news_date_post', type: 'string' }
      ]
    })
  ]
});
