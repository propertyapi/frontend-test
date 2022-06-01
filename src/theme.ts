import { createTheme } from '@mui/material/styles';

declare module "@mui/material/Paper" {
    interface PaperPropsVariantOverrides {
        basicCard: true;
        outlinedCard: true;
        boxShadowCard: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}

const theme = createTheme({
    typography: {
        allVariants: {
            color: "#1B1B1B"
        },
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 14,
    },
    components: {
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'basicCard' },
                    style: {
                        border: '1px solid #EFEFEF',
                        borderRadius: '10px',
                    }
                },
                {
                    props: { variant: 'boxShadowCard' },
                    style: {
                        border: '1px solid #3D8479',
                        boxShadow: '0px 0px 0px 2px #65E9D9',
                        borderRadius: '10px',
                    }
                },
                {
                    props: { variant: 'outlinedCard' },
                    style: {
                        boxShadow: '0px 0px 0px 2px #65E9D9',
                        borderRadius: '10px',
                    }
                }
            ]
        },
    }
});

export default theme;
