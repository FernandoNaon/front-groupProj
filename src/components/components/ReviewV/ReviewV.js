import React, {useState} from 'react';
import {postReview} from '../../redux/actions/index.js';
import { useDispatch } from 'react-redux';


const Review = ({nameTheater,nameShow,nameViewer}) => {
    
    let [theaterScore,setTheaterScore] = useState('');
    let [showScore,setShowScore] = useState('');
    let [review,setReview] = useState('');
    const dispatch = useDispatch();
    
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postReview(theaterScore,showScore,review,nameTheater,nameShow,nameViewer))
        alert('Enviado! Muchas gracias!')
        setTheaterScore('')
        setShowScore('')
        review('')
    }
    
    function onChangeTheater(e){
        setTheaterScore(e.target.value)
    }

    function onChangeShow(e){
        setShowScore(e.target.value)
    }

    function onChangeReview(e){
        setReview(e.target.value)
    }

    console.log('theaterScore',theaterScore)
    return(
        <div>
            
            <br></br>
            <form onSubmit={handleSubmit}>
                
               <fieldset>    
                <legend>¿Como calificarias al teatro?</legend>
                    <br></br>
                    <label>
                    <input
                        type='radio'
                        name='ratingTheater'
                        value={theaterScore = '1'}
                        onChange={onChangeTheater}
                        
                    />1
                    </label>
                   <label>
                    <input
                        type='radio'
                        name='ratingTheater'
                        value={theaterScore = '2'}
                        onChange={onChangeTheater}
                        
                    />2
                    </label>
                    <label>
                    <input
                        type='radio'
                        name='ratingTheater'
                        value={theaterScore = '3'}
                        onChange={onChangeTheater}
                        
                    />3
                    </label>
                    <label>
                    <input
                        type='radio'
                        name='ratingTheater'
                        value={theaterScore = '4'}
                        onChange={onChangeTheater}
                        
                    />4
                    </label>
                    <label>
                    <input
                        type='radio'
                        name='ratingTheater'
                        value={theaterScore = '5'}
                        onChange={onChangeTheater}
                        
                    />5
                    </label>
                    </fieldset>
                    
                    <br></br>
                 <fieldset>  
                <legend>¿Como calificarias la obra?</legend>
                    <br></br>
                    <label>
                    <input
                        type='radio'
                        name='ratingShow'
                        value={showScore = '1'}
                        onChange={onChangeShow}
                        
                    />1
                    </label>
                    <label>
                    <input
                        type='radio'
                        name='ratingShow'
                        value={showScore = '2'}
                        onChange={onChangeShow}
                        
                    />2
                    </label>
                    <label>
                    <input
                        type='radio'
                        name='ratingShow'
                        value={showScore = '3'}
                        onChange={onChangeShow}
                        
                    />3
                    </label>
                    <label>
                    <input
                        type='radio'
                        name='ratingShow'
                        value={showScore = '4'}
                        onChange={onChangeShow}
                        
                    />4
                    </label>
                    <label>
                    <input
                        type='radio'
                        name='ratingShow'
                        value={showScore = '5'}
                        onChange={onChangeShow}
                        
                    />5
                     </label>   
                    </fieldset> 
                
                    
                    
                    <br></br>
                    <textarea   type="text" 
                                name="review" 
                                maxLength="1000"
                                placeholder="Dejanos tu comentario..."
                                value={review}
                                onChange={onChangeReview}
                    />
                    <br></br>
                
                <button>Enviar</button>
                
            </form>
        </div>
    )
}

export default Review;