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
  const textLists = data.map((el: any) => {
    return (
      <TextInput
        label={el[0]}
        name={el[1]}
        handler={handler}
        timeValue={time}
      />
    );
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
