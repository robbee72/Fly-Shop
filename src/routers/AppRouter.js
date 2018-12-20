import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import ShopPage from "../components/ShopPage";
import HotelPage from "../components/HotelPage";
import DiningPage from "../components/DiningPage";
import Footer from "../components/Footer";
import AboutPage from "../components/Info/AboutPage";
import ContactPage from "../components/Info/ContactPage";
import Room from "../components/Hotel/Room";
import Menus from "../components/Menus/Menu";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/hotel" component={HotelPage} />
        <Route path="/dining" component={DiningPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/room" component={Room} />
        <Route path="/menus" component={Menus} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
