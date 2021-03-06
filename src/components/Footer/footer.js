import { Typography, Link, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    footer: {
        color: '#FFFFFFB3',
        backgroundColor: '#424242',
        padding: theme.spacing(2),
    },
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="inherit" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/Abu-laban">
                    Tariq Abu-Laban
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
};

export default Footer;