import cigarette from '../image/cigarette.svg';

function Header() {
    return (
      <div className="Header">
        <header>
            <p>anti-smoking</p>
            <img src={cigarette} alt="cigarette icon" />
        </header>
      </div>
    );
}
  
export default Header;
  