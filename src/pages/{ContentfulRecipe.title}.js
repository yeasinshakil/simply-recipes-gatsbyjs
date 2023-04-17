import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';

const RecipeTemplate = ({ data }) => {

    const { title, cooktime, serving, prepareTime, content, descirption: { descirption }, image } = data.contentfulRecipe;
    const pathToImage = getImage(image);
    const { ingredients,
        instructions,
        tags,
        tools } = content;
    console.log(data)
    return (
        <div></div>
    );
};

export const query = graphql`
  query ($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cooktime
      serving
      prepareTime
      description {
        description
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate;