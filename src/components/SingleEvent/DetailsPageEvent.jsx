import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleEventDetails from './SingleEventDetails';

const DetailsPageEvent = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const filteredItems = data.filter(items => items.id === parseInt(id));

    return (
        <div className='w-full mx-auto lg:w-11/12'>
            {
                filteredItems.map(snEvent => <SingleEventDetails key={snEvent} snEvent={snEvent}></SingleEventDetails>)
            }
        </div>
    );
};

export default DetailsPageEvent;