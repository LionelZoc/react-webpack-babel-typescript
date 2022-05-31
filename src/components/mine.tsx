import React from "react";
import { again } from "appComponents/other";

const Test = ({ value }: { value: number }): void => {
  return <div>{`Welcome ${value} in Paradise ${again(3)}`}</div>;
};
console.log("test");
export default Test;
