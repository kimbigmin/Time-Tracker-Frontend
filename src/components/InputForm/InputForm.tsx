import { useState } from "react";
import Grid from "@mui/material/Grid";
import { SaveButton, UpdateButton, Container } from "./style";
import getDay from "../../utils/getDay";
import InputBox from "./InputBox";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { minutesToHours } from "../../utils/minutesToHours";
import sumHoursMinutes from "../../utils/sumTime";
import { setDate } from "../../state/reducers/calendar";
import { fetchAllTime } from "../../state/reducers/timeData";

type InputFormProps = {
  finishedDay: string[];
};

export const defaultState = {
  improve: {
    reading: "",
    rest: "",
    study: "",
    workout: "",
  },
  private: {
    game: "",
    privates: "",
  },
  sleeping: {
    nap: "",
    night: "",
    sleep: "",
    wake: "",
  },
  working: {
    houseWork: "",
    works: "",
  },
};

function InputForm({ finishedDay }: InputFormProps) {
  const oneDayData = useAppSelector((state) => state.timeData.formTime);

  const { yearAndMonth, selectedDate } = useAppSelector(
    (state) => state.calendar
  );

  const dispatch = useAppDispatch();

  const [allInput, setAllInput] = useState(defaultState);

  const entireTime = {
    entireImprove: minutesToHours(
      Object.values(allInput.improve).reduce(
        (acc, val) => acc + sumHoursMinutes(val),
        0
      )
    ),
    entirePrivate: minutesToHours(
      Object.values(allInput.private).reduce(
        (acc, val) => acc + sumHoursMinutes(val),
        0
      )
    ),
    entireWorks: minutesToHours(
      Object.values(allInput.working).reduce(
        (acc, val) => acc + sumHoursMinutes(val),
        0
      )
    ),

    entireSleep: minutesToHours(
      sumHoursMinutes(allInput.sleeping.night) +
        sumHoursMinutes(allInput.sleeping.nap)
    ),
  };

  //폼 제출 핸들러
  const submitHandler = async () => {
    // post할 데이터
    const timeData = {
      ...allInput,
      entireTime,
    };

    const sumEntire = Object.values(entireTime).reduce((acc, val) => {
      return acc + Number(val.split(":")[0]);
    }, 0);

    if (sumEntire >= 10 && sumEntire <= 30) {
      // fetch POST
      await fetch("http://localhost:3000/time", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timeData),
      });

      dispatch(fetchAllTime());
      dispatch(setDate(selectedDate + 1));
      alert("시간이 저장되었습니다.");
    } else {
      alert("시간을 정확히 입력해주세요.");
    }
  };

  const updateHandler = async () => {
    // post할 데이터
    const id = oneDayData.shortId;
    const timeData = {
      ...allInput,
      entireTime,
    };

    const sumEntire = Object.values(entireTime).reduce((acc, val) => {
      return acc + Number(val.split(":")[0]);
    }, 0);

    if (sumEntire >= 10 && sumEntire <= 30) {
      // fetch POST
      await fetch(`http://localhost:3000/time/${id}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timeData),
      });
      dispatch(fetchAllTime());
      alert("시간 수정이 완료되었습니다.");
    } else {
      alert("시간을 정확히 입력해주세요.");
    }
  };

  const improve = [
    ["공부시간", "study"],
    ["운동시간", "workout"],
    ["독서 및 신문", "reading"],
    ["기타", "rest"],
  ];

  const privates = [
    ["휴식", "privates"],
    ["게임시간", "game"],
  ];

  const work = [
    ["일", "works"],
    ["집안일", "houseWork"],
  ];

  const sleep = [
    ["취침", "night"],
    ["낮잠", "nap"],
    ["취침시간", "sleep"],
    ["기상시간", "wake"],
  ];

  return (
    <>
      <Container>
        <h2>{`선택 날짜: ${yearAndMonth}.${selectedDate} ${getDay(
          `${yearAndMonth}.${selectedDate}`
        )}`}</h2>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <InputBox
            list={improve}
            type="improve"
            setInput={setAllInput}
            binding={oneDayData.improve}
          ></InputBox>
          <InputBox
            list={privates}
            type="private"
            setInput={setAllInput}
            binding={oneDayData.private}
          ></InputBox>
          <InputBox
            list={work}
            type="working"
            setInput={setAllInput}
            binding={oneDayData.working}
          ></InputBox>
          <InputBox
            list={sleep}
            type="sleeping"
            setInput={setAllInput}
            binding={oneDayData.sleeping}
          ></InputBox>
        </Grid>
        {finishedDay.includes(`${selectedDate}`) ? (
          <UpdateButton>수정하기</UpdateButton>
        ) : (
          <SaveButton onClick={submitHandler}>저장하기</SaveButton>
        )}
      </Container>
    </>
  );
}

export default InputForm;
