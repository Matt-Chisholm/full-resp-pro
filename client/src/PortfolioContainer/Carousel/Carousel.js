import React from "react";
import { Carousel } from "react-carousel3";

const style = {
  width: 800,
  height: 800,
};

export default () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}>
    <Carousel height={460} width={600} autoPlay={true}>
      <div key={1} style={style}>
        <img alt='' src='https://img.icons8.com/clouds/200/000000/react.png' />
      </div>
      <div key={2} style={style}>
        <img
          alt=''
          src='https://img.icons8.com/fluency/200/000000/html-5.png'
        />
      </div>
      <div key={3} style={style}>
        <img src='https://img.icons8.com/offices/100/000000/sql.png' alt='' />
      </div>
      <div key={4} style={style}>
        <img
          alt=''
          src='https://img.icons8.com/fluency/200/000000/typescript--v1.png'
        />
      </div>
      <div key={5} style={style}>
        <img
          alt=''
          src='https://img.icons8.com/fluency/200/000000/javascript.png'
        />
      </div>
      <div key={6} style={style}>
        <img alt='' src='https://img.icons8.com/color/200/000000/nodejs.png' />
      </div>
    </Carousel>
  </div>
);
