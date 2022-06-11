// import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

function ElapsedTimeModule() {

  const start = dayjs('2022-06-12 00:30:00'); // 開始日時の取得
  const now = dayjs(); // 現在日時の取得

  const [count, setCount] = useState(0);

  useEffect(() => {
    const countUp = () => {
      setCount(c => c+1);
    }
    setInterval(countUp, 1000);
  }, [] );

  return (

    <div className="Container">
        <h1>Elapsed Time</h1>
        <div className="counterWrapper">
            <p className="Text__count">{now.diff(start, 'day')}</p>
            <p>
                Days&nbsp;+&nbsp;
                {String(now.diff(start, 'hour') - now.diff(start, 'day')*24).padStart(2, '0')}
                :
                {String(now.diff(start, 'minute') - now.diff(start, 'hour')*60).padStart(2, '0')}
                :
                {String(now.diff(start, 'second') - now.diff(start, 'minute')*60).padStart(2, '0')}
            </p>
            {/* <p>{count}</p> */}
        </div>
    </div>
  );
}

export default ElapsedTimeModule;
