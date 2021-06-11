import React, { useEffect, useState } from 'react';
import { Message } from '@env-self-serve/api-interfaces';
import { ProjectList } from './projects/project-list.component';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to env-self-serve!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Extensible Build Framework"
        />
      </div>
      <div><ProjectList /></div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
