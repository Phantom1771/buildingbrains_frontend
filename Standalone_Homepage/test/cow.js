/*********************************************************************************
*     File Name           :     cow.js
*     Created By          :     Peilun Zhang
*     Creation Date       :     [2017-03-06 20:58]
*     Description         :      
**********************************************************************************/
(function(exports) {
      "use strict";

        function Cow(name) {
                this.name = name || "Anon cow";
                  }
                    exports.Cow = Cow;

                      Cow.prototype = {
                              greets: function(target) {
                                        if (!target)
                                                    throw new Error("missing target");
                                                          return this.name + " greets " + target;
                                                              }
                                                                };
})(this);

