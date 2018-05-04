import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Here } from '../src';

class App extends Component {
  render() {
    return (
      <div>
        <Here
          ref={'selam'}
          platform={{
            appId: 'oaKW6sloxzQwSMxJfGYn',
            appCode: 'vrZz_m5kSOc9dFU_F83Zrg'
          }}

          traffic={true}
          incidents={true}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
