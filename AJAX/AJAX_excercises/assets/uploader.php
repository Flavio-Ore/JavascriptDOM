<?php
  //["file"] is from the dataForm in js, wich key name is "file"
  if(isset($_FILES["file"])){
    $name = $_FILES["file"]["name"];
    $file = $_FILES["file"]["tmp_name"];
    $error = $_FILES["file"]["error"];
    $destination = "../files/$name";
    $upload = move_uploaded_file($file, $destination);

    if ($upload) {
      $res = array(
        "err" => false,
        "status" => http_response_code(200),
        "statusText" => "File $name uploaded successfully",
        "files" => $_FILES["file"],
      );
    } else {
      $res = array(
        "err" => true,
        "status" => http_response_code(400),
        "statusText" => "Error on upload the file $name",
        "files" => $_FILES["file"],
      );
    }

    echo json_encode($res);
  }

