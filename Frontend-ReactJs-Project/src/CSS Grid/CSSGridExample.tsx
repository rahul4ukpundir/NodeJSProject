import React from "react";
import "./CSSGridExample.scss";
import img from "../Images/phone-call.png";


class CSSGridExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="gridContainer">
        <div className="gridItems header">
          <div className="flex-container">
            <div className="flex-item item1">Honeywell</div>
            <div className="flex-item item2">8th Oct 2021 - 10th Oct 2021</div>
            <div className="flex-item item3">Dropdown</div>
          </div>
        </div>
        <div className="gridItems">
          <div className="picItem">
            <div className="phoneCall">Phone Call</div>
            <img src={img} width={20} height={20} />
          </div>
          <div className="picItem">
            <div className="phoneCall">Phone Call</div>
            <img src={img} width={20} height={20} />
          </div>
        </div>
        <div className="gridItems">Third Item</div>
        <div className="gridItems">Fourth Item</div>
        <div className="gridItems">Five Item</div>
        <div className="gridItems footer">Six Item</div>
      </div>
    );
  }
}

export default CSSGridExample;
