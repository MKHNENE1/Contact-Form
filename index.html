<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $cell = filter_var($_POST['cellphone'], FILTER_SANITIZE_NUMBER_INT);
  $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
  $formerrors = array();
  if (strlen($name) <= 3) {
    $formerrors[] = "Username Must Be Larger Than <strong>3</strong> Characters";
  }
  if (strlen($msg) < 10) {
    $formerrors[] = "Message Can't Be Less Than <strong>10</strong> Characters";
  }
  $headers = "From: " . $email . "\r\n";
  $myEmail = "mohamedhalabya11@gmail.com";
  $subject = "Contact Form";
  if (empty($formerrors)) {
    mail($myEmail, $subject, $msg, $headers);
    $name = "";
    $email = "";
    $cell = "";
    $msg = "";
    $success = "<div class='alert alert-success' role='alert'>We Have Recieved Your Message</div>";
  }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=7" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Form</title>
  <link rel="stylesheet" href="./css/bootstrap.min.css" />
  <link rel="stylesheet" href="./css/all.min.css" />
  <link rel="stylesheet" href="./css/contact.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,700,900,900i" />
</head>

<body>
  <div class="container">
    <h1 class="text-center">Contact Me</h1>
    <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="POST" class="contact-form" id="contact-form">
      <?php if (!empty($formerrors)) { ?>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <?php foreach ($formerrors as $error) {
            echo $error . "<br>";
          } ?>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      <?php
      }
      ?>
      <?php if (isset($success)) {
        echo $success;
      } ?>
      <div class="form-group">
        <input type="text" name="username" id="username" class="form-control" placeholder="Type Your Uesename" value="<?php if (isset($name)) {
                                                                                                                        echo $name;
                                                                                                                      } ?>" />
        <i class="fa fa-user fa-fw"></i>
        <span class="aserisx">*</span>
        <div class="alert alert-danger alert-dismissible fade show custom-alert" role="alert">
          Username Must Be Larger Than <strong>3</strong> Characters
        </div>
      </div>
      <div class="form-group">
        <input type="email" name="email" id="email" class="form-control" value="<?php if (isset($email)) {
                                                                                  echo $email;
                                                                                } ?>" placeholder="Please Type a Valid Email" />
        <i class="fa fa-envelope fa-fw"></i>
        <span class="aserisx">*</span>
        <div class="alert alert-danger alert-dismissible fade show custom-alert" role="alert">
          Email Can't Be <strong>Empity</strong>
        </div>
      </div>
      <input type="text" name="cellphone" id="phone" class="form-control" value="<?php if (isset($cell)) {
                                                                                    echo $cell;
                                                                                  } ?>" placeholder="Type Your Call Phone" />
      <i class="fa fa-phone fa-fw"></i>
      <div class="form-group">
        <textarea id="msg" class="form-control" name="message" placeholder="Your Message"><?php if (isset($msg)) {
                                                                                            echo $msg;
                                                                                          } ?></textarea>
        <span class="aserisx">*</span>
        <div class="alert alert-danger alert-dismissible fade show custom-alert" role="alert">
          Message Can't Be Less Than <strong>10</strong> Characters
        </div>
      </div>
      <input type="submit" value="Send Message" class="btn btn-success" />
      <i class="fa-solid fa-paper-plane send-icon"></i>
    </form>
  </div>
  <script src="./js/bootstrap.min.js"></script>
  <script src="./js/contact.js"></script>
</body>

</html>
