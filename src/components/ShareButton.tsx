import twitter from '../image/twitter.svg';
import dayjs from 'dayjs';

function ShareButton() {

    const start = dayjs('2021-07-06 01:21:22'); // 開始日時の取得
    const now = dayjs(); // 現在日時の取得
    const genzai = '現在、Yudaiは禁煙してから'
    const nitime = '日目です'
  
    now.diff(start); // .diffで差分を使う宣言
    
    return (
        <a href={`https://twitter.com/share?text=${genzai + now.diff(start, 'day') +nitime}&url=https://ysgraph.github.io/anti-smoking/&via=ysgraph`}>
            <img src={twitter} alt="twitter icon" />
            <p className="button">Tweet My Achievement</p>
        </a>
    );
}

export default ShareButton;
