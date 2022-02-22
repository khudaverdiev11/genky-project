import Contact from './Contact';
import Subscribe from './Subscribe';
import './SignIn'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import Authors from './Authors';
import Tags from './Tags';
import Footer from './Footer';
import Membership from './Membership'
import Lifestyle from './Lifestyle';
const App = () => {
  return (
    <div>
    {/* <Subscribe/> */}
    {/* <Contact/> */}
    {/* <SignIn/> */}
    {/* <SignUp/> */}
    {/* <Navbar/> */}
    <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route path="/Subscribe" component={Subscribe}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route path="/Authors" component={Authors}></Route>
        <Route path="/Tags" component={Tags}></Route>
        <Route path="/Membership" component={Membership}></Route>
        <Route path="/Lifestyle" component={Lifestyle}></Route>
        <Footer />
    </BrowserRouter> 
    </div>
  );
}

export default App;