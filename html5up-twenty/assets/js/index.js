var bucketName = "wordpress-bucket-feather";
var bucketRegion = "us-west-2";
var IdentityPoolId = "us-west-2:d3ac0085-0c97-4a56-8e9f-0e9d646cb2b6";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: bucketName }
});