import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import Positif from './pages/Positif'
import Sembuh from './pages/Sembuh'
import Meninggal from './pages/Meninggal'



import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<Router>

         <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
       <div class="container">
      <a class="navbar-brand" href="#">Live Data Covid - 19</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home
              <span class="sr-only">(current)</span>
            </a>
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
					<Route component={Page404} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
