import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'

const CustomTextField = (props) => {
    const {
        id,
        label,
        name,
        icon,
        styles,
        value,
        onChange,
        error,
        errorMessage,
        register,
    } = props
    if (register) {
        return (
            <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                    className="customInput"
                    {...register(name)}
                    id={id}
                    type="text"
                    name={name}
                    startAdornment={
                        <InputAdornment
                            position="start"
                            style={{ width: '30px', height: '30px' }}
                        >
                            {icon}
                        </InputAdornment>
                    }
                    placeholder={label}
                    sx={{
                        borderRadius: '15px',
                        height: {
                            xs: '55px',
                            sm: '60px',
                            md: '60px',
                            lg: '70px',
                            xl: '70px',
                        },
                        width: '100%',
                        ...styles,
                    }}
                    onChange={onChange}
                />
                {error && (
                    <FormHelperText sx={{ margin: '0px 0px 15px 0px' }} error>
                        {errorMessage}
                    </FormHelperText>
                )}
            </FormControl>
        )
    }
    return (
        <FormControl variant="outlined" fullWidth>
            <OutlinedInput
                id={id}
                type="text"
                name={name}
                startAdornment={
                    <InputAdornment
                        position="start"
                        style={{ width: '30px', height: '25px' }}
                    >
                        {icon}
                    </InputAdornment>
                }
                placeholder={label}
                sx={{
                    borderRadius: '15px',
                    height: {
                        xs: '55px',
                        sm: '60px',
                        md: '60px',
                        lg: '70px',
                        xl: '70px',
                    },
                    width: '100%',
                    ...styles,
                }}
                onChange={onChange}
                value={value}
            />
            {error && (
                <FormHelperText sx={{ margin: '0px 0px 15px 0px' }} error>
                    {errorMessage}
                </FormHelperText>
            )}
        </FormControl>
    )
}

export default CustomTextField
