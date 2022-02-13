import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GithubProvider } from './context/GithubContext';
import Header from './components/Header';
import Home from './pages/Home';
import User from './pages/User';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
function App() {
  return (
    <GithubProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users/:user" element={<User />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </GithubProvider>
  );
}

export default App;
