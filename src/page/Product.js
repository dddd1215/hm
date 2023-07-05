import React from 'react'
import { useEffect,useState } from 'react'
import ProductCard from '../componets/ProductCard'
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  const[productlist,setProductlist]=useState([]);
  const[query,setQuery]=useSearchParams();

  const getProducts=async()=>{
    const searchQuery=query.get("q")||"";
    const url=` https://my-json-server.typicode.com/dddd1215/hm/products?q=${searchQuery}`;
    let responsive=await fetch(url);
    let data=await responsive.json();
    console.log(responsive,data)
    setProductlist(data)
  }
  useEffect(()=>{
    getProducts();
  },[query])

  return (
    <div>
      <div className='container Product'>
        <div className='row'>
          {productlist.map((item)=>{
            return(
              <div key={item.id} className='col-3'>
                <ProductCard item={item}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product