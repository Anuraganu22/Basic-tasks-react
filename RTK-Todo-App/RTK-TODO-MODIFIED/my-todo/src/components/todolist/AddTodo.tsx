
import { Grid, Paper, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../Redux/slices/todoSlice';
import moment from 'moment';

export default function AddTodo(): JSX.Element {
    const dispatch = useDispatch();
    const paperstyle = { padding: '50px 20px', width: 300, margin: '20px auto' }
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    function handleChange(e: { target: HTMLInputElement; }) {
        setText(e.target.value);
    }
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setDay(e.currentTarget.value)
    }
    function handleSubmit(e: any) {
        e.preventDefault()
        if (!text.trim()) {
            return
        }
        dispatch(addTodo(text, day))
        setText('');
    }

    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperstyle}>
                    <form onSubmit={handleSubmit}>
                        <h1>Todo APP</h1>
                        <input value={text} onChange={handleChange} placeholder="eneter your activity" />
                        <br></br>
                        {/* <Datepicker/> */}
                        <input type="date" onChange={onChange} />

                        <Button type='submit' color='primary'>Add </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )

}