import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TaskBox from '../../TaskBox/TaskBox';

const TaskContainer = ({ task, setTask }) => {
  let taskBox = [
    { bg: 'rgb(255, 231, 217)', color: '#661764', boxType: 'toDo', boxText: 'To Do' },
    { bg: 'rgb(208, 242, 255)', color: '#04297A', boxType: 'inProgress', boxText: 'In Progress' },
    { bg: 'rgb(255, 247, 205)', color: '#7A4F01', boxType: 'completed', boxText: 'Completed' },
  ]
  return (

    <Box sx={{
      flexGrow: 1,
      marginTop: 5,
      p: 2,
    }}
      style={{ margin: '20px 0px', padding: '0px' }}
    >
      <Grid container style={{ margin: '0px', padding: '0px' }} justifyContent='center' alignItems='center'>
        {taskBox.map(({ bg, color, boxType, boxText }, i) => (
          <TaskBox bg={bg} key={i} color={color} boxType={boxType} boxText={boxText} task={task} setTask={setTask}></TaskBox>
        ))}
      </Grid>
    </Box>

  )
}

export default TaskContainer