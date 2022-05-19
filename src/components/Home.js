import React from 'react';
import Header from './Header';


function Home() {
  return (
    <div className='home'>
      <div className='header_home'>
        {<Header />}
      </div>
    </div>
  )
}

export default Home;