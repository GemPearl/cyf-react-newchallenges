import React from "react";

const header = (props) => {
  return <h1> {props.title}</h1>;
};

header.defaultProps = {
  title: "Baby Name Picker",
};

export default header;
