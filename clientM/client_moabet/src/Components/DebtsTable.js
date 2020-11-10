import React from 'react';
import './Css/DebtsTable.css'


const DebtsTable = (props) => {

    const deleteRow = (sum,to,from) => {
        if(props.user == to || props.user == 'a'){
            props.onDeleteClick(from,to,sum);
            alert('החוב נמחק')
        }
        else{
            alert('רק בעל החוב יכול למחוק את החוב')
        }
    }

    return (
        <div>
            <table className = "table_debts">
                <tr>
                    <th style = {{color:'white'}}>  מחיקה</th>
                    <th style = {{color:'white'}}>  סכום  </th>
                    <th style = {{color:'white'}}>  שם החבר שהוא חייב לו </th>
                    <th style = {{color:'white'}}>  שם החבר החייב </th>
                </tr>
                {
                    props.data.map( objDebt => 
                        <tr>
                            <td style = {{color:'white'}}><button onClick = {() => deleteRow(objDebt.sum,objDebt.userNeedGetDebt,objDebt.userInDebt)} >מחק</button></td>
                            <td style = {{color:'white'}}>{objDebt.sum}</td>
                            <td style = {{color:'white'}}>{objDebt.userNeedGetDebt.replaceAll("_"," ")}</td>
                            <td style = {{color:'white'}}>{objDebt.userInDebt.replaceAll("_"," ")}</td>
                        </tr>
                    )
                }
            </table> 
        </div>
    );
};

export default DebtsTable;