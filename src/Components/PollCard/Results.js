import React from "react";
import { Progress } from "reactstrap";


const Results = (props) => {
  const { displayData } = props;

  //SETTING BORDER COLORS FOR THE CHOICES

  return (
    <>
      {displayData === false ? (
        <></>
      ) : (
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
      )}
    </>
  );
};

export default Results;
