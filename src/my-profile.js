import React, { Component } from 'react'
import { Header } from "components/Header/index.js";
import { FetchGit }  from "components/FetchComponent.js"

class Profile extends Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
          <div >
<Header />
<FetchGit />
          </div>
      );
  }
}

export default Profile;