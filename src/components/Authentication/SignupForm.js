import React, { Component } from 'react';
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import firebase from 'firebase'

function signup(email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error)
    })
}

export default class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <Card>
        <CardHeader title="Cadastro" />
        <CardContent>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <TextField value={this.state.email} onChange={e => this.setState({ email: e.target.value })} label="email" type="email"/>
            <TextField value={this.state.password} onChange={e => this.setState({ password: e.target.value })} label="senha" type="password"/>
            <Button onClick={() => signup(this.state.email, this.state.password)} color="primary">Cadastrar</Button>
          </div>
        </CardContent>
      </Card>
    )
  }
}