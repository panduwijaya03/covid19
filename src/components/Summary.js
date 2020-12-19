import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Summary = () => {
	const [globalData, setglobalData] = useState({
		data: {},
		isLoading: true,
	})

	const getglobalData = async () => {
		try {
			setglobalData({ ...globalData, isLoading: true })
			const response = await Axios.get('https://covid19.mathdro.id/api')
			setglobalData({ data: response.data, isLoading: false })
		} catch (error) {
			console.log(error.response.data)
		}
	}

	useEffect(() => {
		getglobalData()
	}, [])

	return (
		<div>
			<h1>Global Data</h1>
			<p>
				Last Update : {!globalData.isLoading && moment(globalData.data.lastUpdate).format('DD MMM YYYY HH:mm:ss')}{' '}
			</p>

			<div className='row'>
				<div className='col-sm-4 my-2'>
					<div className='card mx-auto bg-warning' style={{ width: '18rem' }}>
						<div className='card-body mx-auto'>
							{!globalData.isLoading && (
								<>
									<h5 className='card-title text-light text-center'>Positif</h5>
									<h2 className='card-title text-light text-center'>{globalData.data.confirmed.value}</h2>
									<div className='mx-auto text-center'>

									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<div className='col-sm-4 my-2'>
					<div className='card mx-auto bg-success' style={{ width: '18rem' }}>
						<div className='card-body mx-auto'>
							{!globalData.isLoading && (
								<>
									<h5 className='card-title text-light text-center'>Sembuh</h5>
									<h2 className='card-title text-light text-center'>
										{globalData.data.recovered.value}{' '}
										<span className='h6'>
											({((globalData.data.recovered.value / globalData.data.confirmed.value) * 100).toFixed(2)}%)
										</span>
									</h2>
									<div className='mx-auto text-center'>
			
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<div className='col-sm-4 my-2'>
					<div className='card mx-auto bg-danger' style={{ width: '18rem' }}>
						<div className='card-body mx-auto'>
							{!globalData.isLoading && (
								<>
									<h5 className='card-title text-light text-center'>Meninggal</h5>
									<h2 className='card-title text-light text-center'>
										{globalData.data.deaths.value}{' '}
										<span className='h6'>
											({((globalData.data.deaths.value / globalData.data.confirmed.value) * 100).toFixed(2)}%)
										</span>
									</h2>
									<div className='mx-auto text-center'>
	
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Summary
