package com.capgemini.accountregistration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@NotBlank(message ="street can not be blank")
	private String street;
	@NotBlank(message ="city can not be blank")
	private String city;
	@NotBlank(message ="state can not be blank")
	private String state;
	@NotBlank(message ="zipCode can not be blank")
	private String zipCode;
	@NotBlank(message ="country can not be blank")
	private String country;

}
