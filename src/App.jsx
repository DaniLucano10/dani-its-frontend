
import "./App.css";
import { Navar } from "./components/Navar";
import { CourseAccordion } from "./components/CourseAccordion";
import { Container, Heading } from "@chakra-ui/react";
import { Requeriment } from "./components/Requeriment";
import { PaymentMethods } from "./components/PaymentMethods";
import { Certification } from "./components/Certification";
import { Teachers } from "./components/Teachers";
import { Questions } from "./components/Questions";
import { Information } from "./components/Information";
import { Images } from "./components/Images";

function App() {

  return (
    <>
      <div>
        <Navar />
        <Container as="section" maxWidth="8xl">
          <Heading my="50px" fontSize="60px" color="#09155f">PORTAL </Heading>
          <Heading my="-60px" fontSize="60px" color="#019CFE">INFORMATIVO</Heading>
          <Heading my="150px" fontSize="40px" color="#09155f">CARGOS POR MÓDULOS</Heading>
        </Container>
        <CourseAccordion />
        <Images/>
        <Requeriment />
        <PaymentMethods />
        <Certification />
        <Teachers />
        <Questions />
        <Information />
      </div>
    </>
  );
}

export default App;
