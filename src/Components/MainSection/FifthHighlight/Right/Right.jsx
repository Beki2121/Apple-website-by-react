import React from 'react'
import WatchSeries from "../../../../commonResource/images/icons/watch-series5-logo.png";
function Right() {
  return (
    <>
      <div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={WatchSeries}></img>
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.<br></br>
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>
    </>
  )
}

export default Right