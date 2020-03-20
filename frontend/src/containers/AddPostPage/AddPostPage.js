import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import FormElement from "../../components/UI/FormElement/FormElement";
import {createPost} from "../../store/actions/postsActions";
import {connect} from "react-redux";

class AddPostPage extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    user: '',
  };

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  fileChangeHandler = event => {
    this.setState({[event.target.name]: event.target.files[0]})
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const formData = new FormData();

    const postData = {...this.state, user: this.props.user._id};

    Object.keys(postData).forEach(key => {
      const value = postData[key];

      formData.append(key, value);
    });

    this.props.createPost(formData);
  };

  render() {
    return (
      <>
        <h2>Create new post</h2>
        <Form onSubmit={this.onSubmitHandler}>
          <FormElement
            propertyName="title"
            type="text"
            value={this.state.title}
            onChange={this.inputChangeHandler}
            required
          />
          <FormElement
            propertyName="description"
            type="text"
            value={this.state.description}
            onChange={this.inputChangeHandler}
            required={!this.state.image}
          />
          <FormGroup row>
            <Label sm={2} for='image'>Image</Label>
            <Col sm={10}>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={this.fileChangeHandler}
                required={!this.state.description}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{offset: 2, size: 10}}>
              <Button type="submit" color="primary">
                Create new post
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  createPost: userData => dispatch(createPost(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage);