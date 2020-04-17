package com.capgemini.accountregistration.repository;

import org.springframework.data.repository.CrudRepository;

import com.capgemini.accountregistration.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
