import React, { Component } from "react";
import "./App.css";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Paper,
  Typography,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  TextField,
  AppBar,
  Toolbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import ClearIcon from "@material-ui/icons/Clear";

const style = {
  paper: {
    // padding:"12px"
  },
  heading: {
    padding: "12px",
  },
  title: {
    flexGrow: 1,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      listCheck: true,
      task: "",
      data: [],
      error: false,
    };
  }
  componentDidMount = () => {
    if (localStorage.getItem("list") === null) {
    } else {
      this.setState({
        data: JSON.parse(localStorage.getItem("list")),
      });
      // this.state.data.push(JSON.parse(localStorage.getItem('list')))
    }
    console.log(JSON.parse(localStorage.getItem("list")));
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false, error: false, task: "" });
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleAdd = () => {
    if (this.state.task === "") {
      this.setState({ error: true });
    } else {
      this.state.data.push(this.state.task);
      console.log(this.state.data);
      localStorage.setItem("list", JSON.stringify(this.state.data));
      // localStorage[data]=new Array()
      this.setState({ task: "" });
      this.handleClose();
    }
  };
  handleShuffle = () => {
    if (this.state.data.length > 0) {
      console.log(this.state.data.length);
      let v = this.state.data[
        Math.floor(Math.random() * this.state.data.length)
      ];
      alert("Do " + v + " first ");
    } else {
      alert("Add todo first");
    }
  };
  handleClear = () => {
    localStorage.removeItem("list");
    this.setState({ data: [] });
  };
  render() {
    const { classes } = this.props;
    // const list = this.state.data;
    const lists = this.state.data.map((l) => {
      return (
        <ListItem dense button key={Math.random() * 8}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={this.state.listCheck}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText id="1" primary={l} />
        </ListItem>
      );
    });
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            
                <Typography className={classes.title} display="inline" variant="h6">
                  Todo List
                </Typography>
              
                <IconButton color="inherit" onClick={this.handleOpen}>
                  <AddIcon />
                </IconButton>
                <IconButton color="inherit" onClick={this.handleShuffle}>
                  <ShuffleIcon />
                </IconButton>
                <IconButton color="inherit" onClick={this.handleClear}>
                  <ClearIcon />
                </IconButton>
              
          </Toolbar>
        </AppBar>

      <Paper className="paper">
        <Grid>
          
          <Grid>
            <List>{lists}</List>
          </Grid>
        </Grid>

        <Dialog
          open={this.state.open}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
          <DialogContent>
            <DialogContentText>Add your todo item here.....</DialogContentText>
            <TextField
              error={this.state.error}
              autoFocus
              margin="dense"
              id="task"
              label="Task name"
              fullWidth
              multiline
              value={this.state.task}
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
      </div>
    );
  }
}

export default withStyles(style)(App);
