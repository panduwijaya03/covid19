import React from 'react'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Confirmed from './pages/Confirmed'
import Recovered from './pages/Recovered'
import Death from './pages/Death'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<Router>

       <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero"><h1><span>I</span>nformation <span>C</span>ovid-19</h1></a>
        </div>
        <div class="nav-list">
          <div class="hamburger"><div class="bar"></div></div>
          <ul>
            <li><a href="#provinsi" data-after="PROVINSI">PROVINSI</a></li>
            <li><a href="#indonesia" data-after="INDONESIA">INDONESIA</a></li>
            <li><a href="#Global" data-after="GLOBAL">GLOBAL</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/confirmed' component={Confirmed} />
					<Route path='/recovered' component={Recovered} />
					<Route path='/deaths' component={Death} />
					<Route component={Page404} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
