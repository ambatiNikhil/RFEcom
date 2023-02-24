
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Header from './components/Header'
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
