import { makeStyles } from '@material-ui/core/styles'

export const loginUseStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        marginTop: "5rem",
        alignItems: "center",
        backgroundColor: "#fff",
        backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        maxWidth: "500px",
        margin: "auto",
        padding: "30px 0 30px 0",
        borderRadius: "20px"
    },
    form: {
        marginTop: "20px",
        width: "80%"
    },
    onSubmit: {
        marginTop: "20px",
        width: "100%",
        textAlign: "center"
    }
})
