function Label() {
  return (
    <h3 className={entireImprove !== "NaN:NaN" ? "" : "error"}>
      자기계발:{" "}
      {entireImprove !== "NaN:NaN"
        ? entireImprove
        : "올바른 형식을 입력해주세요."}
    </h3>
  );
}

export default Label;
