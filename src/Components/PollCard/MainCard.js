import React, { Component } from "react";
import Data from "./Data";
import Debrief from "./Debrief";
import DebriefMessageString from "./DebriefMessageString";
import Options from "./Options";
import Title from "./Title";
import Results from "./Results";
import SimpleStorage from "react-simple-storage";
import SubmitButton from "./SubmitButton";
import SubTitle from "./SubTitle";

export default class MainCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "Willie's First Poll",
      subTitle: "still working out the kinks",
      displayDebrief: false,
      debriefMessage: DebriefMessageString(), // will change this later
      active: null,
      finalChoice: "",
      displayData: false,
      disableChoices: false,
      hasVoted: false,
      totalVotes: 0,
      choices: {
        a: 18,
        b: 2,
        c: 12,
        d: 6,
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tallyVotes = this.tallyVotes.bind(this);
    this.codex = this.codex.bind(this);
  }

 componentDidMount() {
     this.setState({
      title: "Willie's First Poll",
      subTitle: "still working out the kinks",
      displayDebrief: false,
      debriefMessage: DebriefMessageString(), // will change this later
      active: null,
      finalChoice: "",
      displayData: false,
      disableChoices: false,
      hasVoted: false,
      totalVotes: 0,
      choices: {
        a: 18,
        b: 2,
        c: 12,
        d: 6,
      },
    });
    //console.log(this.state.choices[1]);
    
  }

  handleClick = async (e) => {
    let buttonVal = e.target.value;

    this.state.displayData === true
      ? this.setState({ disableChoices: true })
      : await this.setState({ active: buttonVal, disableChoices: false });
    this.toggleActive();
    console.log(this.state);
  };

  toggleActive = (name) => {
    return name === this.state.active ? "active" : "not-active";
  };
  handleSubmit = async () => {
    this.state.active === null
      ? alert("please make a choice before sumbiting")
      : await this.setState({
          displayData: true,
          displayDebrief: true,
          finalChoice: this.state.active,
        });
    await this.tallyVotes(this.state.finalChoice);
    Data(this.state.choices)
   
  };

  codex = (str) => {
    let idxmin;

    switch (str) {
      case "1":
        idxmin = "a";
        break;
      case "2":
        idxmin = "b";
        break;
      case "3":
        idxmin = "c";
        break;
      case "4":
        idxmin = "d";
        break;
      default:
        break;
    }
    return idxmin;
  };
  tallyVotes = async (string) => {
    let idx = string[7];

    let idxmin = this.codex(idx);

    this.state.finalChoice === ""
      ? await this.setState({ hasVoted: false })
      : await this.setState({
          hasVoted: true,
          totalVotes: this.state.totalVotes + 1,
        });
    //console.log("idx: " + idx);
    await this.setState({
      choices: {
        ...this.state.choices,
        [`${idxmin}`]: this.state.choices[`${idxmin}`] + 1,
      },
    });
    console.log(this.state.choices);
  };

  render() {
    return (
      <>
        <SimpleStorage parent={this} />
        <div id="mainCard" className="mainDiv">
          <Title title={this.state.title} />
          <SubTitle subTitle={this.state.subTitle} />

          <Options
            displayDebrief={this.state.displayDebrief}
            debriefMessage={this.state.debriefMessage}
            handleClick={this.handleClick}
            toggleActive={this.toggleActive}
            handleSubmit={this.handleSubmit}
            displayData={this.state.displayData}
          />
          <SubmitButton
            handleSubmit={this.handleSubmit}
            displayData={this.state.displayData}
          />
          {this.state.displayDebrief && (
            <Debrief debriefMessage={this.state.debriefMessage} />
          )}
          
          <Results
            handleSubmit={this.handleSubmit}
            displayData={this.state.displayData}
            choices={this.state.choices}
          />
        </div>
      </>
    );
  }
}
