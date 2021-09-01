import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Popover from '@material-ui/core/Popover';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //Sign up
  signup() {
    fetch(this.props.url+'/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(response => (response.json()))
    .then((res) => {
      if (res.success) { // navigate to homepage after successful registration
        alert('Sign up successful')
        this.props.changePage('homepage', null, null)
      } else {
        alert('Failed to sign up')
      }
    })
  }

  render() {
    return (
      <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '100%'}}>
        <div>
          <Card style = {{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
            <CardContent>
              <Typography style = {{display: 'flex', justifyContent: 'center'}} variant="display1">Sign Up</Typography>
              <div style={divStyle}>
                <FormControl style={formStyle}>
                  <InputLabel htmlFor="name-simple">Name</InputLabel>
                  <Input onChange={(e) => this.setState({name: e.target.value})} />
                </FormControl>
                <FormControl style={formStyle}>
                  <InputLabel htmlFor="name-simple">Email</InputLabel>
                  <Input onChange={(e) => this.setState({email: e.target.value})} />
                </FormControl>
                <FormControl style={formStyle}>
                  <InputLabel htmlFor="name-simple">Password</InputLabel>
                  <Input type="password" onChange={(e) => this.setState({password: e.target.value})} />
                </FormControl>
              </div>
              <div style = {divStyle}>
                <Button style={newStyle} onMouseDown={() => this.signup()}  variant = "contained" color = "primary">Sign Up</Button>
                <Button style={newStyle} onMouseDown={() => this.props.changePage('homepage', null, null)} variant = "contained">Login</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

const buttonStyle = {
  margin: '10px'
}

const formStyle = {
  width:'200px',
  margin: '2px'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin:'10px'
}

const newStyle = {
  width: '150px',
  margin:'7px'
}
