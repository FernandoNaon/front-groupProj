import React, {useEffect} from "react";
import NavBarTheater from "../NavBar/NavBarTheater";
import { useDispatch, useSelector } from "react-redux";
import {getAllTickets,allShows,theaterDetail} from '../../redux/actions/index.js';
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const SalesHistory = () =>{
    const dispatch = useDispatch();
    const tickets = useSelector((state) => state.tickets);
    const show = useSelector((state) => state.shows)
    const theater = useSelector((state) => state.theatersDetail)
    const {id} = useParams();
    
    

    useEffect(()=>{
        dispatch(getAllTickets())
        dispatch(allShows())
        dispatch(theaterDetail(id))
    },[dispatch,id]);
    
    let filterShows = show?.filter((e) => e.theaterId ===  theater?.id)
    let filterTicket = tickets?.filter((e) => e.show.theaterId === theater?.id)
    console.log('filter',filterShows)
    console.log('ticket',filterTicket )
    let total = filterTicket.map(e=> e.price)
    console.log('total',total)
    return(
        <div>
            <NavBarTheater/>
            {
                filterShows.length && filterTicket.length  ?(
                    filterShows.map((e,i) =>{
                    return(
                        <div key={e.id}>
                        <h3>{e.name}</h3>
                        <h4>Cantidad de entradas:{filterTicket.length} </h4>
                        <h4>Total vendido: ${total?.reduce(function(a, b){ return a + b; })} </h4>
                        </div>
                        )
                    }) 
                ) : (
                    <h1>TODAVIA NO HAY VENTAS</h1>
                )
            }
            <Footer/>
        </div>
    )
}

export default SalesHistory;