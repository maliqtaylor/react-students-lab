import React from 'react';
import Scores from './Scores'

const Students = (props) => {
  return (
    <div className='Student'>
      {props.students.map((s, idx) =>
        <p key={idx}>
          {s.name} {s.bio}
          <Scores scores={s.scores} />
        </p>
      )}
    </div>
  )
}
export default Students