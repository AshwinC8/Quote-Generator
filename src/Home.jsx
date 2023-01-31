import { Tooltip, Toolbar, Button,  styled, Typography} from '@mui/material'
import Header from './Header'
import * as React from 'react';
import QuoteCard from './QuoteCard';
import { useState, useEffect } from 'react'
import axios from 'axios'

const GenerateButton = styled(Button)`
    background: #009C51;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    color : #ffffff;
    margin : 2rem;
    z-index : 100;
`

function Home() {
    const [ quoteContent, setQuote] = useState("")
    const [ quoteAuthor, setAuthor] = useState("")
    const [ quoteId, setQuoteId] = useState("")

    const getQuote = () => {
        axios.get("https://api.quotable.io/random")
        .then(
          (response) => {
            setQuote(response.data.content);
            setAuthor(response.data.author);
            setQuoteId(response.data._id);
          }
        )
      }

    useEffect(() => {getQuote()}, [])

   

    return(
        <>
            <Header/>
            <QuoteCard quoteId={quoteId} quote={quoteContent} quoteAuthor={quoteAuthor}/>
            <Tooltip title="Generate">
                <GenerateButton onClick={getQuote}>
                    <Typography sx={{ p: 1}}>
                        Generate quote
                    </Typography>
                </GenerateButton>
            </Tooltip>
        </>
    )
}

export default Home