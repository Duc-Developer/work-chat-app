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
    variant: PropTypes.string,
    margin: PropTypes.string,
    placeholder: PropTypes.string,
}

export default function TextFieldController(props) {

    const { 
        name, 
        margin,
        handleChange, 
        inputRef, 
        defaultValue,
        rows,
        multiline,
        variant, 
        placeholder,
        label } = props;

    return <div>
        <TextField 
        fullWidth
        placeholder={placeholder}
        margin={margin}
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