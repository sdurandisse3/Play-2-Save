import React from 'react';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class Tags extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            user: null,
            category: null,
            type: null,
            number: null
        }
    };

    render() {
        return (
            <>
                <div>
                    Tags Page
       </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Tags</h1>
                        <p className="lead"><ul>
                            {/* Dynamically rendered with data from firebase */}
                            <li>#Electronics(5)</li>
                            <li>#Groceries(17)</li>
                            <li>#Shopping(31)</li>
                            <li>#Travel(8)</li>
                            <li>#Leisure(18)</li>
                            {/* Dynamically rendered with data from firebase */}
                        </ul>
                        </p>
                    </div>
                </div>
            </>
        )
    }
};

export default Tags;