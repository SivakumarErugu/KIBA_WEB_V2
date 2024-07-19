import React from "react";

const KibaContext = React.createContext({
    activeTab:'Dashboard',
    customersTab:'All Customers',
    Admin:[],
    isUserAuthenticated: false,

    setActiveTab: () =>{},
    setCustomersTab: () => {},
    setAdmin:()=> {},
    login: () => {}
})

export default KibaContext