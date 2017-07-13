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


import ApiClient from '../ApiClient';





/**
* The Profile model module.
* @module model/Profile
* @version 1.0.0
*/
export default class Profile {
    /**
    * Constructs a new <code>Profile</code>.
    * Represents the general information about a user.
    * @alias module:model/Profile
    * @class
    * @param id {String} The unique ID of this user
    * @param firstName {String} The first name of this user
    * @param lastName {String} The last name of this user
    */

    constructor(id, firstName, lastName) {
        

        
        

        this['id'] = id;this['first_name'] = firstName;this['last_name'] = lastName;

        
    }

    /**
    * Constructs a <code>Profile</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Profile} obj Optional instance to populate.
    * @return {module:model/Profile} The populated <code>Profile</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Profile();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * The unique ID of this user
    * @member {String} id
    */
    id = undefined;
    /**
    * The first name of this user
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * The last name of this user
    * @member {String} last_name
    */
    last_name = undefined;








}

