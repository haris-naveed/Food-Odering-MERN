import React from 'react';
import mealimage from '../../assest/meals.jpg';

import CartButton from '../HEADER/CartButton';


const Header = (props) => {
    return (
        <div>
            <header  className='  z-10  flex text-white font-bold text-xl py-2 gap-10 bg-headercolour ' >
                <p className='col-span-1  mt-1'> React meals</p>
                <a href="#"> home </a>
                <a href="#"> log in </a>
                <a href="#"> Register </a>
                <CartButton onClick={props.onShowCart} />
              
            </header>

            <div className='  z-0 overflow-hidden w-full h-96 '  >
                <img  className=' object-cover   w-full h-full transform -rotate-1  -translate-y-4 -translate-x-1  ' src={mealimage} alt="" />
            </div>

        </div>

 

    )
}

export default Header;