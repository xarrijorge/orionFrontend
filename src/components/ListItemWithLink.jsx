import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-router-dom' // Import Link for navigation

const ListItemWithLink = ({ label, icon, to }) => {
  return (
    <ListItem sx={{ color: 'white' }}>
      <ListItemButton component={Link} to={to}>
        <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
        <ListItemText primary={label} sx={{ color: 'white' }} />{' '}
      </ListItemButton>
    </ListItem>
  )
}

export default ListItemWithLink
