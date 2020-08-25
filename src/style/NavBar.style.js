import { makeStyles } from '@material-ui/core/styles';

export const NavBarUseStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginRight: theme.spacing(2),
    },
    formInput: {
        flexGrow: 1,
    },
    inputRoot: {
        color: "inherit",
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: "48px",
        borderRadius: "50%"
    }
}));