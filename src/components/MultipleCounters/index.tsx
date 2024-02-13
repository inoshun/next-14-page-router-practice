import { useAtom, PrimitiveAtom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'
import { Counter } from '@/atoms/CountersAtom'
import { counterAtomsAtom } from '@/atoms/CounterAtomsAtom'
import { Stack, Box, Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CounterItem from '@/components/CounterItem'

export default function MultipleCounters() {
  console.log('MultipleCounters')
  const [counterAtoms, dispatch] = useAtom(counterAtomsAtom)

  const addCounter = () =>
    dispatch({
      type: 'insert',
      value: {
        uid: uuidv4(),
        title: 'new',
        count: 0,
      },
    })

  const removeCounter = (counterAtom: PrimitiveAtom<Counter>) =>
    dispatch({ type: 'remove', atom: counterAtom })

  return (
    <Box>
      <Stack useFlexGap direction='column' spacing={2.5}>
        {counterAtoms.map((counterAtom) => {
          return (
            <CounterItem
              key={counterAtom.toString()}
              counterAtom={counterAtom}
              remove={removeCounter}
            />
          )
        })}
      </Stack>
      <Stack direction='row' justifyContent='center' marginTop={2.5}>
        <Button variant='contained' startIcon={<AddCircleIcon />} onClick={addCounter}>
          ADD NEW COUNTER
        </Button>
      </Stack>
    </Box>
  )
}
