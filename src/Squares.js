import React from 'react';
import Square from './Square'

class Squares extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        // console.log(this.props)
        const squares = this.props.colors.map((color,index) => { 
            return <Square key={index} color={color} transforms={this.props.transforms} />
        })

        return (
            <div className='flex-container'>
                {squares}
            </div>
        )
    }
}

export default Squares