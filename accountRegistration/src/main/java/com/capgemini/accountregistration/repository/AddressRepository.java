package com.capgemini.accountregistration.repository;

import org.springframework.data.repository.CrudRepository;

import com.capgemini.accountregistration.model.Address;

public interface AddressRepository extends CrudRepository<Address, Long> {

}
