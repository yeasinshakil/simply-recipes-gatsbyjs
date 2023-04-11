import React from 'react';
import Layout from '../components/Layout';

const contact = () => {
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
            </main>
        </Layout>
    );
};

export default contact;