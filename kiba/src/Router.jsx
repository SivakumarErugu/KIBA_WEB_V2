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

const router = createBrowserRouter(
    [
        {
            path: '/login',
            element: <Login />,
            index: true
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
                }
            ]
        }
    ]
)

export default router
