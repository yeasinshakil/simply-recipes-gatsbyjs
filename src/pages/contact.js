import React from 'react';
import Layout from '../components/Layout';

import ReciepsList from '../components/ReciepsList';
import { graphql } from 'gatsby';

const contact = ({ data: { allContentfulRecipe: { nodes: recieps } } }) => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rerum odit repellendus at quae provident nesciunt possimus sint autem, fuga saepe vel quas consectetur tempore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sint.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor assumenda possimus architecto nemo vitae expedita, libero distinctio cupiditate illum veniam!</p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">Your name</label>
                                <input type="text" name='name' id='name' />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Your email</label>
                                <input type="text" name='email' id='email' />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type='submit' className="btn block">
                                submit
                            </button>
                        </form>
                    </article>
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

export default contact;