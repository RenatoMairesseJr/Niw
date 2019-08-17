import * as React from 'react';

class TextArea extends React.Component{
    constructor(props, state) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            value: '',
        }
    }

    onChange = (e) => {
        let value = e.target.value;
        this.setState({ value });
    }

    render() {
        let classNameTmp = 'form-control';
        let style = { 'overflow': 'auto', 'resize': 'none' };
        return (
            <div>
                <textarea style={style} rows={2} className={classNameTmp}
                    value={this.props.value}
                    onChange={(e) => this.onChange(e)}
                />
            </div>
        )
    }
} 

export default TextArea;