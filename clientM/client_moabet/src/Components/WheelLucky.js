import React from 'react'
import { Wheel } from 'react-custom-roulette'

var i = 0
const getColor = (num) => {
    i++;
    if (num % 2 == 0) {
        return 'green'
    }
    else
        return 'red'
}

const getNumber = (num) => {
    return (Math.floor(Math.random() * num) + 1)
}

class WheelLucky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.getData(this.props)
    }

    getData = (props) => {
        props.list.map(user =>
                this.state.data.push({ option: user.replaceAll("_", " "), 
                                       style: { backgroundColor: getColor(i), textColor: 'black' } })
        )
    }
    render() {
        return (
                    <div style={{ float: 'right' }}>
                        <Wheel
                            mustStartSpinning={true}
                            prizeNumber={getNumber(this.state.data.length)}
                            data={this.state.data}
                        />
                    </div>
        );
    };
}
export default WheelLucky