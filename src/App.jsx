import {Typography, Container, Grid} from '@mui/material'
import Formulario from './components/Formulario'
import Articulos from './components/Noticias'

import {NoticiasProvider} from './context/NoticiasProvider'

function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography component='h1' variant='h2' align='center' marginY={15} sx={{
            fontWeight: 'bold'
          }}>
            Buscador de noticias
          </Typography>
        </header>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
        >
          <Grid 
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Formulario/>
          </Grid>
          <Grid>
            <Articulos/>
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>
    
    
  )
}

export default App
