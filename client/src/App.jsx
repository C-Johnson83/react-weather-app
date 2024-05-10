import { useState } from 'react'
// import components
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
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
    <div className="container-fluid">
      <Header handleNavigationClick={handleNavigationClick} />
      <div className='row mt-3'>
      <Sidebar className="col-3"/>  
      <main className="col-10">
        {CurrentComponent && <CurrentComponent />}
      </main>
      <Footer />
      </div>
      </div>
);
  
};

export default App








