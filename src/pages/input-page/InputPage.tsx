import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputForm from "../../components/InputForm/InputForm";
import { Container } from "./style";
import Calender from "../../components/Calendar/Calendar";

function InputPage() {
  const [finishedDay, setFinishedDays] = useState<string[]>([]);

  return (
    <>
      <Header />
      <Container>
        <InputForm finishedDay={finishedDay} />
        <Calender finishedDay={finishedDay} setFinishedDays={setFinishedDays} />
      </Container>
      <Footer />
    </>
  );
}

export default InputPage;
