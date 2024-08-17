import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { SignUp } from '@clerk/nextjs'; // Import the SignUp component from Clerk
import Link from 'next/link';

export default function SignUpPage() {
    return (
        <Container maxWidth="100vw">
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        Flashcard SaaS
                    </Typography>
                    <Button color="inherit">
                        <Link href="/sign-in" passHref>
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/sign-up" passHref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ height: '100vh' }} // Optional: full viewport height
            >
                <Typography variant="h4">Sign Up</Typography>
                <SignUp /> {/* Replace SignIn with SignUp */}
            </Box>
        </Container>
    );
}
