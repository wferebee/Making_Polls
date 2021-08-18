import React, { Component } from "react";
import Debrief from "./Debrief";
import DebriefMessageString from "./DebriefMessageString";
import Options from "./Options";
import SubTitle from "./SubTitle";
import Title from "./Title";



export default class MainCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "Willie's First Poll",
      subTitle: "still working out the kinks",
      debriefMessage: DebriefMessageString(), // will change this later
    };
  }

  render() {
    return (
      <div id="mainCard" className="mainDiv">
        <Title title={this.state.title} />
        <SubTitle subTitle={this.state.subTitle} />
        <Debrief debrief={this.state.debriefMessage} />
        <Options />
      </div>
    );
  }
}
