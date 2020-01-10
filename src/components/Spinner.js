import React from 'react'

const Spinner = () => {
    const styles = {
        backgroundColor: 'orange',
        height: '40px',
        width: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '20px',
        left: '50%'
    }

    return (
        <div style={styles}>
            Loading
        </div>
    )

}
export default Spinner

