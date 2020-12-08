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
		<div className='container'>
			<div>
				<div className='mt-5 mb-3 text-center'>
					<h2>Live Data Global</h2>
				</div>
				<Summary />
				<br />
				<p className='text-center'>
		
				</p>
			</div>
		</div>
	)
}

export default Home
