import { useState, useEffect } from 'react'
import Description from './description/Description.jsx';
import Options from './options/Options.jsx'
import Feedback from './feedback/Feedback.jsx'
import Notification from './notification/Notification.jsx'
import './App.css'

export default function App () {
  const [rating, setRating] = useState (() => {
    const savedRating = window.localStorage.getItem("saved-rating");
    return savedRating ? JSON.parse(savedRating) : {
      good: 0,
      neutral: 0,
      bad: 0
    }
  })
  
  
  
  /*({
    good: 0,
    neutral: 0,
    bad: 0
  }  => {
    const savedRating = window.localStorage.getItem("saved-rating");
    if (savedRating !== null) {
      return JSON.parse(savedRating);
    }
    return {};
  }
  );*/
  useEffect(() => {
    window.localStorage.setItem("saved-rating", JSON.stringify(rating));
  }, [rating]);
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
  const positiveFeedback = Math.round((rating.good / totalFeedback) * 100)


  return (
    <div className='divA'>
      <Description/>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback > 0 ?  <Feedback feedback={rating} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> : <Notification/>}
    </div>
  )
}
