import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import { api } from '../../api';

export default function MediaControlCardRemove(props) {
      const [rankType, setRankType] = React.useState({})

      React.useEffect(() => {
            api.get('/api/rank_type').then((res) => {
                  const result = res.data.find(({ id }) => id === props.rank_type)
                  setRankType(result)
            }).catch((err) => {
                  console.log(err);
            })
      }, [props.rank_type])

      return (
            <Card sx={{ display: 'flex' }} style={{
                  width: 512,
                  justifyContent: "center"
            }}>
                  <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={props.image}
                        alt="image profile"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography component="div" variant="h5">
                                    {rankType.headerName} {props.firstName} {props.lastName}
                              </Typography>
                              <Typography variant="subtitle1" color="text.secondary" component="div">
                                   ชื่เล่น: {props.nickName}
                              </Typography>
                              <Typography variant="subtitle1" color="text.secondary" component="div">
                                   รหัสทหาร: {props.id}
                              </Typography>
                              <Typography variant="subtitle1" color="text.secondary" component="div">
                                   เลขประจำตัวประชาชน: {props.id_number}
                              </Typography>
                              <Typography variant="subtitle1" color="text.secondary" component="div">
                                   ผลัดที่: {props.turns}
                              </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                              <Button href={props.link} style={{

                                    width: '100%'

                              }}>{"ลบข้อมูลประวัติพลทหาร"}</Button>

                        </Box>
                  </Box>

            </Card>
      );
}
