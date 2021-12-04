import "./Dashboard.css"
import React, { Fragment, useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import DashboardProfile from "./layouts/Dashboard-profile"
import DashboardSell from "./layouts/Dashboard-sell"
import DashboardBid from "./layouts/Dashboard-bid"

function Dashboard(props) {
	const [selectedSection, setSelectedSection] = useState("profile")

	const handleProfileSelection = () => {
		setSelectedSection("profile")
	}

	const handleSellSelection = () => {
		setSelectedSection("sell")
	}

	const handleBidSelection = () => {
		setSelectedSection("bid")
	}
	const profile = <DashboardProfile />
	const sell = <DashboardSell />
	const bid = <DashboardBid />

	return (
		<Fragment>
			<div>
				<ButtonGroup aria-label="Basic example">
					<Button variant="secondary" onClick={handleProfileSelection}>
						Profile
					</Button>
					<Button variant="secondary" onClick={handleSellSelection}>
						Sell
					</Button>
					<Button variant="secondary" onClick={handleBidSelection}>
						Bid
					</Button>
				</ButtonGroup>
			</div>
			<div>
				{(selectedSection === "profile" && profile) ||
					(selectedSection === "sell" && sell) ||
					(selectedSection === "bid" && bid)}
			</div>
		</Fragment>
	)
}

export default Dashboard
