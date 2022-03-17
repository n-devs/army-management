import * as React from 'react';
import { api } from '../api';
import Button from '@mui/material/Button';

export default function SettingExportDatabase(props) {

      const downloadFile = ({ data, fileName, fileType }) => {
            // Create a blob with the data we want to download as a file
            const blob = new Blob([data], { type: fileType })
            // Create an anchor element and dispatch a click event on it
            // to trigger a download
            const a = document.createElement('a')
            a.download = fileName
            a.href = window.URL.createObjectURL(blob)
            const clickEvt = new MouseEvent('click', {
                  view: window,
                  bubbles: true,
                  cancelable: true,
            })
            a.dispatchEvent(clickEvt)
            a.remove()
      }

      const exportToJson = e => {
            e.preventDefault()

            api.get(`/db`).then((res) => {
                  downloadFile({
                        data: JSON.stringify(res.data[0]),
                        fileName: 'db.json',
                        fileType: 'text/json',
                  })
            })

      }
      return (
            <React.Fragment>
                  <h1>SettingExportDatabase</h1>
                  <Button variant="contained" onClick={exportToJson}>นำออกฐานข้อมูล</Button>
            </React.Fragment>
      )
} 