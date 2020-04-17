package com.capgemini.accountregistration.service.util;

import com.capgemini.accountregistration.exception.MinimumBalanceException;
import com.capgemini.accountregistration.model.Account;
import com.capgemini.accountregistration.model.AccountType;

public class AccountOpeningUtil {
	public static void checkOpiningBalance(Account account) throws MinimumBalanceException {
		
		if (account.getAccountType() == AccountType.SAVING && account.getBalance() < 200) {
			throw new MinimumBalanceException("To open a saving account the requerd balance is $200");
			
		} else if (account.getAccountType() == AccountType.CHECKING && account.getBalance() < 300) {
			throw new MinimumBalanceException("To open a checking account the requerd balance is $300");
			
		} else if (account.getAccountType() == AccountType.CD && account.getBalance() < 2000) {
			throw new MinimumBalanceException("To open CD account the requerd balance is $2000");
		}
		 
	}
}
