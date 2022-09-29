import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers'
import App from './App';
import WantToSee from './components/WantToSee'
import Watched from './components/Watched'
import BestMovies from './components/BestMovies'
import InTheaters from './components/InTheaters'
import ComingSoon from './components/ComingSoon'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/wanttosee" element={<WantToSee />}/>
            <Route path="/watched" element={<Watched />}/>
            <Route path="/bestmovies" element={<BestMovies />}/>
            <Route path="/intheaters" element={<InTheaters />}/>
            <Route path="/comingsoon" element={<ComingSoon />}/>
            
          </Routes>
        </BaseLayout>
      </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// pk_bxdf951nw5aji2fk7

// https://imdb-api.com/en/API/InTheaters/pk_bxdf951nw5aji2fk7



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
