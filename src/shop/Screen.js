import React from 'react'
import  Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { addToCart,getTotalPrice } from '../store/slices/Cartslice';
import { useDispatch,useSelector } from 'react-redux';

function Screen({image,title,price,id,data}) {
  const dispatch=useDispatch();

  const add=()=>{
      dispatch(addToCart(data[id]));
      dispatch(getTotalPrice());
      

  }

  return (
      <div className='text-center' style={{marginTop:".5rem"}}>  
      <Card className='h-100 mb-3' style={{ width: '18rem', border:"2px solid black", margin:".5rem",borderRadius:".6rem", padding:".5rem"}}>
      <Card.Img variant="top" src={image} style={{height:"130px",width:"110px",margin:"auto",padding:"auto"}}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Rs.{price}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" onClick={()=>add()}>Add to cart</Button>
      </Card.Footer>
    </Card>
    </div>
    
  )
}

export default Screen
