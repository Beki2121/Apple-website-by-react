import React, { useState, useEffect } from "react";

import "./youtube.css";

function Youtube() {
  const [youtubeVideos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8`;

    fetch(
      url
    )
      .then((response) => response.json())
      .then((data) => {
        const youtubeVideosData = data.items;
        setVideos(youtubeVideosData);
      })
      .catch((error) => {console.error("error in fetching the data:",error)})
    }, [])
    // console.log(youtubeVideos);
  return (
    <>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
          
              <div className="title-wrapper">Latest Videos</div>
              
              {youtubeVideos.map((singleVideo) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`
                let videoWrapper = (
                  <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                    <div className="singleVideoWrapper h-100">
                      <div className="videoThumbnail">
                        <a href={vidLink} target="_blank">
                          <img
                            src={singleVideo.snippet.thumbnails.high.url}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="videoInfoWrapper">
                        <div className="videoTitle">
                          <a href={vidLink} target="_blank">
                            {singleVideo.snippet.title}
                          </a>
                        </div>
                        <div className="videoDesc">
                          {singleVideo.snippet.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );

                
                return videoWrapper

              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Youtube;
