import { makeStyles } from '@material-ui/core/styles';


export const FriendCardUseStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: "100%",
        margin: theme.spacing(1),
    },
    controls: {
        display: 'flex',
        justifyContent: "space-between",
        minWidth: "200px",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    }
}));