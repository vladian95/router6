import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import Singlepage from './pages/Singlepage';
import Notfoundpage from './pages/Notfoundpage';
import Layout from './components/Layout';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
