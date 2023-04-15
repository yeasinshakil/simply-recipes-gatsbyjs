import { Link } from 'gatsby';
import React from 'react';

const ReciepsList = ({recieps = []}) => {
    return (
        <div className='recieps-list'>
            {
                recieps.map((reciep)=> {
                    const {id, title, cooketime, prepareTime, image} = reciep
                    return <Link key={id} to={`/${title}`} className='recipe'>
{title}
                    </Link>
                })
            }
        </div>
    );
};

export default ReciepsList;