import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Comment from './pages/Comment';

function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/main' element={<Main />} />
          <Route path='/comment' element={<Comment />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
