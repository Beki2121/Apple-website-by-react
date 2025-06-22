import React from 'react'
import Left from "./Left/Left"
import Right from "./Right/Right"
function FifthHighlight() {
  return (
    <>
        <section className = "fifth-heghlight-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <Left/>
                    <Right/>
                </div>
            </div>
        </section>
    </>
  )
}

export default FifthHighlight