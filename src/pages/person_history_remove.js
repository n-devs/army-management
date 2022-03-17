import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
// import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterMoment from '@mui/lab/AdapterMoment';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { api } from '../api';
// import 'date-fns/locale/th';
import "moment/locale/th";
// import { DataArraySharp } from '@mui/icons-material';



const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref}
            variant="filled" {...props} />;
});

const InputUploadPhoto = styled('input')({
      display: 'none',
});

function LocalizedDatePicker(props) {

      return (
            <React.Fragment>

                  <FormControl fullWidth style={props.style && { ...props.style }} >
                        <LocalizationProvider dateAdapter={AdapterMoment} locale="th">
                              <DesktopDatePicker
                                    //   label="วัน/เดือน/ปี ค.ศ"
                                    dateFormat="d, MMMM, yyyy"
                                    value={props.value}
                                    onChange={props.onChange}

                                    renderInput={({ inputRef, inputProps, InputProps }) => (
                                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Input
                                                      startAdornment={props.startText && <InputAdornment position="start">{props.startText}</InputAdornment>}
                                                      endAdornment={props.endText && <InputAdornment position="end">{props.endText}</InputAdornment>}
                                                      ref={inputRef} {...inputProps}
                                                      placeholder="วัน/เดือน/ปี พ.ศ." />
                                                {InputProps?.endAdornment}
                                          </Box>
                                    )}
                              />
                        </LocalizationProvider>
                  </FormControl>

            </React.Fragment >
      );
}

function NativeSelectInput(props) {
      return (
            <FormControl fullWidth >
                  <NativeSelect
                        defaultValue={props.value}
                        inputProps={{
                              id: 'uncontrolled-native',
                        }}
                        startAdornment={<InputAdornment position="start">{props.startText}</InputAdornment>}
                  >
                        {props.children}
                  </NativeSelect>
            </FormControl>
      );
}

function NativeInput(props) {
      return (
            <FormControl fullWidth style={props.style && { ...props.style }} >
                  <Input
                        required
                        value={props.value}
                        onChange={props.onChange}
                        startAdornment={props.startText && <InputAdornment position="start">{props.startText}</InputAdornment>}
                        endAdornment={props.endText && <InputAdornment position="end">{props.endText}</InputAdornment>}
                  />
            </FormControl>
      );
}

function RowRadioButtonsGroup(props) {
      return (
            <FormControl fullWidth>
                  <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={props.value && props.value}
                        name={props.name}
                  >
                        {props.data.map((val, i, arr) => (
                              <FormControlLabel key={i} value={val.value} control={<Radio />} label={`${val.label}`} />
                        ))}

                  </RadioGroup>
            </FormControl>
      )
}

