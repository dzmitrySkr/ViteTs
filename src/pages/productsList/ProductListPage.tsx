
import {Button, Stack, TextField, Typography, Box, Accordion, AccordionSummary, AccordionDetails, List, ListItemButton, ListItemText} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductListContent from "./ProductListContent.tsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {usePagination} from "../../hooks/usePagination.tsx";

export const ProductsList = () => {

    let {changePage,
        changeCategory,
        changeSearch,
        data,
        isLoading,
        error,
        pageInput,
        setPageInput,
        totalPages,
        categoriesData,
        limit,
        page,
        category,
        search,
    } = usePagination()


   if (error) return <div>Error loading products</div>;

   return (
        <>
            <Stack
                direction="row"
                sx={{
                    p: 2,
                    pl:0,
                    overflowY:"auto",
                }}>
                <Box
                    component="aside"
                    sx={{
                        height: "100vh",
                        backgroundColor: "primary.main",
                        boxShadow: 3,
                        borderRadius: 0,
                        p: 2,
                        minWidth: 220,
                        overflowY: 'auto',
                        overflowX: 'hidden',}}>
                    <TextField
                        placeholder="Search..."
                        size="small"
                        fullWidth
                        value={search}
                        onChange={(e) => changeSearch(e.target.value)}
                        sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
                    />
                    <Accordion elevation={0} disableGutters>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={400}>Категории</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {categoriesData && <List dense>
                            {categoriesData.map((cat) => (
                                <ListItemButton
                                    key={cat}
                                    selected={cat === category}
                                    onClick={() =>
                                        changeCategory(cat)
                                    }
                                    sx={{
                                        borderRadius: 1,
                                        mb: 0.5,
                                        backgroundColor: "transparent",
                                        '&.Mui-selected': {
                                            backgroundColor: 'rgba(5,0,0,0.8)',
                                            color: 'white',
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(114,114,114,0.63)',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <ListItemText primary={cat} />
                                </ListItemButton>
                            ))}

                        </List>}

                    </AccordionDetails>
                </Accordion>
            </Box>

                <Stack
                    direction="column"
                    justifyContent="center">
                    <ProductListContent isLoading={isLoading} data={data}/>,
                    <Stack direction="row" spacing={1} alignItems="center"  justifyContent="center" >
                        <Button
                            variant="text"
                            startIcon={<ArrowBackIosNewIcon/>}
                            disabled={page === 1}
                            sx={{
                                backgroundColor: "primary.main",
                                color: "white"
                            }}
                            onClick={() => changePage(page - 1)}>
                        </Button>

                        <TextField
                            sx={{
                                minWidth: 40,
                                maxWidth: 80,
                                '& input': {
                                    textAlign: 'center',
                                    padding: '6px'
                                }
                            }}
                            size="small"
                            value={pageInput}
                            onChange={(e) => setPageInput(String(e.target.value))}
                            onBlur={() => changePage(pageInput)}
                            onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
                        />

                        <Button
                            variant="text"
                            sx={{
                                backgroundColor: "primary.main",
                                color: "white"
                            }}
                            disabled={page === totalPages}
                            startIcon={<ArrowForwardIosIcon/>}
                            onClick={() => changePage(page + 1)}>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>


        </>
    );
};