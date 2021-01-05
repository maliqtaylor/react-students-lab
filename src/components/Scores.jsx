import React from 'react';

const Scores = (props) => {
  return (
    <div>
      {props.scores.map((s, idx) =>
        <div key={idx}>
          <p key={idx}>
            Date: {s.date} Score: {s.score}
          </p>
        </div>
      )}
    </div>
  )
}
export default Scores