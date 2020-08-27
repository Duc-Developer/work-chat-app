import React from 'react'
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types'

TextFieldController.propTypes = {
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    handleChange: PropTypes.func,
    inputRef: PropTypes.func,
    label: PropTypes.string,
    rows: PropTypes.number,
    multiline: PropTypes.bool,
    variant: PropTypes.string
}

export default function TextFieldController(props) {

    const { 
        name, 
        handleChange, 
        inputRef, 
        defaultValue,
        rows,
        multiline,
        variant, 
        label } = props;

    return <div>
        <TextField 
        fullWidth
        variant={variant}
        multiline={multiline}
        rows={rows}
        color="primary"
        label={label}
        inputRef={inputRef}
        onChange={handleChange}
        defaultValue={defaultValue}
        name={name} />
    </div>
}