import {Box, Paper, Stack, Typography} from "@mui/material";
import {Link} from "@tanstack/react-router";


let ProductListContent = ({isLoading, data}) =>{
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
            {data.products.map((product) => (
                <Paper
                    onClick={() => console.log("Paper clicked!")}
                    key={product.id}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: { xs: "45%", sm: "30%", md: "15%" },
                        p: 2,
                        m: 1,
                        maxHeight: "70%",
                        "&:hover": {
                            boxShadow: 6,
                            background: "#f0f0f0b3",
                        },
                    }}
                    component={Link}
                    to="/product/$productId"
                    params={{ productId: product.id }}
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
                </Paper>))}
        </Stack>
}
export default ProductListContent