import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


const Options =(props)=>{

  const { handleClick, toggleActive } = props;
    

    return (
      <>
        <ListGroup>
          <ListGroupItem
            className={toggleActive("button-1")}
            onClick={handleClick}
            value="button-1"
            tag="button"
            action
          >
            CHOICE ONCE
          </ListGroupItem>
          <ListGroupItem
            className={toggleActive("button-2")}
            onClick={handleClick}
            value="button-2"
            tag="button"
            action
          >
            CHOICE TWO
          </ListGroupItem>
          <ListGroupItem
            className={toggleActive("button-3")}
            onClick={handleClick}
            value="button-3"
            tag="button"
            action
          >
            CHOICE THREE
          </ListGroupItem>
          <ListGroupItem
            className={toggleActive("button-4")}
            onClick={handleClick}
            value="button-4"
            tag="button"
            action
          >
            CHOICE FOUR
          </ListGroupItem>
        </ListGroup>


      </>
    );
  }

  export default Options;
