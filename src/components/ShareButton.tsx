import twitter from '../image/twitter.svg';
import dayjs from 'dayjs';

function ShareButton() {

    const start = dayjs('2021-07-06 01:21:22'); // 開始日時の取得
    const now = dayjs(); // 現在日時の取得
    const kinensitekara = 'Yudaiが禁煙してから'
    const day = now.diff(start, 'day')
    const niti = '日'
    const hour = now.diff(start, 'hour') - now.diff(start, 'day')*24
    const jikan = '時間'
    const minute = now.diff(start, 'minute') - now.diff(start, 'hour')*60
    const hun = '分'
    const keika = '経過しました'
  
    now.diff(start); // .diffで差分を使う宣言
    
    return (
        <a href={`https://twitter.com/share?text=${kinensitekara + day + niti + hour + jikan + minute + hun + keika}&url=https://ysgraph.github.io/anti-smoking/&via=ysgraph`}>
            <img src={twitter} alt="twitter icon" />
            <p className="button">Tweet My Achievement</p>
        </a>
    );
}

export default ShareButton;
