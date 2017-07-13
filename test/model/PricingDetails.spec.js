/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.lyft);
  }
}(this, function(expect, lyft) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new lyft.PricingDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PricingDetails', function() {
    it('should create an instance of PricingDetails', function() {
      // uncomment below and update the code to test PricingDetails
      //var instane = new lyft.PricingDetails();
      //expect(instance).to.be.a(lyft.PricingDetails);
    });

    it('should have the property baseCharge (base name: "base_charge")', function() {
      // uncomment below and update the code to test the property baseCharge
      //var instane = new lyft.PricingDetails();
      //expect(instance).to.be();
    });

    it('should have the property cancelPenaltyAmount (base name: "cancel_penalty_amount")', function() {
      // uncomment below and update the code to test the property cancelPenaltyAmount
      //var instane = new lyft.PricingDetails();
      //expect(instance).to.be();
    });

    it('should have the property costMinimum (base name: "cost_minimum")', function() {
      // uncomment below and update the code to test the property costMinimum
      //var instane = new lyft.PricingDetails();
      //expect(instance).to.be();
    });

    it('should have the property costPerMile (base name: "cost_per_mile")', function() {
      // uncomment below and update the code to test the property costPerMile
      //var instane = new lyft.PricingDetails();
      //expect(instance).to.be();
    });

    it('should have the property costPerMinute (base name: "cost_per_minute")', function() {
      // uncomment below and update the code to test the property costPerMinute
      //var instane = new lyft.PricingDetails();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new lyft.PricingDetails();
      //expect(instance).to.be();
    });

    it('should have the property trustAndService (base name: "trust_and_service")', function() {
      // uncomment below and update the code to test the property trustAndService
      //var instane = new lyft.PricingDetails();
      //expect(instance).to.be();
    });

  });

}));