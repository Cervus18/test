import React, {useState,useEffect} from 'react'
import ProductItem from './ProductItem'

const CategoryGrid = ({setProductTotal,productList,setProductList}) => {
  
  

   useEffect(() => {
     let counter = 0
     productList.forEach(item => {
        counter =  counter + parseInt(item.price)* parseInt(item.quantity)
     })

     setProductTotal(counter)
   
  
   }, [productList])
   

  return (
    <div className='category-grid'>
        <div>
            <h3>XL Buddy</h3>
            <div className="category-body">
               <ProductItem productList={productList} setProductList={setProductList} id="1" type="Standard" price="199" />
               <ProductItem productList={productList} setProductList={setProductList} id="2" type="Lush" price="219" />
            </div>
            
        </div>
        <div>
            <h3>Adult Buddy</h3>
            <div className="category-body">
               <ProductItem productList={productList} setProductList={setProductList} id="3" type="Standard" price="169" />
               <ProductItem productList={productList} setProductList={setProductList} id="4" type="Lush" price="189" />
            </div>
        </div>
        <div>
            <h3>Tween Buddy</h3>
            <div className="category-body">
               <ProductItem productList={productList} setProductList={setProductList} id="5" type="Standard" price="139" />
               <ProductItem productList={productList} setProductList={setProductList} id="6" type="Lush" price="159" />
            </div>
        </div>

    </div>
  )
}

export default CategoryGrid