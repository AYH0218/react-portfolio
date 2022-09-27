import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Works from './components/Works';
import Etc from './components/Etc';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/etc" element={<Etc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;