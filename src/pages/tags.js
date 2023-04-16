import React from 'react';
import Layout from '../components/Layout';
import setupTags from '../utils/setupTags';
import { Link, graphql } from 'gatsby';

const tags = ({data}) => {
    const newTags = setupTags(data.allContentfulRecipe.nodes)
    return (
        <Layout>
            <div className='page'>
                <section className="tags-page">
                    {
                        newTags.map((tag, index)=> {
                            const [text, value] = tag
                            return(
                                <Link key={index} to={`/${text}`} className='tag'>
                                <h5>{text}</h5>
                                <p>{value} recipe</p>
                                </Link>
                            )
                        })
                    }
                </section>
                
            </div>
        </Layout>
    );
};


export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default tags;