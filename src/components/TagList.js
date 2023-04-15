import React from 'react';
import setupTags from '../utils/setupTags';


const TagList = ({recieps}) => {
    const newTags = setupTags(recieps)
    console.log(newTags)
    return (
        <div>
            <h3>Thisis tag list</h3>
        </div>
    );
};

export default TagList;