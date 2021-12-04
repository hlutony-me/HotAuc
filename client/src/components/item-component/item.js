import React from "react"
import { useLocation, useParams } from "react-router"

function Item(props) {
	const { id } = useParams()

	console.log(id)

	return <div className="item">item Item id: {id}</div>
}

export default Item
