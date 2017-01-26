import React from 'react';
import classNames from 'classnames';

export default class BuddyModal extends React.Component {
  static propTypes = {
    closeOnEsc: React.PropTypes.bool,
    closeOnOutsideClick: React.PropTypes.bool,
    isOpened: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func,
    title: React.PropTypes.string.isRequired
  };

  render () {
    const {
      isOpened,
      onClose,
      title
    } = this.props;
    const className = classNames({
      'c-buddy-modal': true,
      'c-buddy-modal--is-opened': isOpened
    });
    return (
      <div {...{className}}>
        <div className="c-buddy-modal-overlay" />
        <Container
            className="c-buddy-modal-wrap"
            {...{onClose, title}}
        >
          {this.props.children}
        </Container>
      </div>
    );
  }
}

class Container extends React.Component { // eslint-disable-line react/no-multi-comp
  static propTypes = {
    className: React.PropTypes.string,
    onClose: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired
  };

  render () {
    const {
      className,
      onClose,
      title
    } = this.props;
    return (
      <div
          onClick={onClose}
          {...{className}}
      >
        <div
            className="c-buddy-modal-dialog"
            onClick={event => event.stopPropagation()}
        >
          <div className="c-buddy-modal-dialog__header">
            {title && (<h2 className="c-buddy-modal-dialog__title">{title}</h2>)}
            <div className="c-buddy-modal-dialog__actions">
              <button
                  className="c-buddy-modal-dialog__icon-cancel"
                  onClick={() => setTimeout(onClose, 0)}
                  type="button"
              >{'\u2715'}</button>
            </div>
          </div>
          <div className="c-buddy-modal-dialog__body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
