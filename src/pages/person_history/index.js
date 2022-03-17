// import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { DocxBase } from './base';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import { TitleBar } from './title-bar';
import Box from '@mui/material/Box';
import template from './template'

DocumentEditorContainerComponent.Inject(Toolbar);
// tslint:disable:max-line-length
export default class PersonHistory extends DocxBase {
      constructor() {
            super(...arguments);
            this.hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
            this.onLoadDefault = () => {
                  // tslint:disable
                  // console.log(defaultDocument);
                  // tslint:enable        
                  template.then((defaultDocument) => {
                        // console.log(defaultDocument);
                        this.container.documentEditor.open(JSON.stringify(defaultDocument));

                  });
                  this.container.documentEditor.documentName = 'ประวัติพลทหาร';
                  this.titleBar.updateDocumentTitle();
                  this.container.documentChange = () => {
                        this.titleBar.updateDocumentTitle();
                        this.container.documentEditor.focusIn();
                  };
            };
      }
      rendereComplete() {
            this.container.serviceUrl = this.hostUrl + 'api/documenteditor/';
            this.container.documentEditor.pageOutline = '#E0E0E0';
            this.container.documentEditor.acceptTab = true;
            this.container.documentEditor.resize();
            this.titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), this.container.documentEditor, true);
            this.onLoadDefault();
      }


      render() {
            return (
                  <Box style={{
                        marginRight: 63
                  }}>
                        <div className='control-pane'>
                              <div className='control-section'>
                                    <div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
                                    <div id="documenteditor_container_body">
                                          {/* <DocumentEditorContainerComponent id="container" ref={(scope) => { this.container = scope; }} height={window.innerHeight-36} style={{ 'display': 'block' }} enableToolbar={true} locale='en-US' /> */}
                                          <DocumentEditorContainerComponent id="container" ref={(scope) => { this.container = scope; }} height={window.innerHeight - 36} style={{ 'display': 'block' }} enableToolbar={true} locale='en-US' />
                                    </div>
                              </div>
                              <script>{window.onbeforeunload = function () {
                                    return 'Want to save your changes?';
                              }}
                              </script>
                        </div>
                  </Box>);
      }
}

// render(<Default />, document.getElementById('sample'));