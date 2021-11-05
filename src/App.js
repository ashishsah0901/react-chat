import React, { useEffect } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { login, selectUser, logout } from './features/userSlice'
import Login from './components/login/Login';
import { auth } from './firebase/firebase'
import { onAuthStateChanged } from '@firebase/auth';

function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )
      }
    </div >
  );
}

export default App;
