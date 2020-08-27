import React from 'react'
import { Controller } from 'react-hook-form'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

export default function GenderCheckBox({ control }) {
    return <div>
        <Controller
            render={(props) => (<RadioGroup row aria-label="gender">
                <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    labelPlacement="top"
                    onChange={e => { props.onChange(e.target.value) }}
                />
                <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    onChange={e => { props.onChange(e.target.value) }}
                    labelPlacement="top"
                />
            </RadioGroup>)}
            name="gender"
            control={control}
        />
    </div>
}