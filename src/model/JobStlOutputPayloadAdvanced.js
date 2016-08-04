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
    root.ForgeModelDerivative.JobStlOutputPayloadAdvanced = factory(root.ForgeModelDerivative.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JobStlOutputPayloadAdvanced model module.
   * @module model/JobStlOutputPayloadAdvanced
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>JobStlOutputPayloadAdvanced</code>.
   * Advanced options for &#x60;stl&#x60; type.
   * @alias module:model/JobStlOutputPayloadAdvanced
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>JobStlOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStlOutputPayloadAdvanced} obj Optional instance to populate.
   * @return {module:model/JobStlOutputPayloadAdvanced} The populated <code>JobStlOutputPayloadAdvanced</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('exportColor')) {
        obj['exportColor'] = ApiClient.convertToType(data['exportColor'], 'Boolean');
      }
      if (data.hasOwnProperty('exportFileStructure')) {
        obj['exportFileStructure'] = ApiClient.convertToType(data['exportFileStructure'], 'String');
      }
    }
    return obj;
  }

  /**
   * Default format is `binary`. Possible values are `binary` or `ascii`.
   * @member {module:model/JobStlOutputPayloadAdvanced.FormatEnum} format
   * @default 'binary'
   */
  exports.prototype['format'] = 'binary';
  /**
   * Color is exported by default. If set to `true`, color is exported. If set to `false`, color is not exported.
   * @member {Boolean} exportColor
   * @default true
   */
  exports.prototype['exportColor'] = true;
  /**
   * `single` (default): creates one STL file for all the input files (assembly file)  `multiple`: creates a separate STL file for each object 
   * @member {module:model/JobStlOutputPayloadAdvanced.ExportFileStructureEnum} exportFileStructure
   * @default 'single'
   */
  exports.prototype['exportFileStructure'] = 'single';


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "binary"
     * @const
     */
    "binary": "binary",
    /**
     * value: "ascii"
     * @const
     */
    "ascii": "ascii"  };

  /**
   * Allowed values for the <code>exportFileStructure</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExportFileStructureEnum = {
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"  };


  return exports;
}));


