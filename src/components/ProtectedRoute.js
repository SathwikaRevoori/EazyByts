import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    axios.get('https://revoori-sathwika-reddy.onrender.com/api/auth/check-session', {
      withCredentials: true
    })
    .then(res => setIsAuth(res.data.loggedIn))
    .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <p>Loading...</p>;

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
