import React from 'react';
import DebtsTable from './DebtsTable';


class DebtsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            debts: [],
            from: '',
            to: '',
            sum: 0
        }
        this.getDebts()
    }

    checkIfExists(someone, others) {
        for (var i = 0; i < others.length; i++) {
          if (others[i].user === someone) {
            return true;
          }
        }
        return false;
      }
    checkIfCanAdd(user,others){
        if(this.state.to === this.state.from){
            alert('חייב לעצמך ? לא הגיוני')
            return false;
        }
        else if(user !== this.state.from && user !== this.state.to ){
            alert('אתה חייב להיות אחד מן השניים');
            return false;
        }
        else if(this.checkIfExists(this.state.to,others) && this.checkIfExists(this.state.from,others) ){
            alert('חוב חדש נוסף')
            return true;
        }
        else{
            alert('לא קיים האדם שאתה חייב לו או חייב לך')
            return false;
        }
    }

    onDeleteClick = (from,to,sum) => {
        fetch(`http://localhost:3001/deleteDebt/${from}/${to}/${sum}`, {
            method: 'DELETE',
        })
        .then(() => this.getDebts())
    }

    getDebts = () => {
        fetch(`http://localhost:3001/getdebts`)
            .then(response => response.json())
            .then(response => this.setState({debts : response}))
    }

    addNewDebt = (from,to,sum) => {
        fetch('http://localhost:3001/addDebt?from='+from+'&to='+to+'&sum='+sum)
    }

    render() {
        return (
            <div className="bd" style={{ width: '100%',  minHeight: '444px', height: '100%' }}>
                <h1 dir='rtl' style = {{color:'white'}}>דף חובות:</h1>
                <input type='text' placeholder='הכנס את החייב....' dir='rtl' onChange={e => this.setState({ from: e.target.value })}></input>
                <br />
                <input type='text' placeholder='הכנס למי חייב...' dir='rtl' onChange={e => this.setState({ to: e.target.value })}></input>
                <br />
                <input type='text' placeholder='הכנס סכום...' dir='rtl' onChange={e => this.setState({ sum: e.target.value })}></input>
                <br />
                <p style ={{color: 'white', fontSize: '12px'}} 
                dir="rtl">*שימו לב חייב לרשום שמות משתמש מלאים למשל orel_kakon* </p>
                <input type='button'
                    value='הוסף חוב'
                    disabled={this.state.from === '' || this.state.to === '' | this.state.sum == 0}
                    onClick={() => {
                        if (this.checkIfCanAdd(this.props.user, this.props.others)) {
                            this.addNewDebt(this.state.from,this.state.to,this.state.sum);
                            this.getDebts();
                        }
                    }

                    }
                />
                <br/>
                <DebtsTable data = {this.state.debts} user = {this.props.user} onDeleteClick = {this.onDeleteClick}/>
                <br/>
            </div>
        );
    };
}
export default DebtsPage;