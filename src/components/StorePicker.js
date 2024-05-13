import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };
    
    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input 
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button tupe="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;
