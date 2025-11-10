import React from 'react';

const GalleryItem = ({ gallery, onClick }) => (
  <div className="gallery-item" onClick={onClick}>
    <img src={gallery.thumbnail} alt={gallery.title} />
    <div>{gallery.title}</div>
    <div>{gallery.tags.join(', ')}</div>
  </div>
);

export default GalleryItem;
