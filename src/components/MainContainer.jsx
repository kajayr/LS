import { Header } from './Header';
import {Footer} from './Footer';
import {Home} from './Home';
import {Experience} from './Experience'
import {Education} from './Education'
import {Projects} from './Projects';
import { BrowserRouter, Route, Switch} from 'react-router-dom' ;
export const MainContainer = () => {
    return(
<BrowserRouter>
            <div className="container mt-md-5">
                <div className="row">
                    <Header />
                </div>
            </div>
            <Switch>
                <Route exact  path="/" component={Home}></Route>
                <Route exact  path="/experience" component={Experience}></Route>
                <Route exact  path="/projects" component={Projects}></Route>
                <Route exact  path="/education" component={Education}></Route>
            </Switch>
            <div className="container">
                <div className="row mt-1">
                    <Footer />
                </div>
            </div>
            
</BrowserRouter>
    )
}