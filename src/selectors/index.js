import { size } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const modifyFiles = (existingFiles, files) => {
  let fileToUpload = {};
  for (let i = 0; i < files.length; i++) {
    const id = size(existingFiles) + i + 1;
    fileToUpload = {
      ...fileToUpload,
      [id]: {
        id,
        file: files[i],
        progress: 0,
      },
    };
  }
  return fileToUpload;
};
