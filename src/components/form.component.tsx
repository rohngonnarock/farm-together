import React from "react";
import "./form.scss";
import { useForm, Controller } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FEC762",
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#fff",
          textTransform: "capitalize",
          padding: "15px 10px",
          fontSize: "1rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        standard: {
          "&.MuiInputLabel-shrink": {
            color: "#FEC762",
          },
          "&.MuiInput-underline": {
            borderColor: "red",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&.MuiInput-underline:before": {
            borderColor: "#FEC762",
          },
          "&.MuiInput-underline:hover:before": {
            borderBottom: "3px solid #FEC762",
          },
          "& input[type=password]": {
            fontSize: "59px",
            letterSpacing: "-5px",
            height: "32px",
          },
        },
      },
    },
  },
});

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  terms: boolean;
}

function Form() {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <Box>
          <Paper
            elevation={3}
            sx={{ my: { xs: 3, md: 15 }, p: { xs: 2, md: 6 } }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <>
                <Typography variant="h6" gutterBottom>
                  Become a farmland investor
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <Controller
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          label="First Name"
                          fullWidth
                          variant="standard"
                        />
                      )}
                      name="firstName"
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Controller
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          label="Last Name"
                          fullWidth
                          variant="standard"
                        />
                      )}
                      name="lastName"
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          type={"email"}
                          label="Email"
                          fullWidth
                          variant="standard"
                        />
                      )}
                      name="email"
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          type={"password"}
                          label="Password"
                          fullWidth
                          variant="standard"
                        />
                      )}
                      name="password"
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Controller
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          label="Phone"
                          fullWidth
                          variant="standard"
                        />
                      )}
                      name="phone"
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      render={({ field }) => (
                        <FormControlLabel
                          style={{ alignItems: "flex-start" }}
                          control={
                            <Checkbox
                              color="primary"
                              {...field}
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: 28,
                                  marginTop: "-5px",
                                },
                              }}
                            />
                          }
                          label="I agree to the terms of service, privacy policy, electronic communications disclosure, and electronic funds transfer disclosure"
                        />
                      )}
                      name="terms"
                      control={control}
                    />
                  </Grid>
                </Grid>
              </>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => {}}
                  fullWidth
                  type="submit"
                  size="large"
                  sx={{ mt: 5 }}
                >
                  Continue
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Form;
