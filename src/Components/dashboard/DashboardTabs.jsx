import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Paper, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const Tab = styled(TabUnstyled)`
  font-family: Poppins;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #73bb92;
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #73bb92;
    color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: Poppins;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #0c8540;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function DashboardTabs() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab icon={<PhoneIcon />}>Leads</Tab>
        <Tab icon={<PhoneIcon />}>Data</Tab>
        <Tab icon={<PhoneIcon />}>Income</Tab>
      </TabsList>
      <Paper sx={{ p: 5 }}>
        <TabPanel value={0}>
          <Typography
            sx={{ color: "black", fontFamily: "Poppins", fontFamily: "800" }}
            align="center"
            gutterBottom
            variant="h4"
            component="div"
          >
            Weekly Leads - 24
          </Typography>
        </TabPanel>
        <TabPanel value={1}>
          <Typography
            sx={{ color: "black", fontFamily: "Poppins", fontFamily: "800" }}
            align="center"
            gutterBottom
            variant="h4"
            component="div"
          >
            Data - 42 List Data
          </Typography>
        </TabPanel>
        <TabPanel value={2}>
          <Typography
            sx={{ color: "black", fontFamily: "Poppins", fontFamily: "800" }}
            align="center"
            gutterBottom
            variant="h4"
            component="div"
          >
            Income - ₹42000
          </Typography>
        </TabPanel>
      </Paper>
    </TabsUnstyled>
  );
}
