package com.capgemini.accountregistration.exception;

public class MinimumBalanceException extends Exception {

	private static final long serialVersionUID = -5409357709166449666L;
	
	public MinimumBalanceException(String errorMessage) {
		super(errorMessage);
		
	}

}
