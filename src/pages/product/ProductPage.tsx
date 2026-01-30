import { useNavigate, useParams } from "@tanstack/react-router";
import { Typography, Paper, Stack, Box, Avatar, Button } from "@mui/material";
import { useProduct } from "./api.tsx";
import { Rating } from "react-simple-star-rating";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ProductPage = () => {

    const { productId } = useParams({ strict: false });
    const navigate = useNavigate();
    const { data, isLoading } = useProduct(productId);
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>Product not found</div>;

    return (
        <Stack spacing={2} sx={{ p: 2 }}>
            <Button
                variant="text"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate({ to: "/products" })}>
                Back
            </Button>

            <Paper sx={{ p: 2 }}>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems="flex-start">

                    <Box
                        component="img"
                        src={data.images[0]}
                        alt={data.title}
                        sx={{
                            width: { xs: "100%", sm: "30%" },
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: 1,
                        }}
                    />


                    <Stack spacing={1} sx={{ width: { xs: "100%", sm: "70%" } }}>

                        <Rating
                            initialValue={data.rating}
                            readonly
                            size={24}
                            fillColor="#f59e0b"/>


                        {[
                            { label: "Title", value: data.title },
                            { label: "Category", value: data.category },
                            { label: "Brand", value: data.brand },
                            { label: "Description", value: data.description },
                            { label: "Price", value: `${data.price} ₽` },
                        ].map((prop) => (
                            <Stack direction="row" key={prop.label}>
                                <Typography
                                    color="text.secondary"
                                    sx={{ width: 100 }}
                                    variant="body2"
                                >
                                    {prop.label}:
                                </Typography>
                                <Typography variant="body2" fontWeight={500} sx = {{
                                    width:"80%"
                                }}>
                                    {prop.value}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>


                <Stack spacing={1} mt={3}>
                    <Typography variant="subtitle1">Review:</Typography>
                    <Stack spacing={1}>
                        {data.reviews.map((rev) => (
                            <Paper
                                key={rev.date}
                                sx={{
                                    p: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1,
                                    backgroundColor: "rgba(255,128,0,0.3)",
                                }}
                            >
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Avatar sx={{ width: 24, height: 24 }}>
                                        {rev.reviewerName[0]}
                                    </Avatar>
                                    <Typography variant="overline" color="text.secondary">
                                        {rev.date.split("T")[0]}
                                    </Typography>
                                </Stack>
                                <Typography variant="caption" fontWeight={500}>
                                    {rev.reviewerName}
                                </Typography>
                                <Typography variant="body2">{rev.comment}</Typography>
                            </Paper>
                        ))}
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    );
};
