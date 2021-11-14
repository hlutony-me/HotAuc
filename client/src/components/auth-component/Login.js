import React,{useContext,useState}  from "react"
import { FormGroup, Navbar } from "react-bootstrap"
import "./Login.css"
import { UserContext } from "./UserContext"
import { SERVER_URL,LOGIN_INFO_EMPTY_ERROR } from "../../ConstantValue"
import { Form, Button } from "react-bootstrap"
import App from "../../App"
import { useNavigate } from "react-router-dom";

function Login(props) {
	const appContext = useContext(UserContext);
	const navigate = useNavigate();
	const [loginUserState, setLoginUserState] = useState({
		email:"",
		password:"",
	});
	const [loginUserErrorState, setLoginUserErrorState] = useState({
		emailError:true,
		passwordError:true,
		loginErrorMsg:"",
	});
	
	function emailOnChangeHandler(e){
		setLoginUserState({...loginUserState, email:e.target.value});
		setLoginUserErrorState({...loginUserErrorState, emailError:false});
	}
	function passwordOnChangeHandler(e){
		setLoginUserState({...loginUserState, password:e.target.value});
		setLoginUserErrorState({...loginUserErrorState, passwordError:false});
	}

	async function login(event){
		const loginUrl = `${SERVER_URL}auth/login`;
		loginUserState.email.trim().length ==0 && 
		setLoginUserErrorState({...loginUserErrorState, emailError:true});
		loginUserState.password.trim().length ==0 && 
		setLoginUserErrorState({...loginUserErrorState, passwordError:true});
		if(loginUserErrorState.emailError||loginUserErrorState.passwordError){
			setLoginUserErrorState({...loginUserErrorState, loginErrorMsg:LOGIN_INFO_EMPTY_ERROR});
			
		}
		else{

			const response = await fetch(loginUrl,{
				method:"POST",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(loginUserState),
			});
			
			if(response.status == 400){
				const {errors} = await response.json();
				setLoginUserErrorState({...loginUserErrorState, loginErrorMsg:errors[0]["msg"]});
				console.log(errors[0]["msg"])
			}
			if(response.status === 200){
				const data = await response.json();
				appContext.setUserContext("user",data.user);
				appContext.setUserContext("token",data.token);
				navigate('/');
				
			}	
		}
	}

	return (
<>

	<div className="card mx-auto">
	<Form className="m-3"> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={loginUserState.email} onChange={emailOnChangeHandler}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={loginUserState.password} onChange={passwordOnChangeHandler}/>
  </Form.Group>
  <Form.Group className="d-flex">
  <Button variant="primary" type="button" onClick={login}>
    Submit
  </Button>
  <Form.Text className="mx-3 text-danger">
      {loginUserErrorState.loginErrorMsg}
    </Form.Text>
	</Form.Group>

</Form>
	</div>
</>

	);
}

export default Login
