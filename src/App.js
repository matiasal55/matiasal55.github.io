import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import WorkInfo from './pages/WorkInfo';

function App() {
    return (
        <BrowserRouter>
            <Main>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/works' component={Works} />
                    <Route exact path='/works/:page' component={WorkInfo} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Main>
        </BrowserRouter>
    );
}

export default App;
