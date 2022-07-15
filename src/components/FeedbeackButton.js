import React from "react"

const FeedbackButton = ({ onGood, onNeutral, onBad }) => {
return (<div className="feedbackButtons">
<button onClick={onGood}>Good</button>
<button onClick={onNeutral}>Neutral</button>
<button onClick={onBad}>Bad</button>
</div>)}

export default FeedbackButton; 