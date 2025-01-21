
import React, { useState } from 'react';
import axios from 'axios';

function VideoForm({ addVideo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVideo = { title, description, category };
    try {
      const response = await axios.post('/api/videos', newVideo);
      addVideo(response.data);
      setTitle('');
      setDescription('');
      setCategory('');
    } catch (error) {
      console.error('Error al agregar el video:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descripción</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Categoría</label>
        <input
          type="text"
          className="form-control"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Agregar Video</button>
    </form>
  );
}

export default VideoForm;
