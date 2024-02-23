import { useCallback, useState } from 'react';
import Register from './Register';
import Login from './Login';

export default function Auth() {
  const [display, setDisplay] = useState<'register' | 'login'>('register');

  const displayRegister = useCallback(() => {
    setDisplay('register');
  }, []);
  const displayLogin = useCallback(() => {
    setDisplay('login');
  }, []);

  return (
    <>
      {display === 'register' && <Register displayLogin={displayLogin} />}
      {display === 'login' && <Login displayRegister={displayRegister} />}
    </>
  );
}
