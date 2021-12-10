import React from "react"
import { Link } from "react-router-dom"

function DashboardBid() {
	return (
		<div className="dashboard-bid">
			Sell
			<Link to="/dashboard/bid/edit"> Go to post a new sell</Link>
		</div>
	)
}

export default DashboardBid
