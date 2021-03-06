import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  static propTypes = {
    currentTheme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired
  };

  render() {
    const { currentTheme, changeTheme } = this.props;

    return (
      <div className="b--black-20 bt bg-white-80 pa3">
        <div className="center mw8">
          <div className="flex flex-column flex-row-l justify-between-l">
            <div className="flex flex-wrap items-center justify-center">
              <span className="b tc tl-ns w-100 w-auto-ns">Apariencia:</span>
              <a
                href="#!"
                className={`color-inherit ml2 pa0 ${currentTheme !== 'theme-yellow' &&
                  'no-underline'}`}
                onClick={(event) => changeTheme(event, 'theme-yellow')}
              >
                Amarillito
              </a>
              <span className="ml2">|</span>
              <a
                href="#!"
                className={`color-inherit ml2 pa0 ${currentTheme !== 'theme-blue' &&
                  'no-underline'}`}
                onClick={(event) => changeTheme(event, 'theme-blue')}
              >
                Azulcito
              </a>
              <span className="ml2">|</span>
              <a
                href="#!"
                className={`color-inherit ml2 pa0 ${currentTheme !== 'theme-green' &&
                  'no-underline'}`}
                onClick={(event) => changeTheme(event, 'theme-green')}
              >
                Verdecito
              </a>
            </div>
            <p className="flex items-center justify-center mb0 mt3 mt0-l">
              <span className="b mr2">Version:</span>
              <span>{process.env.REACT_APP_VERSION}</span>
              <span className="mh2">|</span>
              <a
                href="https://github.com/durancristhian/futbol"
                target="_blank"
                className="color-inherit no-underline"
                rel="noopener noreferrer"
                title="Ver en GitHub"
              >
                Código fuente
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
