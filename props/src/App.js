import './App.css';
import UserForm from './components/personform'
import MyNewComponent from './components/myNewComponent';
import Socials from './components/social';


const divy = {
  background:'linear-gradient(30deg, #ffd89b, #19547b)',
  border: '2px solid black',
  width: '500px',
  margin: 'auto',
  borderRadius: '25px',
  boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'
};

function App() {
  return (
    <div className="App" style={divy}>
      <UserForm/>
      <MyNewComponent header = {'Whatever I Prop'}>
        <h5>This is a child</h5>
        <p>And so is this !</p>
      </MyNewComponent>
      <Socials/>
    </div>
  );
}

export default App;
