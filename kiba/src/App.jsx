import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import KibaContext from './context/KibaContext';
import router from './Router';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [customersTab, setCustomersTab] = useState('All Customers');
  const [admin, setAdmin] = useState({});
  const [isUserAuthenticated, setUserAuthenticated] = useState(true);
  const [isHeaderPopupOn,setHeaderPopupOn] = useState(false)
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  const apiUrl = import.meta.env.VITE_API_URL;

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

    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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


// {isPortrait ? (
//   <div className="portrait-message">
//     Please open in desktop mode.
//   </div>
// ) : (
//   <RouterProvider router={router} />
// )}