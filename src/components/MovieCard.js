import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Alert from 'react-bootstrap/Alert';
import {addToWantToSee, removeFromWantToSee} from '../actions/wantToSeeAction'
import {addToSeen} from '../actions/watchedMoviesAction'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const [inWantList, setInWantList] = useState(false)
    const [inWatchedList, setInWatchedList] = useState(false)
    const [show, setShow] = useState(false);

    const handleAddToWantList = (movie) =>{

      if(inWantList){
        setShow(true)
      } else {
        setInWantList(true)
        dispatch(addToWantToSee(movie))
      }
      
    }
    
    const handleAddToWatchedList = (movie) =>{

      setInWatchedList(true)
      dispatch(addToSeen(movie))
      dispatch(removeFromWantToSee(movie.id))
      
    }
    return (
      <>
    <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Movie is already in your watch list!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
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
      <Button variant="primary" onClick={()=>handleAddToWantList(props.movie)}>{inWantList?"Added to Watchlist":"Want to Watch"}</Button> <Button variant="success" onClick={()=>handleAddToWatchedList(props.movie)}>{inWatchedList?"Watched":"Add to Watched"}</Button>
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
                <img src={movie.image} width='150px' />
                <h4>{movie.title}</h4>
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
