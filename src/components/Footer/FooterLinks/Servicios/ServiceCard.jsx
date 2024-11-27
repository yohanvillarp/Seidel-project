import './ServiceCard.css';
import { Card, Row, Col} from 'react-bootstrap';

const ServiceCard = ({ iconClass, title, description}) => {
  return (
    <Card className='serviceCard shadow-sm mb-4'>
      <Row className="align-items-center g-0">-
        <Col xs={12} md={12} className="d-flex justify-content-center">
        <i className={iconClass}></i>
        </Col>
        <Col xs={12} md={12}>
          <Card.Body className="text-center text-md-start">
            <Card.Title className="serviceCard__content-title">{title}</Card.Title>
            <Card.Text className="serviceCard__content-description">{description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ServiceCard


