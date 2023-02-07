import React from 'react';
import LastCreated from './LastCreated';
import ProductsCategories from './ProductsCategories';
import ProductsList from './ProductsList';

function Details(){
    return(
        <div>
            <LastCreated />
            <ProductsCategories />
            <ProductsList />
        </div>
    )
}

export default Details;