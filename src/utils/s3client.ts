import { S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESSKEYID!,
        secretAccessKey: process.env.S3_SECRETACCESSKEY!
    }
});

export default client;
