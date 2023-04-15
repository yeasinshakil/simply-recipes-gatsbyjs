import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const ReciepsList = ({ recieps = [] }) => {
    return (
        <div className='recipes-list'>
            {
                recieps.map((reciep) => {
                    const { id, title, cooktime, prepareTime, image } = reciep;
                    const pathToImage = getImage(image)
                    return <Link key={id} to={`/${title}`} className='recipe'>
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