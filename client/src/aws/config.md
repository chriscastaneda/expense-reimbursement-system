import React from 'react';
 
export const S3config = {
    bucketName: 's3-expense-reimbursement-system',
    // dirName: 'media', /* optional */
    region: 'us-west-1',
    accessKeyId: 'AKIAX2GVIUE5BBTMGAKL',
    secretAccessKey: 'bYBvFz7gGr5Dl01eCCzDXqlaQpbbTQIA0QdftlcZ ',
    // s3Url: 'https:/your-custom-s3-url.com/', /* optional */
};

const ReactS3Client = new S3(config);
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
 
/* This is optional */
const newFileName = 'test-file';
 
ReactS3Client
    .uploadFile(file, newFileName)
    .then(data => console.log(data))
    .catch(err => console.error(err))
 
  /**
   * {
   *   Response: {
   *     bucket: "myBucket",
   *     key: "image/test-image.jpg",
   *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
   *   }
   * }
   */
});