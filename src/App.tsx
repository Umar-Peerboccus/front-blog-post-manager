import './App.css';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ModifyPost from './pages/ModifyPost';

export default function App() {
  return (
    <Routes>
        <Route path='/' element = { <Home /> }/>
        <Route path='/create' element = { <CreatePost /> }/>
        <Route path='/:id' element = {<ModifyPost />} />
    </Routes>
  );
}