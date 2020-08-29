import { makeStyles } from '@material-ui/core/styles';

export const LoadingUseStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%"
    },
    circular: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "20%"
    },
    line: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
  }));
  