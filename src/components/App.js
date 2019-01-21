import React from 'react'
import { Switch,Route } from 'react-router-dom'
import ListPage from '../pages/ListPage';
import PostPage from '../pages/Postpage';
import EditorPage from '../pages/EditorPage';
import NotFoundPage from '../pages/NotFoundPage';


const App = () => {
    return(
        <div>
        <Switch>
            <Route exact path ='/' component={ListPage}/>
            <Route path ='/page/:page' component={ListPage}/>
            <Route path ='/tag/:tag/:page?' component={ListPage}/>
            <Route path ='/post/:id' component={PostPage}/>
            <Route path ='/editor' component={EditorPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    )
}

export default App