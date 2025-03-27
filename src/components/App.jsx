import { useState } from 'react'
import Description from './description/Description.jsx';
import Options from './options/Options.jsx'
import Feedback from './feedback/Feedback.jsx'
import './App.css'

export default function App () {
  const [rating, setRating]=useState({
    good: 0,
    neutral: 0,
    bad: 0
  }
  )
  return (
    <div>
      <Description/>
      <Options option={setRating}/>
      <Feedback feedback={rating}/>
    </div>
  )
}
