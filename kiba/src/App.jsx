import { useState, useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import KibaContext from './context/KibaContext';
import router from './Router';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [customersTab, setCustomersTab] = useState('All Customers');
  const [admin, setAdmin] = useState({});
  const [isUserAuthenticated, setUserAuthenticated] = useState(true);

  // GETTING THE ADMIN DATA
  useEffect(() => {
    const getAdminData = async () => {
      try {
        const url = 'http://localhost:3000/admin';
        const options = {
          method: 'GET',
        };

        const response = await fetch(url, options);
        const data = await response.json();
        console.log('Admin data:', data.filter(each => each.role === 'Admin'));
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

  return (
    <KibaContext.Provider
      value={{
        activeTab,
        customersTab,
        admin,
        isUserAuthenticated,
        setActiveTab: onChangeActiveTab,
        setCustomersTab: onChangeCustomerTab,
        setAdmin: handleAdmin,
        login: handleUserAuthenticate,
      }}
    >
      <RouterProvider router={router} />
    </KibaContext.Provider>
  );
}

export default App;
