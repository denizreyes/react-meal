import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { AppContext } from './context/context';
import "@fontsource/roboto";
import './assets/css/base.scss';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import RandomMeal from './pages/RandomMeal/RandomMeal';

const App = () => {
  return (
    <AppContext>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/random" component={RandomMeal} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </AppContext>
  )
}

export default App
