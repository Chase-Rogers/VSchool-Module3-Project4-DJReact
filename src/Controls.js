import React from 'react';

class Controls extends React.Component {
    constructor() {
        super()
        this.state = {
            click: [this.click1, this.click2, this.click3, this.click4, this.click5, this.click6, this.click7, this.click8]
        }
    }

    playAudio = () => {
        document.getElementById('myAudio').play();
    }

    click1 = () => {
        this.playAudio();
        this.props.colors[0] === 'white'? this.props.changeColors(["black", "black", "black", "black"]) : this.props.changeColors(["white", "white", "white", "white"])
    }
    click2 = () => {
        this.playAudio();
        this.props.changeColors(["purple", "purple", this.props.colors[2], this.props.colors[3]])
    }
    click3 = () => {
        this.playAudio();
        this.props.changeColors([this.props.colors[0], this.props.colors[1], 'blue', this.props.colors[3]])
    }
    click4 = () => {
        this.playAudio();
        this.props.changeColors([this.props.colors[0], this.props.colors[1], this.props.colors[2], 'blue'])
    }
    click5 = () => {
        this.playAudio();
        this.props.transforms === 'none'? this.props.transform('rotate(45deg)') : this.props.transform('none')
        
    }

    click6 = () => {
        this.playAudio();
        this.props.changeColors(['orange', this.props.colors[1], this.props.colors[2], 'orange'])
    }
    click7 = () => {
        this.playAudio();
        this.props.changeColors([this.props.colors[0], 'red', 'red', this.props.colors[3]])
    }
    click8 = () => {
        this.playAudio();
        this.props.changeColors(['green', 'gray', 'gray', 'green'])
    }
    render() {

        const buttons = this.state.click.map((click,index) => { 
            return <button key={index} onClick={click}>{'Button' + (index + 1)}</button>
        })

        return (
            <div className='flex-container'>
                {buttons}
                <audio id="myAudio">
                    <source src='./2019-01-15_-_You_Just_Got_Pwned_-_David_Fesliyan (1).mp3' type="audio/mpeg"/>
                </audio>
            </div>
            
        )
    }
}


export default Controls;