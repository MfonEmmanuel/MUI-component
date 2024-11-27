import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
    // State to manage acceptance of terms and conditions
    const [acceptTnC, setAcceptTnC] = useState(false);
    // State to manage selected skills
    const [skills, setSkills] = useState<string[]>([]);
    console.log({ skills });

    // Handle change for terms and conditions checkbox
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    };

    // Handle change for skills checkboxes
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }
    };

    return (
        <Box>
            <Box>
                <FormControlLabel
                    control={
                        <Checkbox
                            size="small"
                            color="secondary"
                            checked={acceptTnC}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'Accept Terms and Conditions' }} // Accessibility improvement
                        />
                    }
                    label="Accept Terms and Conditions"
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnC}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Bookmark' }} // Accessibility improvement
                />{" "}
            </Box>
            <Box>
                <FormControl
                    error={skills.length === 0} // Conditional error handling
                    role="group"
                    aria-labelledby="skills-group-label"
                >
                    <FormLabel id="skills-group-label">Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            control={
                                <Checkbox
                                    value="html"
                                    checked={skills.includes("html")}
                                    onChange={handleSkillChange}
                                    inputProps={{ 'aria-label': 'HTML skill' }} // Accessibility improvement
                                />
                            }
                        />
                        <FormControlLabel
                            label="CSS"
                            control={
                                <Checkbox
                                    value="css"
                                    checked={skills.includes("css")}
                                    onChange={handleSkillChange}
                                    inputProps={{ 'aria-label': 'CSS skill' }} // Accessibility improvement
                                />
                            }
                        />
                        <FormControlLabel
                            label="JavaScript"
                            control={
                                <Checkbox
                                    value="javascript"
                                    checked={skills.includes("javascript")}
                                    onChange={handleSkillChange}
                                    inputProps={{ 'aria-label': 'JavaScript skill' }} // Accessibility improvement
                                />
                            }
                        />
                    </FormGroup>
                    <FormHelperText>
                        {skills.length === 0 ? 'Please select at least one skill' : ' '} // Conditional helper text
                    </FormHelperText>
                </FormControl>
            </Box>
        </Box>
    );
};

export default MuiCheckbox;
