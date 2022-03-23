import React from 'react'
import { useState } from 'react'
import {
    Typography,
    TextField,
    Button,
    Box,
    MenuItem,
    FormControl,
    InputLabel,
    Paper
} from "@material-ui/core";
import Select from '@mui/material/Select';

const AddTaskForm = ({ task, setTask }) => {
    const [taskStatus, setTaskStatus] = React.useState('completed');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [taskId, setTaskId] = useState(0)

    const handleChange = (event) => {
        setTaskStatus(event.target.value);
    };

    function addTask(event) {
        event.preventDefault();
        setTaskId(taskId + 1);
        setTask(task => [...task, { name, description, taskStatus, taskId }]);
        console.log(task);
        setName('');
        setDescription('');
    }

    return (
        <>
            <div>
                <Typography variant='h4' color='primary' component='div'
                    style={{ background: '#3F51B5', color: 'white', padding: '10px', marginBottom: '10px' }}
                >Work Status Management</Typography>
            </div>
            <div className='container' >
                <Paper elevation={5}>
                    <form onSubmit={addTask}>
                        <TextField
                            required
                            id='name'
                            style={{ width: "200px", margin: "15px 5px" }}
                            type="text"
                            label="Task Name"
                            variant="outlined"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            required
                            id='description'
                            style={{ width: "200px", margin: "15px 5px" }}
                            type="text"
                            label="Task description"
                            variant="outlined"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            fullWidth
                        />
                        <Box sx={{ minWidth: 120 }} style={{ margin: "10px 3px" }}>
                            <FormControl sx={{ m: 1, minWidth: 120 }} required fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Task Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={taskStatus}
                                    label="Select Task Status"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'toDo'}>To Do</MenuItem>
                                    <MenuItem value={'inProgress'}>In Progress</MenuItem>
                                    <MenuItem value={'completed'}>Completed</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Button style={{ margin: "10px 0px" }} fullWidth variant="contained" type='submit' color="primary" >
                            Add Task
                        </Button>

                    </form>
                </Paper>
            </div>
        </>
    )
}

export default AddTaskForm