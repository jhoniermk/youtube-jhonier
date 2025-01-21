
import React, { useState } from 'react';
import Header from './components/Header';
import VideoForm from './components/VideoForm';
import VideoList from './components/VideoList';

function App() {
  const [videos, setVideos] = useState([]);

  return (
    <div className="container">
      <Header />
      <VideoForm addVideo={(video) => setVideos([...videos, video])} />
      <VideoList videos={videos} setVideos={setVideos} />
    </div>
  );
}

export default App;
