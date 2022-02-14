import React, {useState, useEffect}from 'react'
import Seat from '../Seats/Seats'
import { useDispatch} from 'react-redux'
import { showDetail } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import Checkout from '../Checkout/Checkout';

const PasarelaDePago =  ({props}) => {
    const [seatNumber, setSeatNumber] = useState(0)
    //const show = useSelector((state) => state.showdetail);
    const dispatch = useDispatch();
    const {id} = useParams()
    //const [tickets , setTickets]= useState()
    //let variable = false;
const onChange = ({target: {name, value}}) => {
    setSeatNumber(value)
}
  useEffect(()=>{
    dispatch(showDetail(id))
  },[dispatch,id])
  // console.log(tickets, "Tickets")
  return (
    <div>
        <h3>Pasarela se Pago</h3>   
        <Checkout seatNumber={seatNumber} />
        <label>Selecciona # de entradas</label>    
        <input name='seatnumber' type={'number'} onChange={(e)=>{onChange(e)}}></input>
        <Seat seatsNumber={seatNumber}   />
        
    </div>
  )
}

export default PasarelaDePago