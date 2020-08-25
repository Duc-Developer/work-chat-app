import { makeStyles } from '@material-ui/core/styles'

export const RoomCardUseStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 0 5px 0",
        padding: "0 5px 0 5px",
        alignItems: "center",
    },
    avatar: {
        display: "flex",
        alignItems: "center",
        borderRadius: "50%",
        maxWidth: "48px",
        maxHeight: "48px",
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