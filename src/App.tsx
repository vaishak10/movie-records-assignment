import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Header from './Components/Header'

const Body = lazy(() => import('./Components/Body'));
const MovieList = lazy(() => import('./Components/MovieDetails/MovieList'));

function App() {

  function FallBackComponent() {
    return (
      <div style={{marginTop: '200px', padding: '50px', marginLeft: '200px'}}>
        <CircularProgress variant="determinate" value={100} />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Suspense fallback={<FallBackComponent />}>
          <Routes>
              <Route path='/' element={<Body />} />
              <Route path='/:id' element={<MovieList />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
