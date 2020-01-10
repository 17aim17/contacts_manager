import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const overlay = {
    position: 'absolute', top: '0', left: '0',
    height: '100vh', width: '100vw', background: 'silver', zIndex: '90'
}
const modal = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fafafa',
    width: '600px',
    padding: '20px',
    maxWidth: '100%',
    height: '400px',
    maxHeight: '100%',
    border: '1px solid #000',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '99'
}
class Modal extends Component {

    render() {
        return this.props.isModalVisible ? ReactDOM.createPortal(
            <div style={overlay} onClick={this.props.onDismiss}>
                <div style={modal} onClick={(e) => e.stopPropagation()}>
                    {this.props.children}
                </div>
            </div>,
            document.getElementById('modal')

        ) : ''
    }
}

export default Modal