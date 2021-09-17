import { Container, Row, Col } from 'reactstrap';
import { Tabela } from "./components/Tabela";

function App() {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <Tabela />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
