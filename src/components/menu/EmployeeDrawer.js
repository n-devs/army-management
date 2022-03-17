import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import IconButton from '@mui/material/IconButton';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useNavigate } from "react-router-dom";


export default function EmployeeDrawer() {
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
                        <ListItem button onClick={toLocation('/person-all')} >
                                    <ListItemIcon>
                                          <GroupsIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"รายชื่อพลทหาร"} />
                              </ListItem>
                              <ListItem button onClick={toLocation('/person-history-search')} >
                                    <ListItemIcon>
                                          <AssignmentIndIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"ค้นหาประวัติพลทหาร"} />
                              </ListItem>
                              <Divider/>
                              <ListItem button onClick={toLocation('/person-history-add')}>
                                    <ListItemIcon>
                                          <PersonAddIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"เพิ่มประวัติพลทหาร"} />
                              </ListItem>
                              <ListItem button onClick={toLocation('/person-history-edit-search')}>
                                    <ListItemIcon>
                                          <ManageAccountsIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"แก้ไขประวัติพลทหาร"} />
                              </ListItem>
                              <ListItem button onClick={toLocation('/person-history-remove-search')} >
                                    <ListItemIcon>
                                          <PersonRemoveIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"ลบประวัติพลทหาร"} />
                              </ListItem>
                              <Divider/>
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
                  <AccountCircleIcon style={{
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
