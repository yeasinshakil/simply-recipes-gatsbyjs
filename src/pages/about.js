import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import ReciepsList from '../components/ReciepsList';

const about = ({ data: { allContentfulRecipe: { nodes: recieps } } }) => {
  console.log(recieps)
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg'
            alt='Person Pouring Salt in Bowl'
            className='about-img'
            placeholder='blurred'
          />
        </section>
        <section className='featured-recipes'>
          <h5>Look at this awesomness</h5>
          <ReciepsList recieps={recieps} />
        </section>
      </main>
    </Layout>
  );
};


export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cooktime
        prepareTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`



export default about;