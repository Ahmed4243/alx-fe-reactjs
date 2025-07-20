// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../context/UserContext'; // adjust path if needed

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
