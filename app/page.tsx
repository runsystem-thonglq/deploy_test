import React from "react";
import Steps from "rc-steps";
import "rc-steps/assets/index.css";

const { Step } = Steps;
function generateRandomSteps() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push({
      title: `步骤${i + 1}`,
    });
  }
  return arr;
}
const steps = generateRandomSteps();
const Home = () => {
  return (
    <form className="my-step-form">
      <div>这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤</div>
      <div>当前正在执行第{1 + 1}步</div>
      <div className="my-step-container">
        <Steps current={1}>
          {steps.map((s, i) => (
            <Step key={i} title={s.title} />
          ))}
        </Steps>
      </div>
    </form>
  );
};

export default Home;
