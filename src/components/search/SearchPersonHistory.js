import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SelectTypePersonHistory from './SelectTypePersonHistory';

export default function SearchPersonHistory(props) {
    
      return (
            <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 512 }}
            >
                  <SelectTypePersonHistory onChange={props.onSelect} ></SelectTypePersonHistory>
                  <InputBase
                        value={props.keyword}
                        onChange={props.onKeyword}
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="ค้นหาประวิติของพลทหาร"
                        inputProps={{ 'aria-label': 'search google maps' }}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                  <IconButton onClick={props.onSearch} sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                  </IconButton>
            </Paper>
      );
}
