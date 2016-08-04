/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeModelDerivative) {
      root.ForgeModelDerivative = {};
    }
    root.ForgeModelDerivative.MetadataMetadata = factory(root.ForgeModelDerivative.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MetadataMetadata model module.
   * @module model/MetadataMetadata
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>MetadataMetadata</code>.
   * metadata definition
   * @alias module:model/MetadataMetadata
   * @class
   * @param name {String} Name of the model view
   * @param guid {String} Unique identifier for the model view
   */
  var exports = function(name, guid) {
    var _this = this;

    _this['name'] = name;
    _this['guid'] = guid;
  };

  /**
   * Constructs a <code>MetadataMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataMetadata} obj Optional instance to populate.
   * @return {module:model/MetadataMetadata} The populated <code>MetadataMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the model view
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Unique identifier for the model view
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;



  return exports;
}));


