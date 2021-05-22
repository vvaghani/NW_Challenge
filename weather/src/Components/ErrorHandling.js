import React from "react";
import Alert from "@material-ui/lab/Alert";

const Error = () => {
  return (
    <div>
      <Alert severity="warning">Please input valid city and country!</Alert>
    </div>
  );
};

export default Error;