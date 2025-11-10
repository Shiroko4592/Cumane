import React, { useState } from 'react';
import galleryData from './data/gallery.json';
import GalleryList from './components/GalleryList';
import GalleryDetail from './components/GalleryDetail';

function App() {
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <div>
      <h1>Hitomi Gallery Clone</h1>
      {!selectedGallery
        ? <GalleryList galleries={galleryData} onSelect={setSelectedGallery} />
        : <GalleryDetail gallery={selectedGallery} onBack={() => setSelectedGallery(null)} />
      }
    </div>
  );
}

export default App;
