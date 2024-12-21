//Приложение отображает breadcrumbs для удобного перехода между
//страницами. Breadcrumbs отображаются там, где это уместно.


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAlbum, fetchPhotos, fetchUser } from '../api';
import Breadcrumbs from './Breadcrumbs';
import styles from '../styles/AlbumDetail.module.css';

const AlbumDetail = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);


  useEffect(() => {
    const loadAlbumData = async () => {
      setLoading(true);
      try {
        const albumData = await fetchAlbum(albumId);
        setAlbum(albumData);

        const userData = await fetchUser(albumData.userId);
        setUser(userData);

        const photosData = await fetchPhotos(albumId);
        setPhotos(photosData);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAlbumData();
  }, [albumId]);

  useEffect(() => {
    if (photos.length > 0) {
      setLoading(true); 
      setLoadedImages(0);

      const handleImageLoad = () => {
        setLoadedImages(prev => prev + 1);
      };

      photos.forEach(photo => {
        const img = new Image();
        img.src = photo.url;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad;
      });
    }
  }, [photos]);

  useEffect(() => {
    if (loadedImages === photos.length && photos.length > 0) {
      setLoading(false);
    }
  }, [loadedImages, photos.length]);

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className={styles.container}>
      <Breadcrumbs />
      <h1>{album.title}</h1>
      <p>Created by: <Link to={`/users/${user.id}`}>{user.name}</Link></p>
      <div className={styles.photos}>
        {photos.map(photo => (
          <img 
            key={photo.id} 
            src={photo.url} 
            alt={photo.title} 
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/150'; 
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;