import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({ galleries, onSelect }) => (
  <div className="gallery-list">
    {galleries.map(gallery =>
      <GalleryItem key={gallery.id} gallery={gallery} onClick={() => onSelect(gallery)} />
    )}
  </div>
);

export default GalleryList;
