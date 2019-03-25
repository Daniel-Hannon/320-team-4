import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";


class ManagerDash extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      //temp line breaks: DELETE LATER
      <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className="row">
          <div className="col-sm">
            <JobPostingCard />
          </div>
          <div className="col-sm">
            <JobPostingCard />
          </div>
          <div className="col-sm">
            <JobPostingCard />
          </div>
          <div className="col-sm">
            <JobPostingCard />
          </div>
        </div>

      </div>
    )

  }
}

export default ManagerDash;
