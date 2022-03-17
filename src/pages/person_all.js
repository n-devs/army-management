import * as React from 'react';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { api } from './../api';
import Avatar from '@mui/material/Avatar';
// import { InboxIcon } from '@mui/icons-material/MoveToInbox';


export default function ExportDefaultToolbar() {

      const [columns, setColumns] = React.useState([])
      const [loading, setLoading] = React.useState(true)

      const [rows, setRows] = React.useState([])
      React.useEffect(() => {

            

            api.get('/api/employees_field').then((res) => {
                  // console.log(res.data);
                  // setNewData(res.data)
                  const newColumns = [];

                  // eslint-disable-next-line array-callback-return
                  res.data.map((val, key, arr) => {

                              if (key === (arr.length - 1)) {
                                    console.log(newColumns);

                                    // console.log(key, arr.length - 1);
                                    api.get('/api/employees').then((resData) => {
                                          // console.log(res.data);
                                          // setNewData(res.data)
                                          if (resData.data.length !== 0) {
                                                const newData = [];

                                                // eslint-disable-next-line array-callback-return
                                                resData.data.map((valData, keyData, arrData) => {
                                                      newData.push({ number: 1 + keyData, ...valData });
                                                      if (keyData === (arrData.length - 1)) {
                                                            let sorttest2 = newColumns.sort((a, b) => (a.id < b.id ? -1 : Number(a.id > b.id)));

                                                            setColumns(sorttest2);
                                                            setRows(newData);
                                                            setLoading(false);
                                                      }
                                                });
                                          } else {
                                                let sorttest2 = newColumns.sort((a, b) => (a.id < b.id ? -1 : Number(a.id > b.id)));

                                                setColumns(sorttest2);
                                                setLoading(false);
                                          }


                                    });
                              } else if (val.field === "number") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value}</p>,
                                    });
                                    // console.log(key);
                              } else if (val.field === "image") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <Avatar src={params.value} variant="square"></Avatar>,
                                    });
                                    // console.log(key);
                              } else if (val.field === "id") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value}</p>,
                                    });
                                    // console.log(key);
                              } else if (val.field === "id_number") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value}</p>,
                                    });
                                    // console.log(key);
                              } else if (val.field === "rank_type") {
                                    api.get(`/api/rank_type`).then((resField) => {
                                          newColumns.push({
                                                id: 1 + key,
                                                ...val,


                                                renderCell: (params) => {


                                                      let result = resField.data.find(({ id }) => id === params.value);
                                                      console.log(result);
                                                      return <p>{result.headerName}</p>;


                                                }
                                          });
                                    });

                              } else if (val.field === "firstName") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value}</p>,
                                    });

                              } else if (val.field === "lastName") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value}</p>,
                                    });

                              } else if (val.field === "nickName") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value}</p>,
                                    });

                              } else if (val.field === "turns") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value}</p>,
                                    });

                              } else if (val.field === "period_of_service_type") {
                                    api.get(`/api/period_of_service_type`).then((resField) => {
                                          newColumns.push({
                                                id: 1 + key,
                                                ...val,


                                                renderCell: (params) => {


                                                      let result = resField.data.find(({ id }) => id === params.value);
                                                      console.log(result);
                                                      return <p>{result.headerName}</p>;


                                                }
                                          });
                                    });

                              } else if (val.field === "how_to_submit_a_request_type") {
                                    api.get(`/api/how_to_submit_a_request_type`).then((resField) => {
                                          newColumns.push({
                                                id: 1 + key,
                                                ...val,


                                                renderCell: (params) => {


                                                      let result = resField.data.find(({ id }) => id === params.value);
                                                      console.log(result);
                                                      return <p>{result.headerName}</p>;


                                                }
                                          });
                                    });

                              } else if (val.field === "entered_service_on") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => {
                                                let newDate = new Date(params.value);
                                                let getMonth = 1 + newDate.getMonth();
                                                let getFullYear = newDate.getFullYear();
                                                return (<p>{newDate.getDate() + "/" + getMonth + "/" + getFullYear}</p>);
                                          }
                                    });

                              } else if (val.field === "affiliation_type") {
                                    api.get(`/api/affiliation_type`).then((resField) => {
                                          newColumns.push({
                                                id: 1 + key,
                                                ...val,


                                                renderCell: (params) => {


                                                      let result = resField.data.find(({ id }) => id === params.value);
                                                      console.log(result);
                                                      return <p>{result.headerName}</p>;


                                                }
                                          });
                                    });

                              } else if (val.field === "phone") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value}</p>,
                                    });

                              } else if (val.field === "birthday") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => {
                                                let newDate = new Date(params.value);
                                                let getMonth = 1 + newDate.getMonth();
                                                let getFullYear = newDate.getFullYear();
                                                return (<p>{newDate.getDate() + "/" + getMonth + "/" + getFullYear}</p>);
                                          }
                                    });

                              } else if (val.field === "nationality_type") {
                                    api.get(`/api/nationality_type`).then((resField) => {
                                          newColumns.push({
                                                id: 1 + key,
                                                ...val,


                                                renderCell: (params) => {


                                                      let result = resField.data.find(({ id }) => id === params.value);
                                                      console.log(result);
                                                      return <p>{result.headerName}</p>;


                                                }
                                          });
                                    });

                              } else if (val.field === "religion_type") {
                                    api.get(`/api/religion_type`).then((resField) => {
                                          newColumns.push({
                                                id: 1 + key,
                                                ...val,


                                                renderCell: (params) => {


                                                      let result = resField.data.find(({ id }) => id === params.value);
                                                      console.log(result);
                                                      return <p>{result.headerName}</p>;


                                                }
                                          });
                                    });

                              } else if (val.field === "person_status_type") {
                                    api.get(`/api/person_status_type`).then((resField) => {
                                          newColumns.push({
                                                id: 1 + key,
                                                ...val,


                                                renderCell: (params) => {


                                                      let result = resField.data.find(({ id }) => id === params.value);
                                                      console.log(result);
                                                      return <p>{result.headerName}</p>;


                                                }
                                          });
                                    });

                              } else if (val.field === "blood_type") {
                                    api.get(`/api/blood_type`).then((resField) => {
                                          newColumns.push({
                                                id: 1 + key,
                                                ...val,


                                                renderCell: (params) => {


                                                      let result = resField.data.find(({ id }) => id === params.value);
                                                      console.log(result);
                                                      return <p>{result.headerName}</p>;


                                                }
                                          });
                                    });

                              } else if (val.field === "height") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value} {"ซม."}</p>
                                    });

                              } else if (val.field === "weight") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value} {"กก."}</p>
                                    });

                              } else if (val.field === "bust_size") {
                                    newColumns.push({
                                          id: 1 + key,
                                          ...val,


                                          renderCell: (params) => <p>{params.value} {"ซม."}</p>
                                    });
                                    // console.log(key);
                              }
                        })


            })


      }, [])

      return (
            <div style={{ height: "100%", width: "96%" }}>
                  <DataGrid columns={columns} rows={rows} loading={loading} components={{ Toolbar: GridToolbar }} />
            </div>
      );
}
