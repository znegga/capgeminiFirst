package com.capgemini.accountregistration.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.accountregistration.exception.MinimumBalanceException;
import com.capgemini.accountregistration.model.Customer;
import com.capgemini.accountregistration.service.CustomerService;


@RestController
@RequestMapping("/cust")
@CrossOrigin
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping(value="/customer", produces="APPLICATION/JSON")
	public Customer addCustomer(@Valid @RequestBody Customer customer  ) throws MinimumBalanceException {
	    return customerService.addCustomer(customer);
	}
	
	@PostMapping(value="/update", produces="APPLICATION/JSON")
	//@Procedure("APPLICATION/JSON")
	public Customer updateCustomer(@Valid @RequestBody Customer customer ) throws MinimumBalanceException{
		return customerService.updateCustomer(customer);
	}
	
	@GetMapping("/customer")
	public List<Customer> getAllCustomers(){
		return customerService.getAllCustomers();
	}
	
	@GetMapping("/one")
	public Customer findById(@RequestParam("id") Long id) {
		return customerService.findById(id);
		
	}
	
	@GetMapping("/delete")
	public String delete(@RequestParam("id") Long id) {
		customerService.deleteCustomer(id);
		return "success";
	}
}








