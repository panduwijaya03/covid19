import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Summary from '../components/Summary'

const Home = () => {
	const [daily, setDaily] = useState({
		data: [],
		isLoading: true,
	})

	const [dailyView, setDailyView] = useState([])
	const [counter, setCounter] = useState(3)

	const getDaily = async () => {
		try {
			setDaily({ ...daily, isLoading: true })
			const response = await axios.get('https://covid19.mathdro.id/api/daily')
			setDaily({ data: response.data, isLoading: false })
			setDailyView(response.data.reverse().slice(0, counter))
		} catch (error) {
			console.log(error.response.data)
		}
	}

	const showMore = () => {
		setCounter(counter => (counter > daily.data.length ? daily.data.length : counter + 3))
	}

	useEffect(() => {
		getDaily()
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		const ar = daily.data
		const newarr = ar.slice(0, counter)
		setDailyView(newarr)
	}, [counter])

	return (

			
	           <div className="row ">
	           <div className="medium-12 columns">

				<section id="header">
			    <div class="header container">
			      <div class="nav-bar">
			        <div class="brand">
			          <a href="#hero"><h1>Covid-19</h1></a>
			         <h3>Live Data in INDONESIA</h3>
			        </div>
			        <div class="nav-list">
			          <div class="hamburger">
				          <div class="bar"></div>
			          </div>
			          <ul>
			            <li><a href="#provinsi" data-after="PROVINSI">PROVINSI</a></li>
			            <li><a href="#indonesia" data-after="INDONESIA">INDONESIA</a></li>
			            <li><a href="#Global" data-after="GLOBAL">GLOBAL</a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </section>
			 
			  <section id="hero">
			    <div class="hero container">
			    
			     <div className='mt-5 mb-3 text-center'>
					</div>
				<Summary />
				<br />
				<p className='text-center'>
		
				</p>
				</div>
			  </section>


			  <section id="footer">
			    <div class="footer container">
			      <p>Copyright © 2020 Blueberry</p>
			    </div>
			  </section>
						
			
			  </div>
             </div>

	)
}

export default Home
