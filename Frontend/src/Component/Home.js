// import React from 'react'

// const Home = () => {
//   return (
// <>
//     <h1>Home Page</h1>
// </>
//   )
  
// }

// export default Home

import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="background-image">
        <div className="overlay">
          <div className="search-container">
            <h1>Welcome to our Recipe App</h1>
            <p>Explore delicious recipes and more...</p>
            <div className="search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search for recipes..."
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home