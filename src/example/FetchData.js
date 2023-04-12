import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const getData = graphql`
{site {
  siteMetadata {
    title
    author
    description
    person {
      name
      age
    }
    simpleData
    complexData {
      name
      age
    }
  }
}}
`

const FetchData = () => {
   const {site:{siteMetadata:{title}}} = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <h1>{title}</h1>
    </div>
  );
};

export default FetchData;