import React from "react";
import "./Home.css";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";

export default function Home(props) {
  return (
    <>
      <div className='home-container' id={props.id || ""}>
        <Header />
        <Profile />
      </div>
    </>
  );
}
