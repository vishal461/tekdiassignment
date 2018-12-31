'use strict';
app.controller('homeController', ['$scope','dbServices','$rootScope','$timeout','$http','fileUpload', function ($scope,dbServices,$rootScope,$timeout,$http,fileUpload) {
	var self = this;
	$rootScope.systemurl = 'http://192.168.1.104/hospital/'; 
	$scope.registeruser = {};
    $scope.registeruser.countryId = "Vishrantwadi";

    //$scope.registeruserForm.country = 'Afghanistan';

    $scope.addbutton = true;

	$scope.header = 'Create An Person';
	$scope.callAtTimeout = function() {
        $scope.header = 'Create An Person';
        //$scope.register = "";
    }

    // $http.get("https://tekdi-challenges.appspot.com/api/People")
    // .then(function (response) {
    // 	$scope.names = response.data.records;
    // });

    $scope.getrecord = function() {
    	var checkservice = dbServices.getdata();
		checkservice.then(function(msg){
			var jsonResult = {};
			jsonResult = msg.data;
			if(msg.data) 
			{
				$scope.names = msg.data;
			}
		});
	}

	$scope.getrecord();

    


     $scope.countries = [ 
        {name: 'Afghanistan'},
        {name: 'Akrotiri'},
        {name: 'Albania'},
        {name: 'Algeria'},
        {name: 'American Samoa'},
        {name: 'Andorra'},
        {name: 'Angola'},
        {name: 'Anguilla'},
        {name: 'Antarctica'},
        {name: 'Antigua and Barbuda'},
        {name: 'Argentina'},
        {name: 'Armenia'},
        {name: 'Aruba'},
        {name: 'Ashmore and Cartier Islands'},
        {name: 'Australia'},
        {name: 'Austria'},
        {name: 'Azerbaijan'},
        {name: 'Bahamas, The'},
        {name: 'Bahrain'},
        {name: 'Bangladesh'},
        {name: 'Barbados'},
        {name: 'Bassas da India'},
        {name: 'Belarus'},
        {name: 'Belgium'},
        {name: 'Belize'},
        {name: 'Benin'},
        {name: 'Bermuda'},
        {name: 'Bhutan'},
        {name: 'Bolivia'},
        {name: 'Bosnia and Herzegovina'},
        {name: 'Botswana'},
        {name: 'Bouvet Island'},
        {name: 'Brazil'},
        {name: 'British Indian Ocean Territory'},
        {name: 'British Virgin Islands'},
        {name: 'Brunei'},
        {name: 'Bulgaria'},
        {name: 'Burkina Faso'},
        {name: 'Burma'},
        {name: 'Burundi'},
        {name: 'Cambodia'},
        {name: 'Cameroon'},
        {name: 'Canada'},
        {name: 'Cape Verde'},
        {name: 'Cayman Islands'},
        {name: 'Central African Republic'},
        {name: 'Chile'},
        {name: 'China'},
        {name: 'Christmas Island'},
        {name: 'Clipperton Island'},
        {name: 'Cocos (Keeling) Islands'},
        {name: 'Colombia'},
        {name: 'Comoros'},
        {name: 'Congo, Democratic Republic of the'},
        {name: 'Congo, Republic of the'},
        {name: 'Cook Islands'},
        {name: 'Coral Sea Islands'},
        {name: 'Costa Rica'},
        {name: 'Cote d Ivoire'},
        {name: 'Croatia'},
        {name: 'Cuba'},
        {name: 'Cyprus'},
        {name: 'Czech Republic'},
        {name: 'Denmark'},
        {name: 'Dhekelia'},
        {name: 'Djibouti'},
        {name: 'Dominica'},
        {name: 'Dominican Republic'},
        {name: 'Ecuador'},
        {name: 'Egypt'},
        {name: 'El Salvador'},
        {name: 'Equatorial Guinea'},
        {name: 'Eritrea'},
        {name: 'Estonia'},
        {name: 'Europa Island'},
        {name: 'Falkland Islands (Islas Malvinas)'},
        {name: 'Faroe Islands'},
        {name: 'Fiji'},
        {name: 'Finland'},
        {name: 'France'},
        {name: 'French Guiana'},
        {name: 'French Polynesia'},
        {name: 'French Southern and Antarctic Lands'},
        {name: 'Gabon'},
        {name: 'Gambia, The'},
        {name: 'Gaza Strip'},
        {name: 'Georgia'},
        {name: 'Germany'},
        {name: 'Ghana'},
        {name: 'Gibraltar'},
        {name: 'Glorioso Islands'},
        {name: 'Greece'},
        {name: 'Greenland'},
        {name: 'Grenada'},
        {name: 'Guadeloupe'},
        {name: 'Guam'},
        {name: 'Guatemala'},
        {name: 'Guernsey'},
        {name: 'Guinea'},
        {name: 'Guinea-Bissau'},
        {name: 'Guyana'},
        {name: 'Haiti'},
        {name: 'Heard Island and McDonald Islands'},
        {name: 'Holy See (Vatican City)'},
        {name: 'Honduras'},
    ];

// Hong Kong
// Hungary
// Iceland
// India
// Indonesia
// Iran
// Iraq
// Ireland
// Isle of Man
// Israel
// Italy
// Jamaica
// Jan Mayen
// Japan
// Jersey
// Jordan
// Juan de Nova Island
// Kazakhstan
// Kenya
// Kiribati
// Korea, North
// Korea, South
// Kuwait
// Kyrgyzstan
// Laos
// Latvia
// Lebanon
// Lesotho
// Liberia
// Libya
// Liechtenstein
// Lithuania
// Luxembourg
// Macau
// Macedonia
// Madagascar
// Malawi
// Malaysia
// Maldives
// Mali
// Malta
// Marshall Islands
// Martinique
// Mauritania
// Mauritius
// Mayotte
// Mexico
// Micronesia, Federated States of
// Moldova
// Monaco
// Mongolia
// Montenegro
// Montserrat
// Morocco
// Mozambique
// Namibia
// Nauru
// Navassa Island
// Nepal
// Netherlands
// Netherlands Antilles
// New Caledonia
// New Zealand
// Nicaragua
// Niger
// Nigeria
// Niue
// Norfolk Island
// Northern Mariana Islands
// Norway
// Oman
// Pakistan
// Palau
// Panama
// Papua New Guinea
// Paracel Islands
// Paraguay
// Peru
// Philippines
// Pitcairn Islands
// Poland
// Portugal
// Puerto Rico
// Qatar
// Reunion
// Romania
// Russia
// Rwanda
// Saint Helena
// Saint Kitts and Nevis
// Saint Lucia
// Saint Pierre and Miquelon
// Saint Vincent and the Grenadines
// Samoa
// San Marino
// Sao Tome and Principe
// Saudi Arabia
// Senegal
// Serbia 
// Seychelles
// Sierra Leone
// Singapore
// Slovakia
// Slovenia
// Solomon Islands
// Somalia
// South Africa
// South Georgia and the South Sandwich Islands
// Spain
// Spratly Islands
// Sri Lanka
// Sudan
// Suriname
// Svalbard
// Swaziland
// Sweden
// Switzerland
// Syria
// Taiwan
// Tajikistan
// Tanzania
// Thailand
// Timor-Leste
// Togo
// Tokelau
// Tonga
// Trinidad and Tobago
// Tromelin Island
// Tunisia
// Turkey
// Turkmenistan
// Turks and Caicos Islands
// Tuvalu
// Uganda
// Ukraine
// United Arab Emirates
// United Kingdom
// United States
// Uruguay
// Uzbekistan
// Vanuatu
// Venezuela
// Vietnam
// Virgin Islands
// Wake Island
// Wallis and Futuna
// West Bank
// Western Sahara
// Yemen
// Zambia
// Zimbabwe
	//$scope.registeruserForm.country = 'Afghanistan';//$scope.countries[0].name;


	$scope.addperson = function(register) {

	  	var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        alert(file.name);

        var uploadUrl = "assets/js/controller/save_form.php";
        var text = "";//$scope.name;
        fileUpload.uploadFileToUrl(file, uploadUrl, text);

		var insertdata = {
		}
		insertdata.name = register.name;
		insertdata.email = register.mail;
		insertdata.dob = register.dob;
		insertdata.country = register.country;
		insertdata.avatar = file.name;
		
		var checkservice = dbServices.adddata(insertdata);
		checkservice.then(function(msg){
			var jsonResult = {};
			jsonResult = msg.data;
			if(msg.status == '200') 
			{
				$scope.registeruserForm = ""
				$scope.header = "Add successfully";
                $scope.getrecord();
				$timeout( function(){ $scope.callAtTimeout(); }, 3000);
			}
		});
	};

    $scope.updateperson = function(register) {

        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
       // alert(file.name);

        var uploadUrl = "assets/js/controller/save_form.php";
        var text = "";//$scope.name;
        fileUpload.uploadFileToUrl(file, uploadUrl, text);

        var insertdata = {
        }
        insertdata.name = register.name;
        insertdata.email = register.mail;
        insertdata.dob = register.dob;
        insertdata.country = register.country;
        if(file){
            insertdata.avatar = file.name;
        }else{
             insertdata.avatar = register.avatar;
        }
        insertdata.id = $rootScope.id;
        
        var checkservice = dbServices.updatedata(insertdata,$rootScope.id);
        checkservice.then(function(msg){
            var jsonResult = {};
            jsonResult = msg.data;
            if(msg.status == '200') 
            {
                $scope.registeruserForm = ""
                $scope.header = "Update successfully";
                $scope.getrecord();
                $timeout( function(){ $scope.callAtTimeout(); }, 3000);
            }
        });
    };




    $scope.editperson = function(id) {
        var checkservice = dbServices.getpersondata(id);
        checkservice.then(function(msg){
            var jsonResult = {};
            jsonResult = msg.data;
            if(msg.data) 
            {
                $scope.header = 'Edit An Person';
                $scope.addbutton = false;
                $scope.editbutton = true;
                $scope.persondata = msg.data;
                $scope.registeruserForm.name = $scope.persondata.name;
                $scope.registeruserForm.mail = $scope.persondata.email;
                $scope.registeruserForm.dob = $scope.persondata.dob;
                $scope.registeruserForm.avatar = $scope.persondata.avatar;
                $scope.registeruserForm.country = $scope.persondata.country;
                $rootScope.id = $scope.persondata.id;
            }
        });
        // var file = $scope.myFile;
        // console.log('file is ' );
        // console.dir(file);
        // alert(file.name);

        // var uploadUrl = "assets/js/controller/save_form.php";
        // var text = "";//$scope.name;
        // fileUpload.uploadFileToUrl(file, uploadUrl, text);

        // var insertdata = {
        // }
        // insertdata.name = register.name;
        // insertdata.email = register.mail;
        // insertdata.dob = register.dob;
        // insertdata.country = register.country;
        // insertdata.avatar = file.name;
        
        // var checkservice = dbServices.adddata(insertdata);
        // checkservice.then(function(msg){
        //     var jsonResult = {};
        //     jsonResult = msg.data;
        //     $scope.arrVideos =[];
        //     if(jsonResult.result == 'success') 
        //     {
        //         $scope.registeruserForm = ""
        //         $scope.header = "Edit successfully";
        //         $timeout( function(){ $scope.callAtTimeout(); }, 3000);
        //     }
        // });
    };


	$(function() {
	    //for displaying datepicker
	    $('#js-date').datepicker({
	        viewMode: 'years',
            format: 'YYYY-MM-DD HH:MM:ss',
	       // format: 'DD/MM/YYYY',
	    });

	    //for getting input value
	    $('#js-date').on('changeDate', function(ev){
		    $(this).datepicker('hide');
		   $scope.registeruserForm.dob = $("#js-date").val();
		});
	});


    $scope.dateFilter = function(item){
            alert(item.dob);
    };


}]);


