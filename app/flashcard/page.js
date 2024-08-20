'use client'

import{ useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import{ collection, doc, getDoc, getDocs } from 'firebase/firestore'
import {db} from '@/firebase'

import { useSearchParams, useSearchParams } from 'next/navigation'
import { Container, Box, Typography, Paper, TextField, Button, Grid, Card, CardActionArea, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';


export default function Flashcard(){
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState([]);

    const useSearchParams = useSearchParams()
    const search= searchParams.get('id')

    useEffect(() => {
        async function getFlashcard(){
            if (!search || !user) return
            const colRef = collection(doc(collection(db, 'users'), user.id), search)
            const docs = await getDocs(colRef)
            const flashcards = []

            docs.forEach((doc) => {
                flashcards.push({id: doc.id, ...doc.data()})
            })
            setFlashcards(flashcards)
        }
        getFlashcard()
    }, [user, search])

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    if (!isLoaded || !isSignedIn){
        return <></>
    }

    return (
        <Container maxWidth="100vw">
            <Grid container spacing={3} sx={{ mx: 4 }}>
                {flashcards.length > 0 && flashcards.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardActionArea onClick={() => handleCardClick(index)}>
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '200px',
                                            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                                            transition: 'transform 0.6s',
                                            transformStyle: 'preserve-3d',
                                            position: 'relative',
                                            transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '100%', // Ensures full height usage
                                                width: '100%',  // Ensures full width usage
                                                backfaceVisibility: 'hidden',
                                                position: 'absolute', // Ensures both sides overlap perfectly
                                                top: 0,  // Align to the top
                                                left: 0,  // Align to the left
                                            }}
                                        >
                                            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                                {flashcard.front}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '100%', // Ensures full height usage
                                                width: '100%',  // Ensures full width usage
                                                backfaceVisibility: 'hidden',
                                                position: 'absolute', // Ensures both sides overlap perfectly
                                                top: 0,  // Align to the top
                                                left: 0,  // Align to the left
                                                transform: 'rotateY(180deg)',
                                            }}
                                        >
                                            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                                {flashcard.back}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}    