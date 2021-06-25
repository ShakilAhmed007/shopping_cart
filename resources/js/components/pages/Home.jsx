import React, {useEffect, useState} from 'react'
import ProductCard from '../ProductCard'
import CartIcon from './CartIcon'
import ProductApi from '../../Api/ProductApi';

export default function Home() {
  const [products, setProduct] = useState();

  useEffect(() => {
    ProductApi.getProducts().then(res => {
      console.log(res.data);
      setProduct(res.data);
    })
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='grid lg:grid-cols-3 gap-3'>
        {products && 
          <ProductCard
            products={products}
          />
        }
    </div>
        <CartIcon />  
    </div>
  )
}
