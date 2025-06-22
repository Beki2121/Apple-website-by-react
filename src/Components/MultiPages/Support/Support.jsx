import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;;
const CHANNEL_ID = "UCCy2H0O1dL6X6c5y5j6pUJw"; // Apple Support Channel ID

function Support() {
  const [video, setVideo] = useState(null); // State to hold video data
  const [loading, setLoading] = useState(true); // State to track loading

  const backgroundStyle = {
    backgroundImage: 'url("https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-as-yt-home-promo.image.large_2x.png")',
    backgroundSize: 'cover', // Makes the background cover the entire component
    backgroundPosition: 'center', // Centers the background image
    height: '100vh', // Full height of the viewport
    width: '100%', // Full width of the component
  }

  // Fetch latest Apple Support video when the component mounts
  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: API_KEY,
              channelId: CHANNEL_ID,
              order: "date",
              part: "snippet",
              type: "video",
              maxResults: 1,
            },
          }
        );

        const videoData = response.data.items[0]; // Get the first video
        const videoId = videoData.id.videoId;
        const videoTitle = videoData.snippet.title;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const videoThumbnail = videoData.snippet.thumbnails.high.url;

        // Update state with the fetched video data
        setVideo({ videoTitle, videoUrl, videoThumbnail });
        setLoading(false); // Set loading to false after the video is fetched
      } catch (error) {
        console.error("Error fetching video data:", error.message);
        setLoading(false); // Set loading to false in case of error
      }
    }

    fetchVideo();
  }, []); // Empty array means this effect runs once when the component mounts

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div style={backgroundStyle}  className=" col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Apple Support on YouTube</h1>
              <div className="apple-support">
                <p>
                  Check out our official YouTube channel to get the most out of
                  the latest features, devices, and services.
                </p>
                <a
                  href="https://www.youtube.com/applesupport"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Apple Support on YouTube
                </a>
                {loading ? (
                  <p>Loading the latest video...</p>
                ) : (
                  video && (
                    <div>
                      <h3>{video.videoTitle}</h3>
                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={video.videoThumbnail}
                          alt={video.videoTitle}
                        />
                      </a>
                      <p>Watch the video on YouTube</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
