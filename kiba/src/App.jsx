import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import KibaContext from './context/KibaContext';
import router from './Router';


function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [customersTab, setCustomersTab] = useState('All Customers');
  const [admin, setAdmin] = useState({});
  const [isUserAuthenticated, setUserAuthenticated] = useState(true);
  const [isHeaderPopupOn, setHeaderPopupOn] = useState(false)


  const PathText = location.pathname.split('/')

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (PathText[1] === 'dashboard') {
      setActiveTab('Dashboard')
    } else if(PathText[1] === 'customers' || PathText[1] === 'customer' || PathText[1] === 'create-customer') {
      setActiveTab('Customers')
    } else {
      setActiveTab('')
    }
  },[])

  // GETTING THE ADMIN DATA
  useEffect(() => {
    const getAdminData = async () => {
      try {
        const url = `${apiUrl}/admin`;
        const options = {
          method: 'GET',
        };

        const response = await fetch(url, options);
        const data = await response.json();
        const newData = data.filter(each => each.role === 'Admin');
        setAdmin(newData[0]);
      } catch (error) {
        console.error('Error fetching Admin Data:', error);
      }
    };

    getAdminData();
  }, []);

  const onChangeActiveTab = (id) => {
    setActiveTab(id);
  };

  const onChangeCustomerTab = (id) => {
    setCustomersTab(id);
  };

  const handleAdmin = () => {
    // Placeholder function for handling admin data updates
  };

  const handleUserAuthenticate = () => {
    setUserAuthenticated(true);
  };

  const ToggleHeaderPopup = (status) => {
    setHeaderPopupOn(status);
  }

  return (
    <KibaContext.Provider
      value={{
        activeTab,
        customersTab,
        admin,
        isUserAuthenticated,
        isHeaderPopupOn,

        setActiveTab: onChangeActiveTab,
        setCustomersTab: onChangeCustomerTab,
        setAdmin: handleAdmin,
        login: handleUserAuthenticate,
        setHeaderPopup: ToggleHeaderPopup
      }}
    >
      <RouterProvider router={router} />
    </KibaContext.Provider>
  );
}

export default App;