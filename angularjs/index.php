<!DOCTYPE html>
<html lang="en">
<head>
  <title>Angular Crud</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">

  <link rel="stylesheet" type="text/css" href="assets/css/datepicker.css">
  <link rel="stylesheet" type="text/css" href="assets/less/datepicker.less">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
  <script src="./assets/js/bootstrap-datepicker.js" type="text/javascript"></script>

<!--   <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap4.min.js"></script> -->
  
  <script src="./app/app.js" type="text/javascript"></script>
  <script src="./assets/js/controller/homeController.js" type="text/javascript"></script>
  <script src="./assets/js/service/dbService.js" type="text/javascript"></script>
   <script src="./assets/js/dirPagination.js" type="text/javascript"></script>
   

</head>
<body ng-app="myApp">

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Angular Crud</a>
    </div>
    <ul class="nav navbar-nav">

    </ul>
    <!-- <form class="navbar-form navbar-left searchform" action="">
      <div class="form-group searchformgroup">
        <input type="text" class="form-control searchforminput" placeholder="Search" name="search">
      </div>
    </form> -->
     <form class="form-inline">
        <div class="form-group">
            <label >Search</label>
            <input type="text" ng-model="search" class="form-control" placeholder="Search">
        </div>
    </form>
  </div>
</nav>

<div ng-view=""></div>

</body>
</html>