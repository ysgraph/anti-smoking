// import React, { useState } from 'react';
import dayjs from 'dayjs';
// import ReactDOM from 'react-dom';

function ElapsedTimeModule() {

  const start = dayjs('2020-12-04 14:48:00'); // 開始日時の取得
  const now = dayjs(); // 現在日時の取得

  now.diff(start); // .diffで差分を使う宣言
  
  // console.log(now.diff(start, 'day')); // 日の差分
  // console.log(now.diff(start, 'hour')); // 時間の差分
  // console.log(now.diff(start, 'minute')); // 分の差分

  // console.log(now.diff(start, 'day')); // 日の差分
  // console.log(now.diff(start, 'hour') - now.diff(start, 'day')*24); // 時間経過
  // console.log(now.diff(start, 'minute') - now.diff(start, 'hour')*60); // 分経過
  // console.log(now.diff(start, 'second') - now.diff(start, 'minute')*60); // 秒経過

  // const [day, setDay] = useState("")
  // const [hour, setHour] = useState("")
  // const [minute, setMinute] = useState("")
  // const [second, setSecond] = useState(now.diff(start, 'second') - now.diff(start, 'minute')*60)

  return (

    <div className="ElapsedTimeModule">
        <h1>Elapsed Time</h1>
        <div className="counterWrapper">
            <p className="Text__count">{now.diff(start, 'day')}</p>
            <p>
                Days + 
                {now.diff(start, 'hour') - now.diff(start, 'day')*24}
                :
                {now.diff(start, 'minute') - now.diff(start, 'hour')*60}
                {/* :
                {now.diff(start, 'second') - now.diff(start, 'minute')*60} */}
            </p>
        </div>
    </div>
  );
}

export default ElapsedTimeModule;
