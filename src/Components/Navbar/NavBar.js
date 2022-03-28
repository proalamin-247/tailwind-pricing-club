import React, { useState } from 'react';
import NavBarLink from '../NavBarLink/NavBarLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes =[
        {id:1, name: 'Home', link: '/home'},
        {id:1, name: 'Shop', link: '/shop'},
        {id:1, name: 'Deals', link: '/deals'},
        {id:1, name: 'Offer', link: '/offer'},
        {id:1, name: 'Contact', link: '/contact'}
    ]
    return (
        <nav className='bg-indigo-200 '>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`} >
                {
                    routes.map(route => <NavBarLink 
                            key={route.id}
                            route={route}
                        ></NavBarLink>)
                }
            </ul> 
        </nav>
    );
};

export default NavBar;