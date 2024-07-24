import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import Login from './components/KIBA_FILES/Login/Login'
import ChangePassword from './components/KIBA_FILES/ChangePassword/ChangePassword'
import Dashboard from './components/KIBA_FILES/Dashboard/Dashboard'
import Customers from './components/KIBA_FILES/Customers/Customers'
import CreateCustomer from './components/KIBA_FILES/CreateCustomer/CreateCustomer'
import Settings from './components/KIBA_FILES/Settings/Settings'
import CustomerDetailedView from './components/KIBA_FILES/CreateCustomer/CustomerDetailedView'
import Dummy from './components/KIBA_FILES/DummyFolder/Dummy'
import ManageAdminCredentials from './components/KIBA_FILES/ManageAdminCredentials/ManageAdminCredentials'
import ManageExecutiveCredentials from './components/KIBA_FILES/ManageExecutiveCredentials/ManageExecutiveCredentials'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Login />,
            index: true // This will render <Login /> when the path is exactly '/'
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/change-password',
            element: <ChangePassword />
        },
        {
            path: '/dummy',
            element: <Dummy />
        },
        {
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/customers',
                    element: <Customers />
                },
                {
                    path: '/create-customer',
                    element: <CreateCustomer />
                },
                {
                    path: '/manage-credentials',
                    element: <Settings />
                },
                {
                    path: '/customer/:id',
                    element: <CustomerDetailedView />
                },
                {
                    path: '/manage-admin-credentials',
                    element: <ManageAdminCredentials />
                },
                {
                    path: '/manage-executive-credentials',
                    element: <ManageExecutiveCredentials />
                }
            ]
        }
    ]
)

export default router
