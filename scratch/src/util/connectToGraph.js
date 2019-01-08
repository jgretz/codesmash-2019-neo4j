import {URL, USER, PASS} from '../constants';

export default () => {
  const neo4j = require('neo4j-driver').v1;
  const driver = neo4j.driver(URL, neo4j.auth.basic(USER, PASS));
  const session = driver.session();

  return {
    driver,
    session,
  };
};
