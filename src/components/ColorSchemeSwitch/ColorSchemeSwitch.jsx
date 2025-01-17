import clsx from 'clsx';
import css from './ColorSchemeSwitch.module.css';

const ColorSchemeSwitch = ({ isDarkScheme, toggleColorScheme }) => {
  return (
    <button
      className={clsx(css.btn, css.toggle, {
        [css.isDarkScheme]: isDarkScheme,
      })}
      onClick={toggleColorScheme}
    >
      <div className={clsx(css.toggle, { [css.isDarkScheme]: isDarkScheme })}>
        {isDarkScheme ? '☀' : '☾'}{' '}
      </div>
    </button>
  );
};

export default ColorSchemeSwitch;
