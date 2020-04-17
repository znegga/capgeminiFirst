package com.capgemini.accountregistration.service.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
/*import org.junit.Test;*/
//import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.capgemini.accountregistration.exception.MinimumBalanceException;
import com.capgemini.accountregistration.model.Account;
import com.capgemini.accountregistration.model.AccountType;
import com.capgemini.accountregistration.model.Customer;
import com.capgemini.accountregistration.repository.CustomerRepository;

//@RunWith(MockitoJUnitRunner.class)
public class CustomerServiceImplTest {
	
	@InjectMocks
	private CustomerServiceImpl customerServiceImpl;
	
	@Mock
	private CustomerRepository customerRepository;
	
	@Test
	public void addCustomerTest()  throws MinimumBalanceException{
		
		Customer customer =new Customer ();
		Account account = new Account(124L, 400, AccountType.CHECKING);
		List<Account> accc = new ArrayList<>();
		accc.add(account);
		customer.setAccount(accc);
		
		Mockito.when(customerRepository.save(Mockito.any())).thenReturn(customer);
	
		Customer response = customerServiceImpl.addCustomer(customer);
		
		assertEquals(response, customer); 
		assertEquals(response.getAccount().size(),1);
	}
	
	@Test
	public void addCustomerTestException()  throws MinimumBalanceException{
		
		Customer customer =new Customer ();
		Account account = new Account(124L, 250, AccountType.CHECKING);
		List<Account> accc = new ArrayList<>();
		accc.add(account);
		customer.setAccount(accc);
		
		Mockito.when(customerRepository.save(Mockito.any())).thenReturn(customer);
	
		assertThrows(MinimumBalanceException.class, () ->customerServiceImpl.addCustomer(customer));

	}
	
	@Test
	public void addCustomerTestNoAccount() throws MinimumBalanceException {
		
		Customer customer =new Customer ();
		Mockito.when(customerRepository.save(Mockito.any())).thenReturn(customer);
	
		Customer response = customerServiceImpl.addCustomer(customer);
		
		assertEquals(response, customer); 
		assertNull(response.getAccount());
	}
	
	@Test
	public void deleteCustomerTest() throws MinimumBalanceException {
		Customer cust =new Customer ();
		Long id = cust.getCustomerId();
		customerServiceImpl.deleteCustomer(id);
		assertNull(customerServiceImpl.findById(id));
	}
	
	@Test
	public void updateCustomerTest() throws MinimumBalanceException {
		Customer customer =new Customer ();
		Customer cu=customerServiceImpl.updateCustomer(customer);
		assertNotNull(cu);
		
	}
	
	

}
