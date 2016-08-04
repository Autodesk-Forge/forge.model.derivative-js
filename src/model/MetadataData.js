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
    define(['ApiClient', 'model/MetadataCollection', 'model/MetadataMetadata', 'model/MetadataObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MetadataCollection'), require('./MetadataMetadata'), require('./MetadataObject'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeModelDerivative) {
      root.ForgeModelDerivative = {};
    }
    root.ForgeModelDerivative.MetadataData = factory(root.ForgeModelDerivative.ApiClient, root.ForgeModelDerivative.MetadataCollection, root.ForgeModelDerivative.MetadataMetadata, root.ForgeModelDerivative.MetadataObject);
  }
}(this, function(ApiClient, MetadataCollection, MetadataMetadata, MetadataObject) {
  'use strict';




  /**
   * The MetadataData model module.
   * @module model/MetadataData
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>MetadataData</code>.
   * 
   * @alias module:model/MetadataData
   * @class
   * @param type {String} 
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;



  };

  /**
   * Constructs a <code>MetadataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataData} obj Optional instance to populate.
   * @return {module:model/MetadataData} The populated <code>MetadataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], [MetadataMetadata]);
      }
      if (data.hasOwnProperty('objects')) {
        obj['objects'] = ApiClient.convertToType(data['objects'], [MetadataObject]);
      }
      if (data.hasOwnProperty('collection')) {
        obj['collection'] = ApiClient.convertToType(data['collection'], [MetadataCollection]);
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   * @default 'metadata'
   */
  exports.prototype['type'] = 'metadata';
  /**
   * @member {Array.<module:model/MetadataMetadata>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Collection of “objects”
   * @member {Array.<module:model/MetadataObject>} objects
   */
  exports.prototype['objects'] = undefined;
  /**
   * Array of objects with their “properties” as a non-hierarchical list.
   * @member {Array.<module:model/MetadataCollection>} collection
   */
  exports.prototype['collection'] = undefined;



  return exports;
}));


