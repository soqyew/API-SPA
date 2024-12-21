//Приложение отображает breadcrumbs для удобного перехода между
//страницами. Breadcrumbs отображаются там, где это уместно.



import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUser, fetchAlbums } from '../api';
import Breadcrumbs from './Breadcrumbs';
import styles from '../styles/UserDetail.module.css';

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      setLoading(true);
      try {
        const userData = await fetchUser(userId);
        setUser(userData);

        const userAlbums = await fetchAlbums();
        const filteredAlbums = userAlbums.filter(album => album.userId === userData.id);
        setAlbums(filteredAlbums);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [userId]);

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className={styles.container}>
       <Breadcrumbs />
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Gmail:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Site:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <h3>Albums:</h3>
      {albums.length > 0 ? (
        <ul>
          {albums.map(album => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`}>{album.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>There no albums for this user</p>
      )}
      <Link to="/users">Go to users</Link>
    </div>
  );
};

export default UserDetail;