import clsx from 'clsx';
import css from './ColorSchemeSwitch.module.css';

const ColorSchemeSwitch = ({ isDarkScheme, toggleColorScheme }) => {
  return (
    <button className={clsx(css.btn, css.toggle)} onClick={toggleColorScheme}>
      {isDarkScheme ? <span>@</span> : <span>*</span>}
    </button>
  );
};

export default ColorSchemeSwitch;
