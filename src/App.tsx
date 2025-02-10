import './App.css';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ModifyPost from './pages/ModifyPost';
import { NotificationContext } from './store/NotificationContext';
import { NotificationDetail } from './models/NotificationDetail';
import { useState } from 'react';

export default function App() {

  const [notification, setNotification] = useState<NotificationDetail>({ open: false, message: "" });

   // Function to show notification
   const showNotification = (message: string) => {
    setNotification({ open: true, message });

    // Automatically hide after 3 seconds
    setTimeout(() => {
      setNotification({ open: false, message: "" });
    }, 3000);
  };

  // Function to manually hide notification
  const hideNotification = () => {
    setNotification({ open: false, message: "" });
  };

  return (
    <NotificationContext.Provider value = {{ notification, showNotification, hideNotification }}>
      <Routes>
          <Route path='/' element = { <Home /> }/>
          <Route path='/create' element = { <CreatePost /> }/>
          <Route path='/:id' element = {<ModifyPost />} />
      </Routes>
    </NotificationContext.Provider>
  );
}