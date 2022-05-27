import TextField from "@mui/material/TextField";

interface TextInputProps {
  label: string;
  name: string;
  handler: any;
  timeValue: any;
  type: string;
}

function TextInput({ label, name, handler, timeValue, type }: TextInputProps) {
  const color = getColor(type);

  return (
    <>
      <TextField
        sx={{ margin: "0.5rem" }}
        id="text-study"
        label={label}
        variant="outlined"
        placeholder="8:10"
        required
        size="small"
        color={color}
        name={name}
        onChange={handler}
        autoFocus
        value={timeValue}
      />
    </>
  );
}

const getColor = (type: string) => {
  switch (type) {
    case "improve":
      return "warning";
    case "private":
      return "error";
    case "working":
      return "info";
    case "sleeping":
      return "secondary";
  }
};

export default TextInput;
