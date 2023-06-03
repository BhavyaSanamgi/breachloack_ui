import { useState } from 'react'

import { IconButton, SvgIcon } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'

import { ReactComponent as EyeIcon } from '../../assets/login/eye_slash.svg'
import { ReactComponent as Eye } from '../../assets/login/eye_unlock.svg'
import { ReactComponent as LockIcon } from '../../assets/login/lock.svg'

const PasswordField = (props) => {
    const {
        styles,
        placeHolder,
        value,
        onChange,
        error,
        errorMessage,
        register,
        name,
    } = props
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    if (register) {
        return (
            <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                    {...register(name)}
                    sx={{
                        borderRadius: '15px',
                        height: {
                            xs: '55px',
                            sm: '60px',
                            md: '60px',
                            lg: '70px',
                            xl: '70px',
                        },
                        marginBottom: '7px',
                        pl: 3,
                        ...styles,
                    }}
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeHolder || 'Password'}
                    value={value}
                    onChange={onChange}
                    startAdornment={
                        <InputAdornment
                            position="start"
                            sx={{
                                width: '30px',
                                height: {
                                    xs: '16px',
                                    sm: '20px',
                                    md: '24px',
                                    lg: '24px',
                                    xl: '24px',
                                },
                                marginLeft: '-10px',
                            }}
                        >
                            <SvgIcon
                                component={LockIcon}
                                sx={{ height: '16px', width: '16px' }}
                            />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                sx={{ mr: '1px' }}
                            >
                                {!showPassword ? (
                                    <EyeIcon
                                        style={{
                                            height: '24px',
                                            width: '24px',
                                        }}
                                    />
                                ) : (
                                    <Eye
                                        style={{
                                            height: '24px',
                                            width: '24px',
                                        }}
                                    />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    error={error}
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
                sx={{
                    borderRadius: '15px',
                    height: {
                        xs: '55px',
                        sm: '60px',
                        md: '60px',
                        lg: '70px',
                        xl: '70px',
                    },
                    marginBottom: '7px',
                    pl: 3,
                    ...styles,
                }}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                placeholder={placeHolder || 'Password'}
                value={value}
                onChange={onChange}
                startAdornment={
                    <InputAdornment
                        position="start"
                        sx={{
                            width: '30px',
                            height: {
                                xs: '16px',
                                sm: '20px',
                                md: '24px',
                                lg: '24px',
                                xl: '24px',
                            },
                            marginLeft: '-10px',
                        }}
                    >
                        <SvgIcon
                            component={LockIcon}
                            sx={{ height: '16px', width: '16px' }}
                        />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {!showPassword ? (
                                <EyeIcon
                                    style={{ height: '24px', width: '24px' }}
                                />
                            ) : (
                                <Eye
                                    style={{ height: '24px', width: '24px' }}
                                />
                            )}
                        </IconButton>
                    </InputAdornment>
                }
                error={error}
            />
            {error && (
                <FormHelperText sx={{ margin: '0px 0px 15px 0px' }} error>
                    {errorMessage}
                </FormHelperText>
            )}
        </FormControl>
    )
}

export default PasswordField
