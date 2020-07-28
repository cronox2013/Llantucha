import React from 'react';
 
 
 
 
class Card extends React.Component {
 
 state = { correo: " ", nombre: " ", edad: " ", esAdmin: " "};
 
 cambiosenETN = ({name, value, checked, type}) => {
     this.setState((state)  => {
        return { [name]: type == "checkbox" ? checked : value };
    });
  };
 
  enviarForm = () => {
      console.log(this.state);
  }
   render() {
    return (
    <div>
 
        <form>
          <label htmlFor="email">Correo Electronico</label>
          <input 
            onChange={event => this.cambiosenETN(event.target)}
            type ="email" 
            name = "correo"
            placeholder="ejemplo@gmail.com"/>
 
 
         <label htmlFor="nombre"> Nombre</label>
         <input 
          onChange={ event => this.cambiosenETN(event.target)}
          type="text" 
          name = "nombre"
          placeholder="Ingresa tu nombre" />
 
 
 
          <label htmlFor="edad"> Ingresa tu edad</label>  
          <input 
          onChange={ event => this.cambiosenETN(event.target.value)}
          type="number" 
          name = "edad"
          placeholder="Age"/>
 
 
 
          <label>Es administrador?</label>  
          <input 
          onChange={ event => this.cambiosenETN(event.target)}
          type="checkbox" 
          name = "esAdmin"
          placeholder="Es administrador?"/>
 
 
           <div>
           <input 
                onClick={ this.enviarForm }
                type="submit" 
                value="Registrarse" />
 
           </div>
 
        </form>
    </div>
 
      );
    }
}
 
export default Card