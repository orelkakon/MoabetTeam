import React, { Component } from 'react';
import CreateMessage from './CreateMessage';
import Messages from './Messages';
import socketIOClient from 'socket.io-client';
import './Css/ChatPage.css'

var socket = null;

class ChatPage extends Component {
    constructor(props) {
        super();

        this.state = {
            username: '',
            messages: []
        }

        if (socket === null) {
            socket = socketIOClient('http://localhost:4001');
        }

        socket.on('SET_USERNAME', (username) => {
            this.setState({
                username: props.user
            });
        });

        socket.on('CREATE_MESSAGE', (messageObject) => {
            this.setState({
                messages: [...this.state.messages, messageObject]
            });
        });

    }
    render() {
        return (
            <div>
                <h1 style={{ color: 'white' }}>Real Time Chat </h1>
                <div className="chat">
                    <Messages messages={this.state.messages} username={this.props.user} />
                    <CreateMessage handlerCreateMessage={this.handlerCreateMessage} />
                    <br /> <br />
                </div>
            </div>
        );
    }
    handlerCreateMessage = (message) => {
        message.user = this.props.user;
        socket.emit('SEND_MESSAGE', message);
    }
}

export default ChatPage;