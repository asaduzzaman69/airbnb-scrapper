import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { getReviewTone } from './../lib/chatGpt'

export const Review = ({ review }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [reviewTone, setReviewTone] = useState('')


    const tone = async () => {
        const toneText = await getReviewTone(review);
        console.log({ toneText })
        setReviewTone(toneText);
        setIsLoading(false)

    };


    useEffect(() => {

        (async () => {
            await tone();
        })();

    }, [])
    return (
        <Flex alignItems={'center'} border={'1px solid grey'} borderRadius={"8px"} p={4} my={4} >
            <Text flex={1}>Review: {review}</Text>
            <Box width={'150px'}>
                <Box margin={'auto'} width={'max-content'} >

                    Tone:<br />  {isLoading ? (<Spinner />) : reviewTone}
                </Box>
            </Box>
        </Flex>
    )
}
