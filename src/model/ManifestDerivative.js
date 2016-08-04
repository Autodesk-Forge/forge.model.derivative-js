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
    define(['ApiClient', 'model/ManifestChildren'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManifestChildren'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeModelDerivative) {
      root.ForgeModelDerivative = {};
    }
    root.ForgeModelDerivative.ManifestDerivative = factory(root.ForgeModelDerivative.ApiClient, root.ForgeModelDerivative.ManifestChildren);
  }
}(this, function(ApiClient, ManifestChildren) {
  'use strict';




  /**
   * The ManifestDerivative model module.
   * @module model/ManifestDerivative
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ManifestDerivative</code>.
   * Requested output files for the source file URN
   * @alias module:model/ManifestDerivative
   * @class
   * @param name {String} Output file type
   * @param hasThumbnail {Boolean} Indicates if a thumbnail has been generated
   * @param progress {String} Translation progress for requested entity
   * @param status {module:model/ManifestDerivative.StatusEnum} Status of the requested entity; possible values are: `pending`, `success`, `inprogress`, `failed`, `timeout` and `partialsuccess` 
   * @param children {Array.<module:model/ManifestChildren>} 
   */
  var exports = function(name, hasThumbnail, progress, status, children) {
    var _this = this;

    _this['name'] = name;
    _this['hasThumbnail'] = hasThumbnail;

    _this['progress'] = progress;
    _this['status'] = status;
    _this['children'] = children;
  };

  /**
   * Constructs a <code>ManifestDerivative</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManifestDerivative} obj Optional instance to populate.
   * @return {module:model/ManifestDerivative} The populated <code>ManifestDerivative</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('hasThumbnail')) {
        obj['hasThumbnail'] = ApiClient.convertToType(data['hasThumbnail'], 'Boolean');
      }
      if (data.hasOwnProperty('outputType')) {
        obj['outputType'] = ApiClient.convertToType(data['outputType'], 'String');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = ApiClient.convertToType(data['progress'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('children')) {
        obj['children'] = ApiClient.convertToType(data['children'], [ManifestChildren]);
      }
    }
    return obj;
  }

  /**
   * Output file type
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Indicates if a thumbnail has been generated
   * @member {Boolean} hasThumbnail
   */
  exports.prototype['hasThumbnail'] = undefined;
  /**
   * @member {module:model/ManifestDerivative.OutputTypeEnum} outputType
   */
  exports.prototype['outputType'] = undefined;
  /**
   * Translation progress for requested entity
   * @member {String} progress
   */
  exports.prototype['progress'] = undefined;
  /**
   * Status of the requested entity; possible values are: `pending`, `success`, `inprogress`, `failed`, `timeout` and `partialsuccess` 
   * @member {module:model/ManifestDerivative.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<module:model/ManifestChildren>} children
   */
  exports.prototype['children'] = undefined;


  /**
   * Allowed values for the <code>outputType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OutputTypeEnum = {
    /**
     * value: "stl"
     * @const
     */
    "stl": "stl",
    /**
     * value: "step"
     * @const
     */
    "step": "step",
    /**
     * value: "iges"
     * @const
     */
    "iges": "iges",
    /**
     * value: "obj"
     * @const
     */
    "obj": "obj",
    /**
     * value: "svf"
     * @const
     */
    "svf": "svf",
    /**
     * value: "thumbnail"
     * @const
     */
    "thumbnail": "thumbnail"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "inprogress"
     * @const
     */
    "inprogress": "inprogress",
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "timeout"
     * @const
     */
    "timeout": "timeout",
    /**
     * value: "partialsuccess"
     * @const
     */
    "partialsuccess": "partialsuccess"  };


  return exports;
}));


