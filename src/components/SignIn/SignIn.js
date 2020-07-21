import React from 'react';
import ReactDOM from 'react-dom';
import './SignIn.css';


class SignIn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
		}

	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword,
			})
		})
		.then(response => response.json())
		 .then(user => {
        	if(user.id){
          	this.props.loadUser(user);
          	this.props.onRouteChange('signedin');
        } else {
        	alert(user);
        }
      })
		
	}

	handlePress = (event) => {
		if (event.charCode === 13){
			this.onSubmitSignIn()
		}
	}

	componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('keypress', this.handlePress);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener('keypress', this.handlePress);
    }

	render() {
		const {onRouteChange} = this.props;
		return (

			<div className="signin-form">
			    <div className = 'form'>
			        <h2 className="text-center white">Sign In</h2>       
			        <div className="form-group">
			            <input id='userInput' onChange={this.onEmailChange} type="email" className="form-control" placeholder="Email" required="required" />
			        </div>
			        <div className="form-group">
			            <input id='userInput' onChange={this.onPasswordChange} type="password" className="form-control" placeholder="Password" required="required" />
			        </div>
			        <div className="form-group">
			            <button onClick={this.onSubmitSignIn} type="submit" className="btn btn-primary btn-block">Sign In</button>
			        </div>
			        <p onClick={() => onRouteChange('register')} className="text-center white pointer">Register</p>        
			    </div>
			</div>

			
				

		);
	}

	
}



export default SignIn;