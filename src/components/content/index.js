import React, {Component} from 'react';
import Item from '../item';
import Data from '../../const/constants';
import './style.css';

class Content extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            setElem: true,
            data: [...Data]
        }
    }

    render() {
        return(
            <section className="items">
                <div className="container">
                    <div className="control">
                        <button
                            className={this.state.setElem ? 'btn' : 'btn active'}
                            type="button" onClick={() => this.handleClick()}>Click me</button>
                    </div>
                    <div className={this.state.setElem ? 'col-3' : 'col-2'}>
                        {this.state.data.length>0 ? this.state.data.map(item => (<Item key={item.id} setElem={this.state.setElem} data={item}/>)) : null}
                    </div>
                </div>
            </section>
        );
    }

    handleClick = () => {
        this.setState({
            setElem: !this.state.setElem
        });
    }
}

export default Content;