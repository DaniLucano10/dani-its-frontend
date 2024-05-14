
import "./App.css";
import { Navar } from "./components/Navar";
import { CourseAccordion } from "./components/CourseAccordion";
import { Container, Heading } from "@chakra-ui/react";
import { Requeriment } from "./components/Requeriment";
import { PaymentMethods } from "./components/PaymentMethods";
import { Certification } from "./components/Certification";

function App() {

  return (
    <>
      <div>
        <Navar />
        <Container as="section" maxWidth="8xl">
          <Heading my="50px" fontSize="5xl">PORTAL INFORMATIVO</Heading>
          <Heading my="50px" fontSize="4xl">Cargos por modulos</Heading>
        </Container>
        <CourseAccordion/>
        <Requeriment/>
        <PaymentMethods />
        <Certification />
      </div>
    </>
  );
}

export default App;
