import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const PriceBenefits = (props) => {
    return (
        <p className='flex items-center mt-2'>
            <CheckCircleIcon className='w-5 h-5 text-green-400 mr-2' ></CheckCircleIcon>
            {props.benefit}
        </p>
    );
};

export default PriceBenefits;