
import "./App.css";
import { Navar } from "./components/Navar";
import { Requeriment } from "./components/Requeriment";
import { PaymentMethods } from "./components/PaymentMethods";
import { Certification } from "./components/Certification";
import { Teachers } from "./components/Teachers";
import { Questions } from "./components/Questions";
import { Information } from "./components/Information";
import { Images } from "./components/Images";
import { Courses } from "./components/Courses";
import { CourseAccordion } from "./components/CourseAccordion";

function App() {

  return (
    <>
      <div>
     
        <Navar />
        <CourseAccordion />
        {/* <Courses/> */}
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
