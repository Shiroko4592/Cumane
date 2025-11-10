import React from 'react';

const GalleryDetail = ({ gallery, onBack }) => (
  <div className="gallery-detail">
    <button onClick={onBack}>Back</button>
    <h2>{gallery.title}</h2>
    <div>{gallery.tags.join(', ')}</div>
    <div>{gallery.description}</div>
    {gallery.images.map((src, idx) =>
      <img key={idx} src={src} alt={`${gallery.title}-${idx}`} />
    )}
  </div>
);

export default GalleryDetail;
