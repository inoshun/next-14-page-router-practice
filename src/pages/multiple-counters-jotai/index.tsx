import Head from 'next/head'
import MultipleCounters from '@/components/MultipleCounters'
import MultipleCountersMeta from '@/components/MultipleCountersMeta'
import { Typography, Stack, Box } from '@mui/material'

export default function MultipleCountersJotai() {
  return (
    <>
      <Head>
        <title>Multiple Counters with Jotai</title>
      </Head>
      <Typography variant='h2' gutterBottom>
        Multiple Counters with Jotai
      </Typography>
      <Stack direction='row' useFlexGap spacing={7}>
        <Box sx={{ minWidth: 600 }}>
          <MultipleCounters />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <MultipleCountersMeta />
        </Box>
      </Stack>
    </>
  )
}
