import { useState } from 'react'
// import components
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'

const componentsByPage = {
 Homepage: Home
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('Homepage');

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };
  const CurrentComponent = componentsByPage[currentPage];
  return (
    <>
      <Header handleNavigationClick={handleNavigationClick} />
   
      <main>
  <h1>Weather App Homepage from App.jsx</h1>
        {CurrentComponent && <CurrentComponent />}
      </main>
    
      <Footer />
      </>
);
  
};

export default App








