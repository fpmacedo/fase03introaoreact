import React, {Component} from 'react';
import PropTypes from 'prop-types';

function TechItem({tech, onDelete}){
  return(
    <li>
     {tech}
     <button onClick={onDelete} type="button">Remover</button>
     </li>
  );
}

// //preenche por default caso algum parametro na seja passado a funcao
// TechItem.defaultProps = {
//   tech: 'Oculto',
// };

//seta o tipo de dado que a funcao esta recebendo
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;