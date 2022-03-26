import React from 'react'
import { DropTarget } from 'react-drag-drop-container';
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';
import TaskCard from '../components/TaskCard/TaskCard';

const TaskBox = ({ bg, color, boxType, boxText, task, setTask }) => {

    function onDrop(e, taskStatus) {
        // console.log(e.dragData.id);
        let targetId = e.dragData.id;
        setTask(
            task.map(task =>
                parseInt(task.taskId) === parseInt(targetId)
                    ? { ...task, taskStatus: taskStatus }
                    : task
            ))
    }

    return (
        <>
            <div style={{ background: bg,width:'500px' }}>
                <DropTarget targetKey="draggable" onHit={(e) => onDrop(e, boxType)} >
                    <Grid style={{ background: bg, padding: '5px' }}
                        item lg={12} md={12} xs={12}
                    >
                        <Typography variant='h4' component='div' style={{ color: color }} >{boxText}</Typography>
                        {task?.filter(({ taskStatus }) => taskStatus === boxType)
                            ?.map(({ taskStatus, name, description, taskId }, i) =>
                                <TaskCard taskColor={color} id={taskId} key={i} name={name} description={description} taskStatus={taskStatus}></TaskCard>)}
                    </Grid>
                </DropTarget>
            </div>
        </>
    )
}

export default TaskBox