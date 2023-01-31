import * as React from 'react';
import { styled, Card, Tooltip, IconButton, CardActionArea, CardActions, Typography, CardMedia, CardContent } from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const StyledCard = styled(Card)`
    padding : 6px;
    background: #D05252;
    color : #ffffff;
    width: 615px;
    margin: 1rem;
    box-shadow: none;
    border-radius: 30px;
`

function BookmarkedQuotes({ quote, quoteAuthor}) {

    return (
    <StyledCard sx={{ maxWidth: 875, maxHeight: 298,}}>
        <CardContent sx={{ paddingBottom:'0rem'}}>
            <Typography variant="body1" sx={{width:'100%', marginBottom : '1rem'}}>
               {quote}
            </Typography>
            <Typography gutterBottom variant="body2" component="div" sx={{ textAlign: 'center',}}>
                - {quoteAuthor}
            </Typography>
        </CardContent>        
        <CardActions >
            <Tooltip title="Bookmark" sx={{marginLeft:"auto"}}>
                <IconButton size="small">
                    <TurnedInIcon sx={{ color: '#ffffff'}}/>
                </IconButton>
            </Tooltip>
        </CardActions>
    </StyledCard>
  )
}

export default BookmarkedQuotes