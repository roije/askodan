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
        return(
            <div className="tabs-container">
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s6"><a onClick={this.onTabClick} id="pie" active href="">Køkumynd</a></li>
                            <li class="tab col s6"><a onClick={this.onTabClick} id="bar" href="">Stólpamynd</a></li>
                        </ul>
                    </div>
               </div>
            </div>
        )
    }
}

export default TabsComponent;