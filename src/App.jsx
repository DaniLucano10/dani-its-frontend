
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
import { Borrador } from "./components/Borrador";

function App() {

  return (
    <>
      <div>
     
        <Navar />
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
