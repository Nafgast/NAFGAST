<?php
session_start();
if (!isset($_SESSION['student'])) {
    header("Location: login.php");
    exit;
}
$student = $_SESSION['student'];
header('Location: /portal-student/dashboard.html');
exit;
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=/portal-student/dashboard.html">
  <title>Redirecting…</title>
</head>
<body>
  <p>Redirecting to <a href="/portal-student/dashboard.html">Student Dashboard</a> — click if not redirected.</p>
</body>
</html>