import { makeStyles } from '@material-ui/core/styles';

export const MessageBoxUseStyles = makeStyles(theme => {
    return {
        avatar: {
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
            maxWidth: "56px",
            maxHeight: "56px",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            border: "1px solid white"
        },
        rootRight: {
            display:"flex",
            flexDirection: "row-reverse",
            marginTop: theme.spacing(2)
        },
        messRight: {
            backgroundColor: "white",
            display: "flex",
            justifyContent: "flex-end",
            borderRadius: "20px",
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        rootLeft: {
            display: "flex",
            marginTop: theme.spacing(2)
        },
        messLeft: {
            backgroundColor: "white",
            display: "flex",
            borderRadius: "20px",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        imageLeft: {
            margin: theme.spacing(1),
        },
        imageRight: {
            margin: theme.spacing(1),
            display: "flex",
            justifyContent: "flex-end"
        }
    }
})