import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";
import "../App.css";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";
import mainLogo from "./Bifurcate.png";
import { getCookie } from "../utils/helpers";
import { UserContext } from "../context/UserContext";
import styles from "./Login.module.css";

class Login extends Component {
  buttonRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      failedAuth: false
    };
  }

  onEnterKey = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.buttonRef.current.click();
    }
  };

  handleOnChangeUser = event => {
    this.setState({ username: event.target.value });
  };

  handleOnChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleAuth = () => {
    this.setState({ failedAuth: true });
  };

  createDetails(setUsername) {
    const { username, password, failedAuth } = this.state;
    const user = {
      username,
      password,
      failedAuth
    };
    this.authenticate(user, setUsername);
  }

  authenticate(user, setUsername) {
    const { history } = this.props;
    fetch("/api/account/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        const username = getCookie("username");
        setUsername(username);

        if (data.success === true) {
          history.push("/home/transactions");
        } else {
          this.handleAuth();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { failedAuth } = this.state;
    return (
      <React.Fragment key="LoginKey">
        <CssBaseline />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={0}>
            <Container fixed justifyContent="center">
              <Container fixed>
                <Box
                  component="div"
                  borderRadius={12}
                  className={styles.signInContainer}
                >
                  <img
                    src={mainLogo}
                    style={{ width: "50%", marginTop: "10%" }}
                    alt="Main logo for login"
                  />
                  <Box
                    component="div"
                    className={styles.innerContainer}
                    onKeyUp={this.onEnterKey}
                  >
                    <Typography component="h3" className={styles.signIn}>
                      Sign In
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      label="Username"
                      variant="filled"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                      onChange={this.handleOnChangeUser}
                    />

                    <TextField
                      id="outlined-password-input"
                      type="password"
                      label="Password"
                      variant="filled"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <VpnKey />
                          </InputAdornment>
                        )
                      }}
                      onChange={this.handleOnChangePassword}
                    />

                    <Typography component="h3">
                      <UserContext.Consumer>
                        {({ setUsername }) => {
                          return (
                            <Button
                              variant="contained"
                              color="primary"
                              borderRadius={30}
                              className="margin"
                              ref={this.buttonRef}
                              onClick={() => {
                                this.createDetails(setUsername);
                              }}
                            >
                              Log In
                            </Button>
                          );
                        }}
                      </UserContext.Consumer>

                      <div>
                        <NavLink to="/SignUp" className={styles.signUpLink}>
                          If you dont have an account, sign up here
                        </NavLink>
                      </div>
                      <Box
                        component="div"
                        visibility={failedAuth ? "visible" : "hidden"}
                        marginTop="50px"
                        color="white"
                      >
                        Incorrect Username or Password
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  history: PropTypes.node.isRequired
};

export default Login;
