import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [videoDetails, setVideoDetails] = useState({});
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    // Fetch unlisted video details from YouTube API
    const fetchVideoDetails = async () => {
      try {
        const apiKey = 'AIzaSyCOWP_L2VzSY4x-JgIIs4hLTP3gs668tY8';
        const videoID = 'm-cqamj65CY';
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=${apiKey}`);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const { snippet } = data.items[0];
            setVideoDetails({
              title: snippet.title,
              description: snippet.description,
            });
            setVideoURL(`https://www.youtube.com/embed/${videoID}`);
        }
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, []);


  return (
    <div>
      <h2>{videoDetails.title}</h2>
      <p>{videoDetails.description}</p>
      <iframe
        title="YouTube video player"
        width="560"
        height="315"
        src={videoURL}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
