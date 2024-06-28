import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GmailApp from './GmailApp';
import './App.css';

function App() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (user.sub.startsWith('google-oauth2')) {
        navigate('/gmail');
      } else if (user.sub.startsWith('windowslive')) {
        navigate('/outlook');
      }
    }
  }, [isAuthenticated, navigate, user]);

  const handleGmailLogin = () => {
    loginWithRedirect({
      connection: 'google-oauth2'
    });
  };

  const handleOutlookLogin = () => {
    loginWithRedirect({
      connection: 'windowslive'
    });
  };

  return (
    <div className="App">
      <h1 className="heading">Welcome to SmartInbox.AI</h1>
      <div className="buttons-container">
        <div className="button gmail-button" onClick={handleGmailLogin}>
          Continue with Google
        </div>
        <div className="button outlook-button" onClick={handleOutlookLogin}>
          Continue with Outlook
        </div>
      </div>
    </div>
  );
}

export default App;
