import React from "react";
import Lottie from "react-lottie";
import animation from "./not-found.json";
import "./notfoundpage-styles.scss";

const NotFound = props => {
  console.log(props);

  const options = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie options={options} height={300} width={300} className='not-found' />
  );
};

export default NotFound;
