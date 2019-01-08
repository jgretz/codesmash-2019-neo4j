import {execute, query} from './util';

execute(async session => {
  const result = await query(session, `
    MATCH (u:User {userId: "1" })
    WITH u
    MATCH (u)-[:FOLLOWS*0..1]->(f)
    WITH DISTINCT f,u
    MATCH (f)-[:CURRENT_STATUS]->(ls)-[:NEXT_STATUS*0..3]->(s)
    RETURN s.statusId as statusId, s.statusText as statusText, s.timestamp as timestamp, f.username as username, f=u as owner
    ORDER BY s.timestamp DESC
  `);

  console.log(result);
});

