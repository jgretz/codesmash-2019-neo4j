import _ from 'lodash';

const mapRecord = r => _.reduce(r.keys, (record, key) => {
  record[key] = r.get(key);

  return record;
}, {});

export default async (session, query) => {
  const result = await session.run(query);

  return result.records.map(mapRecord);
};
