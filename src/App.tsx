import { Container, Row, Col } from 'reactstrap';
import { RelatorioChargeback } from './components/RelatorioChargeback';

function App() {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <RelatorioChargeback />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
