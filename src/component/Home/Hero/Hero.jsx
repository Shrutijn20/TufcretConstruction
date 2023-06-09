import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Typed from 'react-typed';

const Hero = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    return (
        <Grid container spacing={4}>
            <Grid item container xs={12} md={6} alignItems={'center'}>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'} paddingLeft={isMd && 2} p={1}>
                    <Box marginBottom={2}>
                        <Typography
                            variant="h4"
                            color="text.primary"
                            sx={{ fontWeight: 700 }}
                        >
                            We build your dreams.{' '} <br />
                            Build your dream {' '}
                            <Typography
                                color={'red'}
                                component={'span'}
                                variant={'inherit'}
                                // sx={{
                                //     background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`,
                                // }}
                            >
                                <Typed
                                    strings={['Home.', 'Office.']}
                                    typeSpeed={100}
                                    loop={true}
                                />
                            </Typography>
                        </Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography variant="h6" component="p" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, delectus.
                            <br />
                            Lorem ipsum dolor sit amet.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                container
                alignItems={'center'}
                justifyContent={'center'}
                xs={12}
                md={6}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    src={'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'}
                    alt="..."
                    effect="blur"
                    boxShadow={3}
                    borderRadius={2}
                    maxWidth={600}
                    sx={{
                        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Hero
