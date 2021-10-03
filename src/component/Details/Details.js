import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { courseId } = useParams()
    return (
        <div>
            <p>details</p>
            <h2>this is details page</h2>
        </div>
    );
};

export default Details;