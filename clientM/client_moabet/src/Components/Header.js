import React from 'react';
import { BrowserRouter as  Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Css/Header.css'

class Header extends React.Component {
    render(){
        return (
            <div className="App2">
                <ul className="ul">
                    <li>
                        <NavLink to="/"  style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/WheelL" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Lucky Wheel</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ChatPage" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Chat</NavLink>
                    </li>
                    <li>
                        <NavLink to="/WallOfShame" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Wall Of Shame</NavLink>
                    </li>
                    <li>
                        <NavLink to="/RelationshipStatus" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Relationship Status</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Gallery" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/AlcoholCalc" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Alcohol Calculator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/DebtsPage" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Debts(חובות)</NavLink>
                    </li>
                    <li>
                        <NavLink to="/BirthdayPage" style ={{textDecoration: 'none', color: 'black'}} activeClassName="nl" exact activeStyle={
                        { color:'red' }
                        }>Birthdays</NavLink>
                    </li>
                </ul>
            </div>
        );
    };
}
export default Header;