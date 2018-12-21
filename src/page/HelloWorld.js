import React from 'react';
import Content from './Content';
import Picture from './Picture';
import Square from './Square';

class helloworld extends React.Component{
    render(){
        const picture = {
            src:'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
        };
        return(
            <div className='container'>
            <Content/>
            <Picture src={picture.src}>
            // 这里放置的内容就是 props.children
            </Picture><Square/>
            </div>
        )
    }
}
export default helloworld;