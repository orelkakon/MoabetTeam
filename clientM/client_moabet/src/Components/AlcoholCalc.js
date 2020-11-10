import React from 'react';
import './Css/AlcoholCalc.css';

class AlcoholCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponentTime: false,
            showComponentDrinks: false,
            showComponentResult: false,
            showComponentStart: true,
            time: '',
            friends: [],
            drinks: []
        }
    }

    alcRank = new Map(
        [
            ['orel_kakon', 0.55],
            ['shimon_rahamim', 0.45],
            ['yovel_elgabsi', 0.45],
            ['dvir_buzaglo', 0.55],
            ['lipaz_mekonan', 0.55],
            ['itamar_eliyahu', 0.6],
            ['lior_elbaz', 0.45],
            ['liron_levi', 0.2],
            ['ofir_saharay', 0.3],
            ['yitzchak_ben_ezra', 0.15],
            ['shlomo_ben_yair', 0.35],
            ['aviel_hagage', 0.2]
        ]
    )

    calculateResult() {
        let sumV = 0;
        let sumA = 0;
        let sumW = 0;
        if (this.state.drinks.includes('vodka') && this.state.drinks.length == 1)
            this.state.friends.map(friend => sumV += this.alcRank.get(friend));
        else if (this.state.drinks.includes('vodka') && this.state.drinks.includes('arak') && this.state.drinks.length == 2) {
            this.state.friends.map(friend => sumV += this.alcRank.get(friend));
            sumV = sumV * 0.7
            this.state.friends.map(friend => sumA += this.alcRank.get(friend));
            sumA = sumA * 0.3
        }
        else if (this.state.drinks.includes('whisky') && this.state.drinks.length == 1) {
            sumW = this.state.friends.length / 2.5
        }
        else if (this.state.drinks.includes('arak') && this.state.drinks.length == 1) {
            sumA = this.state.friends.length / 2
        }
        else if (this.state.drinks.includes('vodka') && this.state.drinks.includes('whisky') && this.state.drinks.length == 2) {
            this.state.friends.map(friend => sumV += this.alcRank.get(friend));
            sumV = sumV * 0.65
            this.state.friends.map(friend => sumW += this.alcRank.get(friend));
            sumW = sumW * 0.35
        }
        else if (this.state.drinks.includes('arak') && this.state.drinks.includes('whisky') && this.state.drinks.length == 2) {
            this.state.friends.map(friend => sumA += this.alcRank.get(friend));
            sumA = sumA * 0.5
            this.state.friends.map(friend => sumW += this.alcRank.get(friend));
            sumW = sumW * 0.5
        }
        else { // trio
            if (this.state.friends.length !== 0) {
                this.state.friends.map(friend => sumV += this.alcRank.get(friend));
                sumW = sumV * 0.2
                sumA = sumV * 0.3
                sumV = sumV * 0.5
            }
        }
        if (this.state.time == 'day') {
            sumW = sumW * 0.9
            sumA = sumA * 1
            sumV = sumV * 1.05
        }
        let res = [sumV, sumA, sumW]
        return res;
    }

    sumA() {
        let x = this.calculateResult();
        return x[1];
    }
    sumV() {
        let x = this.calculateResult();
        return x[0];
    }
    sumW() {
        let x = this.calculateResult();
        return x[2];
    }

    handleClicktTime() {
        this.setState({
            showComponentDrinks: false,
            showComponentTime: true,
        });
    }
    handleClickDrinks() {
        this.setState({
            showComponentStart: false,
            showComponentDrinks: true
        });
    }
    handleClicktResult() {
        this.setState({
            showComponentTime: false,
            showComponentResult: true,
        });
    }
    handleClick(input) {
        if (this.state.drinks.includes(input)) { //delete
            var arr = [...this.state.drinks]
            var i = arr.indexOf(input)
            arr.splice(i, 1)
            this.setState({
                drinks: arr
            });
        }
        else { //add
            this.setState({
                drinks: [...this.state.drinks, input]
            });
        }
    }
    handleClickFriends(input) {
        if (this.state.friends.includes(input)) { //delete
            var arr = [...this.state.friends]
            var i = arr.indexOf(input)
            arr.splice(i, 1)
            this.setState({
                friends: arr
            });
        }
        else { //add
            this.setState({
                friends: [...this.state.friends, input]
            });
        }
    }
    render() {
        return (
            <div className = "AC">
                <h2 style = {{color:'white'}}>Each calculation should re-enter the page</h2>
                {this.state.showComponentStart &&
                    <form>
                        <h1 style = {{color:'white'}}>Choose which frineds will drink tonight!</h1>
                        <div id='line'>
                            <label><input type="checkbox" name='dvir' onClick={() => this.handleClickFriends('dvir_buzaglo')} />Dvir  </label><br />
                            <label><input type="checkbox" name='orel' onClick={() => this.handleClickFriends('orel_kakon')} />Orel  </label><br />
                            <label><input type="checkbox" name='liron' onClick={() => this.handleClickFriends('liron_levi')} />Liron  </label><br />
                        </div>
                        <div id='line2'>
                            <label><input type="checkbox" name='yovel' onClick={() => this.handleClickFriends('yovel_elgabsi')} />Yovel  </label><br />
                            <label><input type="checkbox" name='shlomo' onClick={() => this.handleClickFriends('shlomo_ben_yair')} />Shlomo  </label><br />
                            <label><input type="checkbox" name='aviel' onClick={() => this.handleClickFriends('aviel_hagage')} />Aviel  </label><br />
                        </div>
                        <div id='line3'>
                            <label><input type="checkbox" name='shimon' onClick={() => this.handleClickFriends('shimon_rahamim')} />Shimon  </label><br />
                            <label><input type="checkbox" name='ofir' onClick={() => this.handleClickFriends('ofir_saharay')} />Ofir </label><br />
                            <label><input type="checkbox" name='itamar' onClick={() => this.handleClickFriends('itamar_eliyahu')} />Itamar  </label><br />
                        </div>
                        <div id='line4'>
                            <label><input type="checkbox" name='lipaz' onClick={() => this.handleClickFriends('lipaz_mekonan')} />Lipaz  </label><br />
                            <label><input type="checkbox" name='lior' onClick={() => this.handleClickFriends('lior_elbaz')} />Lior  </label><br />
                            <label><input type="checkbox" name='yitzchak' onClick={() => this.handleClickFriends('yitzchak_ben_ezra')} />Yitzchak </label><br />
                        </div>
                        <input className="drinksPeople" type="button" value="Continue" onClick={() => {
                            this.handleClickDrinks()
                        }
                        }
                        />
                    </form>
                }
                {
                    this.state.showComponentDrinks &&
                    <form>
                        <h3 style = {{color:'white'}}>Choose which drinks you will drinks tonight!</h3>
                        <label><input type="checkbox" name='vodka' onClick={() => this.handleClick('vodka')} />Vodka </label><br />
                        <label><input type="checkbox" name='arak' onClick={() => this.handleClick('arak')} />Arak  </label><br />
                        <label><input type="checkbox" name='whisky' onClick={() => this.handleClick('whisky')} />Whisky </label><br />
                        <input className="drinks" type="button" value="Continue" onClick={() => {
                            this.handleClicktTime()
                        }
                        }
                        />
                    </form>
                }
                {
                    this.state.showComponentTime &&
                    <form>
                        <h3 style = {{color:'white'}}>Choose when you will drinks</h3>
                        <label><input type="checkbox" name='day' onClick={() => this.setState({ time: 'day' })} />Day </label><br />
                        <label><input type="checkbox" name='night' onClick={() => this.setState({ time: 'night' })} />Night  </label><br />
                        <input className="time" type="button" value="Get Result" onClick={() => {
                            this.handleClicktResult()
                        }
                        }
                        />
                    </form>
                }
                {
                    this.state.showComponentResult &&
                    <div>
                        <p>{"Vodka:" + this.sumV() + "L   " + "Arak:" + this.sumA() + "L   " + "Whisky:" + this.sumW() + "L"}</p>
                        <p style = {{color:'white'}}>"אם יצא לא עגול ? תעגל למעלה גבר אנחנו צוות מועבט תמיד צריך עוד"</p>
                    </div>
                }
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </div>

        );
    };
}
export default AlcoholCalc;