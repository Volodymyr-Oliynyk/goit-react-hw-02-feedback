import React from "react"
import { FeedbackOptionsStyled } from "./FeedbackOptionsStyled";


const FeedbackOptions  = ({ onGood, onNeutral, onBad}) => {
return (<div className="feedbackButtons">
<FeedbackOptionsStyled onClick={onGood}>Good</FeedbackOptionsStyled>
<FeedbackOptionsStyled onClick={onNeutral}>Neutral</FeedbackOptionsStyled>
<FeedbackOptionsStyled onClick={onBad}>Bad</FeedbackOptionsStyled>
</div>)}

export default FeedbackOptions ; 

