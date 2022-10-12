
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CryptoDetails from './pages/CryptoDetails';
import Home from './pages/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins/:id' element={<CryptoDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
