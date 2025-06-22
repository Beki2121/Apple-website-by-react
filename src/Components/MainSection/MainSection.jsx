import React from 'react'
import Alert from "./Alert/Alert";
import FirstHighlight from "./FirstHighlight/FirstHighlight";
import SecondHighlight from "./SecondHighlight/SecondHighlight";
import ThirdHighlight from "./ThirdHighlight/ThirdHighlight";
import ForthHighlight from "./ForthHighlight/ForthHighlight";
import FifthHighlight from "./FifthHighlight/FifthHighlight";
import SixthHighlight from "./SixthHighlight/SixthHighlight";
import Youtube from './Youtube/Youtube';

function MainSection() {
  return (
    <>
      <Alert />
      <FirstHighlight />
      <SecondHighlight />
      <ThirdHighlight />
      <ForthHighlight />
      <FifthHighlight />
      <SixthHighlight />
      <Youtube />
    </>
  );
}

export default MainSection