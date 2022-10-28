import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import infoIcon from '../../images/info.svg'

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} placement="right" arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#222"
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#222",
    maxWidth: 208,
    height: 61,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#e4e4e4"
  }
}));

export const CustomizedTooltip = () => {
  return (
    <BootstrapTooltip title="Письма об обновлениях и улучшениях платформы">
      <img src={infoIcon} alt="info" />
    </BootstrapTooltip>
  );
}
