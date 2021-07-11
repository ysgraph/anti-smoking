import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

function SavingTimeModule() {

  // const start = dayjs('2021-07-06 01:21:22'); // 開始日時の取得
  const start = dayjs();
  const now = dayjs(); // 現在日時の取得

  const [count, setCount] = useState(0);

  useEffect(() => {
    const countUp = () => {
      setCount(c => c+1);
    }
    setInterval(countUp, 1000);
  }, [] );
  
  const saveCigarettes: any = now.diff(start, 'minute') / 72
  const saveTimeInt = parseInt(saveCigarettes, 10) *5

  return (

    <div className="Container">
        <h1>Saving Time</h1>
        <div className="counterWrapper">
            <p className="Text__count">{saveTimeInt.toLocaleString()}</p>
            <p>min.</p>
        </div>
        <p className="caption">{parseInt(saveCigarettes, 10)}&nbsp;cigarettes</p>
    </div>
  );
}

export default SavingTimeModule;
