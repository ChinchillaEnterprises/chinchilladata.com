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

document.getElementById("demo").onclick = function() {addFile()};

function addFile() {
  var files = document.getElementById("fileupload").files
  var file = files[0];
  var fileName = file.name;
  var folderName = Math.floor(Math.random() * 1001);
  var bucketKey = folderName + "/" + fileName;

  // Use S3 ManagedUpload class as it supports multipart uploads
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucketName,
      Key: bucketKey,
      Body: file
    }
  });

  var promise = upload.promise();

  promise.then(
    function(data) {
      alert("Successfully uploaded file.");
    },
    function(err) {
      return alert("There was an error uploading your file: ", err.message);
    }
  );
};