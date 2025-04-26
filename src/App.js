import './App.css';
import Dashboard from './Components/Dashboard';
import PatienceAdmission from './Components/PatienceAdmission';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/patient-admission",
      Component: PatienceAdmission,
    },
    {
      path: "/dashboard",
      Component: Dashboard,
    },
    {
      path: "/register",
      Component: SignUp,
    }

  ]);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Routes>
  //         <Route path="/" element={<Dashboard />} />
  //       </Routes>
  //     </header>
  //   </div>
  // );
  return <RouterProvider router={routes} />;
}

export default App;
