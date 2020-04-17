package com.capgemini.accountregistration.repository;

import org.springframework.data.repository.CrudRepository;

import com.capgemini.accountregistration.model.Account;

public interface AccountRepository extends CrudRepository<Account, Long> {


}
