import React, { Component } from "react";
import { Progress, ListGroup, ListGroupItem } from "reactstrap";

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  handleClick = async (e) => {
    let buttonVal = e.target.value;
    await this.setState({ active: buttonVal });
    this.toggleActive(buttonVal);

  };
  toggleActive = (name) => {
    return (name === this.state.active) ? "active" : "not-active";
  };

  render() {
    return (
      <>
        <div>
          {" "}
          <div className="text-center">10%</div>
          <Progress animated color="black" value="10" />
          <div className="text-center">25%</div>
          <Progress animated color="danger" value="25" />
          <div className="text-center">50%</div>
          <Progress animated color="primary" value="50" />
          <div className="text-center">75%</div>
          <Progress animated color="success" value={75} />
          <div className="text-center">100%</div>
          <Progress animated color="warning" value="100" />
        </div>

        <ListGroup>
          <ListGroupItem
            className={this.toggleActive("button-1")}
            onClick={this.handleClick}
            value="button-1"
            tag="button"
            action
          >
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem
            className={this.toggleActive("button-2")}
            onClick={this.handleClick}
            value="button-2"
            tag="button"
            action
          >
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem
            className={this.toggleActive("button-3")}
            onClick={this.handleClick}
            value="button-3"
            tag="button"
            action
          >
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem
            className={this.toggleActive("button-4")}
            onClick={this.handleClick}
            value="button-4"
            tag="button"
            action
          >
            Porta ac consectetur ac
          </ListGroupItem>
        </ListGroup>
      </>
    );
  }
}
