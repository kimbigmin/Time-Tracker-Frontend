import { minutesToHours } from "../../../utils/minutesToHours";
import sumHoursMinutes from "../../../utils/sumTime";
interface LabelProps {
  time: {
    [key: string]: string;
  };
  type: string;
}

function Label({ time, type }: LabelProps) {
  const entireTime = minutesToHours(
    Object.values(time).reduce((acc, val) => acc + sumHoursMinutes(val), 0)
  );
  const checkInput = Object.values(time)
    .map((el) => el.match(/^\d{1,2}:\d{2}$/g))
    .includes(null);

  console.log(checkInput);
  const title = getTitle(type);

  return (
    <h3>
      {title}:{" "}
      <span
        style={{
          color: entireTime !== "NaN:NaN" && !checkInput ? "black" : "red",
          fontSize: "1.1rem",
        }}
      >
        {entireTime !== "NaN:NaN" && !checkInput
          ? entireTime
          : "올바른 형식을 입력해주세요."}
      </span>
    </h3>
  );
}

const getTitle = (type: string) => {
  switch (type) {
    case "improve":
      return "자기계발";
    case "private":
      return "개인시간";
    case "working":
      return "일";
    case "sleeping":
      return "취침";
  }
};

export default Label;
