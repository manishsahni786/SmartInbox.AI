import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import GmailApp from './GmailApp'; // Import GmailApp component
import OutlookApp from './OutlookApp';

const domain = 'dev-lveuzkrrxwdcd81t.us.auth0.com';
const clientId = 'tIRKLHWwC8bKJRoX9oUdhtcHGFQaAHVp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gmail" element={<GmailApp />} />
          <Route path="/outlook" element={<OutlookApp />} /> 
        </Routes>
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
);

