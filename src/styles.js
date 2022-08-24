import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((them) => ({
  container: {
    backgroundColor: them.palette.background.paper,
    padding: them.spacing(8, 0, 6),
  },
  icons: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", //16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: them.palette.background.paper,
    padding: "50px 0",
  },
}))

export default useStyles
