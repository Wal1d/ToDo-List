import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function SimpleSelect({ typeEnum, selectFun,  selected }) {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="todo-type">Type</InputLabel>
                <Select
                    labelId="todo-select-type"
                    id="todo-simple-select"
                    value={selected}
                    style={ {color: typeEnum[selected]} }
                    onChange={ selectFun }
                >
                    { Object.entries(typeEnum).map(([todo, col]) => (
                        <MenuItem value={todo} style={{color: col }}>{todo}</MenuItem>
                        ))}
                </Select>
            </FormControl>
        </div>
    );
}
export default SimpleSelect;