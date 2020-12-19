import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { CardData } from '../components/CardData'

const Recovered = () => {
	const [sembuh, setSembuh] = useState({
		data: [],
		isLoading: true,
	})
	const [search, setSearch] = useState([])
	const [serarchVal, setSearchVal] = useState('')

	const getSembuhData = async () => {
		try {
			setSembuh({ ...sembuh, isLoading: true })
			const response = await Axios.get('https://covid19.mathdro.id/api/recovered')
			setSembuh({ data: response.data, isLoading: false })
			setSearch(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const onSearch = ({ target: { value } }) => {
		setSearchVal(value)

		let newArr = sembuh.data.filter(
			val =>
				`${val.provinceState}`.toLowerCase().includes(value.toLowerCase()) ||
				`${val.countryRegion}`.toLowerCase().includes(value.toLowerCase())
		)
		setSearch(newArr)
	}

	useEffect(() => {
		getSembuhData()
	}, [])

	return (
		<div className='container'>
			<div className='mt-5 mb-3 text-center'>
				<h1>Data Sembuh</h1>
			</div>
			<div className='row'>
				<div className='input-group my-5 ml-5 pr-5'>
					<div className='input-group-prepend'>
						<span className='input-group-text' id='inputGroup-sizing-default'>
							Search
						</span>
					</div>
					<input onChange={onSearch} value={serarchVal} placeholder='Pencarian Data Negara dan Provinsi' type='text'className='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default' name='search' />
				</div>
				{!sembuh.isLoading && search.map((data, index) => <CardData data={data} key={index} type='recovered' />)}
			</div>
		</div>
	)
}

export default Recovered
