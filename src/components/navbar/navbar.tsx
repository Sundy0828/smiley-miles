import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { DeviceType, navbarPaths } from "../../utils/enums";
import { useTranslation } from "react-i18next";
import { getInitialScreenDeviceType } from "../../utils/deviceType";
import { useCallback, useEffect, useState } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";

interface page {
  title: navbarPaths;
  path: string;
}

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onNavigate = (page: page) => {
    navigate(page.path);
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages: page[] = [
    { path: navbarPaths.About, title: t("navbar.about") },
    { path: navbarPaths.Calendar, title: t("navbar.calendar") },
    { path: navbarPaths.Notes, title: t("navbar.notes") },
    { path: navbarPaths.Results, title: t("navbar.results") },
    { path: navbarPaths.Sale, title: t("navbar.sale") },
    { path: navbarPaths.Videos, title: t("navbar.videos") },
  ];

  const [title, setTitle] = useState<string>(t("title.long"));
  const changeTitle = useCallback(() => {
    const deviceSize = getInitialScreenDeviceType();
    switch (deviceSize) {
      case DeviceType.Mobile:
        setTitle(t("title.abbr"));
        break;
      case DeviceType.Tablet:
      case DeviceType.SmallDesktop:
        setTitle(t("title.short"));
        break;
      default:
        setTitle(t("title.long"));
    }
  }, [t]);

  useEffect(() => {
    changeTitle();
  }, [changeTitle]);
  useEffect(() => {
    window.addEventListener("resize", changeTitle);
    return () => {
      window.removeEventListener("resize", changeTitle);
    };
  }, [changeTitle]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AvTimerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={`/${navbarPaths.Home}`}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={() => onNavigate(page)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AvTimerIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={`/${navbarPaths.Home}`}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => onNavigate(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
