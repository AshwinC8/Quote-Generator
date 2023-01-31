import { Card } from "@mui/material";
import QuoteCard from "./QuoteCard";
import BookmarkedQuotes from "./BookmarkedQuotes";
import Header from "./Header";

function Bookmark() {
    var bookmarks = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    while ( i-- ) {
        bookmarks.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    
    bookmarks.map(quote => {
        console.log(" " + quote.id + "\n" + quote.author + "\n" + quote.quote);
    })

    console.log(bookmarks);

    return (
        <>  
            <Header/>
            <div >
                {   
                    bookmarks.map(quote => (
                        <BookmarkedQuotes key={quote.key} id={quote.id} quote={quote.quote} quoteAuthor={quote.author}/>
                    ))
                }
            </div>
        </>
    )
}

export default Bookmark