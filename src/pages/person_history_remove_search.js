import * as React from 'react';
import Grid from '@mui/material/Grid';
import SearchPersonHistory from './../components/search/SearchPersonHistory';
import { api } from '../api';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import MediaControlCardRemove from '../components/cards/MediaControlCardRemove';


export default function PersonHistoryRemoveSearch(props) {
      const [data, setData] = React.useState([])
      const [select, setSelect] = React.useState("id");
      const [keyword, setKeyword] = React.useState("");
      let navigate = useNavigate();

      React.useEffect(() => {

            api.get(`/api/employees?${select}=${keyword}`).then((res) => {
                  setData(res.data)
                  // console.log(data);
            }).catch((err) => {
                  console.error(err);
            })

            if (window.location.search) {


                  api.get(`/api/employees${window.location.search}`).then((res) => {
                        setData(res.data)
                        // console.log(data);
                  }).catch((err) => {
                        console.error(err);
                  })
            } else {
                  setData([])
            }
      }, [keyword, select])
      return (
            <React.Fragment>
                  <h1>ประวัติพลทหาร</h1>
                  <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                  >
                        <Grid item>
                              <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                              >
                                    <Grid item>
                                          <SearchPersonHistory
                                                keyword={keyword}
                                                onSelect={(evt) => {
                                                      setSelect(evt.target.value)
                                                }}
                                                onKeyword={(evt) => {
                                                      setKeyword(evt.target.value)
                                                }}
                                                onSearch={() => {
                                                      api.get(`/api/employees${window.location.search}`).then((res) => {
                                                            setData(res.data)
                                                            // console.log(data);
                                                            navigate(`/person-history-search?${select}=${keyword}`)
                                                      }).catch((err) => {
                                                            console.error(err);
                                                      })
                                                }}></SearchPersonHistory>
                                    </Grid>
                              </Grid>
                        </Grid>
                        <Grid item>
                              <Stack spacing={2}>
                                    {data.map((val,key,arr) => 
                                    <MediaControlCardRemove key={key} {...val} link={`/person-history-remove?id=${val.id}`}></MediaControlCardRemove>)}
                                    
                              </Stack>
                        </Grid>
                  </Grid>
            </React.Fragment>
      )
} 