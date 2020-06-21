import React from 'react';

class Square extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
                <div style={{backgroundColor: this.props.color, transform: this.props.transforms}} className='square'></div>
        )
    }
}

export default Square;