import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';
import TaskCard from '../TaskCard/TaskCard';

const TaskContainer = ({ task, setTask }) => {

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDrop(e, taskStatus) {
    // console.log(taskType);
    let targetId = e.dataTransfer.getData('text')
    // console.log(targetId);

    setTask(
      task.map(item =>
        parseInt(item.taskId) === parseInt(targetId)
          ? { ...item, taskStatus: taskStatus }
          : item
      ))
    // console.log(task);
  }

  return (
    <div className='container'>
      <Box sx={{
        flexGrow: 1,
        marginTop: 5,
        p: 2,
      }}
        style={{ margin: '20px 0px', padding: '0px' }}
      >
        <Grid container spacing={2} style={{ margin: '0px', padding: '0px' }}>
          <Grid style={{ background: 'rgb(255, 231, 217)', padding: '5px' }}
            onDragOver={e => onDragOver(e)}
            onDrop={e => onDrop(e, "toDo")}
            item lg={4} md={4} xs={12}
          >
            <Typography variant='h4' style={{ color: '#661764' }} >To Do</Typography>
            {task?.filter(({ taskStatus }) => taskStatus === 'toDo')
              ?.map(({ taskStatus, name, description, taskId }, i) =>
                <TaskCard taskColor={'#661764'} id={taskId} key={i} name={name} description={description} taskStatus={taskStatus}></TaskCard>)}
          </Grid>


          <Grid style={{ background: 'rgb(208, 242, 255)', padding: '5px' }}
            onDragOver={e => onDragOver(e)}
            onDrop={e => onDrop(e, "inProgress")}
            item lg={4} md={4} xs={12}
          >
            <Typography variant='h4' style={{ color: '#04297A' }} color='primary'>In Progress</Typography>
            {task?.filter(({ taskStatus }) => taskStatus === 'inProgress')
              ?.map(({ taskStatus, name, description, taskId }, i) =>
                <TaskCard taskColor={'#04297A'} id={taskId} key={i} name={name} description={description} taskStatus={taskStatus}></TaskCard>)}
          </Grid>

          <Grid style={{ background: 'rgb(255, 247, 205)', padding: '5px' }}
            onDragOver={e => onDragOver(e)}
            onDrop={e => onDrop(e, "completed")}
            item lg={4} md={4} xs={12}
          >
            <Typography variant='h4' style={{ color: '#7A4F01' }} >Completed</Typography>
            {task?.filter(({ taskStatus }) => taskStatus === 'completed')
              ?.map(({ taskStatus, name, description, taskId }, i) =>
                <TaskCard taskColor={'#7A4F01'} id={taskId} key={i} name={name} description={description} taskStatus={taskStatus}></TaskCard>)}
          </Grid>

        </Grid>
      </Box>
    </div >
  )
}

export default TaskContainer