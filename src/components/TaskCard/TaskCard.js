import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DragDropContainer } from 'react-drag-drop-container';

const TaskCard = ({ description, name, taskStatus, id, taskColor }) => {

    return (
        <>
            <DragDropContainer targetKey="draggable" dragData={{ id: id }} >
                <div>
                    <Card sx={{
                        minWidth: 230, '&:hover': {
                            cursor: 'pointer'
                        },
                        my: 3,
                    }}>
                        <CardContent style={{ color: `${taskColor}`, borderBottom: `4px solid ${taskColor}` }}>
                            <Typography variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {taskStatus}
                            </Typography>
                            <Typography sx={{ fontSize: 14, m: 1 }} color="text.secondary" variant="paragraph">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </DragDropContainer>
        </>
    )
}

export default TaskCard