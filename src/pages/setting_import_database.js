import * as React from 'react';
// import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { api } from '../api';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Editor from "@monaco-editor/react";
// import { editor } from './../../node_modules/monaco-editor/esm/vs/editor/editor.api';


const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref}
            variant="filled" {...props} />;
});

export default function SettingImportDatabase(props) {
      const [data, setData] = React.useState()
      const [alertMessage, setAlertMessage] = React.useState({
            open: false,
            message: ""
      })

      const handleClose = () => {

            setAlertMessage({
                  open: false,
                  message: "",
                  severity: ""
            });
      };

      // React.useEffect(() => {
      //       api.get(`/db`).then((res) => {
      //             console.log(res.data);
      //             setData(res.data)
      //       })
      // }, [])


      return (
            <React.Fragment>
                  <h1>SettingImportDatabase</h1>
                  <label htmlFor="contained-button-file">
                        <input accept="application/json" id="contained-button-file" style={{
                              // display: 'none'
                        }} multiple type="file" onChange={(evt) => {

                              var reader = new FileReader();
                              var file = evt.target.files[0];

                              reader.onload = function (upload) {
                                    // setData({
                                    //       ...data,
                                    //       image: upload.target.result

                                    // });    
                                    // var jsonObj = JSON.parse(upload.target.result);

                                    // console.log(jsonObj);
                                    setData(upload.target.result)
                              };
                              // reader.readAsDataURL(file);
                              reader.readAsText(file);
                        }} />
                        <Button variant="contained" component="span">
                              เลือกไฟล์
                        </Button>
                  </label>
                  <Button variant="contained" onClick={() => {
                        if (data) {

                              api.post(`/update-db`,JSON.parse(data) ).then((res) => {
                                    // console.log("aaa",JSON.parse(data));
                                    setAlertMessage({
                                          open: true,
                                          message: "นำเข้าฐานข้อมูล เสร็จสิ้น",
                                          severity: "success"
      
                                    })
                              })

                        } else {
                              setAlertMessage({
                                    open: true,
                                    message: ",ไม่มีเนื้อหาฐานข้อมูล",
                                    severity: "error"

                              })
                        }
                  }}>
                        นำเข้าฐานข้อมูล
                  </Button>
                  <Editor
                        // height="90vh"
                        defaultLanguage="json"
                        value={data}
                        onChange={setData}
                  />
                  <Snackbar open={alertMessage.open} autoHideDuration={6000} onClose={handleClose}
                        anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right'
                        }}>
                        <Alert onClose={handleClose} severity={alertMessage.severity} sx={{ width: '100%' }}>
                              {alertMessage.message}
                        </Alert>
                  </Snackbar>
            </React.Fragment>
      )
} 