import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { api } from '../../api';

export default function SelectTypePersonHistory(props) {
      const [data, setData] = React.useState([]);



      React.useEffect(() => {
            api.get("/api/employees_field").then((res) => {
                  // console.log(res.data.length);
                  const newData = []
                  // eslint-disable-next-line array-callback-return
                  res.data.map((val, key, arr) => {

                        if (key > 1) {
                              // console.log((key + 1), arr.length);
                              newData.push(val)
                        }

                        if (arr.length === (key + 1)) {
                              // console.log(newData);
                              setData(newData);
                        }
                  })

            });
      }, [])

      return (
            <div>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                        {/* <InputLabel id="demo-simple-select-autowidth-label">เลือกประเภท</InputLabel> */}
                        <Select
                              labelId="demo-simple-select-autowidth-label"
                              id="demo-simple-select-autowidth"
                              // value={props.value}
                              onChange={props.onChange}
                              autoWidth
                              // label="เลือกประเภท"
                              defaultValue="id"
                              variant="standard"
                        >
                              {data.map((val, key, arr) => <MenuItem key={key} value={val.field}>{val.headerName}</MenuItem>)}

                        </Select>
                  </FormControl>
            </div>
      );
}
