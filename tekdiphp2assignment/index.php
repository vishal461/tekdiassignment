<?php 

/* declaring json to make it hirarchical  */
$flat_employees_json =  '
  [{
    "id": 8,
    "parent": 4,
    "name": "Food & Lifestyle"
  },
  {
    "id": 2,
    "parent": 1,
    "name": "Mobile Phones"
  },
  {
    "id": 1,
    "parent": 0,
    "name": "Electronics"
  },
  {
    "id": 3,
    "parent": 1,
    "name": "Laptops"
  },
  {
    "id": 5,
    "parent": 4,
    "name": "Fiction"
  },
  {
    "id": 4,
    "parent": 0,
    "name": "Books"
  },
  {
    "id": 6,
    "parent": 4,
    "name": "Non-fiction"
  },
  {
    "id": 7,
    "parent": 1,
    "name": "Storage"
  }]';


/* sperate out the parent array  */
$mainarray = json_decode($flat_employees_json, true);
$basearray = array();
foreach ($mainarray as $key => $value) {
	if($value['parent'] == 0){
		array_push($basearray, $value);
	}
}

/* Put the all array with divided format  */
$childrenmain = array();
foreach ($basearray as $keyb => $valueb) {
	$basearray[$keyb]['children'] = array();
	$children = array();
	foreach ($mainarray as $keys => $values) {
		if($valueb['id'] == $values['parent']){
			//array_push($basearray[$keyb], $values);
			array_push($children, $values);
		}
	}
	array_push($childrenmain, $children);
	array_push($basearray[$keyb]['children'], $childrenmain[$keyb]);
}

/* encoding the json for output */
$sortarray = json_encode($basearray);
echo "<pre>"; print_r($sortarray);



?>
