import React from 'react';
import AppRouter from "./components/AppRouter";
import Navigation from "./components/Navigation";


function App() {
  return (
      <>
          <Navigation/>
          <div className='px-16'>
              <AppRouter/>
          </div>
      </>
  )
}

export default App;
