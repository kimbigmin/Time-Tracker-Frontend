import Grid from "@mui/material/Grid";
import { FormContainer } from "./style";
import TextInput from "../TextInput";
import Label from "../Label";

interface InputBoxProps {
  data: any;
  handler: any;
  time: any;
}

function InputBox({ data, handler, time }: InputBoxProps) {
  // 핸들러는 여기서 하나로 관리
  const textLists = data.map((el: any) => {
    <TextInput label={el[0]} name={el[1]} handler={handler} timeValue={time} />;
  });

  return (
    <Grid item xs={6}>
      <FormContainer>
        <Label />
        {textLists}
      </FormContainer>
    </Grid>
  );
}

export default InputBox;
