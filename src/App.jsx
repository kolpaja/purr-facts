import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/facts/:factId' element={<Post />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
