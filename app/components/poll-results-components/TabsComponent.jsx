import React, { Component } from 'react';
import { render } from 'react-dom';

class TabsComponent extends Component {
    constructor(props) {
        super(props);

        this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick(e) {
        let tab = e.target.id;
        this.props.chartTabSelected(tab);
    }

    render() {
        /** jQuery necessary to initialize the tabs */
        $(document).ready(function(){
            $('ul.tabs').tabs();
            });

        return(
            <div className="tabs-container">
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s6"><a onClick={this.onTabClick} id="pie">Køkumynd</a></li>
                            <li className="tab col s6"><a onClick={this.onTabClick} id="bar">Stólpamynd</a></li>
                        </ul>
                    </div>
               </div>
            </div>
        )
    }
}

export default TabsComponent;