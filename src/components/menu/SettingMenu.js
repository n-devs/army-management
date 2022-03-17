import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import IconButton from '@mui/material/IconButton';
// import GroupsIcon from '@mui/icons-material/Groups';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SettingsIcon from '@mui/icons-material/Settings';
import PublishIcon from '@mui/icons-material/Publish';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useNavigate } from "react-router-dom";

export default function SettingMenu() {
      const [state, setState] = React.useState(false);
      let navigate = useNavigate();

      const toggleDrawer = (open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                  return;
            }

            setState(open);
      };

      const toLocation = (path) => (event) => {
            navigate(path)
      }

      const list = () => (
            <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                   
                 
            >
                  <List>
                        <ListItem button >
                                    <ListItemIcon>
                                          <PublishIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"นำเข้าฐานข้อมูล"} onClick={toLocation('/setting-import-database')} />
                              </ListItem>
                              <ListItem button >
                                    <ListItemIcon>
                                          <FileDownloadIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"นำออกฐานข้อมูล"}  onClick={toLocation('/setting-export-database')} />
                              </ListItem>
                  </List>
                
            </Box>
      );

      return (
            <div>
                  <Button 
                  size="medium"
                  style={{
                        color:"#fff"
                  }}
                  onClick={toggleDrawer(!state)}
                  >
                  <SettingsIcon style={{
                             fontSize: 30
                   }} />
                  </Button>
                  <Drawer
                        anchor={"left"}
                        
                        open={state}
                        onClose={toggleDrawer(false)}
                        PaperProps={{style:{
                          left:63    
                        }}}
                         
                  >
                        {list()}
                  </Drawer>
            </div>
      );
}
