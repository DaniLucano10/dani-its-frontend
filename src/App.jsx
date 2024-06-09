import "./App.css";
import { Navar } from "./components/Navar";
import { PaymentMethods } from "./components/PaymentMethods";
import { Certification } from "./components/Certification";
import { Questions } from "./components/Questions";
import { Information } from "./components/Information";
import { Courses } from "./components/Courses";
import TeacherPage from "./components/TeacherPage";
import { RequerimentPage } from "./components/RequerimentPage";
import ImagePage from "./components/ImagePage";
import { Icon } from "./components/Icon";



function App() {
  return (
    <div>
    {/* <Borrador /> */}
      <Icon />
      <Navar />
      <Courses />
      <ImagePage/>
      <RequerimentPage />
      <PaymentMethods />
      <Certification />
      <TeacherPage />
      <Questions />
      <Information /> 
    </div>
  );
}

export default App;
