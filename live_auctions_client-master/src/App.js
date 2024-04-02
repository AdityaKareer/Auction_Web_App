import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Ad from './components/Ad';
import AdForm from './components/AdForm';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
// Actions
import { loadUser } from './actions/auth';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import About from './components/About';
import Contact from './components/contactus';
import ContributorsPage from './components/ContributorsPage';

function App() {
  // Load user
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/ads/:adId' element={<Ad />} />
          <Route path='/postad' element={<AdForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/aboutus' element={<ContributorsPage />} />
          <Route path='/contactus' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

 export default App;




// import React from 'react';
// import './App.css';
// import BootstrapCard from './BootstrapCard'; // Import your BootstrapCard component

// function App() {
//   return (
//     <div className="App">
//       <BootstrapCard />
//     </div>
//   );
// }

// export default App;
