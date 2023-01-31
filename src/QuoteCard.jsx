import * as React from 'react';
import { styled, Card, Tooltip, IconButton, CardActionArea, CardActions, Typography, CardMedia, CardContent } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

const StyledCard = styled(Card)`
    padding : 6px;
    background: #D05252;
    color : #ffffff;
    width: 615px;
    margin: 16px;
    box-shadow: none;
    border-radius: 30px;
`

function QuoteCard({quoteId, quote, quoteAuthor}) {
    let favQuote = {
        "key" : quoteId,
        "id" : quoteId,
        "author" : quoteAuthor,
        "quote" : quote,
    }
    
    const bookmarkQuote = () => {
        localStorage.setItem(`${favQuote.id}`, JSON.stringify(favQuote));
        console.log( JSON.stringify(favQuote) );
    }

    return (
    <StyledCard sx={{ maxWidth: 875, maxHeight: 298, margin: '8px'}}>
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
                <IconButton size="small" onClick={bookmarkQuote}>
                    <BookmarkAddOutlinedIcon sx={{ color: '#ffffff'}}/>
                </IconButton>
            </Tooltip>
        </CardActions>
    </StyledCard>
  );
}

export default QuoteCard