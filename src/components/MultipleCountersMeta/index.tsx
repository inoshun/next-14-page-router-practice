import { useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { countersAtom } from '@/atoms/CountersAtom'
import { Typography } from '@mui/material'
import { Stack } from '@mui/material'
import { Paper } from '@mui/material'
import { Box } from '@mui/material'
import { Divider } from '@mui/material'

export default function MultipleCountersMeta() {
  console.log('MultipleCountersMeta')
  const counters = useAtomValue(countersAtom)

  const totalCount = useMemo(
    () => counters.reduce((accumulator, counter) => accumulator + counter.count, 0),
    [counters],
  )

  return (
    <Box>
      <Typography variant='h5' component='p'>
        Total Count:{' '}
        <Typography variant='h4' component='span'>
          {totalCount}
        </Typography>
      </Typography>
      <Divider
        sx={{
          marginY: 3.5,
        }}
      />
      <Typography variant='h5' component='h3' gutterBottom>
        Counter Titles
      </Typography>
      <Stack direction='row' spacing={2} useFlexGap flexWrap='wrap'>
        {counters.map((counter) => (
          <Paper
            key={counter.uid}
            sx={{
              paddingX: 1.5,
              paddingY: 0.5,
            }}
          >
            {counter.title}
          </Paper>
        ))}
      </Stack>
    </Box>
  )
}
