import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import * as styles from './LeaderBoard.module.css';

function getStylesFromIndex(index) {
  return {
    // prettier-ignore
    color: !index
      ? 'rgba(255, 215, 0, 0.8)'
      : index === 1
        ? 'rgba(192, 192, 192, 0.8)'
        : 'rgba(194, 163, 79, 0.8)',
    fontSize: !index ? 'f2 f1-ns' : 'f3 f2-ns',
    order: !index ? 'order-1' : index === 1 ? 'order-0' : 'order-2',
    paddingBottom: !index ? 'pb4 pb5-ns' : index === 1 ? 'pb3 pb4-ns' : 'pb2 pb3-ns',
    paddingTop: !index ? 'pt4 pt5-ns' : index === 1 ? 'pt3 pt4-ns' : 'pt2 pt3-ns',
    // prettier-ignore
    shadowClass: !index
      ? ''
      : index === 1
        ? styles.leaderBoardLeftShadow
        : styles.leaderBoardRightShadow,
    width: !index ? styles.leaderBoardFirst : styles.leaderBoardSecond
  };
}

class LeaderBoard extends PureComponent {
  static propTypes = {
    leaders: PropTypes.arrayOf(
      PropTypes.shape({
        Foto: PropTypes.string.isRequired,
        Nombre: PropTypes.string.isRequired,
        Puntos: PropTypes.number.isRequired
      })
    ).isRequired
  };

  render() {
    const { leaders } = this.props;

    return (
      <div className="mv4 mv5-ns">
        <h2 className="f4 f3-ns mb4 mb5-ns mt0 normal tc">Les mejores</h2>
        <div className="flex justify-center">
          <ul className="b--black-20 bb flex items-end justify-center list ph3 ph4-ns mv0">
            {leaders.map((leader, index) => {
              const {
                color,
                fontSize,
                order,
                paddingBottom,
                paddingTop,
                shadowClass,
                width
              } = getStylesFromIndex(index);

              return (
                <li key={leader.Nombre} className={`${order} ${width}`}>
                  <div className="tc">
                    <LazyLoad height="100%" once={true}>
                      <img
                        src={leader.Foto}
                        alt={leader.Nombre}
                        title={leader.Nombre}
                        className={`br-100 center db ${styles.imageShadow} ${
                          !index ? 'w3 w4-ns' : 'w2 w3-ns'
                        }`}
                      />
                    </LazyLoad>
                    <h3 className="mv2 normal truncate">{leader.Nombre}</h3>
                  </div>
                  <div
                    className={`b--black-20 ${index !== 2 ? 'bl' : ''} ${
                      index !== 1 ? 'br' : ''
                    } bt ${fontSize} overflow-hidden ${paddingBottom} pl2 pr2 ${paddingTop} relative ${shadowClass} tc`}
                    style={{ backgroundColor: color }}
                  >
                    <p className={`b black-70 mv0 ${fontSize}`}>{index + 1}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default LeaderBoard;
