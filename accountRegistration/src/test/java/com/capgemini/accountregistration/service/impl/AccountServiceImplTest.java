package com.capgemini.accountregistration.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.ArrayList;
import java.util.List;

import javax.security.auth.login.AccountExpiredException;

import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.capgemini.accountregistration.exception.MinimumBalanceException;
import com.capgemini.accountregistration.model.Account;
import com.capgemini.accountregistration.model.AccountType;
import com.capgemini.accountregistration.model.Customer;
import com.capgemini.accountregistration.repository.AccountRepository;

public class AccountServiceImplTest {
	
	@InjectMocks
	private AccountServiceImpl accountServiceImpl;
	
	@Mock
	private AccountRepository accountRepositary;
	
	@Test
	public void addAccountTest() {
		Account account = new Account(2345L, 500, AccountType.SAVING);
		Customer cust = new Customer();
		List<Account> accc = new ArrayList<>();
	accc.add(account);
		cust.setAccount(accc);
		
		Mockito.when(accountRepositary.save(Mockito.any())).thenReturn(account);
		
	}
	@Test
	public void updateAccountTest() {
		Account account = new Account();
		Account ac = accountServiceImpl.updateAccount(account);
		assertNotNull(ac);
		
	}
	@Test
	 public void deleteAccountTest() {
		Account act = new Account();
		Long id =act.getAccountNumber();
		accountServiceImpl.deleteAccount(id);
		assertNull(accountServiceImpl.findById(id));
		
	}
}
