import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import purple from 'material-ui/colors/purple';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './mobile-menu-styles.css';

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

const buttonStyle = {
  width: '70vw',
  margin: '7px',
  color: '#d7f4ff',
  padding: '5px',
  background: '#333434',
  fontFamily: 'san-serif',
  textDecoration: 'none !important',
  borderRadius: '30px'
};
const rowStyle = {};
const linkStyle = {
  width: '100%',
  textDecoration: 'none'
};

const SwipeMenu = ({ toggle, openMenu }) => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor="bottom"
          open={openMenu}
          onClose={toggle}
          onOpen={toggle}>
          <div tabIndex={0} role="button" onClick={toggle} onKeyDown={toggle}>
            <div
              style={{
                background: 'rgb(64, 50, 60)',
                color: '#d7f4ff',
                height: 420,
                textAlign: 'center'
              }}>
              <div style={rowStyle} className="row">
                <Link to="/" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised">
                    <h2>HOME</h2>
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/program" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised">
                    <h2>program</h2>
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/hotel" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised">
                    <h2>hotel</h2>
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/register" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised">
                    <h2>register</h2>
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/volunteer" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised">
                    <h2>volunteer</h2>
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/contact" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised">
                    <h2>contact</h2>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwipeableDrawer>
      </MuiThemeProvider>
    </div>
  );
};

const MobileMenuHeader = ({ openMenu, showMenu, toggle }) => {
  const styles = {
    root: {
      flexGrow: 1
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  };
  return (
    <header>
      <div>
        <AppBar
          style={{
            background: 'transparent',
            position: 'fixed',
            color: '#ffbcbc'
          }}
          position="static">
          <Toolbar>
            <IconButton
              style={styles.menuButton}
              color="inherit"
              onClick={toggle}
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              XLVII
            </Typography>
            <Button color="inherit">
              <InsertEmoticon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <SwipeMenu toggle={toggle} openMenu={openMenu} />
    </header>
  );
};

export default MobileMenuHeader;
