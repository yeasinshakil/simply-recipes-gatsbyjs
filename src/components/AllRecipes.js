import React from 'react';
import ReciepsList from './ReciepsList';
import TagList from './TagList';
import { graphql, useStaticQuery } from 'gatsby';


const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        id
        title
        cooktime
        prepareTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const data = useStaticQuery(query)
    const recieps = data.allContentfulRecipe.nodes;
    // console.log(recieps)
    return (
        <div>
            <h1>All Recipe List</h1>
            <ReciepsList recieps={recieps} />
            <TagList recieps={recieps} />

        </div>
    );
};

export default AllRecipes;