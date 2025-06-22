import React from 'react'
import TvLogo from "../../../../commonResource/images/icons/apple-tv-logo.png";
import WatchMore from "../../../../commonResource/images/home/banker.png";

function Left() {
  return (
    <>
            <div className="left-side-wrapper col-sm-12 col-md-6">
                        <div className="left-side-container">
                            <div className="top-logo-wrapper">
                                <div className="logo-wrapper">
                                    <img src={TvLogo}/>
                                </div>
                            </div>

                            <div className="tvshow-logo-wraper">
                                <img src={WatchMore}/>
                            </div>

                            <div className="watch-more-wrapper">
                                <a href="#">Watch now on the Apple TV App</a>
                            </div>
                        </div>
            </div>
    </>
  )
}

export default Left