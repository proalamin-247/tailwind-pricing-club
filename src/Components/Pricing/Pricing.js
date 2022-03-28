import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                '7 Days Test',
                'Online Store (Website + Blog)',
                'Email Marketing',
                'Jetpack Free Installed'
            ]
        },
        {
            id: 2, name: 'Regular', price: 228.99, benefits: [
                '7 Days Test',
                'Online Store (Website + Blog)',
                'Email Marketing',
                'Jetpack Free Installed',
                'Customer Product Reviews',
                'Website Traffic Analytics',
                '12/7 Customer Support',
                'Payment Processing (One-Click Install)'
            ]
        },
        {
            id: 3, name: 'Popular', price: 419.99 ,benefits: [
                '7 Days Test',
                'Online Store (Website + Blog)',
                'Email Marketing',
                'Jetpack Free Installed',
                'Customer Product Reviews',
                'Website Traffic Analytics',
                '24/7 Customer Support',
                'Payment Processing (One-Click Install)',
                'Manual Order Creation',
                'Product Customization'

            ]
        }
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deal at the TOWN</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque vero iusto doloribus porro, provident neque id earum nobis maxime quos.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;