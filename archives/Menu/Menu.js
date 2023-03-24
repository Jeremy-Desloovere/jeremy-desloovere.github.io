import { Menu as MenuSemantic } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Menu() {
  // console.log('toto');
  return (

  // <div className="container">
  //   <div className="left">
  //     <div className="left-name"> Jérémy Desloovere </div>
  //   </div>
  //   <div className="right">
    <MenuSemantic>
      <MenuSemantic.Item as={NavLink} to="/">Accueil</MenuSemantic.Item>
      <MenuSemantic.Item as={NavLink} to="/Skills">Skills</MenuSemantic.Item>
      <MenuSemantic.Item as={NavLink} to="/Experiences">Experiences</MenuSemantic.Item>
      <MenuSemantic.Item as={NavLink} to="/Contact">Contact</MenuSemantic.Item>
    </MenuSemantic>
  //   </div>
  // </div>
  );
}

export default Menu;
