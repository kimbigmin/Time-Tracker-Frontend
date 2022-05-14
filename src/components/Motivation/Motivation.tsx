import * as react from "react";
import { MotivationBox } from "./style";
import { randomContents } from "../../utils/randomContents";

function Motivation() {
  const motivationContent = randomContents();

  return (
    <MotivationBox>
      <h3>오늘의 동기부여 글</h3>
      <div className="content-box">
        <p className="content">{motivationContent.content}</p>
        <p className="author">- {motivationContent.author} -</p>
      </div>
    </MotivationBox>
  );
}

export default Motivation;
