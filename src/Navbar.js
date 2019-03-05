import React, { Component } from 'react'
import { Navbar } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props) 

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
  return ( 
    <div>
        <Navbar expand="md" className="nav">
        <div className="headerTitle">
          <span className="headerTitle">$5 Bookstore</span>         
        </div>
        </Navbar>
      </div>
  )
}
}

export default Navigation