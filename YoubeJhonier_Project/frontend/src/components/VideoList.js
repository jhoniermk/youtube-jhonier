
import React, { useEffect } from 'react';
import axios from 'axios';

function VideoList({ videos, setVideos }) {
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error al cargar los videos:', error);
      }
    };
    fetchVideos();
  }, [setVideos]);

  const deleteVideo = async (id) => {
    try {
      await axios.delete(`/api/videos/${id}`);
      setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };

  return (
    <div className="row">
      {videos.map((video) => (
        <div className="col-md-4 mb-3" key={video.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{video.title}</h5>
              <p className="card-text">{video.description}</p>
              <p className="card-text text-muted">Categoría: {video.category}</p>
              <button
                className="btn btn-danger me-2"
                onClick={() => deleteVideo(video.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
