package com.capgemini.accountregistration.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.accountregistration.exception.MinimumBalanceException;
import com.capgemini.accountregistration.model.Account;
import com.capgemini.accountregistration.model.Customer;
import com.capgemini.accountregistration.repository.CustomerRepository;
import com.capgemini.accountregistration.service.CustomerService;
import com.capgemini.accountregistration.service.util.AccountOpeningUtil;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepostory;

	@Override
	public List<Customer> getAllCustomers() {
		
		return (List<Customer>) customerRepostory.findAll();
	}

	@Override
	public Customer addCustomer(Customer customer) throws MinimumBalanceException {
		List<Account> accounts = customer.getAccount();
		if(accounts != null){
			for(int i=0; i<accounts.size(); i++) {
				AccountOpeningUtil.checkOpiningBalance(accounts.get(i));
			}
		}
		
		return customerRepostory.save(customer);
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		return customerRepostory.save(customer);
	}

	@Override
	public void deleteCustomer(Long id) {
		 customerRepostory.deleteById(id);
	}

	@Override
	public Customer findById(Long id) {
		
		return customerRepostory.findById(id).get();
	}

}
