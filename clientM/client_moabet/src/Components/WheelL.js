import React from 'react';
import WheelLucky from './WheelLucky'
import './Css/WheelL.css'

class WheelL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            friends: []
        }
    }

    handleClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (
            <div className="wl">
                <h1 style = {{color:'white'}}>Choose which frineds to spin on roulette</h1>
                <form>
                    <div id='line1'>
                        <label><input type="radio" name='dvir' onClick={() => this.state.friends.push('dvir_buzaglo')} /> Dvir</label><br />
                        <label><input type="radio" name='orel' onClick={() => this.state.friends.push('orel_kakon')} />Orel </label><br />
                        <label><input type="radio" name='liron' onClick={() => this.state.friends.push('liron_levi')} />Liron </label><br />
                        <label><input type="radio" name='yovel' onClick={() => this.state.friends.push('yovel_elgabsi')} />Yovel </label><br />
                        <label><input type="radio" name='shlomo' onClick={() => this.state.friends.push('shlomo_ben_yair')} />Shlomo </label><br />
                        <label><input type="radio" name='aviel' onClick={() => this.state.friends.push('aviel_hagage')} />Aviel </label><br />
                        <label><input type="radio" name='shimon' onClick={() => this.state.friends.push('shimon_rahamin')} /> Shimon</label><br />
                        <label><input type="radio" name='yitzchak' onClick={() => this.state.friends.push('yitzchak_ben_ezra')} />Yitzchak </label><br />
                        <label><input type="radio" name='itamar' onClick={() => this.state.friends.push('itamar_eliyahu')} />Itamar </label><br />
                        <label><input type="radio" name='lipaz' onClick={() => this.state.friends.push('lipaz_mekonan')} />Lipaz </label><br />
                        <label><input type="radio" name='lior' onClick={() => this.state.friends.push('lior_elbaz')} />Lior </label><br />
                        <label><input type="radio" name='ofir' onClick={() => this.state.friends.push('ofir_saharay')} /> Ofir</label><br />
                        <input className="spin_button" type="button" value="spin" onClick={() => {
                            this.handleClick()
                        }
                        }
                        />
                    </div>
                </form>
                {
                    this.state.showComponent ?
                        <WheelLucky list={this.state.friends} /> :
                        null
                }
                <br/>
            </div>
        );
    };
}

export default WheelL;