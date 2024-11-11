import { Box, Grid, Paper } from "@mui/material"
import { Trans } from "react-i18next"

const Signin = () => {
    return (
        <>
           <Grid sx={{height:'100vh'}}>
                <Grid xs={12} sm={8} md={6} component={Paper} elevation={3} >
                    <Box sx={{
                        my:8,
                        mx:4,
                        display:"flex"

                    }}>
                        test
                    </Box>
                </Grid>
           </Grid>
        </>
    )
}
export default Signin