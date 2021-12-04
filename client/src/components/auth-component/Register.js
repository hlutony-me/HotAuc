import "./Register.css"
import React,{useContext,useState}  from "react"
import { FormGroup } from "react-bootstrap"
import "./Login.css"
import { SERVER_URL,LOGIN_INFO_EMPTY_ERROR } from "../../ConstantValue"
import { Form, Button } from "react-bootstrap"
import { UserContext } from "./UserContext"
import { useNavigate } from "react-router-dom";

function Register() {

	const appContext = useContext(UserContext);
	const navigate = useNavigate();
	const [RegistUserState, setRegistUserState] = useState({
		name:"",
		email:"",
		password:"",
	});
	const [RegistUserErrorState, setRegistUserErrorState] = useState({
		nameError:true,
		emailError:true,
		passwordError:true,
		registErrorMsg:"",
	});
	
	function nameOnChangeHandler(e){
		setRegistUserState({...RegistUserState, name:e.target.value});
		setRegistUserErrorState({...RegistUserErrorState, nameError:false});
	}
	function emailOnChangeHandler(e){
		setRegistUserState({...RegistUserState, email:e.target.value});
		setRegistUserErrorState({...RegistUserErrorState, emailError:false});
	}
	function passwordOnChangeHandler(e){
		setRegistUserState({...RegistUserState, password:e.target.value});
		setRegistUserErrorState({...RegistUserErrorState, passwordError:false});
	}

	async function register(event){
		console.log("register");
		const regUrl = `${SERVER_URL}auth/register`;
		RegistUserState.name.trim().length ==0 && 
		setRegistUserErrorState({...RegistUserErrorState, nameError:true});
		RegistUserState.email.trim().length ==0 && 
		setRegistUserErrorState({...RegistUserErrorState, emailError:true});
		RegistUserState.password.trim().length ==0 && 
		setRegistUserErrorState({...RegistUserErrorState, passwordError:true});
		if(RegistUserErrorState.nameError||RegistUserErrorState.emailError||RegistUserErrorState.passwordError){
			setRegistUserErrorState({...RegistUserErrorState, registErrorMsg:LOGIN_INFO_EMPTY_ERROR});
			
		}
		else{
			const response =await fetch(regUrl,{
				method:"POST",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(RegistUserState),
			});
			
			if(response.status!= 200){
				const {errors} = await response.json();
				setRegistUserErrorState({...RegistUserErrorState, registErrorMsg:errors[0]["msg"]});
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
	<Form.Group className="mb-3" controlId="formBasicname">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" value={RegistUserState.name} onChange={nameOnChangeHandler}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={RegistUserState.email} onChange={emailOnChangeHandler}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={RegistUserState.password} onChange={passwordOnChangeHandler}/>
  </Form.Group>
  <Form.Group className="d-flex">
  <Button variant="primary" type="button" onClick={register}>
    Submit
  </Button>
  <Form.Text className="mx-3 text-danger">
      {RegistUserErrorState.registErrorMsg}
    </Form.Text>
	</Form.Group>

</Form>
	</div>
</>

	);
}

export default Register
