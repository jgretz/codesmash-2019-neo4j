import connectToGraph from './connectToGraph';

export default async logic => {
  const neo4j = connectToGraph();

  try {
    await logic(neo4j.session);
  } catch (err) {
    console.error(err); // eslint-disable-line
  } finally {
    neo4j.session.close();
    neo4j.driver.close();
  }
};
