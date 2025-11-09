import './App.css';
import Countries from '../Countries/Countries';
import { Suspense } from 'react';
function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res=> res.json())

  return (
    <>
    <Suspense fallback={<p>Please waite a moment</p>}>
      <Countries countriesPromise ={countriesPromise}></Countries>
    </Suspense>
     
    </>
  )
}

export default App
