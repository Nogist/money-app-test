import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isLogged: boolean;
}

const ProtectedRoutes: React.FC<Props> = ({ isLogged }) => {
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());

  useEffect(() => {
    // Set up an interval to check whether it's time to log out
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceLastActivity = currentTime - lastActivityTime;
      const logoutTime = 2 * 60 * 1000; // 2 minutes in milliseconds

      if (timeSinceLastActivity >= logoutTime) {
        // Log the user out
        setLastActivityTime(currentTime);
        window.location.href = '/';
      }
    }, 1000); // Check every second

    return () => {
      clearInterval(intervalId);
    };
  }, [lastActivityTime]);

  const handleActivity = () => {
    setLastActivityTime(Date.now());
  };

  return isLogged ? (
    <div onMouseMove={handleActivity} onClick={handleActivity} onKeyDown={handleActivity} role="button" tabIndex={0}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
