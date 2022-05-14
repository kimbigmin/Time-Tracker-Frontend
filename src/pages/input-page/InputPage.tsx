import * as React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputForm from "../../components/InputForm/InputForm";
import styled from "styled-components";
import sumHoursMinutes from "../../utils/sumTime";
import Calender from "../../components/Calendar/Calendar";
import { getData } from "../../utils/getData";
import { minutesToHours } from "../../utils/minutesToHours";
import { OneDay } from "../../type";

function InputPage() {
  const [data, setData] = useState(null);
  const [calender, setCalender] = useState((): string => {
    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth() + 1;

    return `${thisYear}.${thisMonth}`;
  });
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [finishedDay, setFinishedDays] = useState([]);

  const [improveTime, setImproveTime] = useState(() => {
    const newState = {
      study: "",
      workout: "",
      reading: "",
      rest: "",
    };
    return newState;
  });
  const [privateTime, setPrivateTime] = useState(() => {
    const newState = {
      privates: "",
      game: "",
    };
    return newState;
  });
  const [sleepTime, setSleepTime] = useState(() => {
    const newState = {
      night: "",
      nap: "",
      wake: "",
      sleep: "",
    };
    return newState;
  });
  const [worksTime, setWorksTime] = useState(() => {
    const newState = {
      works: "",
      houseWork: "",
    };
    return newState;
  });

  useEffect(() => {
    getData(setData);
  }, []);

  // 입력 항목 추출
  const { study, workout, reading, rest } = improveTime;
  const { privates, game } = privateTime;
  const { night, nap, wake, sleep } = sleepTime;
  const { works, houseWork } = worksTime;

  const entireTime = {
    entireImprove: minutesToHours(
      Object.values(improveTime).reduce(
        (acc, val) => acc + sumHoursMinutes(val),
        0
      )
    ),
    entirePrivate: minutesToHours(
      Object.values(privateTime).reduce(
        (acc, val) => acc + sumHoursMinutes(val),
        0
      )
    ),
    entireWorks: minutesToHours(
      Object.values(worksTime).reduce(
        (acc, val) => acc + sumHoursMinutes(val),
        0
      )
    ),

    entireSleep: minutesToHours(
      sumHoursMinutes(sleepTime.night) + sumHoursMinutes(sleepTime.nap)
    ),
  };

  // Input 핸들러 컬렉션
  const inputHandlers = {
    worksHandler(e: React.ChangeEvent<HTMLInputElement>) {
      const { value, name } = e.target;
      setWorksTime({
        ...worksTime,
        [name]: value,
      });
    },
    sleepHandler(e: React.ChangeEvent<HTMLInputElement>) {
      const { value, name } = e.target;
      setSleepTime({
        ...sleepTime,
        [name]: value,
      });
    },
    privateHandler(e: React.ChangeEvent<HTMLInputElement>) {
      const { value, name } = e.target;
      setPrivateTime({
        ...privateTime,
        [name]: value,
      });
    },
    improveHandler(e: React.ChangeEvent<HTMLInputElement>) {
      const { value, name } = e.target;
      setImproveTime({
        ...improveTime,
        [name]: value,
      });
    },
  };

  const getId = (data: any) => {
    if (data) {
      return data
        .map((item: any) => {
          if (item.date === `${calender}.${selectedDate}`) {
            return item.shortId;
          }
          return "";
        })
        .join("");
    }
  };

  const getFormInfo = async (data: any) => {
    if (data) {
      const id = await getId(data);
      console.log(id);
      if (id) {
        const response = await fetch(`http://localhost:3000/time/${id}`);
        const result = await response.json();
        setImproveTime((current) => {
          const newState = { ...current, ...result.improve };
          return newState;
        });
        setPrivateTime((current) => {
          const newState = { ...current, ...result.private };
          return newState;
        });
        setSleepTime((current) => {
          const newState = { ...current, ...result.sleeping };
          return newState;
        });
        setWorksTime((current) => {
          const newState = { ...current, ...result.working };
          return newState;
        });
      } else {
        setImproveTime({
          study: "",
          workout: "",
          reading: "",
          rest: "",
        });
        setPrivateTime({
          privates: "",
          game: "",
        });
        setSleepTime({
          night: "",
          nap: "",
          wake: "",
          sleep: "",
        });
        setWorksTime({ works: "", houseWork: "" });
      }
    }
  };

  // 폼 제출 핸들러
  const submitHandler = async () => {
    // post할 데이터
    const timeData = {
      date: `${calender}.${selectedDate}`,
      improve: {
        study,
        workout,
        reading,
        rest,
      },
      private: {
        privates,
        game,
      },
      sleeping: {
        night,
        nap,
        wake,
        sleep,
      },
      working: {
        works,
        houseWork,
      },
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

      await getData(setData);
      setSelectedDate(selectedDate + 1);
      alert("시간이 저장되었습니다.");
    } else {
      alert("시간을 정확히 입력해주세요.");
    }
  };

  const updateHandler = async () => {
    // post할 데이터
    const id = await getId(data);
    const timeData = {
      date: `${calender}.${selectedDate}`,
      improve: {
        study,
        workout,
        reading,
        rest,
      },
      private: {
        privates,
        game,
      },
      sleeping: {
        night,
        nap,
        wake,
        sleep,
      },
      working: {
        works,
        houseWork,
      },
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
      await getData(setData);
      alert("시간 수정이 완료되었습니다.");
    } else {
      alert("시간을 정확히 입력해주세요.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <InputForm
          handlers={inputHandlers}
          entireTime={entireTime}
          submitHandler={submitHandler}
          selectedDate={selectedDate}
          calender={calender}
          updateHandler={updateHandler}
          finishedDay={finishedDay}
          improveTime={improveTime}
          privateTime={privateTime}
          sleepTime={sleepTime}
          worksTime={worksTime}
        />
        <Calender
          calender={calender}
          setCalender={setCalender}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          data={data}
          finishedDay={finishedDay}
          setFinishedDays={setFinishedDays}
          getFormInfo={getFormInfo}
        />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

export default InputPage;
