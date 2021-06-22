import React from 'react'
import ProductCard from '../ProductCard'

export default function Home() {
  const product = {
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
    name: 'Backpack',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia',
    price: 500
  }
  return (
    <div className='container mx-auto'>
      <div className='grid lg:grid-cols-3 gap-3'>
        <ProductCard
          product={product}
        />
        <ProductCard
          product={product}
        />
        <ProductCard
          product={product}
        />

      </div>
    </div>
  )
}
