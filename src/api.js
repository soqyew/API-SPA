const API_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers() {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}

export async function fetchUser(userId) {
  const response = await fetch(`${API_URL}/users/${userId}`);
  return response.json();
}

export async function fetchAlbums() {
  const response = await fetch(`${API_URL}/albums`);
  return response.json();
}

export async function fetchAlbum(albumId) {
  const response = await fetch(`${API_URL}/albums/${albumId}`);
  return response.json();
}

export async function fetchPhotos(albumId) {
  const response = await fetch(`${API_URL}/albums/${albumId}/photos`);
  return response.json();
}