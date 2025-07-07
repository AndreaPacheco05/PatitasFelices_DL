import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../assets/css/Tienda.css";
import { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';

function Cards({ nombre, imagen, desc, precio, id }) {
    const {agregarFavorito} = useContext(FavoritosContext)
    
  function favFunction() {
        console.log("agregando:", {nombre, imagen, desc, precio, id})
        agregarFavorito({nombre, imagen, desc, precio, id})
        alert("Se guardó en favoritos")
    }
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
              <Card.Text>precio: {precio}</Card.Text>
              <div className='botones-container'>
        <button className='boton-card' onClick={favFunction}>&#9829;</button>
        <Link to={`/detalle/${id}`}>
          <button className='boton-card'>Ver más</button>
        </Link>   
              </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;