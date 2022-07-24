import React from "react"
import { FeedbackOptionsStyled } from "./FeedbackOptionsStyled";
import PropTypes from "prop-types";

const FeedbackOptions  = ({ onGood, onNeutral, onBad}) => {
return (<div className="feedbackButtons">
<FeedbackOptionsStyled onClick={onGood}>Good</FeedbackOptionsStyled>
<FeedbackOptionsStyled onClick={onNeutral}>Neutral</FeedbackOptionsStyled>
<FeedbackOptionsStyled onClick={onBad}>Bad</FeedbackOptionsStyled>
</div>)}

export default FeedbackOptions ; 

FeedbackOptions.propTypes ={
    onGood: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onBad: PropTypes.func.isRequired
}