import React from "react";
import { ReactComponent as RightArowComponent } from "../assets/arrow-right.svg";
import { ReactComponent as LeftArowComponent } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin’s unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever in the Next Time",
    img: "lumin-min",
  },
];
const Cases = () => {
  return (
    <div className="cases">
      <div className="container-fluid">
        <div className="controller">
          <div className="arrow prev">
            <LeftArowComponent />
          </div>
          <div className="arrow next">
            <RightArowComponent />
          </div>
        </div>
        <div className="row">
          {caseStudies.map(({ id, subtitle, title, img }) => (
            <div className="case" key={id}>
              <div className="content">
                <p>{subtitle}</p>
                <h2>{title}</h2>
              </div>
              <div className="img">
                <img src={require(`../assets/${img}.png`)} alt="case" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
