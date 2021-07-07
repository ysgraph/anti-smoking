// import React, { useState } from 'react';
import dayjs from 'dayjs';
// import ReactDOM from 'react-dom';

function SavingMoneyModule() {

  const start = dayjs('2021-07-06 01:21:22'); // 開始日時の取得
  const now = dayjs(); // 現在日時の取得

  const saveTime: any = now.diff(start, 'minute') / 72 * 27.5

  return (

    <div className="Container">
        <h1>Saving Money</h1>
        <div className="counterWrapper">
            <p className="Text__count">{parseInt(saveTime, 10)}</p>
            <p>JPY</p>
        </div>
        <p className="caption">{now.diff(start, 'day')}&nbsp;packs</p>
    </div>
  );
}

export default SavingMoneyModule;
