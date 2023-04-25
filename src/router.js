import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
class router extends Component {
  render() {
    return (
        <div>
         ReactDOM.render((
            <BrowserRouter>
                <App />
            </BrowserRouter>
            ), document.getElementById('root'))
        </div>
    );
  }
}

export default router;