import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@/components/Link'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import NavigationDrawer from '@/components/NavigationDrawer'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='h1'>
            <Link color='primary.contrastText' underline='none' href='/'>
              Next14 Page Router Demo
            </Link>
          </Typography>
        </Toolbar>
        <NavigationDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer(false)} />
      </AppBar>
      <Toolbar />
    </>
  )
}
