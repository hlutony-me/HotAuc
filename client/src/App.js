import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Items from "./components/item-component/Items"
import Register from "./components/auth-component/Register"
import Login from "./components/auth-component/Login"
import Sidebar from "./components/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css"
import { UserContext } from "./components/auth-component/UserContext"
import { render } from "react-dom"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import store from "./redux/store"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			user: {},
			token: "",
			setUserContext: (key, value) => {
				this.setState({ [key]: value })
			}
		}
	}

	render() {
		return (
			<Provider store={store}>
				<UserContext.Provider value={this.state}>
					<Router>
						<Fragment>
							<Navbar />
							<Sidebar className="sidebar" />

							<section
								className="right-container"
								style={{ minHeight: "900px" }}
							>
								<Routes>
									<Route exact path="/" element={<Items />} />
									<Route
										exact
										path="/api/auth/register"
										element={<Register />}
									/>
									<Route exact path="/api/auth/login" element={<Login />} />
								</Routes>
							</section>
							<Footer />
						</Fragment>
					</Router>
				</UserContext.Provider>
			</Provider>
		)
	}
}

export default App
