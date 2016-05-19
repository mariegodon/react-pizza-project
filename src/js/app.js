var React = require('react');
var ReactDOM = require('react-dom');

import HomePage from '../components/homepage.js';
import Order from '../components/order.js';
import Choose from '../components/choose.js';
import Custom from '../components/custom.js';
import Done from '../components/done.js';
import Confirmation from '../components/confirmation.js';

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

// A simple navigation component
var Navigation = React.createClass({
  render: function() {
    return (
      <nav className="main-menu">
        <ul>
          <li className="logo">
            PIZZA!
          </li>
          <div>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/order">
              <li>ORDER</li>
            </Link>
          </div>
        </ul>
      </nav>
    );
  }
});

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
      <main>
        <Navigation/>
        <div className="mainSection">
        {this.props.children}
        </div>
      </main>
    );
  }
});

// not found "page"
var NotFound = React.createClass({
  render: function() {
    return (
      <div>Not Found!</div>
    );
  }
});

/*
The routes. This section says:
  - If the route starts with /, load the App component
  - If the route IS /, load the Home component INSIDE App as this.props.children
  - If the route is /about, load the About component INSIDE App as this.props.children
  - If the route is /team, load the Team component INSIDE App as this.props.children
  - If the route is /about, load the About component INSIDE App as this.props.children
  - If the route is anything else, load the NotFound component INSIDE App as this.props.children

The whole process lets us create **complex, nested user interfaces** with minimal effort,
by simply nesting `Route` components.
*/

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
        <Route path="/order" component={Order} />
        <Route path="/choose" component={Choose} />
        <Route path="/custom" component={Custom}/>
        <Route path="/done" component={Done}/>
        <Route path="/confirmation" component={Confirmation} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// If this line of code is not here, nothing gets displayed!
ReactDOM.render(routes, document.querySelector('#app'));
