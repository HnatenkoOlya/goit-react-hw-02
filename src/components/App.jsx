import { useState } from 'react'
import Description from './description/Description.jsx';
import Options from './options/Options.jsx'
import Feedback from './feedback/Feedback.jsx'
import Notification from './notification/Notification.jsx'
import './App.css'

export default function App () {
  const [rating, setRating]=useState({
    good: 0,
    neutral: 0,
    bad: 0
  }
  )
  const updateFeedback = (feedbackType) => {
    setRating(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
    };
    const resetFeedback = () => {
      setRating({
        good: 0,
        neutral: 0,
        bad: 0
      }
      );
    };
  const totalFeedback = rating.good + rating.neutral + rating.bad

  return (
    <div>
      <Description/>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback > 0 ?  <Feedback feedback={rating}/> : <Notification/>}
    </div>
  )
}
