import { createMuiTheme } from "@material-ui/core/styles";
// test scss variables
// import styleConstants from "./assets/constants/constant";

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: styleConstants.baseColor,
  //   },
  // },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
    color: "primary",
    variant: "contained",
    onClick: () => {
      alert("default is good");
    },
  },
};

export default theme;
