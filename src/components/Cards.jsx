import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Cards({nombre, imagen, desc, precio, id}) {
  return (
    <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src={imagen} />
      <Card.Body>
              <Card.Title>{nombre}</Card.Title>
        <Card.Text>
                  precio:{precio}
              </Card.Text>
              <Link to={`/detalle/${id}`}>
        <Button variant="primary">Ver más</Button>
              </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;