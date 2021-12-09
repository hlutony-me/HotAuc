import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import axios from "axios"
import "./Edit-Profile.css"

const EditProfile = () => {
	const userEmail = useSelector(state => state.userInfor.user?.email)
	const userName = useSelector(state => state.userInfor.user?.name)
	
    return (
		<div class="boxProfile">
		<form action="">
		<img id="profileImage" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt ="profile img" width="30px" height="30px"/>
		<label id="UserLabel">User Name:</label>
		<input type="text" id="userNameInp" placeholder="User Name" name="userName" value={userName} />
		<label id="UserLabel">User Email:</label>
		<input type="email" id="EmailInp" placeholder="Email ID" name="userEmail" value={userEmail}/>
		
		<button class="buttonEdit" id="cancelBtn" type="reset">CANCEL</button>

		<button class="buttonEdit">DONE</button>
		</form>
		</div>
		)
}

export default EditProfile
