import React from 'react'
import Left from "./Left/Left"
import Right from "./Right/Right"

function ForthHighlight() {
  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <Left />
            <Right />
          </div>
        </div>
    </>
  );
}

export default ForthHighlight