import React from 'react';
import { Stack, Box } from '@mui/material';
import {VideoCard, Channelcard } from './';

const videos = ({ videos }) => {
    
  return (
    <Stack direction="row" flexWrap="wrap"
    justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
            {item.id.videoId && <VideoCard 
            video={item} />}
            {item.id.channelId && <channelCard 
            channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default videos;
