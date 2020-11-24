import Popup from 'reactjs-popup';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import '../Style/Burger.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '40px',
};
const contentStyle = {
  background: '#0d0c0c',
  width: '100%',
  border: 'none',
};

function BurgerMenu() {
  return (
    <div style={styles}>
      <Popup
        modal
        overlayStyle={{ background: '#0d0c0c', top: '79px' }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={(open) => <BurgerIcon open={open} />}
      >
        {(close) => <Menu close={close} />}
      </Popup>
    </div>
  );
}

export default BurgerMenu;
