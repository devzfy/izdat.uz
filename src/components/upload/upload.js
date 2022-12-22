import React from 'react';
import { UploadIcon } from '../../assets/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const UploadFile = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <UploadIcon/>
    </p>
    <p className="ant-upload-text">Загрузить файл для печати</p>
  </Dragger>
);
export default UploadFile;