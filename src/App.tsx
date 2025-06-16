import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ClassPage from './pages/ClassPage';
import ClassIntroduction from './components/classes/ClassIntroduction';
import ClassSaving from './components/classes/ClassSaving';
import ClassSpending from './components/classes/ClassSpending';
import ClassEarning from './components/classes/ClassEarning';
import ResourcesPage from './pages/ResourcesPage';
import { MascotProvider } from './context/MascotContext';

function App() {
  return (
    <MascotProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-blue-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/classes" element={<ClassPage />} />
              <Route path="/classes/introduction" element={<ClassIntroduction />} />
              <Route path="/classes/saving" element={<ClassSaving />} />
              <Route path="/classes/spending" element={<ClassSpending />} />
              <Route path="/classes/earning" element={<ClassEarning />} />
              <Route path="/resources" element={<ResourcesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MascotProvider>
  );
}

export default App;