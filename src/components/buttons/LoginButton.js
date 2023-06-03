import Button from '@mui/material/Button'

const LoginButton = (props) => {
    const { label, onClick, styles, type } = props
    return (
        <Button
            type={type || 'submit'}
            fullWidth
            variant="contained"
            sx={{
                marginTop: { md: '5%', lg: '5%' },
                height: {
                    xs: '55px',
                    sm: '60px',
                    md: '60px',
                    lg: '70px',
                    xl: '70px',
                },
                borderRadius: '40px',
                fontSize: '20px',
                textTransform: 'none',
                width: '100%',
                ...styles,
            }}
            {...props}
            onClick={onClick}
        >
            {label}
        </Button>
    )
}

export default LoginButton
