import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import { api } from './api';
import Toolbar from '@mui/material/Toolbar';
import EmployeeDrawer from './components/menu/EmployeeDrawer';
import SettingMenu from './components/menu/SettingMenu';
import Stack from '@mui/material/Stack';
import {
    Outlet
} from "react-router-dom";
import { styled } from '@mui/styles';
import Paper from '@mui/material/Paper';



const Content = styled(Paper)({
    position: "fixed",
    backgroundColor: "rgb(231, 235, 240)",
    left: "63px",
    top: 0,
    width: "100%",
    height: "100%"
});

const App = () => {
    // const [successText, setSuccessText] = useState(null);

    // useEffect(() => {
    //     api.get('/test')
    //         .then(({ data }) => setSuccessText(data))
    //         .catch(err => console.error(err));
    // });

    return (
        <div style={{
            height: "100%"
        }}>
            <AppBar
                position="fixed"
                // color="primary"
                style={{
                    width: 63,
                    height: '100%',
                    zIndex: 13000,
                    left: 0
                }}
            >
                <Toolbar style={{
                    paddingLeft: "0px",
                    paddingRight: "0px"
                }}>
                    <Stack spacing={2}>
                        <EmployeeDrawer></EmployeeDrawer>
                        <SettingMenu />
                    </Stack>
                </Toolbar>
            </AppBar>
            <Content elevation={0} style={{
                overflow: 'auto'
            }} square >
                <Outlet />
            </Content>
        </div>

    );
};

export default App;
