/* eslint-disable react/prop-types */

import { Typography, Card, CardActions, CardContent, CardMedia, Grid, Link } from "@mui/material"

function Noticia({noticia}) {

    const {urlToImage, title, url, author, description} = noticia

    return (
        <>
            <Grid
                item 
                md={6}
                lg={4}
            >
                <Card>
                    {urlToImage &&
                        <CardMedia
                            component='img'
                            alt={`Imagen de la noticia ${title}`}
                            image={urlToImage}
                            height={250}
                        />
                    }
                    <CardContent>
                        <Typography
                            marginTop={1}
                            variant="body1"
                            color='error'
                        >
                            {author}
                        </Typography>
                        <Typography
                            variant="h5"
                            component='div'
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="h5"
                            component='div'
                        >
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link
                            href={url}
                            target="_blank"
                            variant="button"
                            width='100%'
                            align="center"
                            fontWeight={700}
                            sx={{
                                textDecoration: 'none'
                            }}
                        >
                            Leer Noticia
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
            
            
        </>
        
    )
}

export default Noticia