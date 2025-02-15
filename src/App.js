import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Positif from './pages/Positif'
import Sembuh from './pages/Sembuh'
import Meninggal from './pages/Meninggal'



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<Router>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
           <div class="container">
           <h1 class="navbar-brand">Live Data Covid - 19 </h1>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/positif">Data Positif</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/sembuh"> Data Sembuh</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/meninggal"> Data Meninggal</a>
                </li>
              </ul>
            </div>
        </div>
      </nav>

				<Switch>
					<Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
					<Route path='/positif' component={Positif} />
					<Route path='/sembuh' component={Sembuh} />
					<Route path='/meninggal' component={Meninggal} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
