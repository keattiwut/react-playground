import React from 'react';

class VisibleElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }

  toggleVisibility() {
    console.log('toggle!!');
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={() => this.toggleVisibility()}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
          </button>
          {this.state.visibility && (
              <div>
                <p>Hey. These are some details you can now see!</p>
              </div>
          )}
        </div>
    );
  }
}

export default VisibleElement;