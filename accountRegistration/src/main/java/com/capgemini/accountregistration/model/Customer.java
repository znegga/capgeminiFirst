package com.capgemini.accountregistration.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long customerId;
	@NotBlank(message ="FirstName can not be blank")
	private String firstName;
	@NotBlank(message ="LastName can not be blank")
	private String lastName;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy")
	private Date dob;
	//@NotBlank(message ="SSN can not be blank")
    private String ssn;
	//@Email(message ="Email ID should be valid")
	private String emailId;
	//@NotBlank(message ="Mobile Number can not be blank")
	private String mobileNumber;
	
	@Valid
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerId")
	private List<Address> homeAddress;
	@Valid
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerId")
	private List<Address> malingAddress;
	@Valid
	@OneToMany
	@JoinColumn(name = "customerId")
	private List<Account> account;
	
	
	
	
	
	
	
	
	
	
	

}
