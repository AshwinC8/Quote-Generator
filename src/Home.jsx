import { Toolbar, Button} from '@mui/material'
import Header from './Header'
import { styled } from '@mui/material'

const GenerateButton = styled(Button)`
    background: #009C51;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    color : #ffffff;
`

function Home() {
    return(
        <>
            <Header/>
            <Toolbar>
                <GenerateButton>Generate quote</GenerateButton>
            </Toolbar>
        </>
    )
}

export default Home