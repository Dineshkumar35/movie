import { Suspense,lazy } from 'react';
import './App.css';

function App() {
  const Movie = lazy(() => import('./Components/Movie'));
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
         <Movie />
    </Suspense>
    </>
  );
}

export default App;
