<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('users_model');
	}

	public function index(){
		$data['users'] = $this->users_model->getAllUsers();
		$this->load->view('user_list.php', $data);
	}

	public function addnew(){
		$this->load->view('addform.php');
	}

	public function insert(){

		$user['username'] = $this->input->post('username');
		$user['country'] = $this->input->post('country');
		$user['email'] = $this->input->post('email');
		$user['mob'] = $this->input->post('mob');
		$user['aboutyou'] = $this->input->post('aboutyou');
		$user['dob'] = $this->input->post('dob');
		
		$query = $this->users_model->insertuser($user);

		if($query){
			header('location:'.base_url().$this->index());
		}

	}

	public function edit($id){
		$data['user'] = $this->users_model->getUser($id);
		$this->load->view('editform', $data);
	}

	public function update($id){

		$user['username'] = $this->input->post('username');
		$user['country'] = $this->input->post('country');
		$user['email'] = $this->input->post('email');
		$user['mob'] = $this->input->post('mob');
		$user['aboutyou'] = $this->input->post('aboutyou');
		$user['dob'] = $this->input->post('dob');

		$query = $this->users_model->updateuser($user, $id);

		if($query){
			header('location:'.base_url().$this->index());
		}

	}

	public function delete($id){
		$query = $this->users_model->deleteuser($id);

		if($query){
			header('location:'.base_url().$this->index());
		}

	}
}


?>