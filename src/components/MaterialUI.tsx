import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  paperStyle: {
    background: "orange",
    height: "50px",
  },
  paperStyle2: {
    background: "greenyellow",
    height: "50px",
  },
  gridStyle1: {
    background: "darkkhaki",
    height: "50px",
  },
  gridStyle2: {
    background: "cornsilk",
    height: "50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        color="secondary"
        variant="h2"
        align="left"
        gutterBottom
        noWrap
      >
        <span role="img" aria-label="star">⭐</span>Hello! Material-UI. Hello! Material-UI. Hello! Material-UI.
      </Typography>

      {/* 参照  GridのInteractiveな設定
        https://material-ui.com/components/grid/#interactive */}
      {/* spacingはgrid同士の間隔。1 = 4px */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>md=6, xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>md=6, xs=12</Paper>
        </Grid>
      </Grid>

      {/* column配置 */}
      <Grid
        container
        spacing={1}
        direction="column"
        justify="space-around"
        // flex-endによってgrid幅が文字列幅に調整される。
        alignItems="flex-end"
      >
        <Grid item xs={6}>
          <Paper className={classes.paperStyle2}>xs=6, column</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperStyle2}>xs=6, column</Paper>
        </Grid>
      </Grid>

      <div style={{ margin: "30px" }}></div>

      {/* column配置かつ、それぞれのcolumnの中でrow配置 */}
      <Grid container spacing={3} direction="column">
        <Grid className={classes.gridStyle1} item container spacing={2} xs={12}>
          <Grid item xs={2}>
            <Paper className={classes.paperStyle}>xs=2</Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paperStyle}>xs=8</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paperStyle}>xs=2</Paper>
          </Grid>
        </Grid>
        <Grid
          className={classes.gridStyle2}
          item
          container
          xs={12}
          justify="space-around"
        >
          <Grid item xs={3}>
            <Paper className={classes.paperStyle2}>
              xs=3, justify="space-around"
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paperStyle2}>
              xs=3, justify="space-around"
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paperStyle2}>
              xs=3, justify="space-around"
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <div style={{ margin: "30px" }}></div>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>
    </div>
  );
};

export default MaterialUI;
