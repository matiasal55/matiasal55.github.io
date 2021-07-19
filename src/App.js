import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Index from './pages/Index';

function App() {
    return (
        <BrowserRouter>
            <Main>
                <Switch>
                    <Route path='/' component={Index} />
                </Switch>
            </Main>
        </BrowserRouter>
    );
}

export default App;
