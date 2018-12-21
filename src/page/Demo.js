import React from 'react';
import MyInput from './MyInput';

class Demo extends React.Component {
    onTextChange = (event) => {
        console.log(event.target.value);
    }
    onTextReset = () => {
        // 我该怎么做？
        // 拿到 MyInput 内部的 input 元素然后设置 value 为 ''？
    }

    render() {
        return (
            <div>
                <MyInput onChange={this.onTextChange} />
                <button onClick={this.onTextReset}>Reset</button>
            </div>
        );
    }
}
export default Demo;