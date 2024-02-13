import { ChangeEvent } from 'react'
import { PrimitiveAtom, useAtom } from 'jotai'
import { Counter } from '@/atoms/CountersAtom'
import { Typography, Stack, Paper, TextField, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import ClearIcon from '@mui/icons-material/Clear'

type Props = {
  counterAtom: PrimitiveAtom<Counter>
  remove: (counterAtom: PrimitiveAtom<Counter>) => void
}

export default function CounterItem({ counterAtom, remove }: Props) {
  console.log('CounterItem')
  const [counter, setCounter] = useAtom(counterAtom)

  const updateTitle = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setCounter((prevCounter) => ({
      ...prevCounter,
      title: event.target.value,
    }))

  const updateCount = (type: 'increment' | 'decrement' | 'reset') => () =>
    setCounter((prevCounter) => {
      const prevCount = prevCounter.count
      return {
        ...prevCounter,
        count:
          type === 'increment'
            ? prevCount + 1
            : type === 'decrement' && prevCount > 0
              ? prevCount - 1
              : 0,
      }
    })

  return (
    <Stack
      component={Paper}
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        paddingX: 2.5,
        paddingY: 2,
      }}
    >
      <Stack direction='row' alignItems='center'>
        <TextField
          id='counter-title'
          label="Counter's title"
          value={counter.title}
          size='small'
          sx={{
            marginRight: 3,
          }}
          onChange={updateTitle}
        />
        <Typography
          variant='h6'
          component='p'
          sx={{
            marginRight: 1,
          }}
        >
          Count:
        </Typography>
        <Typography variant='h5' component='p'>
          {counter.count}
        </Typography>
      </Stack>
      <Stack direction='row' alignItems='center' useFlexGap spacing={1}>
        <IconButton
          size='large'
          color='default'
          aria-label='increment count'
          onClick={updateCount('increment')}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          size='large'
          color='default'
          aria-label='decrement count'
          onClick={updateCount('decrement')}
        >
          <RemoveIcon />
        </IconButton>
        <IconButton
          size='large'
          color='warning'
          aria-label='reset count'
          onClick={updateCount('reset')}
        >
          <RestartAltIcon />
        </IconButton>
        <IconButton
          size='large'
          color='error'
          aria-label='remove counter'
          onClick={() => remove(counterAtom)}
        >
          <ClearIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
