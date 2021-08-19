import React from "react";
import { Button } from "reactstrap";

const SubmitButton = (props) => {
  const { handleSubmit, displayData } = props;

  //SETTING BORDER COLORS FOR THE CHOICES

  return (
    <>
      {displayData === true ? (
       
          <h3>
            thank you for voting, please return to the homepage to take another
            poll
          </h3>
       
      ) : (
        <Button onClick={handleSubmit}  style={{ width: "66%" }} color="primary">
          SUBMIT
        </Button>
      )}{" "}
    </>
  );
};

export default SubmitButton;
