import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { setSearchResult } from "../../redux/features/dashboardItemsSlice"
import "../item-component/Items.css"
import {SERVER_URL} from "../../ConstantValue"

const Items = () => {
	const items = useSelector((state) => state.dashboardItem.value)
	const userId = useSelector((state) => state.userInfor.user._id)
	//Set dispatch for Redux
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchItems = async () => {
			try {
				console.log("called")
				//Set request header
				const config = {
					headers: {
						"Content-Type": "Application/json"
					}
				}

				const res = await axios.get(`${SERVER_URL}item/${userId}`, config)
				console.log(res)

				dispatch(setSearchResult(res.data))
			} catch (error) {
				console.log(error)
			}
		}

		fetchItems()
	}, [dispatch])

	return (
		<div className="cards">
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
		</div>
	)
}
export default Items