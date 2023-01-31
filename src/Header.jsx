import { styled, Button, Toolbar } from '@mui/material'
import { positions, right, left } from '@mui/system';
import { Link } from 'react-router-dom';

const Buttonbar = styled(Toolbar)`
    display : inline-flex;
    z-index : 100;
    width: 100%;
    justify-content: space-between;
`

function Header() {
    return(
        <Buttonbar>
            <Button sx={{color:"white", borderColor: "white", m: 2}} component={Link} to="/">Home</Button>
            <Button sx={{color:"white", borderColor: "white", m: 2}} component={Link} to="/bookmark">Bookmarks</Button>
        </Buttonbar>
    )
}

export default Header