import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

const ListComponent = (props) => {  
    const listItems= props.posts.map( post =>   <ListItem key={post.id} post={post}/> )
    return   <ul> {listItems} </ul>    
}
const ListItem = (props) => (
  <li>    
    <p>id= {props.post.id}</p>
    <h2> {props.post.title}</h2>   
    <p> {props.post.content}</p>   
    <hr/>
  </li>
)
class App extends Component {   
  render() {
      const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
    return (
      <div>
         <h1>List with ListItem component</h1>
         <ListComponent posts={posts}/>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
