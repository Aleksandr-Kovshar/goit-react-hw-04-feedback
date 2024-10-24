import React, { Component, useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

const Feedback = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [stateFeedback, setStateFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // handleAddFeedback = (option) => {
  //   console.log(option);

  //   this.setState((prevState) => ({
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  const handleAddFeedback = (e) => {
    console.log(e);

    setStateFeedback((prevState) => ({ ...prevState, [e]: prevState[e] + 1 }));
        

    // this.setState((prevState) => ({
    //   [option]: prevState[option] + 1,
    // }));
  };

  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const totalFeedback = countTotalFeedback({ good, neutral, bad });
    return totalFeedback === 0
      ? 0
      : Math.round(((good + neutral) / totalFeedback) * 100);
  };

  const options = Object.keys(stateFeedback);
  // const options = Object.keys(this.state);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleAddFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={stateFeedback.good}
          neutral={stateFeedback.neutral}
          bad={stateFeedback.bad}
          total={countTotalFeedback(stateFeedback)}
          positivePercentage={countPositiveFeedbackPercentage(
            stateFeedback
          )}
        />
      </Section>
    </>
  );
};

export default Feedback;
