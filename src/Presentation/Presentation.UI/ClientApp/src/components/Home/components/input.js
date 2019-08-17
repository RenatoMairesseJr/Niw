import * as React from 'react';

class Input extends React.Component{
    constructor(props, state) {
        super(props);

        this.inputOnChange = this.inputOnChange.bind(this);
        this.state = {
            value: ''
        }
    }

    inputOnChange(e) {
        let value = e.target.value;
        this.setState({ value });
    } 

    render() {
        let classNameTmp = 'form-control';
        return (
            <div>
                <input type={this.props.type} className={classNameTmp}
                    value={this.state.value}
                    onChange={(e) => this.inputOnChange(e)} 
                 />
            </div>
        )
    }
}

export default Input;
