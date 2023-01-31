import { styled, Button, Toolbar } from '@mui/material'
import { positions, right, left } from '@mui/system';

const Buttonbar = styled(Toolbar)`
    display : inline-flex;
    z-index : 100;
    width: 100%;
    justify-content: space-between;
`

function Header() {
    return(
        <Buttonbar>
            <Button sx={{color:"white", borderColor: "white", m: 2}}>Home</Button>
            <Button sx={{color:"white", borderColor: "white", m: 2}}>Bookmarks</Button>
        </Buttonbar>
    )
}

export default Header