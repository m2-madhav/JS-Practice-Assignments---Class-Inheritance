// declare class

// export class using module.exports
import React from "react";

class Shape extends React.Component {
  //color = "red";

  constructor(props) {
    super(props);
    this.color = "red";
  }
  drawShape = function () {};
  calculateArea = function () {};
}

module.exports = Shape;
