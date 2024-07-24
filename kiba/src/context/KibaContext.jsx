import React from "react";

const KibaContext = React.createContext({
    activeTab:'Dashboard',
    customersTab:'All Customers',
    Admin:[],
    isUserAuthenticated: false,
    isHeaderPopupOn: false,

    setActiveTab: () =>{},
    setCustomersTab: () => {},
    setAdmin:()=> {},
    login: () => {},
    setHeaderPopup: () => {}
})

export default KibaContext