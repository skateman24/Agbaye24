import React from 'react';
import Navigation from '../Navigation';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div>
                    <h1>Home sample</h1>
                    <p>Home page body content</p>
                </div>
            </div>
        );
    }
}

export default Home;