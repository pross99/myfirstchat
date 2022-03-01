import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => {
   if(!localStorage.getItem('username')) return <LoginForm /> 

    return(
        <ChatEngine

        height="100vh"
        projectID="4e9a04eb-8c47-438d-9c6e-1f830021e4c5"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );

}

export default App;