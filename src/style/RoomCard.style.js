import { makeStyles } from '@material-ui/core/styles'

export const RoomCardUseStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 10px 5px 10px",
        alignItems: "center",
        "&:hover": {
            opacity: "0.8",
            backgroundColor: "#dddddd"
        }
    },
    avatar: {
        display: "flex",
        alignItems: "center",
        borderRadius: "50%",
        maxWidth: "64px",
        maxHeight: "64px",
        overflow: "hidden",
        flexGrow: "1"
    },
    information: {
        flexGrow: "2",
        display: "flex",
        flexDirection: "column",
        margin: "0 10px 0 10px"
    },
    titleHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    message: {
        whiteSpace: "nowrap",
        maxWidth: "210px",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
})