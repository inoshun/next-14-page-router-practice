import { ReactNode } from 'react'
import Container from '@mui/material/Container'
import Header from '@/components/Header'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Container
        maxWidth='lg'
        component='main'
        disableGutters
        sx={{
          padding: '32px',
        }}
      >
        {children}
      </Container>
    </>
  )
}
