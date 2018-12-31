<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Tekdi php1 assignment</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>bootstrap/css/datepicker.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>bootstrap/css/datepicker.less">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="<?php echo base_url(); ?>bootstrap/js/bootstrap-datepicker.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.js"></script>

</head>
<body>
<div class="container">
	<h1 class="page-header text-center">Create User</h1>
	<div class="row">
		<div class="col-sm-12">
			<h3>Add Form
				<span class="pull-right"><a href="<?php echo base_url(); ?>" class="btn btn-primary"><span class="glyphicon glyphicon-arrow-left"></span> Back</a></span>
			</h3>
			<hr>
			<form method="POST" id="validate" action="<?php echo base_url(); ?>index.php/users/insert" autocomplete="off">
				<div class="form-group col-sm-6">
					<label>Name:</label>
					<input type="text" class="form-control" name="username" autocomplete="off">
				</div>
				<div class="form-group col-sm-6">
					<label>Country:</label>
					<input type="text" class="form-control" name="country" autocomplete="off">
				</div>
				<div class="form-group col-sm-6">
					<label>Email:</label>
					<input type="text" class="form-control" name="email" autocomplete="off">
				</div>
				<div class="form-group col-sm-6">
					<label>Moile:</label>
					<input type="text" class="form-control" name="mob" autocomplete="off">
				</div>
				<div class="form-group col-sm-6">
					<label>DOB:</label>
					<div class="input-group date">
		                <input type="text" class="form-control" name="dob"  id="js-date" autocomplete="off" autocomplete="off">
		                <div class="input-group-addon">
		                    <span class="glyphicon glyphicon-th"></span>
		                </div>
		            </div> 
				</div>
				<div class="form-group col-sm-6">
					<label>About you:</label>
					<textarea class="form-control" rows="5" name="aboutyou" ></textarea>
				</div>
				<button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-floppy-disk"></span> Save</button>
			</form>
		</div>
	</div>
</div>
<script type="text/javascript">
	$(document).ready(function() {
	    $('#js-date').datepicker();
	});
	$('#js-date').on('changeDate', function(ev){
	    $(this).datepicker('hide');
	});

	$(document).ready(function () {

    $('#validate').validate({ // initialize the plugin
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            country: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            mob: {
                required: true,
                minlength: 10,
                maxlength: 10,
                number:true
            },
            country: {
                required: true,
                minlength: 3
            }
        },
        submitHandler: function (form) { // for demo
            $( "#validate" ).submit();
            return false; // for demo
        }
    });

	});
</script>
</body>
</html>