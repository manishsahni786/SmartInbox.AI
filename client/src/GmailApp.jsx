import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const GmailApp = () => {
const { user, isAuthenticated, isLoading } = useAuth0();
const { logout } = useAuth0();

const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    };
if (isLoading) {
return <div>Loading...</div>;
}

  return (
    isAuthenticated && (
      <div className="gmail-app">
        <h2>Welcome, {user.name}</h2>
        <div className="inbox">
          <h3>Inbox</h3>
          {/* Your inbox content here */}
        </div>
        <div className="top-right">
        <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
        </div>
      </div>
    )
  );
};

export default GmailApp;
