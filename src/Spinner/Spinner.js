import timer from './timer.svg';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Spinner extends PureComponent {
  render() {
    const { message } = this.props;

    return (
      <div className="flex flex-column items-center justify-center pv4 pv5-ns">
        <h2 className="f4 f3-ns mb3 mt0 normal tc">{message}</h2>
        <img src={timer} alt="Lesión" className={'h3 h4-ns w3 w4-ns'} />
      </div>
    );
  }
}

Spinner.defaultProps = {
  message: 'Cargando...'
};

Spinner.propTypes = {
  message: PropTypes.string
};

export default Spinner;