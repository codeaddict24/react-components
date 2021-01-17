import { BrowserRouter as Router, Switch, Route, HashRouter  } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Upcoming from './components/Upcoming/Upcoming';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
  <HashRouter>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
          <Upcoming />
          <AboutUs />
          <Reviews />
          <Footer />
    </HashRouter>
  );
}

export default App;
