import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Body from './Components/Body'
import MovieList from './Components/MovieDetails/MovieList'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/:id' element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
