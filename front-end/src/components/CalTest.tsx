import * as React from 'react';

// this is our main page that shows all user data
import ePalette from "../utilities/ePalette";

// MUI imports
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// form control MUI
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function CalTest() {

    const [selectedEmotion, setSelectedEmotion] = React.useState('');

    const [selectedColor, setSelectedColor] = React.useState('white');

    const changeEmotion = (event: SelectChangeEvent) => {
        setSelectedEmotion(event.target.value as string);
    };

    // example data schema for a day of emotions
    const dayData = {
        date: new Date(),
        first: 'Happy',
        second: 'Sad',
        third: 'Angry',
        comments: 'Bad morning, better afternoon.'
        // comments not required, but provide a placeholder or help text with a prompt to get ideas flowing
    }

    // form component should start with one emotion dropdown, with a button that allows them to add up to two more, so it's less prescriptive and they can choose how they track their days
    // there will be an edit button near the calendar that pulls up the form component, auto-filling the fields with database data if it exists, otherwise defaults/empty

    return (
        <>
            <h1>Calendar Test Page</h1>
            <h2>Calendar Component</h2>
            <DateCalendar />

            <div id='emotion-entry'>
                <FormControl>
                    <InputLabel id='emotion-select-label'>Emotion</InputLabel>
                    <Select
                        labelId="emotion-select-label"
                        id="emotion-select"
                        value={selectedEmotion}
                        label="Emotion"
                        onChange={changeEmotion}
                        style={{ background: selectedColor }}
                    >
                        {Object.entries(ePalette).map(([emotion, color], index) => (
                                <MenuItem value={emotion} key={index} style={{ backgroundColor: color }}>{emotion}</MenuItem>
                        ))}
                    </Select>
      
                    <TextField id="outlined-basic" label="Comments" variant="outlined" />
                </FormControl>
            </div>

            <h2>Color Palette</h2>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {Object.entries(ePalette).map(([emotion, color], index) => (
                    <div key={index} style={{ backgroundColor: color, width: "100px", height: "100px" }}>
                        {emotion}
                    </div>
                ))}
            </div>
        </>
    )
}

export default CalTest;