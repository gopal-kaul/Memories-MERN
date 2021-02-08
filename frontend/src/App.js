import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from './Components/Posts/Posts.js'
import Form from './Components/Forms/Forms'
const App = () => {
  return (
    <Container maxwidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Memories
        </Typography>
        <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems='stretch' spacing={4}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </AppBar>
    </Container>
  )
}

export default App;
