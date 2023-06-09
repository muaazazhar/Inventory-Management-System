const mainDiv = {
    width: { md: "95%", xs: "100%" },
    boxShadow: { md: "0 1px 5px 1px gray", xs: "none" },
    margin: "auto",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1%",
    position: { md: "relative", xs: "static" },
  },
  infoDiv = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "1%",
  },
  imgDiv = {
    display: "flex",
    width: {md: "10%", xs: "30%"},
    justifyContent: "center",
    alignItems: "center",
  },
  info = {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  img = {
    boxShadow: "0 1px 5px 1px gray",
    width: {md: "80%", xs: "100%"},
    height: "80%",
  },
  editButton = {
    backgroundColor: "#00A572",
    position: { md: "absolute", xs: "static" },
    right: "2%",
    top: "5%",
  },
  linkStyles = {
    textDecoration: "none",
    color: "gray",
  },
  tableDiv = {
    m: 4,
  },
  tableHeader = {
    display: "flex",
    justifyContent: "space-between",
    m: 2,
  },
  tableHeaderText = {
    fontWeight: "600"
  };

export {
  mainDiv,
  img,
  info,
  editButton,
  imgDiv,
  infoDiv,
  linkStyles,
  tableDiv,
  tableHeader,
  tableHeaderText,
};