export default function PersonHistoryRemove(props) {
      const [data, setData] = React.useState(
            {
                  "turns": "",
                  "office_type": "0",
                  "image": "",
                  "rank_type": "0",
                  "firstName": "",
                  "lastName": "",
                  "nickName": "",
                  "affiliation_type": "0",
                  "id": "",
                  "id_number": "",
                  "birthday": "",
                  "nationality_type": "0",
                  "religion_type": "1",
                  "height": "",
                  "weight": "",
                  "blood_type": "0",
                  "bust_size": "",
                  "earmark": "",
                  "person_status_type": "1",
                  "phone": "",
                  "entered_service_on": "",
                  "period_of_service_type": "2",
                  "how_to_submit_a_request_type": "0",
                  "house_number": "",
                  "village": "",
                  "village_name": "",
                  "road_name": "",
                  "canton_name": "",
                  "district_name": "",
                  "province_name": "",
                  "zip_code": "",
                  "government_offices_nearby": "",
                  "person_who_can_be_contacted_firstName": "",
                  "person_who_can_be_contacted_lastName": "",
                  "person_who_can_be_contacted_relationship_type": "0",
                  "person_who_can_be_contacted_phone": "",
                  "father_firstName": "",
                  "father_lastName": "",
                  "father_phone": "",
                  "father_life_status_type": "1",
                  "father_occupation": "",
                  "father_status_type": "3",
                  "mother_firstName": "",
                  "mother_lastName": "",
                  "mother_phone": "",
                  "mother_life_status_type": "1",
                  "mother_occupation": "",
                  "mother_status_type": "3",
                  "graduated_grade_level": "",
                  "graduated_grade_level_from": "",
                  "occupation_before_government_service": "",
                  "medical_information": "",
                  "personal_ability": ""


            }
      );
      const [alertMessage, setAlertMessage] = React.useState({
            open: false,
            message: ""
      })


   
      const updateData = (obj) => (e) => {
            console.log(obj);
            if (obj.turns === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรอกข้อมูล ผลัดที่"
                  })
            } else if (obj.image === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณาเพิ่มรูปถ่าย"
                  })
            } else if (obj.firstName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อพลทหาร"
                  })
            } else if (obj.lastName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล นามสกุลพลทหาร"
                  })
            } else if (obj.nickName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อเล่นพลทหาร"
                  })
            } else if (obj.id === "") {

                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล เลขประจำตัว10หลักพลทหาร"
                  })
            } else if (obj.id.length !== 10) {

                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล เลขประจำตัว10หลักพลทหาร ให้ครบ 10 หลัก"
                  })
            } else if (obj.id_number === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล เลขประจำตัวประชาชนพลทหาร"
                  })
            } else if (obj.id_number.length !== 13) {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล เลขประจำตัวประชาชนพลทหาร ให้ครบ 13 หลัก"
                  })
            } else if (obj.birthday === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล วัน เดือน ปีเกิดพลทหาร"
                  })
            } else if (obj.height === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ส่วนสูงพลทหาร"
                  })
            } else if (obj.weight === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล น้ำหนักพลทหาร"
                  })
            } else if (obj.bust_size === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล รอบอกพลทหาร"
                  })
            } else if (obj.earmark === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ตำหนิพลทหาร"
                  })
            } else if (obj.phone === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล เบอร์โทรศัพท์พลทหาร"
                  })
            } else if (obj.entered_service_on === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล วันที่เข้าประจำการพลทหาร"
                  })
            } else if (obj.house_number === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล บ้านเลขที่"
                  })
            } else if (obj.village === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล หมู่บ้านที่"
                  })
            } else if (obj.village_name === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อหมู่บ้าน"
                  })
            } else if (obj.road_name === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อถนน"
                  })
            } else if (obj.canton_name === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อ แขวง/ตำบล"
                  })
            } else if (obj.district_name === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อ เขต/อำเภอ"
                  })
            } else if (obj.province_name === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อ จังหวัด"
                  })
            } else if (obj.zip_code === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล รหัสไปรษณีย์"
                  })
            } else if (obj.government_offices_nearby === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อ สถานที่ราชการใกล้เคียง"
                  })
            } else if (obj.person_who_can_be_contacted_firstName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อ บุคคลที่สามารถติดต่อได้"
                  })
            } else if (obj.person_who_can_be_contacted_lastName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล นามสกุล บุคคลที่สามารถติดต่อได้"
                  })
            } else if (obj.person_who_can_be_contacted_phone === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล เบอร์โทรศัพท์ บุคคลที่สามารถติดต่อได้"
                  })
            } else if (obj.father_firstName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อบิดา"
                  })
            } else if (obj.father_lastName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล นามสกุลบิดา"
                  })
            } else if (obj.father_phone === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล เบอร์โทรศัพท์ บิดา"
                  })
            } else if (obj.father_occupation === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล อาชีพ บิดา"
                  })
            } else if (obj.mother_firstName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ชื่อมารดา"
                  })
            } else if (obj.mother_lastName === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล นามสกุลมารดา"
                  })
            } else if (obj.mother_phone === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล เบอร์โทรศัพท์ มารดา"
                  })
            } else if (obj.mother_occupation === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล อาชีพ มารดา"
                  })
            } else if (obj.graduated_grade_level === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล จบการศึกระดับชั้น"
                  })
            } else if (obj.graduated_grade_level_from === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล จบการศึกระดับชั้นจาก"
                  })
            } else if (obj.occupation_before_government_service === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล อาชีพก่อนรับราชการ"
                  })
            } else if (obj.personal_ability === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ความสามารถส่วนตัว"
                  })
            } else if (obj.medical_information === "") {
                  setAlertMessage({
                        open: true,
                        severity: "warning",
                        message: "กรุณากรองข้อมูล ข้อมูลทางการแพทย์"
                  })
            } else {
                  api.delete(`/api/employees/${obj.id}`, { ...obj })
                        .then(({ data }) => {
                              console.log('Success:', data);
                              setAlertMessage({
                                    open: true,
                                    message: "ลบข้อมูลพลทหาร เสร็จสิ้น",
                                    severity: "success"

                              })

                              setTimeout(() => {
                                    // toLocation(`/person-history-remove-search${window.location.search}`)
                                    window.location.reload(`/person-history-remove-search${window.location.search}`)
                              }, 6000);


                        })
                        .catch(err => {
                              console.error('Error:', err);
                              setAlertMessage({
                                    open: true,
                                    message: err,
                                    severity: "error"

                              })
                        });

            }
      }

      const handleClose = () => {

            setAlertMessage({
                  open: false,
                  message: "",
                  severity: ""
            });

            window.location.reload(`/person-history-remove-search${window.location.search}`)


      };

      React.useEffect(() => {
            api.get(`/api/employees${window.location.search}`).then((res) => {
                  console.log(res.data.length);
                  if (res.data.length !== 0) {
                        setData({ ...data, ...res.data[0] })
                  } else {
                        window.location.replace(`/person-history-remove-search${window.location.search}`)
                        setData({ ...data })
                  }

            }).catch((err) => {
                  console.log(err);
                  setData({ ...data })
            })
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      return (
            <React.Fragment>
                  <Container fixed>
                        <Box sx={{ height: '100vh' }}>
                              <Paper square style={{
                                    padding: '1cm',
                                    margin: '1cm'
                              }}>
                                    <Grid
                                          container
                                          direction="column"
                                          justifyContent="flex-start"
                                          alignItems="center"
                                    >
                                          <Grid item style={{
                                                width: "100%"
                                          }}>
                                                <Grid
                                                      container
                                                      direction="row"
                                                      justifyContent="flex-end"
                                                      alignItems="flex-start"
                                                      spacing={0}
                                                >
                                                      <Grid item sm={12}>
                                                            <Grid
                                                                  container
                                                                  direction="column"
                                                                  justifyContent="flex-end"
                                                                  alignItems="flex-end"
                                                                  spacing={0}
                                                            >
                                                                  <Grid item >
                                                                        <NativeInput
                                                                              value={data.turns}
                                                                              onChange={(evt) => {
                                                                                    setData({
                                                                                          ...data,
                                                                                          turns: evt.target.value
                                                                                    })
                                                                              }}
                                                                              startText="ผลัดที่" style={{
                                                                                    width: 120
                                                                              }}></NativeInput>
                                                                  </Grid>
                                                                  <Grid item >
                                                                        <NativeSelectInput
                                                                              value={data.office_type}
                                                                              onChange={(evt) => {
                                                                                    setData({
                                                                                          ...data,
                                                                                          office_type: evt.target.value
                                                                                    })
                                                                              }}
                                                                        >
                                                                              <option value="0">ร้อย.บก</option>
                                                                        </NativeSelectInput>
                                                                  </Grid>
                                                            </Grid>
                                                      </Grid>
                                                </Grid>
                                          </Grid>
                                          <Grid item >
                                                <h3>ประวัติพลทหาร</h3>
                                          </Grid>
                                          <Grid item >
                                                <div style={{
                                                      width: '3cm',
                                                      height: '3.5cm',
                                                      position: 'relative'
                                                }}>
                                                      <Avatar
                                                            src={`${data.image}`}
                                                            variant="square" style={{
                                                                  width: '3cm',
                                                                  height: '3.5cm'
                                                            }}>

                                                      </Avatar>
                                                      <label htmlFor="icon-button-file" style={{
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            right: 0,
                                                      }}>
                                                            <InputUploadPhoto accept="image/*" id="icon-button-file" type="file" onChange={(evt) => {

                                                                  var reader = new FileReader();
                                                                  var file = evt.target.files[0];

                                                                  reader.onload = function (upload) {
                                                                        setData({
                                                                              ...data,
                                                                              image: upload.target.result

                                                                        });
                                                                  };
                                                                  reader.readAsDataURL(file);
                                                            }} />
                                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                                  <PhotoCamera />
                                                            </IconButton>
                                                      </label>
                                                </div>
                                          </Grid>
                                          <Grid item style={{
                                                width: "100%"
                                          }} >
                                                <Grid
                                                      container
                                                      direction="column"
                                                      justifyContent="flex-start"
                                                      alignItems="flex-start"
                                                >
                                                      <Grid item sm={12} style={{
                                                            width: '100%'
                                                      }} >
                                                            <h4>1. ประวัติส่วนตัว</h4>
                                                            <Grid
                                                                  container
                                                                  direction="column"
                                                                  justifyContent="flex-start"
                                                                  alignItems="flex-start"
                                                                  style={{
                                                                        paddingLeft: 5
                                                                  }}
                                                            >
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={2}>
                                                                                    <NativeSelectInput
                                                                                          startText="ยศ"
                                                                                          value={`${data.rank_type}`}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      rank_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                    >
                                                                                          <option value="0">พลฯ</option>
                                                                                    </NativeSelectInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.firstName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      firstName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ชื่อ"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.lastName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      lastName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="นามสกุล"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={2}>
                                                                                    <NativeInput
                                                                                          value={data.nickName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      nickName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ชื่อเล่น"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={2}>
                                                                                    <NativeSelectInput
                                                                                          startText="สังกัด"
                                                                                          value={`${data.affiliation_type}`}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      affiliation_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                    >
                                                                                          <option value="0">พัน.ร.มทบ.11</option>
                                                                                    </NativeSelectInput>

                                                                              </Grid>

                                                                        </Grid>
                                                                  </Grid>
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={5}>
                                                                                    <NativeInput
                                                                                          value={data.id}
                                                                                          startText="หมายเลขทหาร"
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      id: evt.target.value
                                                                                                })
                                                                                          }}></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={7}>
                                                                                    <NativeInput
                                                                                          value={data.id_number}
                                                                                          startText="หมายเลขประจำตัวประชาชน"
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      id_number: evt.target.value
                                                                                                })
                                                                                          }}></NativeInput>
                                                                              </Grid>
                                                                        </Grid>
                                                                  </Grid>
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }}>
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={5}>
                                                                                    {/* <NativeInput startText="วัน เดือน ปีเกิด"></NativeInput> */}
                                                                                    <LocalizedDatePicker
                                                                                          value={data.birthday}
                                                                                          startText="วัน เดือน ปีเกิด" onChange={(newDate) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      birthday: newDate
                                                                                                })
                                                                                          }}></LocalizedDatePicker>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeSelectInput
                                                                                          value={data.nationality_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      nationality_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="สัญชาติ"
                                                                                    // defaultValue="0"
                                                                                    >
                                                                                          <option value="0">ไทย</option>
                                                                                    </NativeSelectInput>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeSelectInput
                                                                                          value={data.religion_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      religion_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ศาสนา"
                                                                                          defaultValue="1"
                                                                                    >
                                                                                          <option value="0">-</option>
                                                                                          <option value="1">พุทธ</option>
                                                                                          <option value="2">คลิส</option>
                                                                                          <option value="3">อิสราม</option>
                                                                                          <option value="4">ฮินดู</option>
                                                                                    </NativeSelectInput>
                                                                              </Grid>
                                                                        </Grid>

                                                                  </Grid>
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }}>
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={1}
                                                                        >
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.height}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      height: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ส่วนสูง" endText="ซม."></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.weight}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      weight: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="น้ำหนัก" endText="กก."></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeSelectInput
                                                                                          value={data.blood_type}
                                                                                          startText="หมู่โลหิต"
                                                                                          // defaultValue="0"
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      blood_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                    >
                                                                                          <option value="0">-</option>
                                                                                          <option value="1">A</option>
                                                                                          <option value="2">B</option>
                                                                                          <option value="3">AB</option>
                                                                                          <option value="4">O</option>
                                                                                    </NativeSelectInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.bust_size}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      bust_size: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="รอบอก" endText="ซม."></NativeInput>
                                                                              </Grid>
                                                                        </Grid>
                                                                  </Grid>
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }}>
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.earmark}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      earmark: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ตำหนิ"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeSelectInput
                                                                                          value={data.person_status_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      person_status_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="สถานภาพ"
                                                                                    // defaultValue="1"
                                                                                    >
                                                                                          <option value="0">-</option>
                                                                                          <option value="1">โสด</option>
                                                                                          <option value="2">อย่าร้าง</option>
                                                                                          <option value="3">สมรส</option>
                                                                                    </NativeSelectInput>
                                                                              </Grid>

                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.phone}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      phone: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="โทรศัพท์"></NativeInput>
                                                                              </Grid>
                                                                        </Grid>
                                                                  </Grid>
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }}>
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={1}
                                                                        >
                                                                              <Grid item sm={5}>
                                                                                    <LocalizedDatePicker
                                                                                          value={data.entered_service_on}
                                                                                          onChange={(newDate) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      entered_service_on: newDate
                                                                                                })
                                                                                          }}
                                                                                          startText="เข้าประจำการเมื่อวันที่"></LocalizedDatePicker>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeSelectInput
                                                                                          value={data.period_of_service_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      period_of_service_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ระยะเวลารับราชการ"
                                                                                    // defaultValue="2"
                                                                                    >
                                                                                          <option value="0">6 เดือน</option>
                                                                                          <option value="1">1 ปี</option>
                                                                                          <option value="2">2 ปี</option>
                                                                                          <option value="3">3 ปี</option>
                                                                                          <option value="4">4 ปี</option>
                                                                                          <option value="5">5 ปี</option>
                                                                                    </NativeSelectInput>

                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <RowRadioButtonsGroup
                                                                                          value={data.how_to_submit_a_request_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      how_to_submit_a_request_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          name="history-profile"
                                                                                          // defaultValue="0"
                                                                                          data={[
                                                                                                { value: "0", label: "ไม่ร้องขอ" },
                                                                                                { value: "1", label: "ร้องขอ" }

                                                                                          ]}></RowRadioButtonsGroup>
                                                                              </Grid>
                                                                        </Grid>
                                                                  </Grid>
                                                            </Grid>
                                                      </Grid>

                                                      <Grid item sm={12} style={{
                                                            width: '100%'
                                                      }} >
                                                            <h4>2. ที่อยู่ตามทะเบียนบ้าน</h4>
                                                            <Grid
                                                                  container
                                                                  direction="column"
                                                                  justifyContent="flex-start"
                                                                  alignItems="flex-start"
                                                                  style={{
                                                                        paddingLeft: 5
                                                                  }}
                                                            >
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >

                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.house_number}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      house_number: evt.target.value
                                                                                                })
                                                                                          }} startText="เลขที่"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.village}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      village: evt.target.value
                                                                                                })
                                                                                          }} startText="หมู่ที่"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.village_name}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      village_name: evt.target.value
                                                                                                })
                                                                                          }} startText="ซอย/หมู่บ้าน"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.road_name}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      road_name: evt.target.value
                                                                                                })
                                                                                          }} startText="ถนน"></NativeInput>
                                                                              </Grid>

                                                                        </Grid>
                                                                  </Grid>
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.canton_name}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      canton_name: evt.target.value
                                                                                                })
                                                                                          }} startText="แขวง/ตำบล"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.district_name}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      district_name: evt.target.value
                                                                                                })
                                                                                          }} startText="เขต/อำเภอ"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.province_name}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      province_name: evt.target.value
                                                                                                })
                                                                                          }} startText="จังหวัด"></NativeInput>
                                                                              </Grid>
                                                                        </Grid>
                                                                  </Grid>
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }}>
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={6}>
                                                                                    <NativeInput
                                                                                          value={data.zip_code}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      zip_code: evt.target.value
                                                                                                })
                                                                                          }
                                                                                          }
                                                                                          startText="รหัสไปรษณีย์"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={6}>
                                                                                    <NativeInput
                                                                                          value={data.government_offices_nearby}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      government_offices_nearby: evt.target.value
                                                                                                })
                                                                                          }
                                                                                          } startText="สถานที่ราชการใกล้เคียง"></NativeInput>
                                                                              </Grid>
                                                                        </Grid>

                                                                  </Grid>

                                                            </Grid>
                                                      </Grid>

                                                      <Grid item sm={12} style={{
                                                            width: '100%'
                                                      }} >
                                                            <h4>3. บุคคลที่สามารถติดต่อได้ (เพื่อนสนิด ญาติ หรือแฟน)</h4>
                                                            <Grid
                                                                  container
                                                                  direction="column"
                                                                  justifyContent="flex-start"
                                                                  alignItems="flex-start"
                                                                  style={{
                                                                        paddingLeft: 5
                                                                  }}
                                                            >
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.person_who_can_be_contacted_firstName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      person_who_can_be_contacted_firstName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ชื่อ"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.person_who_can_be_contacted_lastName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      person_who_can_be_contacted_lastName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="นามสกุล"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeSelectInput
                                                                                          value={data.person_who_can_be_contacted_relationship_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      person_who_can_be_contacted_relationship_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ความสัมพันธ์"
                                                                                    // defaultValue="0"
                                                                                    >
                                                                                          <option value="0">-</option>
                                                                                          <option value="1">บิดา</option>
                                                                                          <option value="2">มารดา</option>
                                                                                          <option value="3">ญาติ</option>
                                                                                          <option value="4">เพื่อนสนิด</option>
                                                                                          <option value="5">แฟน</option>
                                                                                    </NativeSelectInput>

                                                                              </Grid>
                                                                              <Grid item sm={3}>
                                                                                    <NativeInput
                                                                                          value={data.person_who_can_be_contacted_phone}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      person_who_can_be_contacted_phone: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="โทรศัพท์"></NativeInput>
                                                                              </Grid>

                                                                        </Grid>
                                                                  </Grid>

                                                            </Grid>
                                                      </Grid>

                                                      <Grid item sm={12} style={{
                                                            width: '100%'
                                                      }}>
                                                            <h4>4. ประวัติครอบครัว</h4>
                                                            <Grid
                                                                  container
                                                                  direction="column"
                                                                  justifyContent="flex-start"
                                                                  alignItems="flex-start"
                                                                  style={{
                                                                        paddingLeft: 5
                                                                  }}
                                                            >
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.father_firstName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      father_firstName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ชื่อบิดา"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.father_lastName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      father_lastName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="นามสกุล"></NativeInput>
                                                                              </Grid>

                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.father_phone}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      father_phone: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="โทรศัพท์"></NativeInput>
                                                                              </Grid>

                                                                        </Grid>
                                                                  </Grid>

                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={4}>
                                                                                    <RowRadioButtonsGroup
                                                                                          value={data.father_life_status_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      father_life_status_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          name="status-profile"
                                                                                          defaultValue="1"
                                                                                          data={[
                                                                                                { value: "0", label: "ถึงแก่กรรม" },
                                                                                                { value: "1", label: "มีชีวิต" }

                                                                                          ]}></RowRadioButtonsGroup>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.father_occupation}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      father_occupation: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="อาชีพ"></NativeInput>
                                                                              </Grid>


                                                                              <Grid item sm={4}>
                                                                                    <NativeSelectInput
                                                                                          value={data.father_status_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      father_status_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="สถานภาพ"
                                                                                    // defaultValue="3"
                                                                                    >
                                                                                          <option value="0">-</option>
                                                                                          <option value="1">โสด</option>
                                                                                          <option value="2">อย่าร้าง</option>
                                                                                          <option value="3">สมรส</option>
                                                                                    </NativeSelectInput>
                                                                              </Grid>

                                                                        </Grid>
                                                                  </Grid>

                                                            </Grid>

                                                            <Grid
                                                                  container
                                                                  direction="column"
                                                                  justifyContent="flex-start"
                                                                  alignItems="flex-start"
                                                                  style={{
                                                                        paddingLeft: 5
                                                                  }}
                                                            >
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.mother_firstName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      mother_firstName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ชื่อมารดา"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.mother_lastName}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      mother_lastName: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="นามสกุล"></NativeInput>
                                                                              </Grid>

                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.mother_phone}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      mother_phone: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="โทรศัพท์"></NativeInput>
                                                                              </Grid>

                                                                        </Grid>
                                                                  </Grid>

                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={4}>
                                                                                    <RowRadioButtonsGroup
                                                                                          value={data.mother_life_status_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      mother_life_status_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          name="status-profile"
                                                                                          // defaultValue="1"
                                                                                          data={[
                                                                                                { value: "0", label: "ถึงแก่กรรม" },
                                                                                                { value: "1", label: "มีชีวิต" }

                                                                                          ]}></RowRadioButtonsGroup>
                                                                              </Grid>
                                                                              <Grid item sm={4}>
                                                                                    <NativeInput
                                                                                          value={data.mother_occupation}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      mother_occupation: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="อาชีพ"></NativeInput>
                                                                              </Grid>


                                                                              <Grid item sm={4}>
                                                                                    <NativeSelectInput
                                                                                          value={data.mother_status_type}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      mother_status_type: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="สถานภาพ"
                                                                                    // defaultValue="3"
                                                                                    >
                                                                                          <option value="0">-</option>
                                                                                          <option value="1">โสด</option>
                                                                                          <option value="2">อย่าร้าง</option>
                                                                                          <option value="3">สมรส</option>
                                                                                    </NativeSelectInput>
                                                                              </Grid>

                                                                        </Grid>
                                                                  </Grid>

                                                            </Grid>
                                                      </Grid>

                                                      <Grid item sm={12} style={{
                                                            width: '100%'
                                                      }} >
                                                            <h4>5. ประวัติการศึกษา / ทำงาน</h4>
                                                            <Grid
                                                                  container
                                                                  direction="column"
                                                                  justifyContent="flex-start"
                                                                  alignItems="flex-start"
                                                                  style={{
                                                                        paddingLeft: 5
                                                                  }}
                                                            >
                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={6}>
                                                                                    <NativeInput
                                                                                          value={data.graduated_grade_level}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      graduated_grade_level: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="จบการศึกระดับชั้น"></NativeInput>
                                                                              </Grid>
                                                                              <Grid item sm={6}>
                                                                                    <NativeInput
                                                                                          value={data.graduated_grade_level_from}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      graduated_grade_level_from: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="จาก"></NativeInput>
                                                                              </Grid>


                                                                        </Grid>
                                                                  </Grid>

                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={12}>
                                                                                    <NativeInput
                                                                                          value={data.occupation_before_government_service}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      occupation_before_government_service: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="อาชีพก่อนรับราชการ"></NativeInput>
                                                                              </Grid>


                                                                        </Grid>
                                                                  </Grid>

                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={12}>
                                                                                    <NativeInput
                                                                                          value={data.personal_ability}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      personal_ability: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                          startText="ความสามารถส่วนตัว"></NativeInput>
                                                                              </Grid>


                                                                        </Grid>
                                                                  </Grid>
                                                            </Grid>
                                                      </Grid>

                                                      <Grid item sm={12} style={{
                                                            width: '100%'
                                                      }} >
                                                            <h4>6. ข้อมูลทางการแพทย์ (โรคประจำตัว, ยาเสพติด, ภูมิแพ้, ผ่าตัด)</h4>
                                                            <Grid
                                                                  container
                                                                  direction="column"
                                                                  justifyContent="flex-start"
                                                                  alignItems="flex-start"
                                                                  style={{
                                                                        paddingLeft: 5
                                                                  }}
                                                            >


                                                                  <Grid item sm={12} style={{
                                                                        width: '100%'
                                                                  }} >
                                                                        <Grid
                                                                              container
                                                                              direction="row"
                                                                              justifyContent="flex-start"
                                                                              alignItems="flex-start"
                                                                              spacing={0}
                                                                        >
                                                                              <Grid item sm={12}>
                                                                                    <NativeInput
                                                                                          value={data.medical_information}
                                                                                          onChange={(evt) => {
                                                                                                setData({
                                                                                                      ...data,
                                                                                                      medical_information: evt.target.value
                                                                                                })
                                                                                          }}
                                                                                    ></NativeInput>
                                                                              </Grid>


                                                                        </Grid>
                                                                  </Grid>


                                                            </Grid>
                                                      </Grid>
                                                </Grid>

                                          </Grid>

                                          <Grid item style={{
                                                padding: 25
                                          }}>
                                                <Divider></Divider>

                                                <Button variant="contained" onClick={updateData(data)}>ลบ</Button>

                                          </Grid>

                                    </Grid>


                              </Paper>
                        </Box>
                  </Container>
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