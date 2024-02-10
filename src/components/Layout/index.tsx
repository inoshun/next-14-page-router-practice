import { ReactNode, useState } from 'react'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Link, { NextLinkComposed } from '@/components/Link'
import CalculateIcon from '@mui/icons-material/Calculate'
import DvrIcon from '@mui/icons-material/Dvr'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  const navigationItems = [
    {
      label: 'Counter',
      href: '/counter',
      icon: <CalculateIcon />,
    },
    {
      label: 'Render Order',
      href: '/render-order',
      icon: <DvrIcon />,
    },
  ]

  return (
    <>
      {/* ヘッダー */}
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
        <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} component='nav'>
            <List subheader={<ListSubheader component='div'>MENU</ListSubheader>}>
              {navigationItems.map((navigationItem) => {
                return (
                  <ListItemButton
                    key={navigationItem.href}
                    component={NextLinkComposed}
                    to={{
                      pathname: navigationItem.href,
                    }}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemIcon>{navigationItem.icon}</ListItemIcon>
                    <ListItemText primary={navigationItem.label} />
                  </ListItemButton>
                )
              })}
            </List>
          </Box>
        </Drawer>
      </AppBar>
      <Toolbar />
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
