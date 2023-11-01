import React, { useEffect} from 'react'
import Screen from './Screen'
import { productData } from '../store/slices/Productslice'
import { useDispatch,useSelector } from 'react-redux'


import Header from './Header'

const url=`https://fakestoreapi.com/products`

const Products = () => {

  const data=useSelector((state)=>state.products.data)
  const loading=useSelector((state)=>state.products.isloading);
  const err=useSelector((state)=>state.products.err)
  console.log(loading)
  console.log(data)
    const dispatch=useDispatch()

    


    useEffect(()=>{
       dispatch(productData());

    },[])

  return (
    <>
    <Header/>
    {loading && <h2 className='text-center' style={{marginTop:"2rem"}}>Loading...</h2>}
  
    {
      data &&
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
      {
          data.map((item,index)=>{
            return <Screen key={index} image={item.image} title={item.title} price={item.price} id={index} data={data}/>
        })
      }
    </div>
    }

    {err && <h2 className='text-center' style={{marginTop:"2rem"}}>{err}</h2>} 
    </>
  )
}

export default Products
