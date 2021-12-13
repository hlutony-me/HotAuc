import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
	setSearchResult,
	setResultError
} from "../../../redux/features/dashboardItemsSlice"
import { Link } from "react-router-dom"
import { SERVER_URL } from "../../../ConstantValue"
import axios from "axios"

function DashboardSell() {
	const items = useSelector((state) => state.dashboardItem.value)
	const userId = useSelector((state) => state.userInfor.user._id)
	//Set dispatch for Redux
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchItems = async () => {
			console.log("called")
			//Set request header
			const config = {
				headers: {
					"Content-Type": "Application/json"
				}
			}

			const res = await axios
				.get(`${SERVER_URL}userid/${userId}`, config)
				.catch((error) => dispatch(setResultError("not found")))

			dispatch(setSearchResult(res))
		}

		fetchItems()
		console.log("items", items)
	}, [dispatch])

	return (
		<div className="dashboard-sell">
			{items?.map((item) => {
				return (
					<div className="card">
						<div className="card-body">
							{item.images.map((prop) => (
								<img src={prop.uri} alt="hotwheels image" />
							))}
							<p> </p>
							<h2>{item.title}</h2>
							<p>Color: {item.color}</p>
							<p>Description: {item.description}</p>
							<p>Year: {item.year}</p>
							<p>End Time: {item.endTime}</p>
						</div>
					</div>
				)
			})}

			<Link to="/dashboard/bid/edit"> Go to post a new sell</Link>
		</div>
	)
}

export default DashboardSell
