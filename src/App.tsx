import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


const Home = lazy(() => import('./pages/Home')) 

const Loading = () => {
  return (
    <div>Loading...</div>
  )
}


function App() {
  
  return (
    <Suspense fallback={<Loading />} >
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
