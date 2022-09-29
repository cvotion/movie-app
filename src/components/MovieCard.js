import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
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
        <img src={props.movie.image}/>
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
      <Button variant="primary">Want to watch</Button> <Button variant="success">Add to Watched List</Button>
      </Modal.Footer>
    </Modal>
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
