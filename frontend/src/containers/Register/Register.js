import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../../components/UI/FormElement/FormElement";
import {registerUser} from "../../store/actions/usersActions";
import {connect} from "react-redux";

class Register extends Component {
  state = {
    username: '',
    password: '',
  };

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  onSubmitHandler = event => {
    event.preventDefault();

    this.props.registerUser({...this.state});
  };

  render() {
    return (
      <>
        <h2>Registration</h2>
        <Form onSubmit={this.onSubmitHandler}>
          <FormElement
            propertyName="username"
            type="text"
            value={this.state.username}
            onChange={this.inputChangeHandler}
            required
          />
          <FormElement
            propertyName="password"
            type="password"
            value={this.state.password}
            onChange={this.inputChangeHandler}
            required
          />
          <FormGroup row>
            <Col sm={{offset: 2, size: 10}}>
              <Button type="submit" color="primary">
                Create new user
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: userData => dispatch(registerUser(userData)),
});

export default connect(null, mapDispatchToProps)(Register);