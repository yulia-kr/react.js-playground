import React, { useState } from 'react';
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div>
      {username ? (
        <WelcomePage username={username} />
      ) : (
        <HomePage setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
