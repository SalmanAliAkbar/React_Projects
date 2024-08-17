import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/recipe/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
