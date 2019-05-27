import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import PopUps from "../../components/PopUps";

function validate(email) {
  if(email !== "undefined"){
        let lastAtPos = email.lastIndexOf('@');
        let lastDotPos = email.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            return {
                email: true
            };
        }else{
            return {
                email: false
            };
        }
    }  

}

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",

      touched: {
        email: false,
        
      },
      show: false,
      handleClose() {
        this.setState({ show: false });
      },
      handleShow() {
        this.setState({ show: true });
      },
      modaltxt:""
    };
  }

  handleEmailChange = evt => {
    let value = evt.target.value;
    const name = evt.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    evt.preventDefault();
    const { name } = this.state;
    const { email } = this.state;
    const { message } = this.state;
    this.setState({ 
      name: "",
      email: "",
      message: ""
    }); 
    API.saveMessage({
      name,
      email,
      message
    }).then((result) => {
      let modaltxt="Your Message has been sent";
      let handleCloseCopy = this.state.handleClose.bind(this);
      this.setState({show:true, handleClose: handleCloseCopy, modaltxt});
    }).catch(err => console.log(err));
  };

  canBeSubmitted() {
    const errors = validate(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <div className="container">
        <div className="row ">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1 className="page-header">Contact<hr/></h1>
            <form className="form" onSubmit={this.handleSubmit}>
            <PopUps show={this.state.show} handleClose={this.state.handleClose} modaltxt={this.state.modaltxt}></PopUps>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleEmailChange}
                    />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
                  <input
                    className={shouldMarkError("email") ? "error" : ""}
                    type="text"
                    placeholder="Enter email"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleEmailChange}
                    onBlur={this.handleBlur("email")}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
                    <textarea
                      type="text"
                      placeholder="Enter message(Max 100 words)"
                      value={this.state.message}
                      name="message"
                      rows="10"
                      onChange={this.handleEmailChange}
                    />
                </div>
              </div>
              <button disabled={isDisabled}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;