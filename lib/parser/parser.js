module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = peg$FAILED,
        peg$c1 = "when",
        peg$c2 = { type: "literal", value: "when", description: "\"when\"" },
        peg$c3 = ",",
        peg$c4 = { type: "literal", value: ",", description: "\",\"" },
        peg$c5 = "then",
        peg$c6 = { type: "literal", value: "then", description: "\"then\"" },
        peg$c7 = [],
        peg$c8 = function(a, c) { return {actions:a, conditions: c, type:'scenario'} },
        peg$c9 = function(a) {return a},
        peg$c10 = "before each",
        peg$c11 = { type: "literal", value: "before each", description: "\"before each\"" },
        peg$c12 = function(as) {return {type:"beforeEach", actions:as}},
        peg$c13 = "users",
        peg$c14 = { type: "literal", value: "users", description: "\"users\"" },
        peg$c15 = "user",
        peg$c16 = { type: "literal", value: "user", description: "\"user\"" },
        peg$c17 = function(a1, b) {return [a1].concat(b)},
        peg$c18 = function(a) { return a },
        peg$c19 = "on",
        peg$c20 = { type: "literal", value: "on", description: "\"on\"" },
        peg$c21 = function(a, o) {return {name:a, obj: o, type:'action'} },
        peg$c22 = "to",
        peg$c23 = { type: "literal", value: "to", description: "\"to\"" },
        peg$c24 = function(a, o, l) {return {name:a,obj:o, location:l, type:'action'} },
        peg$c25 = "go",
        peg$c26 = { type: "literal", value: "go", description: "\"go\"" },
        peg$c27 = function(s) {return {name:"go",obj:s, type:'goAction'}},
        peg$c28 = /^[A-z\-]/,
        peg$c29 = { type: "class", value: "[A-z\\-]", description: "[A-z\\-]" },
        peg$c30 = function(digits) {return {name: digits.join(''),type:'macro'} },
        peg$c31 = /^[A-z .\-]/,
        peg$c32 = { type: "class", value: "[A-z .\\-]", description: "[A-z .\\-]" },
        peg$c33 = function(digits) {return digits.join('')},
        peg$c34 = "clicks",
        peg$c35 = { type: "literal", value: "clicks", description: "\"clicks\"" },
        peg$c36 = "click",
        peg$c37 = { type: "literal", value: "click", description: "\"click\"" },
        peg$c38 = "sends",
        peg$c39 = { type: "literal", value: "sends", description: "\"sends\"" },
        peg$c40 = function() {return "send"},
        peg$c41 = "send",
        peg$c42 = { type: "literal", value: "send", description: "\"send\"" },
        peg$c43 = function() {return "go"},
        peg$c44 = "goes",
        peg$c45 = { type: "literal", value: "goes", description: "\"goes\"" },
        peg$c46 = function(c1, cs) {return [c1].concat(cs)},
        peg$c47 = /^[A-z]/,
        peg$c48 = { type: "class", value: "[A-z]", description: "[A-z]" },
        peg$c49 = function(left, op, right) {return {left:left.join(''), op:op.join(''), right:right}},
        peg$c50 = "and",
        peg$c51 = { type: "literal", value: "and", description: "\"and\"" },
        peg$c52 = "in",
        peg$c53 = { type: "literal", value: "in", description: "\"in\"" },
        peg$c54 = /^[ +]/,
        peg$c55 = { type: "class", value: "[ +]", description: "[ +]" },
        peg$c56 = /^[0-9]/,
        peg$c57 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c58 = function(i) {return i},
        peg$c59 = function(r) {return r;},
        peg$c60 = "'",
        peg$c61 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c62 = /^[A-z .\-\/]/,
        peg$c63 = { type: "class", value: "[A-z .\\-\\/]", description: "[A-z .\\-\\/]" },
        peg$c64 = function(s) {return s.join('');},

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsescenario();
      if (s0 === peg$FAILED) {
        s0 = peg$parsebeforeEach();
      }

      return s0;
    }

    function peg$parsescenario() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c1) {
        s1 = peg$c1;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsespace();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseactor();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsespace();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseactions();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s6 = peg$c3;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c4); }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsespace();
                  if (s7 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 4) === peg$c5) {
                      s8 = peg$c5;
                      peg$currPos += 4;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c6); }
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parsespace();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseconditions();
                        if (s10 !== peg$FAILED) {
                          s11 = [];
                          s12 = peg$parsespace();
                          while (s12 !== peg$FAILED) {
                            s11.push(s12);
                            s12 = peg$parsespace();
                          }
                          if (s11 !== peg$FAILED) {
                            peg$reportedPos = s0;
                            s1 = peg$c8(s5, s10);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$c0;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c0;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c0;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseactor();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsespace();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseaction();
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c9(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parsebeforeEach() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 11) === peg$c10) {
        s1 = peg$c10;
        peg$currPos += 11;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsespace();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseactions();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c12(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseactor() {
      var s0;

      if (input.substr(peg$currPos, 5) === peg$c13) {
        s0 = peg$c13;
        peg$currPos += 5;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c14); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c15) {
          s0 = peg$c15;
          peg$currPos += 4;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c16); }
        }
      }

      return s0;
    }

    function peg$parseactions() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseaction();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseother_action();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseother_action();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c17(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseaction();
      }

      return s0;
    }

    function peg$parseother_action() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseseparator();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseaction();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c18(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseaction() {
      var s0;

      s0 = peg$parseclickAction();
      if (s0 === peg$FAILED) {
        s0 = peg$parsesendAction();
        if (s0 === peg$FAILED) {
          s0 = peg$parsegoAction();
          if (s0 === peg$FAILED) {
            s0 = peg$parseanyAction();
          }
        }
      }

      return s0;
    }

    function peg$parseclickAction() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseclick();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsespace();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c19) {
            s3 = peg$c19;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsespace();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsestring();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c21(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsesendAction() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parsesend();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsespace();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsestring();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsespace();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c22) {
                s5 = peg$c22;
                peg$currPos += 2;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c23); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsespace();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsestring();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c24(s1, s3, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsegoAction() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsespace();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c22) {
            s3 = peg$c22;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsespace();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsestring();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c27(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseanyAction() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c28.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c28.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c30(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseselector() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c31.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c31.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c32); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c33(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseclick() {
      var s0;

      if (input.substr(peg$currPos, 6) === peg$c34) {
        s0 = peg$c34;
        peg$currPos += 6;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c36) {
          s0 = peg$c36;
          peg$currPos += 5;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c37); }
        }
      }

      return s0;
    }

    function peg$parsesend() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c38) {
        s1 = peg$c38;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c39); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c40();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c41) {
          s1 = peg$c41;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c42); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c40();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parsego() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c43();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c44) {
          s1 = peg$c44;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c45); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c43();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseconditions() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsecondition();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseother_conditions();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseother_conditions();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c46(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsecondition();
      }

      return s0;
    }

    function peg$parseother_conditions() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseseparator();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsecondition();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c18(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsecondition() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c47.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c48); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c47.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c48); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsespace();
        if (s2 !== peg$FAILED) {
          s3 = [];
          if (peg$c47.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c48); }
          }
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              if (peg$c47.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c48); }
              }
            }
          } else {
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsespace();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsevalue();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c49(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseseparator() {
      var s0;

      if (input.substr(peg$currPos, 3) === peg$c50) {
        s0 = peg$c50;
        peg$currPos += 3;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }

      return s0;
    }

    function peg$parsepreposition() {
      var s0;

      if (input.substr(peg$currPos, 2) === peg$c19) {
        s0 = peg$c19;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c22) {
          s0 = peg$c22;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c23); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c52) {
            s0 = peg$c52;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c53); }
          }
        }
      }

      return s0;
    }

    function peg$parsespace() {
      var s0;

      if (peg$c54.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }

      return s0;
    }

    function peg$parsevalue() {
      var s0;

      s0 = peg$parseinteger();
      if (s0 === peg$FAILED) {
        s0 = peg$parsestring();
      }

      return s0;
    }

    function peg$parseinteger() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c56.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c57); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c56.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c57); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c58(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsestring_delimiter();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseraw_string();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsestring_delimiter();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c59(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsestring_delimiter() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 39) {
        s0 = peg$c60;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }

      return s0;
    }

    function peg$parseraw_string() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c62.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c63); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c62.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c63); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c64(s1);
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
