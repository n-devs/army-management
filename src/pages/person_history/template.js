import { api } from '../../api';

const template = new Promise((resolve, reject) => {

      api.get(`/employees${window.location.search}`).then((res_employee) => {
            // console.log(res.data);
            if (res_employee.data.length !== 0) {
                  const employeeData = res_employee.data[0];

                  api.get(`/employees_field`).then((res_employeeType) => {



                        const employeeType = res_employeeType.data;
                        // console.log(employeeType);
                        const dateBirthday = new Date(employeeData[`${employeeType[14].field}`]);
                        const monthType = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]

                        const newDateBirthday = `${dateBirthday.getDate()} ${monthType[dateBirthday.getMonth()]} ${543 + dateBirthday.getFullYear()}`

                        const phoneText = employeeData[`phone`]
                        const myArrayPhone = phoneText.split("");
                        const phone = `${myArrayPhone[0]}${myArrayPhone[1]}${myArrayPhone[2]} ${myArrayPhone[3]}${myArrayPhone[4]}${myArrayPhone[5]} ${myArrayPhone[6]}${myArrayPhone[7]}${myArrayPhone[8]}${myArrayPhone[9]}`;

                        const personWhoCanBeContactedPhoneText = employeeData[`person_who_can_be_contacted_phone`]
                        const myArrayPersonWhoCanBeContactedPhoneText = personWhoCanBeContactedPhoneText.split("");
                        const personWhoCanBeContactedPhone = `${myArrayPersonWhoCanBeContactedPhoneText[0]}${myArrayPersonWhoCanBeContactedPhoneText[1]}${myArrayPersonWhoCanBeContactedPhoneText[2]} ${myArrayPersonWhoCanBeContactedPhoneText[3]}${myArrayPersonWhoCanBeContactedPhoneText[4]}${myArrayPersonWhoCanBeContactedPhoneText[5]} ${myArrayPersonWhoCanBeContactedPhoneText[6]}${myArrayPersonWhoCanBeContactedPhoneText[7]}${myArrayPersonWhoCanBeContactedPhoneText[8]}${myArrayPersonWhoCanBeContactedPhoneText[9]}`;

                        const fatherPhoneText = employeeData[`father_phone`]
                        const myArrayFatherPhoneText = fatherPhoneText.split("");
                        const fatherPhone = `${myArrayFatherPhoneText[0]}${myArrayFatherPhoneText[1] !== true ? "" : myArrayFatherPhoneText[1]}${myArrayFatherPhoneText[2] !== true ? "" : myArrayFatherPhoneText[2]} ${myArrayFatherPhoneText[3] !== true ? "" : myArrayFatherPhoneText[3]}${myArrayFatherPhoneText[4] !== true ? "" : myArrayFatherPhoneText[4]}${myArrayFatherPhoneText[5] !== true ? "" : myArrayFatherPhoneText[5]} ${myArrayFatherPhoneText[6] !== true ? "" : myArrayFatherPhoneText[6]}${myArrayFatherPhoneText[7] !== true ? "" : myArrayFatherPhoneText[7]}${myArrayFatherPhoneText[8] !== true ? "" : myArrayFatherPhoneText[8]}${myArrayFatherPhoneText[9] !== true ? "" : myArrayFatherPhoneText[9]}`;

                        const motherPhoneText = employeeData[`mother_phone`]
                        const myArrayMotherPhoneText = motherPhoneText.split("");
                        const motherPhone = `${myArrayMotherPhoneText[0]}${myArrayMotherPhoneText[1] !== true ? "" : myArrayMotherPhoneText[1]}${myArrayMotherPhoneText[2] !== true ? "" : myArrayMotherPhoneText[2]} ${myArrayMotherPhoneText[3] !== true ? "" : myArrayMotherPhoneText[3]}${myArrayMotherPhoneText[4] !== true ? "" : myArrayMotherPhoneText[4]}${myArrayMotherPhoneText[5] !== true ? "" : myArrayMotherPhoneText[5]} ${myArrayMotherPhoneText[6] !== true ? "" : myArrayMotherPhoneText[6]}${myArrayMotherPhoneText[7] !== true ? "" : myArrayMotherPhoneText[7]}${myArrayMotherPhoneText[8] !== true ? "" : myArrayMotherPhoneText[8]}${myArrayMotherPhoneText[9] !== true ? "" : myArrayMotherPhoneText[9]}`;

                        const dateEnteredServiceOn = new Date(employeeData[`entered_service_on`]);
                        const newDateEnteredServiceOn = `${dateEnteredServiceOn.getDate()} ${monthType[dateEnteredServiceOn.getMonth()]} ${543 + dateEnteredServiceOn.getFullYear()}`;

                        var obj = {
                              "sections": [{
                                    "sectionFormat": {
                                          "pageWidth": 595.2999877929688,
                                          "pageHeight": 841.9000244140625,
                                          "leftMargin": 85.05000305175781,
                                          "rightMargin": 56.70000076293945,
                                          "topMargin": 42.54999923706055,
                                          "bottomMargin": 28.399999618530273,
                                          "differentFirstPage": false,
                                          "differentOddAndEvenPages": false,
                                          "headerDistance": 36,
                                          "footerDistance": 70.30000305175781,
                                          "bidi": false
                                    },
                                    "blocks": [
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "textAlignment": "Center",
                                                      "afterSpacing": 0,
                                                      "styleName": "Normal",
                                                      "listFormat": {}
                                                },
                                                "characterFormat": {
                                                      "fontSize": 12,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 12,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 16,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 16,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ประวัติพลทหาร"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "textAlignment": "Center",
                                                      "afterSpacing": 0,
                                                      "styleName": "Normal",
                                                      "listFormat": {}
                                                },
                                                "characterFormat": {
                                                      "fontSize": 16,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 16,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {},
                                                      "imageString": employeeData[`${employeeType[1].field}`],
                                                      "isMetaFile": false,
                                                      "width": 67.5,
                                                      "height": 87.75,
                                                      "iscrop": false,
                                                      "name": employeeType[1].headerName,
                                                      "visible": true,
                                                      "widthScale": 100.12136,
                                                      "heightScale": 100.04664,
                                                      "verticalPosition": 0.7,
                                                      "verticalOrigin": "Paragraph",
                                                      "verticalAlignment": "None",
                                                      "horizontalPosition": 196.95,
                                                      "horizontalOrigin": "Margin",
                                                      "horizontalAlignment": "None",
                                                      "allowOverlap": true,
                                                      "textWrappingStyle": "InFrontOfText",
                                                      "textWrappingType": "Both",
                                                      "layoutInCell": true,
                                                      "zOrderPosition": 251661312
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "textAlignment": "Center",
                                                      "afterSpacing": 0,
                                                      "styleName": "Normal",
                                                      "listFormat": {}
                                                },
                                                "characterFormat": {
                                                      "fontSize": 16,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 16,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": []
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "Normal",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 285,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 303,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 16,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 16,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 16,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 16,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "Normal",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 285,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 303,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 16,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 16,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": []
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "Normal",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 285,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 303,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 16,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 16,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 16,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 16,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {},
                                                      "bookmarkType": 0,
                                                      "name": "_Hlk93849440"
                                                },
                                                {
                                                      "characterFormat": {},
                                                      "bookmarkType": 1,
                                                      "name": "_Hlk93849440"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 14.149999618530273,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 155.89999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 212.60000610351562,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 311.8500061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "bold": true,
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "boldBidi": true,
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๑."
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ประวัติส่วนตัว"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 255.10000610351562,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 340.20001220703125,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[5].headerName,
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeData[`${employeeType[4].field}`] === "0" ? "พลฯ" : ""
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "           "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeData[`${employeeType[5].field}`]
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "    "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeData[`${employeeType[6].field}`]
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[7].headerName,
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "       "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeData[`${employeeType[7].field}`]
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[12].headerName,
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "      "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeData[`${employeeType[12].field}`] === "0" ? "พัน.ร.มทบ.๑๑" : ""
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 283.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[3].headerName,
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `       ${employeeData[`${employeeType[3].field}`]}       `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[14].headerName
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `     ${newDateBirthday} `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 113.4000015258789,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 198.39999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 262.25,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 283.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 354.3500061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 375.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[15].headerName
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "        "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`${employeeType[15].field}`] === "0" ? "ไทย" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[16].headerName
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "      "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`${employeeType[16].field}`] === "0" ? "-" : employeeData[`${employeeType[16].field}`] === "1" ? "พุทธ" : employeeData[`${employeeType[16].field}`] === "2" ? "คลิส" : employeeData[`${employeeType[16].field}`] === "3" ? "อิสราม" : employeeData[`${employeeType[16].field}`] === "4" ? "ฮินดู" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[19].headerName
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `    ${employeeData[`${employeeType[19].field}`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ซม"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "."
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[20].headerName
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `     ${employeeData[`${employeeType[20].field}`]}     `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "กก"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "."
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[18].headerName
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `      ${employeeData[`${employeeType[18].field}`] === "0" ? "-" : employeeData[`${employeeType[18].field}`] === "1" ? "A" : employeeData[`${employeeType[18].field}`] === "2" ? "B" : employeeData[`${employeeType[18].field}`] === "3" ? "AB" : employeeData[`${employeeType[18].field}`] === "4" ? "O" : "?"}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 170.10000610351562,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 191.35000610351562,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 361.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": employeeType[21].headerName
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `               ${employeeData[`${employeeType[21].field}`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ซม"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "."
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ตำหนิ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "                "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`earmark`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "สถานภาพ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "     "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`person_status_type`] === "0" ? "-" : employeeData[`person_status_type`] === "1" ? "โสด" : employeeData[`person_status_type`] === "2" ? "อย่าร้าง" : employeeData[`person_status_type`] === "3" ? "สมรส" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 226.8000030517578,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "โทรศัพท์"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `           ${phone} `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "เข้าประจำการเมื่อวันที่"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `      ${newDateEnteredServiceOn}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 12,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 184.3000030517578,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 297.70001220703125,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 311.8500061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 368.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ระยะเวลารับราชการ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `     ${employeeData[`period_of_service_type`]}    `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ปี"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "( "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`how_to_submit_a_request_type`] === "0" ? "" : "P"}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " ) "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ร้องขอ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "( "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "Wingdings 2",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "Wingdings 2"
                                                      },
                                                      "text": `${employeeData[`how_to_submit_a_request_type`] === "0" ? "P" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " ) "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ไม่ร้องขอ"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 12,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 14.149999618530273,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 248.10000610351562,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๒."
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ที่อยู่ตามทะเบียนบ้าน"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 127.55000305175781,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 184.3000030517578,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 269.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 284.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 340.20001220703125,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "เลขที่"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `           ${employeeData[`house_number`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "หมู่ที่"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `      ${employeeData[`village`]}     `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ซอย"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "/"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "หมู่บ้าน"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `             ${employeeData[`village_name`]}            `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ถนน"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `             ${employeeData[`road_name`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 184.3000030517578,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 326,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "แขวง"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "/"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ตำบล"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "        "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`canton_name`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "    "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "เขต"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "/"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "อำเภอ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "           "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`district_name`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "จังหวัด"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "      "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`province_name`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "   "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 184.3000030517578,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "รหัสไปรษณีย์"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `           ${employeeData[`zip_code`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "สถานที่ราชการใกล้เคียง"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "          "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`government_offices_nearby`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 14.149999618530273,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 198.39999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "bold": true,
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "boldBidi": true,
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๓. "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "บุคคลที่สามารถติดต่อได้"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " ("
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "เพื่อนสนิท"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ญาติ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "หรือแฟน"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": ")"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 7.050000190734863,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 198.39999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 311.8500061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ชื่อ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "              "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`person_who_can_be_contacted_firstName`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "  "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`person_who_can_be_contacted_lastName`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ความสัมพันธ์"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "         "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`person_who_can_be_contacted_relationship_type`] === "0" ? "-" : employeeData[`person_who_can_be_contacted_relationship_type`] === "1" ? "บิดา" : employeeData[`person_who_can_be_contacted_relationship_type`] === "2" ? "มารดา" : employeeData[`person_who_can_be_contacted_relationship_type`] === "3" ? "ญาติ" : employeeData[`person_who_can_be_contacted_relationship_type`] === "4" ? "เพื่อนสนิด" : employeeData[`person_who_can_be_contacted_relationship_type`] === "5" ? "แฟน" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "              "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "โทรศัพท์"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `    ${personWhoCanBeContactedPhone}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 198.39999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 347.25,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "bold": true,
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "boldBidi": true,
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๔. "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ประวัติครอบครัว"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 7.050000190734863,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 311.8500061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๔.๑ "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ชื่อบิดา"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "          "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`father_firstName`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "  "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`father_lastName`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "โทรศัพท์"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `           ${fatherPhone}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 99.25,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 198.39999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 347.25,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "( "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "Wingdings 2",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "Wingdings 2"
                                                      },
                                                      "text": `${employeeData[`father_life_status_type`] === "1" ? "P" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " ) "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "มีชีวิต"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "( "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "Wingdings 2",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "Wingdings 2"
                                                      },
                                                      "text": `${employeeData[`father_life_status_type`] === "0" ? "P" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " ) "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ถึงแก่กรรม"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "อาชีพ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "     "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`father_occupation`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "สถานภาพ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "      "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`father_status_type`] === "0" ? "-" : employeeData[`father_status_type`] === "1" ? "โสด" : employeeData[`father_status_type`] === "2" ? "อย่าร้าง" : employeeData[`father_status_type`] === "3" ? "สมรส" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 7.050000190734863,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 311.8500061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๔.๒ "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ชื่อมารดา"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "       "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`mother_firstName`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "  "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`mother_lastName`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "โทรศัพท์"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `      ${motherPhone}       `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 99.25,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 198.39999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 347.25,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.5,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "( "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "Wingdings 2",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "Wingdings 2"
                                                      },
                                                      "text": `${employeeData[`mother_life_status_type`] === "1" ? "P" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " ) "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "มีชีวิต"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "( "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "Wingdings 2",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "Wingdings 2"
                                                      },
                                                      "text": `${employeeData[`mother_life_status_type`] === "0" ? "P" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " ) "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ถึงแก่กรรม"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "อาชีพ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "     "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`mother_occupation`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "          "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "สถานภาพ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `    ${employeeData[`mother_status_type`] === "0" ? "-" : employeeData[`mother_status_type`] === "1" ? "โสด" : employeeData[`mother_status_type`] === "2" ? "อย่าร้าง" : employeeData[`mother_status_type`] === "3" ? "สมรส" : ""}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " "
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "Normal",
                                                      "listFormat": {}
                                                },
                                                "characterFormat": {
                                                      "bold": true,
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "boldBidi": true,
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๕. "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ประวัติการศึกษา"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " / "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ทำงาน"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 7.050000190734863,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 134.64999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 198.39999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๕.๑"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "จบการศึกษาระดับชั้น"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "          "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`graduated_grade_level`]} `
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "จาก"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "      "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`graduated_grade_level_from`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 7.050000190734863,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 134.64999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๕.๒"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "อาชีพก่อนรับราชการ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "           "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`occupation_before_government_service`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 7.050000190734863,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 134.64999389648438,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "bold": true,
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "boldBidi": true,
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๕.๓"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ความสามารถส่วนตัว"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `           ${employeeData[`personal_ability`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "leftIndent": 0,
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "List Paragraph",
                                                      "listFormat": {}
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "๖. "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "boldBidi": true,
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ข้อมูลทางการแพทย์"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": " ("
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "โรคป"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ระจำตัว"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": ","
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ยาเสพติด"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": ","
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ภูมิแพ้"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": ","
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ผ่าตัด"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": ")"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 0,
                                                      "styleName": "Normal",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 28.350000381469727,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 453.6000061035156,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "            "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": `${employeeData[`medical_information`]}`
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "Normal",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 205.5500030517578,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 382.75,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ลงชื่อ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "     "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "เจ้าของประวัติ"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "Normal",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 205.5500030517578,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 382.75,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ลงชื่อ"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "     "
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "ผู้สอบประวัติ"
                                                }]
                                          },
                                          {
                                                "paragraphFormat": {
                                                      "rightIndent": -7.150000095367432,
                                                      "afterSpacing": 6,
                                                      "styleName": "Normal",
                                                      "listFormat": {},
                                                      "tabs": [{
                                                            "position": 226.8000030517578,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      },
                                                      {
                                                            "position": 382.75,
                                                            "deletePosition": 0,
                                                            "tabJustification": "Left",
                                                            "tabLeader": "None"
                                                      }]
                                                },
                                                "characterFormat": {
                                                      "fontSize": 14,
                                                      "fontFamily": "TH SarabunPSK",
                                                      "underline": "Dotted",
                                                      "fontSizeBidi": 14,
                                                      "fontFamilyBidi": "TH SarabunPSK"
                                                },
                                                "inlines": [{
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "                 /              /"
                                                },
                                                {
                                                      "characterFormat": {
                                                            "fontSize": 14,
                                                            "fontFamily": "TH SarabunPSK",
                                                            "underline": "Dotted",
                                                            "fontSizeBidi": 14,
                                                            "fontFamilyBidi": "TH SarabunPSK"
                                                      },
                                                      "text": "\t"
                                                }]
                                          }
                                    ],
                                    "headersFooters": {
                                          "header": {
                                                "blocks": [
                                                      {
                                                            "paragraphFormat": {
                                                                  "textAlignment": "Right",
                                                                  "styleName": "Header",
                                                                  "listFormat": {}
                                                            },
                                                            "characterFormat": {
                                                                  "fontSize": 10,
                                                                  "fontFamily": "TH SarabunPSK",
                                                                  "fontSizeBidi": 10,
                                                                  "fontFamilyBidi": "TH SarabunPSK"
                                                            },
                                                            "inlines": [{
                                                                  "characterFormat": {
                                                                        "fontSize": 10,
                                                                        "fontFamily": "TH SarabunPSK",
                                                                        "fontSizeBidi": 10,
                                                                        "fontFamilyBidi": "TH SarabunPSK"
                                                                  },
                                                                  "text": "ผลัดที่"
                                                            },
                                                            {
                                                                  "characterFormat": {
                                                                        "fontSize": 10,
                                                                        "fontFamily": "TH SarabunPSK",
                                                                        "fontSizeBidi": 10,
                                                                        "fontFamilyBidi": "TH SarabunPSK"
                                                                  },
                                                                  "text": " "
                                                            },
                                                            {
                                                                  "characterFormat": {
                                                                        "fontSize": 10,
                                                                        "fontFamily": "TH SarabunIT๙",
                                                                        "fontSizeBidi": 10,
                                                                        "fontFamilyBidi": "TH SarabunIT๙"
                                                                  },
                                                                  "text": `${employeeData[`turns`]}`
                                                            },
                                                            {
                                                                  "characterFormat": {
                                                                        "fontSize": 10,
                                                                        "fontFamily": "TH SarabunPSK",
                                                                        "fontSizeBidi": 10,
                                                                        "fontFamilyBidi": "TH SarabunPSK"
                                                                  },
                                                                  "text": "\u000b"
                                                            },
                                                            {
                                                                  "characterFormat": {
                                                                        "fontSize": 10,
                                                                        "fontFamily": "TH SarabunPSK",
                                                                        "fontSizeBidi": 10,
                                                                        "fontFamilyBidi": "TH SarabunPSK"
                                                                  },
                                                                  "text": `${employeeData[`office_type`] === "0" ? "ร้อย.บก" : ""}`
                                                            },
                                                            {
                                                                  "characterFormat": {
                                                                        "fontSize": 10,
                                                                        "fontFamily": "TH SarabunPSK",
                                                                        "fontSizeBidi": 10,
                                                                        "fontFamilyBidi": "TH SarabunPSK"
                                                                  },
                                                                  "text": "."
                                                            }]
                                                      }]
                                          }
                                    }
                              }],
                              "characterFormat": {
                                    "bold": false,
                                    "italic": false,
                                    "fontSize": 11,
                                    "fontFamily": "Calibri",
                                    "underline": "None",
                                    "strikethrough": "None",
                                    "baselineAlignment": "Normal",
                                    "highlightColor": "NoColor",
                                    "fontColor": "#00000000",
                                    "boldBidi": false,
                                    "italicBidi": false,
                                    "fontSizeBidi": 11,
                                    "fontFamilyBidi": "Calibri",
                                    "allCaps": false
                              },
                              "paragraphFormat": {
                                    "leftIndent": 0,
                                    "rightIndent": 0,
                                    "firstLineIndent": 0,
                                    "textAlignment": "Left",
                                    "beforeSpacing": 0,
                                    "afterSpacing": 10,
                                    "lineSpacing": 1.149999976158142,
                                    "lineSpacingType": "Multiple",
                                    "listFormat": {},
                                    "bidi": false,
                                    "keepLinesTogether": false,
                                    "keepWithNext": false,
                                    "widowControl": true
                              },
                              "defaultTabWidth": 36,
                              "trackChanges": false,
                              "enforcement": false,
                              "hashValue": "",
                              "saltValue": "",
                              "formatting": false,
                              "protectionType": "NoProtection",
                              "dontUseHTMLParagraphAutoSpacing": false,
                              "formFieldShading": true,
                              "compatibilityMode": "Word2013",
                              "styles": [{
                                    "name": "Normal",
                                    "type": "Paragraph",
                                    "paragraphFormat": { "listFormat": {} },
                                    "characterFormat": {},
                                    "next": "Normal"
                              },
                              {
                                    "name": "Heading 1",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "beforeSpacing": 12,
                                          "afterSpacing": 0,
                                          "lineSpacing": 1.0791666507720947,
                                          "lineSpacingType": "Multiple",
                                          "outlineLevel": "Level1",
                                          "listFormat": {}
                                    },
                                    "characterFormat": {
                                          "fontSize": 16,
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#2F5496FF",
                                          "fontSizeBidi": 16,
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Normal",
                                    "link": "หัวเรื่อง 1 อักขระ",
                                    "next": "Normal"
                              },
                              {
                                    "name": "หัวเรื่อง 1 อักขระ",
                                    "type": "Character",
                                    "characterFormat": {
                                          "fontSize": 16,
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#2F5496FF",
                                          "fontSizeBidi": 16,
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Default Paragraph Font"
                              },
                              {
                                    "name": "Default Paragraph Font",
                                    "type": "Character",
                                    "characterFormat": {}
                              },
                              {
                                    "name": "Heading 2",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "beforeSpacing": 2,
                                          "afterSpacing": 0,
                                          "lineSpacing": 1.0791666507720947,
                                          "lineSpacingType": "Multiple",
                                          "outlineLevel": "Level2",
                                          "listFormat": {}
                                    },
                                    "characterFormat": {
                                          "fontSize": 13,
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#2F5496FF",
                                          "fontSizeBidi": 13,
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Normal",
                                    "link": "หัวเรื่อง 2 อักขระ",
                                    "next": "Normal"
                              },
                              {
                                    "name": "หัวเรื่อง 2 อักขระ",
                                    "type": "Character",
                                    "characterFormat": {
                                          "fontSize": 13,
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#2F5496FF",
                                          "fontSizeBidi": 13,
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Default Paragraph Font"
                              },
                              {
                                    "name": "Heading 3",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "beforeSpacing": 2,
                                          "afterSpacing": 0,
                                          "lineSpacing": 1.0791666507720947,
                                          "lineSpacingType": "Multiple",
                                          "outlineLevel": "Level3",
                                          "listFormat": {}
                                    },
                                    "characterFormat": {
                                          "fontSize": 12,
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#1F3763FF",
                                          "fontSizeBidi": 12,
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Normal",
                                    "link": "หัวเรื่อง 3 อักขระ",
                                    "next": "Normal"
                              },
                              {
                                    "name": "หัวเรื่อง 3 อักขระ",
                                    "type": "Character",
                                    "characterFormat": {
                                          "fontSize": 12,
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#1F3763FF",
                                          "fontSizeBidi": 12,
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Default Paragraph Font"
                              },
                              {
                                    "name": "Heading 4",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "beforeSpacing": 2,
                                          "afterSpacing": 0,
                                          "lineSpacing": 1.0791666507720947,
                                          "lineSpacingType": "Multiple",
                                          "outlineLevel": "Level4",
                                          "listFormat": {}
                                    },
                                    "characterFormat": {
                                          "italic": true,
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#2F5496FF",
                                          "italicBidi": true,
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Normal",
                                    "link": "หัวเรื่อง 4 อักขระ",
                                    "next": "Normal"
                              },
                              {
                                    "name": "หัวเรื่อง 4 อักขระ",
                                    "type": "Character",
                                    "characterFormat": {
                                          "italic": true,
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#2F5496FF",
                                          "italicBidi": true,
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Default Paragraph Font"
                              },
                              {
                                    "name": "Heading 5",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "beforeSpacing": 2,
                                          "afterSpacing": 0,
                                          "lineSpacing": 1.0791666507720947,
                                          "lineSpacingType": "Multiple",
                                          "outlineLevel": "Level5",
                                          "listFormat": {}
                                    },
                                    "characterFormat": {
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#2F5496FF",
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Normal",
                                    "link": "หัวเรื่อง 5 อักขระ",
                                    "next": "Normal"
                              },
                              {
                                    "name": "หัวเรื่อง 5 อักขระ",
                                    "type": "Character",
                                    "characterFormat": {
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#2F5496FF",
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Default Paragraph Font"
                              },
                              {
                                    "name": "Heading 6",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "beforeSpacing": 2,
                                          "afterSpacing": 0,
                                          "lineSpacing": 1.0791666507720947,
                                          "lineSpacingType": "Multiple",
                                          "outlineLevel": "Level6",
                                          "listFormat": {}
                                    },
                                    "characterFormat": {
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#1F3763FF",
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Normal",
                                    "link": "หัวเรื่อง 6 อักขระ",
                                    "next": "Normal"
                              },
                              {
                                    "name": "หัวเรื่อง 6 อักขระ",
                                    "type": "Character",
                                    "characterFormat": {
                                          "fontFamily": "Calibri Light",
                                          "fontColor": "#1F3763FF",
                                          "fontFamilyBidi": "Calibri Light"
                                    },
                                    "basedOn": "Default Paragraph Font"
                              },
                              {
                                    "name": "List Paragraph",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "leftIndent": 36,
                                          "listFormat": {},
                                          "contextualSpacing": true
                                    },
                                    "characterFormat": {},
                                    "basedOn": "Normal",
                                    "next": "List Paragraph"
                              },
                              {
                                    "name": "Header",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "afterSpacing": 0,
                                          "lineSpacing": 1,
                                          "lineSpacingType": "Multiple",
                                          "listFormat": {},
                                          "tabs": [{
                                                "position": 225.60000610351562,
                                                "deletePosition": 0,
                                                "tabJustification": "Center",
                                                "tabLeader": "None"
                                          },
                                          {
                                                "position": 451.25,
                                                "deletePosition": 0,
                                                "tabJustification": "Right",
                                                "tabLeader": "None"
                                          }]
                                    },
                                    "characterFormat": {},
                                    "basedOn": "Normal",
                                    "link": "หัวกระดาษ อักขระ",
                                    "next": "Header"
                              },
                              {
                                    "name": "หัวกระดาษ อักขระ",
                                    "type": "Character",
                                    "characterFormat": {},
                                    "basedOn": "Default Paragraph Font"
                              },
                              {
                                    "name": "Footer",
                                    "type": "Paragraph",
                                    "paragraphFormat": {
                                          "afterSpacing": 0,
                                          "lineSpacing": 1,
                                          "lineSpacingType": "Multiple",
                                          "listFormat": {},
                                          "tabs": [{
                                                "position": 225.60000610351562,
                                                "deletePosition": 0,
                                                "tabJustification": "Center",
                                                "tabLeader": "None"
                                          },
                                          {
                                                "position": 451.25,
                                                "deletePosition": 0,
                                                "tabJustification": "Right",
                                                "tabLeader": "None"
                                          }]
                                    },
                                    "characterFormat": {},
                                    "basedOn": "Normal",
                                    "link": "ท้ายกระดาษ อักขระ",
                                    "next": "Footer"
                              },
                              {
                                    "name": "ท้ายกระดาษ อักขระ",
                                    "type": "Character",
                                    "characterFormat": {},
                                    "basedOn": "Default Paragraph Font"
                              }],
                              "lists": [],
                              "abstractLists": [],
                              "comments": [],
                              "revisions": [],
                              "customXml": [],
                              "footnotes": {
                                    "separator": [{
                                          "paragraphFormat": {
                                                "afterSpacing": 0,
                                                "lineSpacing": 1,
                                                "lineSpacingType": "Multiple",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                          },
                                          "characterFormat": {},
                                          "inlines": [{
                                                "characterFormat": {},
                                                "text": "\u0003"
                                          }]
                                    }],
                                    "continuationSeparator": [{
                                          "paragraphFormat": {
                                                "afterSpacing": 0,
                                                "lineSpacing": 1,
                                                "lineSpacingType": "Multiple",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                          },
                                          "characterFormat": {},
                                          "inlines": [{
                                                "characterFormat": {},
                                                "text": "\u0004"
                                          }]
                                    }],
                                    "continuationNotice": [{
                                          "paragraphFormat": {
                                                "styleName": "Normal",
                                                "listFormat": {}
                                          },
                                          "characterFormat": {},
                                          "inlines": []
                                    }]
                              },
                              "endnotes": {
                                    "separator": [{
                                          "paragraphFormat": {
                                                "afterSpacing": 0,
                                                "lineSpacing": 1,
                                                "lineSpacingType": "Multiple",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                          },
                                          "characterFormat": {},
                                          "inlines": [{
                                                "characterFormat": {},
                                                "text": "\u0003"
                                          }]
                                    }],
                                    "continuationSeparator": [{
                                          "paragraphFormat": {
                                                "afterSpacing": 0,
                                                "lineSpacing": 1,
                                                "lineSpacingType": "Multiple",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                          },
                                          "characterFormat": {},
                                          "inlines": [{
                                                "characterFormat": {},
                                                "text": "\u0004"
                                          }]
                                    }],
                                    "continuationNotice": [{
                                          "paragraphFormat": {
                                                "styleName": "Normal",
                                                "listFormat": {}
                                          },
                                          "characterFormat": {},
                                          "inlines": []
                                    }]
                              }
                        }

                        resolve(obj)

                  })
            }

      })

})

export default template;

