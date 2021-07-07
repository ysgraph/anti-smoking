import dayjs from 'dayjs';

function SavingTimeModule() {

  const start = dayjs('2021-07-06 01:21:22'); // 開始日時の取得
  const now = dayjs(); // 現在日時の取得

  now.diff(start); // .diffで差分を使う宣言
  
  const saveCigarettes: any = now.diff(start, 'minute') / 72

  return (

    <div className="Container">
        <h1>Saving Time</h1>
        <div className="counterWrapper">
            <p className="Text__count">{parseInt(saveCigarettes, 10) *5}</p>
            <p>min.</p>
        </div>
        <p className="caption">{parseInt(saveCigarettes, 10)}&nbsp;cigarettes</p>
    </div>
  );
}

export default SavingTimeModule;
