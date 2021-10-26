import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Pages/context/AuthProvider';
import PrivetRouter from './Pages/Login/PrivetRouter/PrivetRouter'
import AddUser from './Pages/AddUser/AddUser';
import ManageService from './Pages/ManageService/ManageService';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivetRouter path="/booking/:serviceId">
            <Booking />
          </PrivetRouter>
          <Route path="/adduser">
            <AddUser />
          </Route>
          <Route path="/manageService">
            <ManageService />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
