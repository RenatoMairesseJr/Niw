import React from 'react';
import { connect } from 'react-redux';
import Input from './components/input';
import TextArea from './components/textArea';

const Home = props => (
  <div className='col-sm-12'>
    <div>
      <div>
          <div className='col-sm-6'>
            <label>Name</label><Input type='text'/>
          </div>
          <div className='col-sm-6'>
            <label>Number</label><Input type='number'/>
          </div>
      </div>
 
      <div>
          <div className='col-sm-12'>
            <label>Result</label><TextArea labelName='Result'/>
          </div>
      </div>
    </div>
  </div>
);

export default connect()(Home);
