import { Link } from "react-router-dom"
import React, {useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSearchResult, setResultError } from "../../../redux/features/dashboardItemsSlice"
import axios from "axios"
import { SERVER_URL } from "../../../ConstantValue"



function DashboardBid() {

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
				

				const res = await axios.get(
					`${SERVER_URL}item/bidder/${userId}`,
					config
				)
				
				//const res = await axios.get(`api/item/bidder/618ec0da7ff827518db00b41`, config)
				//const res = await axios.get(`api/item/bidder/${userId}`, config)
                .catch(error => dispatch(setResultError("not found")));

                  dispatch(setSearchResult(res))
                
		}

		fetchItems()
        console.log("items",items)
	}, [dispatch])

	return (
		<div className="dashboard-bid">
			{items?.map((item) => {
				console.log(item);
				console.log(item.bids);
				let maxPrice = Math.max.apply(Math, item.bids.map(function(o) { return o.price; }))
				let myPrice =  item.bids.map(function(o) { if(o.bidder == userId)  {return o.price;} })
				console.log(maxPrice);
				console.log(myPrice[0]);
				
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
							<p>My Price: {item.startingPrice}</p>
							<br/>
							<p>Current Price: {maxPrice}</p>
							<p>End Time: {item.endTime}</p>
						</div>
					</div>
				)
			})}
			<Link to="/dashboard/bid/edit"> Go to edit</Link>
		</div>
	)

	
}

export default DashboardBid