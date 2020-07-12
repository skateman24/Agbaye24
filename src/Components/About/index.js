import React from 'react';
import Navigation from '../Navigation';

class About extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div>
                    <h1>About </h1>
                    <p>About page body content</p>
                </div>
            </div>
        );
    }
}

export default About;