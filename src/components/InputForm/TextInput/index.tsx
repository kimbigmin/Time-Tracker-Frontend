import TextField from "@mui/material/TextField";

interface TextInputProps {
  label: string;
  name: string;
  handler: any;
  timeValue: any;
}

function TextInput({ label, name, handler, timeValue }: TextInputProps) {
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
        color="warning"
        name={name}
        onChange={handler}
        autoFocus
        // value={improveTime ? improveTime.study : "0:00"}
        value={timeValue}
      />
    </>
  );
}

export default TextInput;
