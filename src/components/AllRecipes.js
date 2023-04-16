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
        <section className="recipes-container">
          
            <TagList recieps={recieps} />
            <ReciepsList recieps={recieps} />
        </section>
    );
};

export default AllRecipes;