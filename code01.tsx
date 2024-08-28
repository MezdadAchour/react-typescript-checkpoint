//Code 01 : 

import React from 'react'; 
const Greeting = ({ name }) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;

 //Typescript :

 import React from 'react';

// Créer une interface pour les props
interface GreetingProps {
  name: string;
}

//Utiliser l'interface pour typer les props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;