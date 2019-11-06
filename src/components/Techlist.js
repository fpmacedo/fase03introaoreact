import React, {Component} from 'react';
import TechItem from './Techitem';

class TechList extends Component {
  state ={
    newTech: ' ',
    techs: []
  };

  //Executado assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(techs){
      this.setState({ techs: JSON.parse(techs)});
    }
  }

  // Executado sempre que houver alteracao das props ou estado
  componentDidUpdate(_, prevState){
    //verifica se teve alteracao no componente techs
    //compara estado previo com o atual
    if(prevState.techs!== this.state.techs){
      // armazena o techs no localstorage do navegador
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  //Executa quando um componente deixa de existir
  componentWillUnmount(){
    
  }

  //arrow function para pegar mudancas na digitacao do input de texto
  // funcao criada com arrow function para ter acesso ao this para armazenar
  //valores em funcoes da classe
  handleInputChange = e =>{
    //setState utilizado pois no react nao se pode mudar variaveis de estado
    // devido a imutabilidade, logo necessario usar setState
    this.setState({newTech: e.target.value});
  };

  handleSubmit = e => {
    //previne que atualize a tela ao clicar no botao submit
    e.preventDefault();
    // para adicionar o valor no vetor tenho que recria-lo pego o vetor original e adiciono o valor a ele
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });

  };


  handleDelete = (tech) => {
    //filtra os itens do array state e so retorna onde for diferente do tech recebido na funcao
    this.setState({ techs: this.state.techs.filter(t=> t!== tech)})
  };

  // metodo render necessario para classes component
 render(){

  return(
    //cria o form para exibir componentes
    <form onSubmit={this.handleSubmit}>
      {/*cria uma lista*/}
    <ul>
      {/*faz mapear o vetor techs dentro do state*/}
     {this.state.techs.map(tech=> (
     <TechItem 
     key={tech} 
     tech={tech} 
     onDelete={()=>this.handleDelete(tech)}
     />     
     ))}
    </ul>
    <input type="text" 
    onChange={this.handleInputChange}
    value={this.state.newTech}
    />
    <button type="submit">Enviar</button>
    </form>
  );
 } 
}

export default TechList;