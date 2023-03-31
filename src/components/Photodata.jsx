import React from 'react'
import {useSelector} from 'react-redux'
function Photodata() {
    const products = useSelector((state)=>state.allProducts.products)
  return (
    
        <div className='datas' key={products?.id}>
            {products?.map(product => (
            <div key={product?.id}><p>{product.id} </p>
            <p>{product.title}</p><img  src={product.url} alt="" /></div>
  
          ))}
        </div>
    
  )
}

export default Photodata