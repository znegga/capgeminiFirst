package com.capgemini.accountregistration.service;

import java.util.List;

import com.capgemini.accountregistration.exception.MinimumBalanceException;
import com.capgemini.accountregistration.model.Customer;

public interface CustomerService {
	
	public List<Customer> getAllCustomers() ;
	public Customer addCustomer(Customer customer) throws MinimumBalanceException;
	public Customer updateCustomer(Customer customer);
	public void deleteCustomer(Long id);
	public Customer findById(Long id);
	
}
