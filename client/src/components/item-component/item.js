import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"

import { useEffect, useState } from "react"

import "./Items.css"
import { SERVER_URL } from "../../ConstantValue"
import axios from "axios"
import { async } from "@firebase/util"

const Item = () => {
	const { id } = useParams()
	const userId = useSelector((state) => state.userInfor.user._id)


	const [price, setPrice] = useState(0)

	const [currentPrice,setCurrentPrice] = useState(0)

	const [data, setData] = useState(null)

	const [loading, setLoading] = useState(true)

	const onPriceInputChange = (e) => {
		setPrice(e.target.value)
	}

	const handleSubmitPrice = async(e) => {
		e.preventDefault()

		const body = { price }
		const config = {
			headers: {
				"Content-Type": "Application/json"
			}
		}

		const res = await axios.put(`${SERVER_URL}item/${data._id}/user/${userId}`, body, config)
		setData(res.data)
		console.log(res.data)
		
	}

	useEffect(() => {
		const fetchItem = async () => {
			try {
				//Set request header

				const config = {
					headers: {
						"Content-Type": "Application/json"
					}
				}

				const res = await axios.get(`${SERVER_URL}item/${id}`, config)

				console.log(res)

				setData(res.data)

				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}

		fetchItem()
	}, [])

	return (
		<div className="items">
			<div className="home">
				<h1>{!loading && data.title}</h1>
				<div className="stuff">
					<img
						class="image"
						src={!loading && data.images[0].uri}
						alt="Random Img"
					/>
					<p class="text">Current Price: ${!loading && data.currentPrice}</p>
					<p class="text">End Time: {!loading && data.endTime}</p>
					<form onSubmit={(e) => handleSubmitPrice(e)}>
						<div class="bid">
							Bidding Price :
							<input
								class="txtPrice"
								value={price}
								onChange={(e) => onPriceInputChange(e)}
							></input>
							<button type="submit" class="btn btn-primary">
								Bid
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Item
