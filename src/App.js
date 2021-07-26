import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Index from './pages/Index';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter>
            <Main>
                <Switch>
                    <Route path='/' component={Index} />
                    <Route path='/about' component={About} />
                </Switch>
            </Main>
        </BrowserRouter>
    );
}

export default App;
