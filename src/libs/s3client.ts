import { S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: import.meta.env.S3_REGION,
    credentials: {
        accessKeyId: import.meta.env.S3_ACCESSKEYID,
        secretAccessKey: import.meta.env.S3_SECRETACCESSKEY
    }
});

export default client;
