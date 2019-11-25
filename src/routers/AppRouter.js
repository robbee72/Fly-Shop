import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';

import Header from '../components/Header';
import Login from '../firebaselogin/Login';
import LandingPage from '../components/LandingPage';
import ShopPage from '../components/ShopPage';
import HotelPage from '../components/HotelPage';
import DiningPage from '../components/DiningPage';
import AboutPage from '../components/Info/AboutPage';
import ContactPage from '../components/Info/ContactPage';
import Room from '../components/Hotel/Room';
import Menu from '../components/CafeGrille/Menu';
import Clock from '../components/Clock/ClockDate';

// TODO make Login private and redirect to landing
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/hotel" component={HotelPage} />
        <Route path="/dining" component={DiningPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/room" component={Room} />
        <Route path="/menu" component={Menu} />
        <Route path="/clock" component={Clock} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
