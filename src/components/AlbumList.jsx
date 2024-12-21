import React, { useEffect, useState } from 'react';
import { fetchAlbums } from '../api';
import { Link } from 'react-router-dom';
import styles from '../styles/AlbumList.module.css';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums().then(setAlbums);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;