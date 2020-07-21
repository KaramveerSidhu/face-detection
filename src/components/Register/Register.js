import React from 'react';
import ReactDOM from 'react-dom';
import '../SignIn/SignIn.css';

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				alert('Registered Successfully!')
				this.props.loadUser(user);
				this.props.onRouteChange('signedin');	
			} else {
				alert(user);
			}
		})
		
	}

	handlePress = (event) => {
		if (event.charCode === 13) {
			this.onSubmitRegister()
		}
	}

	componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('keypress', this.handlePress);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener('keypress', this.handlePress);
    }

	render() {
	return (
	
			<div class="signin-form">
			   	<div className = 'form' >
			        <h2 class="text-center white">Register</h2>
			        <div class="form-group">
			            <input onChange={this.onNameChange} type="text" class="form-control" placeholder="Name" required="required" />
			        </div>       
			        <div class="form-group">
			            <input onChange={this.onEmailChange} type="email" class="form-control" placeholder="Email" required="required" />
			        </div>
			        <div class="form-group">
			            <input onChange={this.onPasswordChange} type="password" class="form-control" placeholder="Password" required="required" />
			        </div>
			        <div class="form-group">
			            <button onClick = {this.onSubmitRegister} type="submit" class="btn btn-primary btn-block">Register</button>
			        </div>
			    </div>
			</div>


		);
	}
}

export default Register;