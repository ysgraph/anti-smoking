// import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

function SavingMoneyModule() {

  const start = dayjs('2022-06-12 00:30:00'); // 開始日時の取得
  const now = dayjs(); // 現在日時の取得

  const [count, setCount] = useState(0);

  useEffect(() => {
    const countUp = () => {
      setCount(c => c+1);
    }
    setInterval(countUp, 1000);
  }, [] );

  const saveTime: any = now.diff(start, 'minute') / 72 * 27.5
  const saveTimeInt = parseInt(saveTime, 10)

  return (

    <div className="Container">
        <h1>Saving Money</h1>
        <div className="counterWrapper">
            <p className="Text__count">{saveTimeInt.toLocaleString()}</p>
            <p>JPY</p>
        </div>
        <p className="caption">{now.diff(start, 'day')}&nbsp;packs</p>
    </div>
  );
}

export default SavingMoneyModule;
