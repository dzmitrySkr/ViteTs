import {Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// @ts-ignore
import {usePagination} from "@/hooks/usePagination.tsx";





export let ProductPagination = ()=>{


    let {
        changePage,
        pageInput,
        setPageInput,
        totalPages,
        setLimit,
        limit,
        page,

    } = usePagination()

    return <Stack direction="row" spacing={1} alignItems="center"  justifyContent="center" >

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPageInput(Number(e.target.value))
            }
            onBlur={() => changePage(pageInput)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                    e.currentTarget.blur();
                }
            }}
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



        <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="page-size-label">on Page</InputLabel>

            <Select<number>
                labelId="page-size-label"
                value={limit}
                label="Products on page"
                onChange={(e)=>{

                    setLimit(e.target.value);
                    changePage(1);
                }}
            >
                {['10', '15', '20'].map((size) => (
                    <MenuItem key={size} value={size}>
                        {size}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    </Stack>
}