import { Grid, Pagination, Typography, Stack } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"


function Noticias() {

    const {noticias, totalNoticias, handleChangePagination, page} = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
        <>
            <Typography
                marginTop={5}
                textAlign='center'
                variant="h2"
                component='h2'
            >
                Ultimas Noticias
            </Typography>
            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia key={noticia.url} noticia={noticia}/>
                ))}
            </Grid>
            <Stack 
                spacing={2}
                alignItems='center'
                marginY={5}
            >
                <Pagination 
                    page={page}
                    count={totalPaginas} 
                    variant="outlined" 
                    color="secondary" 
                    onChange={handleChangePagination}
                />
            </Stack>
            
        </>
    )
}

export default Noticias