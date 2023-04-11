import React from 'react';
import Layout from '../components/Layout';
import Images from '../example/Photo';

const index = () => {
  return (
    <Layout>
      <div>
        <h1>hello from home page</h1>
        <Images/>
      </div>
    </Layout>
  );
};

export default index;