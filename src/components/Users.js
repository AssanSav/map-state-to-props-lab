import React, { Component } from 'react';
import { connect } from "react-redux"

class Users extends Component {

  renderUsernames = () => {
    return this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsernames()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

// connect this component to Redux
export default connect(
  mapStateToProps
)(Users)
