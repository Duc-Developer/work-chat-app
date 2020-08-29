import React from 'react'
import { Controller } from 'react-hook-form'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

export default function GenderCheckBox(props) {
    const { control } = props
    const { gender } = control.defaultValuesRef.current
    return <div>
        <Controller
            render={(props) => (
                <RadioGroup
                    defaultValue={gender}
                    row aria-label="gender">
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
                </RadioGroup>
            )}
            rules={{
                required: {
                    value: true,
                    message: "Giới tính là cần thiết!"
                }
            }}
            name="gender"
            control={control}
        />
    </div>
}