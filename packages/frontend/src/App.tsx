import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Timeline } from './pages/Timeline';
import { CreatePost } from './components/CreatePost';
import { CreatePostButton } from './components/CreatePostButton';

function App() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-gray-100">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-0 md:ml-64 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
        <CreatePostButton onClick={() => setIsCreatePostOpen(true)} />
        <CreatePost isOpen={isCreatePostOpen} onClose={() => setIsCreatePostOpen(false)} />
      </div>
    </Router>
  );
}

export default App;