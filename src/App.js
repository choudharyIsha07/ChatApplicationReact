import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';

const projectID = "777445bf-f893-4def-ab32-cbb2306a29b1"

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <>
        <ChatEngine
              height="100vh"
              projectID={projectID}
              userName={localStorage.getItem('username')}
              userSecret={localStorage.getItem('password')}
              renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            //   onNewMessage={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        /> 

         <LogoutButton />
        </>
    );
}
        
export default App;
