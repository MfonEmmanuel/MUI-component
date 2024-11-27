import { useState } from "react";
import "./App.css";
// import MuiTextarea from "./components/MuiTextarea";
// import MuiTooltip from "./components/MuiTooltip";
// import { MuiProgress } from "./components/MuiProgress";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiNavbar from "./components/MuiNavbar";
// import MuiCard from "./components/MuiCard";
// import MuiModal from "./components/MuiModal";
// import MuiAlert from "./components/MuiAlert";
// import MuiTable from "./components/MuiTable";
// import MuiCheckbox from "./components/MuiCheckBox";
// import MuiSelect from "./components/MuiSelect";
// import MuiTextField from "./components/MuiTextField";
// import MuiButton from "./components/MuiButton";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      {/* Uncomment the following lines if you want to use these components */}
      {/* <MuiButton label="Click Me" /> */}
      {/* <MuiTextField
        label="Enter Text"
        value={text}
        onChange={handleChange}
        helperText="Please enter some text"
      /> */}
      {/* <MuiSelect /> */}
      {/* <MuiCheckbox/> */}
      {/* <MuiTable/> */}
      {/* <MuiAlert/> */}
      {/* <MuiModal/> */}
      {/* <MuiCard/> */}
      {/* <MuiNavbar/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiProgress /> */}
      {/* <MuiTooltip /> */}
      {/* <MuiTextarea/> */}

    </div>
  );
}

export default App;
