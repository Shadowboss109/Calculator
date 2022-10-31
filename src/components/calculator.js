import React from "react"


class Key extends React.Component {
    render() {
      return (
        <button className="key">
          {this.props.value}
        </button>
      );
    }
  }
  
  function renderKey(i) {
    return <Key value={i} />;
  }

  class Board extends React.Component {
    render() {
      return (
        <><div  className="d-flex justify-content-center">
          <h1>Calculator</h1>
        </div><div className="d-flex justify-content-center">

            <div className="board">
              {renderKey('(')}
              {renderKey(')')}
              {renderKey('%')}
              {renderKey('CE')}
              {renderKey(7)}
              {renderKey(8)}
              {renderKey(9)}
              {renderKey('/')}
              {renderKey(4)}
              {renderKey(5)}
              {renderKey(6)}
              {renderKey('x')}
              {renderKey(1)}
              {renderKey(2)}
              {renderKey(3)}
              {renderKey('-')}
              {renderKey(0)}
              {renderKey('.')}
              {renderKey('=')}
              {renderKey('+')}
              
            </div>
          </div></>
      );
    }
  }

 




export default function Calculator() {

 

    return (
      <Board/>
      
    );
  }