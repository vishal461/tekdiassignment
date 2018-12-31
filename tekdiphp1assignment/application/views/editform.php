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
	<h1 class="page-header text-center">Edit User</h1>
	<div class="row">
		<div class="col-sm-12">
			<h3>Edit Form
				<span class="pull-right"><a href="<?php echo base_url(); ?>" class="btn btn-primary"><span class="glyphicon glyphicon-arrow-left"></span> Back</a></span>
			</h3>
			<hr>
			<?php extract($user); ?>
			<form method="POST" id="validate" action="<?php echo base_url(); ?>index.php/users/update/<?php echo $id; ?>">
				<div class="form-group col-sm-6">
					<label>Username:</label>
					<input type="text" class="form-control" value="<?php echo $username; ?>" name="username">
				</div>
				<div class="form-group col-sm-6">
					<label>Country:</label>
					<input type="text" class="form-control" value="<?php echo $country; ?>" name="country">
				</div>
				<div class="form-group col-sm-6">
					<label>Email:</label>
					<input type="text" class="form-control" value="<?php echo $email; ?>" name="email">
				</div>
				<div class="form-group col-sm-6">
					<label>Moile:</label>
					<input type="text" class="form-control" value="<?php echo $mob; ?>" name="mob">
				</div>
				<div class="form-group col-sm-6">
					<!-- <label>DOB:</label>
					<input type="text" class="form-control" value="<?php echo $dob; ?>" name="dob"> -->
					<div class="input-group date">
		                <input type="text" class="form-control" name="dob" value="<?php echo $dob; ?>"  id="js-date" autocomplete="off" autocomplete="off">
		                <div class="input-group-addon">
		                    <span class="glyphicon glyphicon-th"></span>
		                </div>
		            </div> 
				</div>
				<div class="form-group col-sm-6">
					<label>About you:</label>
					<textarea class="form-control" rows="5" name="aboutyou"><?php echo $aboutyou; ?></textarea>
				</div>
				
				<button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-check"></span> Update</button>
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