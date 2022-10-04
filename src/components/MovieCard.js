import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Alert from 'react-bootstrap/Alert';
import {addToWantToSee, removeFromWantToSee} from '../actions/wantToSeeAction'
import {addToSeen} from '../actions/watchedMoviesAction'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleAddToWantList = (movie) =>{

      if(movie.want){
        movie.want = false
        dispatch(removeFromWantToSee(movie.id))
      } else {
        movie.want = true
        dispatch(addToWantToSee(movie))
      }
      
    }
    
    const handleAddToWatchedList = (movie) =>{

      if(movie.watched){
        setShow(true)
      } else {
        movie.watched = true
        movie.want = false
        
        dispatch(addToSeen(movie))
        dispatch(removeFromWantToSee(movie.id))
      }
      
      
    }
    return (
      <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.movie.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.movie.image} width='300px'/>
    <Alert show={show} variant="danger">
        <Alert.Heading>Wait!</Alert.Heading>
        <p>
          Movie is already in your list!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>
        <h5>{props.movie.contentRating} | {props.movie.genres}</h5>
        <h6>Starring: {props.movie.stars}</h6>
        <h6>Director(s): {props.movie.directors}</h6>
        <p>
          {props.movie.plot}
        </p>
        <p>imDb Rating: {props.movie.imDbRating} | Metacritic Rating: {props.movie.metacriticRating}</p>
        <p>Release Date: {props.movie.releaseState}</p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant={props.movie.want?"danger":"primary"} onClick={()=>handleAddToWantList(props.movie)}>{props.movie.want?"Remove from Watchlist?":"Want to Watch"}</Button> <Button variant={props.movie.watched?"success":"primary"} onClick={()=>handleAddToWatchedList(props.movie)}>{props.movie.watched?"Watched":"Add to Watched"}</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

const MovieCard = ({movie}) => {

    const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className='movieCard col'>
            <a href="#" onClick={() => setModalShow(true)} className="d-flex flex-column align-items-center justify-content-center">
                <img className='movieCardImg' src={movie.image}  />
            </a>
          </div>
          <MyVerticallyCenteredModal movie={movie}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


      
    </>
  )
}

export default MovieCard
