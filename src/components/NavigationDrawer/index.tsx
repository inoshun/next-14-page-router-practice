import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { NextLinkComposed } from '@/components/Link'
import CalculateIcon from '@mui/icons-material/Calculate'
import DvrIcon from '@mui/icons-material/Dvr'

type Props = {
  drawerOpen: boolean
  closeDrawer: () => void
}

export default function NavigationDrawer({ drawerOpen, closeDrawer }: Props) {
  const navigationItems = [
    {
      label: 'Multiple Counters with Jotai',
      href: '/multiple-counters-jotai',
      icon: <CalculateIcon />,
    },
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
    <Drawer anchor='left' open={drawerOpen} onClose={closeDrawer}>
      <Box sx={{ width: 350 }} component='nav'>
        <List subheader={<ListSubheader component='div'>MENU</ListSubheader>}>
          {navigationItems.map((navigationItem) => {
            return (
              <ListItemButton
                key={navigationItem.href}
                component={NextLinkComposed}
                to={{
                  pathname: navigationItem.href,
                }}
                onClick={closeDrawer}
              >
                <ListItemIcon>{navigationItem.icon}</ListItemIcon>
                <ListItemText primary={navigationItem.label} />
              </ListItemButton>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
}
