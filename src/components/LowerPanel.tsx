import React from 'react';

const LowerPanel = ({ user }: any) => {
  return (
    <div className="lower-panel-container">
      <ul>
        <li className="int-headers" key="headers">
          <div className="int-date">Date</div>
          <div className="int-type">Category</div>
          <div className="int-sentiment">Sentiment</div>
          <div className="int-notes">Information</div>
        </li>
        {user.previousInteractions.map((int: any) => (
          <li key={`${int.date}-${int.type}-${int.sentiment}`}>
            <div className="int-date">{int.date}</div>
            <div className="int-type">{int.type}</div>
            <div className="int-sentiment">{int.sentiment}</div>
            <div className="int-notes">{int.notes}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowerPanel;
