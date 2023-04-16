import React from 'react';
import setupTags from '../utils/setupTags';
import { Link } from 'gatsby';


const TagList = ({recieps}) => {
    const newTags = setupTags(recieps);
    console.log(newTags)
    return (
        <div className='tag-container'>
            <h4>Recipe</h4>
            <div className="tags-list">
                {
                    newTags.map((tag, index)=> {
                        const [text, value] = tag;
                        console.log(text)
                        return (
                            <Link to={`/${text}`} key={index}>{text} ({value})</Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TagList;