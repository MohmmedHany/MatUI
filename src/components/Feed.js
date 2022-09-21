import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post url="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C" />
      <Post url="https://th.bing.com/th/id/R.43d30e3ea3812fde22a97f6cd78161d1?rik=4J7DC1g%2fu1HXsw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-PIEw04Elz_Q%2fUQvCgW-UipI%2fAAAAAAAADcs%2fSzD-0z1tRg0%2fs1600%2fForest-13.jpg&ehk=S%2fEnnlnCCfUZUXhmmed3o%2f30p4NLHzLH02%2fxFuFJQNo%3d&risl=&pid=ImgRaw&r=0" />
      <Post url="https://th.bing.com/th/id/OIP.4d31Hk5nIn2ySo-hVbVkyQHaFE?pid=ImgDet&rs=1" />
    </Box>
  );
};

export default Feed;
