function sumHoursMinutes(value: any) {
  if (value) {
    const time = value.split(":").map((item: any, i: number) => {
      if (i === 0) return parseInt(item) * 60;
      return parseInt(item);
    });

    return time[0] + time[1];
  } else {
    return 0;
  }
}

export default sumHoursMinutes;
