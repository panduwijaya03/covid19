import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
			const response = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/')
			setDaily({ data: response.data, isLoading: false })
			setDailyView(response.data.reverse().slice(0, counter))
		} catch (error) {
			console.log(error.response.data)
		}
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

			<div class="container"> 
				 <header class="jumbotron my-4">
				    <h1 class="display-3">
					<Summary /></h1>
				</header>

				

				




			      <footer class="py-5 bg-dark">
				    <div class="container">
				      <p class="m-0 text-center text-white">Copyright &copy; Blueberry 2020</p>
			    	</div>
			  	</footer>

			 </div>
			 

			



	     

			            
			 
		

	)
}

export default Home
