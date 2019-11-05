import React, {Component} from 'react';

class TechList extends Component {
  state ={
    techs: [
      'Node.js',
      'ReactJS',
      'ReactNative'
    ]
  };
  // metodo render necessario para classes component
 render(){

  return(
    <ul>
      <li>Node.js</li>
      <li>ReactJS</li>
      <li>ReactNative</li>
    </ul>
  );
 } 
}

export default TechList;