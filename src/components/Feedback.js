// import React, { Component } from 'react';
// import FeedbackOptions  from './FeedbackOptions';
// import Section from './Section';
// import Statistics from './Statistics ';

// class Feedback extends Component {
//   static defaultProps = {
//     initialValueGood: 0,
//     initialValueNeutral: 0,
//     initialValueBad: 0,
//   };

//   state = {
//     good: this.props.initialValueGood,
//     neutral: this.props.initialValueNeutral,
//     bad: this.props.initialValueBad,
//   };

//   handleGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   handleNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   handleBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage() {
//     return (this.state.good / this.countTotalFeedback()) * 100;
//   }

//   render() {
//     return (
//       <div className="FeedbeackForm">
//         <h1>Pleas leave feedback</h1>
//         <FeedbackOptions 
//           onGood={this.handleGood}
//           onNeutral={this.handleNeutral}
//           onBad={this.handleBad}
//         />

//         <Section>
        
// <Statistics
//   good={this.state.good}
//   neutral={this.state.neutral}
//   bad={this.state.bad}
//   total={this.countTotalFeedback()}
//   positivePercentage={this.countPositiveFeedbackPercentage()}
// />
//         </Section>
        
//       </div>
//     );
//   }
// }

// export default Feedback;
