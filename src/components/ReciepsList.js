import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import slugify from 'slugify';

const ReciepsList = ({ recieps = [] }) => {
    return (
        <div className='recipes-list'>
            {
                recieps.map((reciep) => {
                    const { id, title, cooktime, prepareTime, image } = reciep;
                    const pathToImage = getImage(image)
                    const slug = slugify(title, {lower: true})
                    return <Link key={id} to={`/${slug}`} className='recipe'>
                        <GatsbyImage image={pathToImage} className='recipe-img' alt={title}/>
                        <h5>{title}</h5>
                        <p>Prep: {prepareTime} min | Cook: {cooktime} min</p>
                    </Link>
                })
            }
        </div>
    );
};

export default ReciepsList;