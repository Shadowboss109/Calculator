import React from "react"


class Keys extends React.Component {
    render() {
      return (
        <button className="key">
          1
        </button>
      );
    }
  }

export default function Calculator() {
    return (
      <div>
        <Keys />
      </div>
    );
  }