import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

function HomePage() {
  const actions = [
    { icon: <FileCopyIcon color="primary" />, name: "Copy" },
    { icon: <SaveIcon color="primary" />, name: "Save" },
    { icon: <PrintIcon color="primary" />, name: "Print" },
    { icon: <ShareIcon color="primary" />, name: "Share" },
  ];

  return (
    <div className="jumbotron">
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<DeleteIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
      <h1> Course Adminstration </h1>
      <p> Reat web app testing </p>
      <Button variant="outlined" color="warning" startIcon={<DeleteIcon />}>
        DELETE
      </Button>
      &nbsp; &nbsp;
      <Button variant="contained" color="success" endIcon={<SendIcon />}>
        SEND
      </Button>
      &nbsp; &nbsp;
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
