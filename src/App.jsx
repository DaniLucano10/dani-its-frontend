import { useState } from "react";
import "./App.css";
import { Navar } from "./components/Navar";
import { CourseAccordion } from "./components/CourseAccordion";
import { Container, Heading, Text } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navar />
        <Container as="section" maxWidth="4xl">
          <Heading my="50px">PORTAL INFORMATIVO</Heading>
          <Text>Cargos por modulos</Text>
        </Container>
        <CourseAccordion/>
      </div>
    </>
  );
}

export default App;
