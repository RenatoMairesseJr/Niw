import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div className='col-sm-12'>
    <div className='col-sm-12'>
      <div>
        <h1>Number Into Words</h1>
        <hr />
        <p>This app was build using: </p>
        <ul>
          <li>Front-End: React</li>
          <li>Style: Bootstrap</li>
          <li>Interface: Web api</li>
          <li>Web api documentation: Swagger</li>
          <li>Back-End : .NET Core 2.1</li>
        </ul>
        <p><strong>For demonstration proposal, only numbers between 0 and 1 million are converted.</strong></p>
      </div>
    </div>
  </div> 
); 

export default connect()(Home);