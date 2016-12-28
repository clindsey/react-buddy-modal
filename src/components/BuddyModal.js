import React from 'react';
import Portal from 'react-portal';

export default class BuddyModal extends React.Component {
  static propTypes = {
    closeOnEsc: React.PropTypes.bool,
    closeOnOutsideClick: React.PropTypes.bool,
    isOpened: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func
  };

  render () {
    const {
      closeOnEsc,
      isOpened,
      onClose
    } = this.props;
    return (
      <div className="c-buddy-modal">
        <Portal {...{isOpened}}>
          <div className="c-buddy-modal-overlay" />
        </Portal>
        <Portal {...{closeOnEsc, isOpened, onClose}}>
          <Container
              className="c-buddy-modal-wrap"
              {...{onClose}}
          >
            {this.props.children}
          </Container>
        </Portal>
      </div>
    );
  }
}

class Container extends React.Component { // eslint-disable-line react/no-multi-comp
  static propTypes = {
    className: React.PropTypes.string,
    onClose: React.PropTypes.func.isRequired
  };

  render () {
    const {
      className,
      onClose
    } = this.props;
    return (
      <div
          onClick={onClose}
          {...{className}}
      >
        <div
            className="c-buddy-modal-wrap__dialog"
            onClick={event => event.stopPropagation()}
        >
          <div className="c-buddy-modal-wrap__header">
            <h2 className="c-buddy-modal-wrap__title">{'lorem ipsum'}</h2>
            <div className="c-buddy-modal-wrap__actions">
              <button
                  className="c-buddy-modal-wrap__icon-cancel"
                  onClick={() => setTimeout(onClose, 0)}
                  type="button"
              >{'\u2715'}</button>
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
