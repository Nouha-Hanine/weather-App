import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Mainpage from './components/Mainpage';
import Account from './components/account';
import Header from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); 

  const navigateTo = (page) => {
    setCurrentPage(page); 
  };

 
  const renderHeader = () => {
    if (currentPage !== 'login' && currentPage !== 'signup' && currentPage !== 'account') {
      return <Header navigateTo={navigateTo} />;
    }
    return null; 
  };

  const handleCloseAccount = () => {
    setCurrentPage('mainpage'); 
  };

  const handleLogout = () => {
    setCurrentPage('login'); 
  };

  return (
    <div className="App">
    
      {renderHeader()}

    
      {currentPage === 'login' && <Login navigateTo={navigateTo} />}
      {currentPage === 'signup' && <Signup navigateTo={navigateTo} />}
      {currentPage === 'mainpage' && <Mainpage navigateTo={navigateTo} />}
      {currentPage === 'account' && <Account onClose={handleCloseAccount} />}

      
    </div>
  );
}

export default App;



