import React from 'react'
import { useSelector } from 'react-redux'
import Cartscreen from './Cartscreen';

function Cart() {

    const cartdata=useSelector((state)=>state.cart.data);
    // console.log(cartdata)

    const cartPrice=useSelector((state)=>state.cart.totalPrice)

    const x=useSelector((state)=>state.cart);
    console.log(x)


  return (
    <div className='cart'>

        <h1 style={{textAlign:"center"}}>Cart</h1>
        <h2 style={{textAlign:"center"}}>Total: Rs.{cartPrice}</h2>

        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
        {
            cartdata.map((item,index)=>{
                return <Cartscreen key={index} image={item.image} title={item.title} price={item.price} id={index}/>
            })
        }
        </div>
      
    </div>
  )
}

export default Cart
