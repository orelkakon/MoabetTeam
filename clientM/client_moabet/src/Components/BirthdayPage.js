import React from 'react';
import CardList from './CardList'
import './Css/BirthdayPage.css'

const BirthdayPage = (props) => {
    return (
        <div className="bd">
            <h1 style = {{color:'white'}}>Birthday Dates of Moabet Team:</h1>
            <div>
                <CardList data= {props.data}/>
            </div>
        </div>
    );
};

export default BirthdayPage;