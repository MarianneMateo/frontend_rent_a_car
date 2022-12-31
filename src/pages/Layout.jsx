import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import WalletIcon from "@mui/icons-material/Wallet";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Logout from "@mui/icons-material/Logout";
import { Avatar, Collapse, Menu, MenuItem, Tooltip } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Container } from "@mui/system";
import img from "../ProfileColorful.jpg";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import InboxIcon from '@mui/icons-material/MoveToInbox';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLink, setOpenLink] = React.useState(false);
  const openMenu = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickLink = () => {
    setOpenLink(!openLink);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#fed330" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Rent a Car
          </Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={openMenu ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
            >
              {/* <Avatar sx={{ width: 30, height: 30 }}>
                {name.charAt(0)} 
              </Avatar> */}
              <Avatar
                alt="Remy Sharp"
                src={img}
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openMenu}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem /* onClick={() => navigate(`/app/account/${id}`)} */>
              <Avatar sx={{ bgcolor: "#fed330" }} /> Profile
            </MenuItem>
            <MenuItem onClick={() => navigate(`/app/account/${id_user}`)}>
              <Avatar sx={{ bgcolor: "#fed330" }}>
                <AccountBalanceWalletIcon fontSize="small" />
              </Avatar>
              Account
            </MenuItem>
            <MenuItem onClick={() => navigate(`/app/wallet/${id_user}`)}>
              <Avatar sx={{ bgcolor: "#fed330" }}>
                <WalletIcon fontSize="small" />
              </Avatar>
              Wallet
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/vehicles">
              <ListItemIcon>
                <DirectionsCarFilledIcon />
              </ListItemIcon>
              <ListItemText primary="Vehicles" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/bookings">
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Bookings" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton href="/users">
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton onClick={handleClickLink} >
          <ListItemIcon>
          <PsychologyIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Vehicles" />
          {openLink ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        </ListItem>
        <Collapse in={openLink} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} href="/vehicles">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItemButton>
          </List>
        </Collapse>  
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItemButton>
        </ListItem>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
