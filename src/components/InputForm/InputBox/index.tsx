import Grid from "@mui/material/Grid";
import { FormContainer } from "./style";
import TextInput from "../TextInput";
import Label from "../Label";
import { useState } from "react";
import { useAppSelector } from "../../../state/hooks";
import { useEffect } from "react";

interface InputBoxProps {
  list: string[][];
  type: string;
  setInput: any;
  binding: any;
}

function InputBox({ type, list, setInput, binding }: InputBoxProps) {
  // 핸들러, 인풋 state는 여기서 하나로 관리
  const { yearAndMonth, selectedDate } = useAppSelector(
    (state) => state.calendar
  );

  const [time, setTime] = useState(() => {
    const newState = list.reduce((acc: any, val: any) => {
      return { ...acc, [val[1]]: "" };
    }, {});
    return newState;
  });

  console.log(time);

  useEffect(() => {
    setTime((current: any) => {
      return {
        ...current,
        ...binding,
      };
    });
    setInput((current: any) => {
      return {
        ...current,
        date: `${yearAndMonth}.${selectedDate}`,
        [type]: {
          ...binding,
        },
      };
    });
  }, [binding]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTime((current: any) => {
      return {
        ...current,
        [name]: value,
      };
    });
    setInput((current: any) => {
      return {
        ...current,
        date: `${yearAndMonth}.${selectedDate}`,
        [type]: {
          ...time,
          [name]: value,
        },
      };
    });
  };

  const textLists = list.map((el: any) => (
    <TextInput
      label={el[0]}
      name={el[1]}
      handler={inputHandler}
      timeValue={time[el[1]]}
      type={type}
    />
  ));

  return (
    <Grid item xs={6}>
      <FormContainer>
        <Label time={time} type={type} />
        {textLists}
      </FormContainer>
    </Grid>
  );
}

export default InputBox;
