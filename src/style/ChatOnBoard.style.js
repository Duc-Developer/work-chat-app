import { makeStyles } from '@material-ui/core/styles';

export const ChatOnBoardUseStyles = makeStyles({
    isDisable: {
        display: "none"
    },

    root: {
        display: "flex",
        border: "1px solid #dddddd",
        flexDirection: "column",
        width: "calc(75vw - 5px)",
        height: "calc(100vh - 70px)",
        justifyContent: "space-between"
    },

    nav: {
        width: "100%",
        alignItems: "center",
        display: "flex",
        borderBottom: "1px solid #dddddd",
    },
    title: {
        flexGrow: 1,
        textAlgin: "center"
    },

    mainBoard: {
        flexGrow: 1,
        display: "flex",
    },
    chatBox: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column"
    },
    headerBox: {
        borderBottom: "1px solid #dddddd",
        display: "flex",
        paddingTop: "5px",
        paddingBottom: "5px"
    },
    avatar: {
        display: "flex",
        borderRadius: "50%",
        width: "64px",
        height: "64px",
        overflow: "hidden",
        alignItems: "center",
        margin: "0 10px 0 10px"
    },

    bodyBox: {
        flexGrow: 1,
        backgroundColor: "#dddddd",
    },
    footerBox: {
        borderTop: "1px solid #dddddd",
        paddingLeft: "10px",
        paddingRight: "10px"
    },

    profile: {
        width: "calc(25vw)",
        borderLeft: "1px solid #dddddd",
        display: "flex",
        flexDirection: "column",
        paddingTop: "5px",
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    mediaBox: {
        width: "100%",
    },
    fileBox: {
        width: "100%"
    }
})