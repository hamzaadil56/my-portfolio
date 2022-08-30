import React from "react";
import Typography from "@mui/material/Typography";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="container footer">
        <Box>
          <Typography variant="p">Designed by Muhammad Hamza </Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CopyrightIcon style={{ margin: "0 2px" }} />
            <Typography>Copyrights 2022</Typography>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
