package com.capgemini.accountregistration.service;

import java.util.List;
import java.util.Optional;

import com.capgemini.accountregistration.exception.MinimumBalanceException;
import com.capgemini.accountregistration.model.Account;

public interface AccountService {
	public List<Account> getAllAccounts();
	public Account addAccount(Account account) throws MinimumBalanceException  ;
	public Account updateAccount(Account account);
	public void deleteAccount(Long id);
	public Optional<Account> findById(Long id);

}
