import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RuleIcon from '@mui/icons-material/Rule';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          
        </ListSubheader>
      }
    >
      
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SettingsSuggestIcon />
        </ListItemIcon>
        <ListItemText primary="Suporte" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <RuleIcon />
            </ListItemIcon>
            <ListItemText primary="Ativar/Inativar Empresas" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SocialDistanceIcon />
            </ListItemIcon>
            <ListItemText primary="Alterar Usuário" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DriveFileRenameOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Cadastros" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Usuário API" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SyncAltIcon />
            </ListItemIcon>
            <ListItemText primary="Portabilidade" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PublishedWithChangesIcon />
            </ListItemIcon>
            <ListItemText primary="Alterar Consulta" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}