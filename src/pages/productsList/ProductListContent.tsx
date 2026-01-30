import {Box, Paper, Stack, Typography} from "@mui/material";
import {Link} from "@tanstack/react-router";
import type {ProductListContentProps} from '../../types/product.ts'


let ProductListContent = ({isLoading, data}: ProductListContentProps) =>{
    return isLoading ? <Stack
            alignItems="center"
            justifyContent="center"
            minHeight="75vh">
                         {"Loading..."}
                        </Stack>:

        <Stack direction="row"
               flexWrap="wrap"
               justifyContent="center"
               minHeight="75vh"
                                        >
            {data?.products.map((product) => (

                <Paper
                    component={Link as any}
                    to="/product/$productId"
                    params={{ productId: product.id }}
                    sx={{
                        textDecoration: 'none',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: { xs: "45%", sm: "30%", md: "15%" },
                        p: 2,
                        m: 1,
                        maxHeight: "50%",
                        "&:hover": {
                            boxShadow: 6,
                            background: "#f0f0f0b3",
                        }
                    }}
                >

                    <Box
                        component="img"
                        src={product.images[0]}
                        alt={product.title}
                        sx={{
                            width: "100%",
                            height: 120,
                            objectFit: "contain",
                            borderRadius: 1,
                            mb: 1,
                        }}
                    />
                    <Stack spacing={0.5} alignItems="center">
                        <Typography variant="subtitle1" fontWeight={600} textAlign="center">
                            {product.title}
                        </Typography>

                        <Typography variant="subtitle2" color="primary">
                            ${product.price}
                        </Typography>
                    </Stack>
                </Paper>


            ))}
        </Stack>
}
export default ProductListContent