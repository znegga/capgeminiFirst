package com.capgemini.accountregistration.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.accountregistration.exception.MinimumBalanceException;
import com.capgemini.accountregistration.model.Account;
import com.capgemini.accountregistration.repository.AccountRepository;
import com.capgemini.accountregistration.service.AccountService;
import com.capgemini.accountregistration.service.util.AccountOpeningUtil;

@Service
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	private AccountRepository accountrepostry;
	
	@Override
	public List<Account> getAllAccounts() {
		return (List<Account>) accountrepostry.findAll();
	}

	@Override
	public Account addAccount(Account account) throws MinimumBalanceException {
		AccountOpeningUtil.checkOpiningBalance(account);
		return accountrepostry.save(account);
	}

	@Override
	public Account updateAccount(Account account) {
		return accountrepostry.save(account);
	}

	@Override
	public void deleteAccount(Long id) {
		accountrepostry.deleteById(id);
	}

	@Override
	public Optional<Account> findById(Long id) {
		return accountrepostry.findById(id);
	}

}
