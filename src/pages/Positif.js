import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardData } from '../components/CardData'
const Confirmed = () => {
	const [positif, setPositif] = useState({
		data: [],
		isLoading: true,
	})
	const [search, setSearch] = useState([])
	const [serarchVal, setSearchVal] = useState('')

	const getPositifData = async () => {
		try {
			setPositif({ ...positif, isLoading: true })
			const response = await axios.get('https://covid19.mathdro.id/api/confirmed')
			setPositif({ data: response.data, isLoading: false })
			setSearch(response.data)
		} catch (error) {
			console.log(error.response.data)
		}
	}

	const onSearch = ({ target: { value } }) => {
		setSearchVal(value)

		let newArr = positif.data.filter(
			val =>
				`${val.provinceState}`.toLowerCase().includes(value.toLowerCase()) ||
				`${val.countryRegion}`.toLowerCase().includes(value.toLowerCase())
		)
		setSearch(newArr)
	}

	useEffect(() => {
		getPositifData()
		// eslint-disable-next-line
	}, [])

	return (
		<div className='container'>
			<div className='mt-5 mb-3 text-center'>
				<h1>Data Positif</h1>
			</div>
			<div className='row'>
				<div className='input-group my-5 ml-5 pr-5'>
					<div className='input-group-prepend'>
						<span className='input-group-text' id='inputGroup-sizing-default'>
							Search
						</span>
					</div>
					<input onChange={onSearch} value={serarchVal} placeholder='Pencarian Data Negara dan Provinsi' type='text' className='form-control'aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default' name='search'
					/>
				</div>

				{!positif.isLoading && search.map((data, index) => <CardData data={data} key={index} type='confirmed' />)}
			</div>
		</div>
	)
}

export default Confirmed
