import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, Input, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Review } from './components/review';
import { getReviewTone } from './lib/chatGpt';

function App() {
  const [websiteLink, setWebsiteLink] = useState('');
  const [status, setStatus] = useState('');
  const [reviews, setReviews] = useState([])



  const handleClick = async () => {
    try {
      setStatus('loading');
      const response = await axios({
        method: "get",
        url: "http://localhost:9999/scrap-review",
        params: {
          url: websiteLink,
        },
      });

      setStatus('success');
      setReviews(response.data.reviews)
    } catch (err) {
      console.log(err);
      setStatus('error')
    }

  };



  return (
    <Box className="App" w={"600px"} m={"auto"}>
      <Heading my={2} textAlign={"center"}>
        Get airbnb listing review
      </Heading>
      <Flex>
        <Input
          value={websiteLink}
          onChange={(e) => setWebsiteLink(e.target.value)}
        />
        <Button ml={1} onClick={handleClick}>
          Get reviews
        </Button>
      </Flex>

      <Box mt={1}>
        {status === "loading" ? (
          <Flex my={2} alignItems={"center"} justifyContent={"center"}>
            <Spinner />
          </Flex>
        ) : status === "error" ? (
          <Text>Something went wrong</Text>
        ) : status === "success" ? (
          <Box>
            <h2>All reviews. Review length: {reviews.length}</h2>
            {reviews?.map((el) => (
              <Review review={el} />
            ))}
            hey
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default App;
