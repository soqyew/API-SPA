
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import AlbumList from './components/AlbumList';
import AlbumDetail from './components/AlbumDetail';
import Header from './components/Header';
import NotFound from './components/NotFound';


const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:userId" element={<UserDetail />} />
      <Route path="/albums" element={<AlbumList />} />
      <Route path="/albums/:albumId" element={<AlbumDetail />} />
      <Route path="/" element={<Navigate to="/users" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;