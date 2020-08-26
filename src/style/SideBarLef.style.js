import { makeStyles } from '@material-ui/core/styles'

export const SideBarLeftUseStyles = makeStyles({
    root: {
        width: "calc(25vw)",
        height: "calc(100vh - 70px)",
        border: "1px 0 1px 1px solid #dddddd",
        display: "flex",
        flexDirection: "column",
        // flexGrow: 1
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #dddddd",
    },
    search: {
        display: "flex",
        margin: "auto",
        marginTop: "5px",
        marginBottom: "5px",
        backgroundColor: "#eeeeee",
        borderRadius: "30px",
        padding: "5px 10px 5px 10px",
    },
    rooms: {
        flexGrow: 1,
        overflow: "hidden",
        width: "calc(25vw)",
        height: "100%"
    },
    wrapRooms: {
        marginRight: "-20px",
        overflowY: "scroll",
        height: "100%",
        marginTop: "5px"
    }
})