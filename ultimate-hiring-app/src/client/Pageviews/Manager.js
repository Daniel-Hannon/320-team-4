import React, {Component} from 'react';
import JobPosting from '../Components/JobPosting';
import ManagerView from './Pageviews/ManagerView';
class App extends Component {
    render() {
        return (
            <div className="Postings">
                <ManagerView />
            </div>
        );
    }
}

export default App;