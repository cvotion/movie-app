import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <>
          <ul>
              <li><Link to="/"/>Home</li>
              <li><Link to="/wanttosee"/>My List</li>
              <li><Link to="/watched"/>Watched</li>
              <li><Link to="/bestmovies"/>Top Movies</li>
              <li><Link to="/intheaters"/>In Theaters</li>
              <li><Link to="/comingsoon"/>Coming Soon</li>
          </ul>
      </>
    )
  }
  
  export default Header