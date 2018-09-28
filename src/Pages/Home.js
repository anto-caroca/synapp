import React from 'react';
import IconNav from '../Components/Navs/IconNav';
import Post from '../Components/Post/Post';

const Home = () => (
  <div className="Container">
    <div className="row">
      <div className="col s12 m4 offset-m4">
        <IconNav />
        <div>
          <Post />
        </div>
      </div>
    </div>
  </div>
)
export default Home; 