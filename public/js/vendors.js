/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"index"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	module.exports = __webpack_require__(24);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var template = __webpack_require__(14);

	template.config('escape', false);

	//日期格式
	/**   
	    * 对日期进行格式化，  
	    * @param date 要格式化的日期  
	    * @param format 进行格式化的模式字符串  
	    *     支持的模式字母有：  
	    *     y:年,  
	    *     M:年中的月份(1-12),  
	    *     d:月份中的天(1-31),  
	    *     h:小时(0-23),  
	    *     m:分(0-59),  
	    *     s:秒(0-59),  
	    *     S:毫秒(0-999),  
	    *     q:季度(1-4)  
	    * @return String  
	    */
	template.helper('xx', function (date, format) {

	    date = new Date(date);
	    var map = {
	        "M": date.getMonth() + 1, //月份 
	        "d": date.getDate(), //日 
	        "h": date.getHours(), //小时 
	        "m": date.getMinutes(), //分 
	        "s": date.getSeconds(), //秒 
	        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
	        "S": date.getMilliseconds() //毫秒 
	    };

	    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
	        var v = map[t];
	        if (v !== undefined) {
	            if (all.length > 1) {
	                v = '0' + v;
	                v = v.substr(v.length - 2);
	            }
	            return v;
	        } else if (t === 'y') {
	            return (date.getFullYear() + '').substr(4 - all.length);
	        }
	        return all;
	    });
	    return format;
	});

	module.exports = template;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
	!function () {
	  function a(a) {
	    return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y);
	  }function b(a) {
	    return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'";
	  }function c(c, d) {
	    function e(a) {
	      return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a;
	    }function f(b) {
	      var c = m;if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () {
	        return m++, "$line=" + m + ";";
	      })), 0 === b.indexOf("=")) {
	        var e = l && !/^=[=#]/.test(b);if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
	          var f = b.replace(/\s*\([^\)]+\)/, "");n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")");
	        } else b = "$string(" + b + ")";b = s[1] + b + s[2];
	      }return g && (b = "$line=" + c + ";" + b), r(a(b), function (a) {
	        if (a && !p[a]) {
	          var b;b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0;
	        }
	      }), b + "\n";
	    }var g = d.debug,
	        h = d.openTag,
	        i = d.closeTag,
	        j = d.parser,
	        k = d.compress,
	        l = d.escape,
	        m = 1,
	        p = { $data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1 },
	        q = "".trim,
	        s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
	        t = q ? "$out+=text;return $out;" : "$out.push(text);",
	        u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
	        v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
	        w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
	        x = s[0],
	        y = "return new String(" + s[3] + ");";r(c.split(h), function (a) {
	      a = a.split(i);var b = a[0],
	          c = a[1];1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)));
	    });var z = w + x + y;g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try {
	      var A = new Function("$data", "$filename", z);return A.prototype = n, A;
	    } catch (B) {
	      throw B.temp = "function anonymous($data,$filename) {" + z + "}", B;
	    }
	  }var d = function (a, b) {
	    return "string" == typeof b ? q(b, { filename: a }) : g(a, b);
	  };d.version = "3.0.0", d.config = function (a, b) {
	    e[a] = b;
	  };var e = d.defaults = { openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null },
	      f = d.cache = {};d.render = function (a, b) {
	    return q(a, b);
	  };var g = d.renderFile = function (a, b) {
	    var c = d.get(a) || p({ filename: a, name: "Render Error", message: "Template not found" });return b ? c(b) : c;
	  };d.get = function (a) {
	    var b;if (f[a]) b = f[a];else if ("object" == typeof document) {
	      var c = document.getElementById(a);if (c) {
	        var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");b = q(d, { filename: a });
	      }
	    }return b;
	  };var h = function (a, b) {
	    return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a;
	  },
	      i = { "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;" },
	      j = function (a) {
	    return i[a];
	  },
	      k = function (a) {
	    return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j);
	  },
	      l = Array.isArray || function (a) {
	    return "[object Array]" === {}.toString.call(a);
	  },
	      m = function (a, b) {
	    var c, d;if (l(a)) for (c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a);else for (c in a) b.call(a, a[c], c);
	  },
	      n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m };d.helper = function (a, b) {
	    o[a] = b;
	  };var o = d.helpers = n.$helpers;d.onerror = function (a) {
	    var b = "Template Error\n\n";for (var c in a) b += "<" + c + ">\n" + a[c] + "\n\n";"object" == typeof console && console.error(b);
	  };var p = function (a) {
	    return d.onerror(a), function () {
	      return "{Template Error}";
	    };
	  },
	      q = d.compile = function (a, b) {
	    function d(c) {
	      try {
	        return new i(c, h) + "";
	      } catch (d) {
	        return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c));
	      }
	    }b = b || {};for (var g in e) void 0 === b[g] && (b[g] = e[g]);var h = b.filename;try {
	      var i = c(a, b);
	    } catch (j) {
	      return j.filename = h || "anonymous", j.name = "Syntax Error", p(j);
	    }return d.prototype = i.prototype, d.toString = function () {
	      return i.toString();
	    }, h && b.cache && (f[h] = d), d;
	  },
	      r = n.$each,
	      s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
	      t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
	      u = /[^\w$]+/g,
	      v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
	      w = /^\d[^,]*|,\d[^,]*/g,
	      x = /^,+|,+$/g,
	      y = /^$|,+/;e.openTag = "{{", e.closeTag = "}}";var z = function (a, b) {
	    var c = b.split(":"),
	        d = c.shift(),
	        e = c.join(":") || "";return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")";
	  };e.parser = function (a) {
	    a = a.replace(/^\s/, "");var b = a.split(" "),
	        c = b.shift(),
	        e = b.join(" ");switch (c) {case "if":
	        a = "if(" + e + "){";break;case "else":
	        b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "", a = "}else" + b + "{";break;case "/if":
	        a = "}";break;case "each":
	        var f = b[0] || "$data",
	            g = b[1] || "as",
	            h = b[2] || "$value",
	            i = b[3] || "$index",
	            j = h + "," + i;"as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){";break;case "/each":
	        a = "});";break;case "echo":
	        a = "print(" + e + ");";break;case "print":case "include":
	        a = c + "(" + b.join(",") + ");";break;default:
	        if (/^\s*\|\s*[\w\$]/.test(e)) {
	          var k = !0;0 === a.indexOf("#") && (a = a.substr(1), k = !1);for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) o = z(o, m[l]);a = (k ? "=" : "=#") + o;
	        } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a;}return a;
	  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return d;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports ? module.exports = d : this.template = d;
	}();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);

	var base = __webpack_require__(20);
	//模板配置
	var tplArr = [];
	var template = __webpack_require__(13);
	var modalTpl = __webpack_require__(21);
	tplArr['modal'] = template.compile(modalTpl.replace(/^\s*|\s*$/g, ""));
	var baseTpl = __webpack_require__(22);
	tplArr['base'] = template.compile(baseTpl.replace(/^\s*|\s*$/g, ""));

	function Main() {
	  _this = this;
	  this.main = function () {
	    this.event(this, 'tap', 'm-click');
	    this.init();
	  };
	  //事件封装
	  this.event = function (_this, type, name) {
	    $(document).on(type, '[' + name + ']', function (e) {
	      //var ths = $(this)[0];
	      var event = $($(this)[0]).attr(name);
	      var Fun = event.split(',');
	      _this[Fun[0]]($($(this)[0]), Fun[1], e);
	    });
	  };
	  //区分全半角判断文字长度
	  this.getByteLen = function (val) {
	    if (!val) {
	      val = 0;
	    }
	    var len = 0;
	    for (var i = 0; i < val.length; i++) {
	      if (val.charAt(i).match(/[^\x00-\xff]/ig) != null) //全角
	        len += 2; //如果是全角，占用两个字节
	      else len += 1; //半角占用一个字节
	    }
	    return len / 2;
	  };
	  //获取url属性值
	  this.GetQueryString = function (name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	    var url = decodeURI(window.location.search);
	    var r = url.substr(1).match(reg);
	    if (r != null) return unescape(r[2]);return null;
	  };
	  //提示弹出框
	  this.alert = function (title, content) {
	    var data = {
	      "Ttype": "alert",
	      title: title,
	      content: content
	    };
	    var alert = $(tplArr['modal'](data)).dialog("show");
	    $('body').append(alert);
	  };
	  //公共get方法
	  this.get = function (url, data, Fun) {
	    //data.openid_test= "ojtKJjq93sF3dOoz4lA12MrxtcUk"; 
	    console.info(data);
	    $.get(url, data, function (ret) {
	      Fun(ret);
	    }, 'json');
	  };
	  //公共post方法
	  this.post = function (url, data, Fun) {
	    //data.openid_test= "ojtKJjq93sF3dOoz4lA12MrxtcUk";
	    $.post(url, data, function (ret) {
	      Fun(ret);
	    }, 'json');
	  };
	  //提示弹出框
	  this.alert = function (options) {
	    var data = {
	      "Ttype": "alert",
	      "title": options.title || "标题",
	      "closeFun": options.loseFun || 'm-click="alertClose"',
	      "content": options.content || "内容"
	    };
	    console.log(data);
	    var alert = $(tplArr['modal'](data)).dialog("show");
	    $('body').append(alert);
	  };
	  //确认弹出框
	  this.confirm = function (options) {
	    var data = {
	      "Ttype": "confirm",
	      "title": options.title || "标题",
	      "eventFun": options.Fun || 'm-click="dialogClose"',
	      "closeFun": options.closeFun || 'm-click="dialogClose"',
	      "content": options.content || "内容"
	    };
	    var alert = $(tplArr['modal'](data)).dialog("show");
	    $('body').append(alert);
	  };
	  //题目弹出框
	  this.questions = function (options) {
	    var data = {
	      "Ttype": "questions",
	      "mark": options.mark,
	      "title": options.title || "标题",
	      "eventFun": options.Fun || 'm-click="dialogClose"',
	      "closeFun": options.closeFun || 'm-click="dialogClose"',
	      "content": options.content || "内容",
	      "left": options.left || "提交",
	      "right": options.right || "取消",
	      "starId": options.starId
	    };
	    var alert = $(tplArr['modal'](data)).dialog("show");
	    $('body').append(alert);
	  };
	  //关闭提示弹出层
	  this.dialogClose = function () {
	    $('.ui-dialog').remove();
	  };
	  //关闭上级弹出层
	  this.alertClose = function () {
	    $('#alert_dialog').remove();
	  };
	  //创建菜单
	  this.createMenu = function (menuData) {
	    //调接口获取菜单列表
	    //if(menuData){
	    var data = {
	      "Ttype": "menu",
	      "menu": menuData
	    };
	    //console.log(pageMenu);
	    if ("undefined" == typeof pageMenu) {
	      console.log(menuData);
	      pageMenu = { "active": [menuData.dataList[0].id, menuData.dataList[0].list[0].id] };
	    }
	    data.menu.active = pageMenu.active;
	    //$('.wrapper').prepend(tplArr['base'](data));
	    console.log(data);
	    $('.main-sidebar').html(tplArr['base'](data));
	    //}
	  };
	  //创建公共头
	  this.createHeader = function (data) {
	    var data = {
	      "Ttype": "header",
	      "data": data
	    };
	    $('.main-header').html(tplArr['base'](data));
	  };
	  this.init = function () {
	    this.createMenu(base.menuData);
	    this.createHeader({ "username": "jspsj" });
	    //$(function() {
	    //attachFastClick.attach(document.body);
	    //});
	  };
	  return this.main();
	};
	//exports.orientLayer = orientLayer;

	var main = new Main();
	module.exports = main;

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	//主菜单数据
	module.exports.menuData = {
	    'active': [1, 11],
	    'dataList': [{
	        'id': 1,
	        'title': '门店管理',
	        'icon': 'fa fa-home',
	        'url': '../store/store_manage.html',
	        'list': []
	    }, {
	        'id': 2,
	        'title': '餐品管理',
	        'icon': 'fa fa-cutlery',
	        'url': '',
	        'list': [{
	            'id': 21,
	            'title': '餐品库',
	            'url': '../food/food_list.html'
	        }, {
	            'id': 22,
	            'title': '餐品分类',
	            'url': '../food/food_sort.html'
	        }]
	    }, {
	        'id': 3,
	        'title': '订单管理',
	        'icon': 'fa fa-table',
	        'url': '',
	        'list': [{
	            'id': 11,
	            'title': '订单概述',
	            'url': '../order/order_summary.html'
	        }, {
	            'id': 12,
	            'title': '所有订单',
	            'url': '../order/order_list_jm.html'
	        }]
	    }, {
	        'id': 4,
	        'title': '发货管理',
	        'icon': 'fa fa-cogs',
	        'url': '',
	        'list': [{
	            'id': 31,
	            'title': '已发货',
	            'url': ''
	        }, {
	            'id': 32,
	            'title': '餐品分类',
	            'url': ''
	        }]
	    }, {
	        'id': 5,
	        'title': '模块配置',
	        'icon': 'fa fa-cogs',
	        'url': '../configure/configure_time.html',
	        'list': []
	    }]
	};

	var getdata = "getdata/"; //区分服务器接口
	//var getdata = "http://cdcdemo.woaap.com/";//区分服务器接口
	var getdata = "../../"; //区分服务器接口 

	//后端接口路径
	module.exports.url = {
	    //业务结构  
	    "structAll": getdata + "/struct/all", //业务结构整体全部
	    "structView": getdata + "/struct/view", //业务结构查看
	    "structDel": getdata + "/struct/del", //业务结构删除
	    "structAdd": getdata + "/struct/add", //业务结构添加
	    "structEdit": getdata + "/struct/edit" };
	module.exports.devUrl = "http://translite.woaap.com";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "{{if Ttype == 'alert'}}\n<div class=\"ui-dialog\">\n    <div class=\"ui-dialog-cnt\">\n        <div class=\"ui-dialog-bd\">\n            <div>\n            <h4>{{title}}</h4>\n            <div>{{content}}</div></div>\n        </div>\n        <div class=\"ui-dialog-ft ui-btn-group\">\n            <button type=\"button\" data-role=\"button\" m-click=\"dialogClose\" class=\"select\" id=\"dialogButton{{i}}\">关闭</button> \n        </div>\n    </div>        \n</div>\n{{/if}}\n{{if Ttype == 'confirm'}}\n<div class=\"ui-dialog\">\n    <div class=\"ui-dialog-cnt\">\n        <div class=\"ui-dialog-bd\">\n            <div>\n            <h4>{{title}}</h4>\n            <div>{{content||\"test\"}}</div>\n            </div>\n        </div>\n        <div class=\"ui-dialog-ft ui-btn-group\">\n            <button type=\"button\" class=\"select\" {{eventFun}}>确认</button> \n            <button type=\"button\" {{closeFun}}  class=\"select\" id=\"dialogButton\">关闭</button> \n        </div>\n    </div>        \n</div>\n{{/if}}\n{{if Ttype== \"rules\"}}\n<div class=\"ui-dialog main-dialog\">\n    <div class=\"ui-dialog-cnt\">\n        <button type=\"button\" data-role=\"button\" class=\"close\"></button> \n        <div class=\"ui-dialog-bd\"> \n            <div class=\"title\">活动说明</div>\n            <hr>\n            <div class=\"content\">\n                <p>本互动活动仅限为爱麦跑活动现场人员参与；</p><p>参与者在互动活动中获得麦当劳折扣券的，需凭电子兑换券前ETOCRM展台兑换麦当劳纸质折扣券，然后方可前往麦当劳实体店凭券进行消费抵用；</p><p>参与者在互动活动中获得礼品卡券后，可凭券前往ETOCRM展台兑换相应实物礼品；电子兑换券仅限活动当日现场兑换使用，逾期无效；</p><p>活动最终解释权归齐数科技（上海）有限公司所有。</p>\n            </div>\n        </div> \n        <div class=\"ui-dialog-ft\"></div>\n    </div>        \n</div>\n{{/if}}\n{{if Ttype== \"qrcode\"}}\n<div class=\"ui-dialog main-dialog\">\n    <div class=\"ui-dialog-cnt\">\n        <button type=\"button\" data-role=\"button\" class=\"close\"></button> \n        <div class=\"ui-dialog-bd\" style=\"width: 220px; margin-left: 22px;\"> \n            <div class=\"title\">群二维码</div>\n            <hr>\n            <div class=\"content\">\n                <img src=\"{{baseUrl}}{{qrcode}}\" style=\"width: 100%;\">\n            </div>\n        </div> \n        <div class=\"ui-dialog-ft\"></div>\n    </div>        \n</div>\n{{/if}}"

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "{{if Ttype == \"menu\"}}\n<!--左侧菜单-->\n<section class=\"sidebar\">\n    <ul class=\"sidebar-menu\">\n        {{each menu.dataList as value i}}\n            {{if value.list.length == 0}}\n                <li class=\"{{ menu.active[0]==value.id?active='active':active=''}}\" name=\"tracking\">\n                    <a href=\"{{value.url}}\">\n                        <i class=\"{{value.icon}}\"></i> \n                        <span>{{value.title}}</span>\n                    </a>\n                </li>\n            {{else}}\n                <li class=\"treeview {{menu.active[0]==value.id?active='active':active=''}}\">\n                    <a href=\"javascript:;\" m-click=\"toggleNav\">\n                        <i class=\"{{value.icon}}\"></i> \n                        <span>{{value.title}}</span>\n                    </a>\n                    <ul class=\"treeview-menu\" style=\"display:{{if menu.active[0]==value.id}}block{{else}}none{{/if}}\">\n                        {{each value.list as l m}}\n                            <li class=\"{{(menu.active[0]==value.id && menu.active[1] == l.id)?active:''}}\"><a href=\"{{l.url}}\" style=\"margin-left: 10px;\"><i class=\"fa fa-angle-double-right\"></i> {{l.title}}</a></li>\n                        {{/each}}\n                    </ul>\n                </li>\n            {{/if}}   \n        {{/each}}\n    </ul>\n</section>\n{{/if}}\n{{if Ttype == \"header\"}}\n<!-- Logo -->\n<a href=\"javascript:;\" class=\"logo\">\n  <!-- mini logo for sidebar mini 50x50 pixels -->\n  <span class=\"logo-mini\"><b>logo</span>\n  <!-- logo for regular state and mobile devices -->\n  <span class=\"logo-lg\"><img src=\"../img/logo.png\" width=\"100\"; alt=\"大家乐\"></span>\n</a>\n<!-- Header Navbar: style can be found in header.less -->\n<nav class=\"navbar navbar-static-top\">\n  <!-- Sidebar toggle button-->\n  <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </a>\n  <!-- 用户设置 -->\n  <div class=\"navbar-custom-menu\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"dropdown user user-menu\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n          <img src=\"../../dist/img/avatar5.png\" class=\"user-image\" alt=\"User Image\">\n          <span class=\"hidden-xs\">{{data.username}}</span>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <!-- User image -->\n          <li class=\"user-header\">\n            <img src=\"../../dist/img/avatar5.png\" class=\"img-circle\" alt=\"User Image\">\n            <p>{{data.username}}</p>\n          </li>\n          <!-- Menu Footer-->\n          <li class=\"user-footer\">\n            <!--<div class=\"pull-left\">\n              <a href=\"#\" class=\"btn btn-default btn-flat\">用户设置</a>\n            </div>-->\n            <div class=\"pull-right\">\n              <a href=\"#\" class=\"btn btn-default btn-flat\">退出</a>\n            </div>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n{{/if}}"

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var main = __webpack_require__(15);
	function Jsbox() {
		_this = this;
		this.main = function () {
			this.event(this, 'click', 'j-click');
			$(window).resize(_this.jsbox_csh);
			this.init();
			//var data = {"type":"7"}
			//$('body').append(tplArr['index'](data));
		};
		this.event = function (_this, type, name) {
			$(document).on(type, '[' + name + ']', function (e) {
				//var ths = $(this)[0];
				var event = $($(this)[0]).attr(name);
				var Fun = event.split(',');
				_this[Fun[0]]($($(this)[0]), Fun[1], e);
			});
		};
		this.optionInit = function (_options) {
			this.options_ = $.extend({
				onlyid: "", //弹出层ID
				content: false, //内容
				url: "", //数据地址
				url_css: false, //样式表地址
				iframe: false, //使用iframe
				ajax: false, //使用ajax
				loads: false, //使用load
				title: false, //标题
				footer: false, //底部
				drag: false, //拖动
				slide: false, //弹出向下滚动
				conw: 200, //宽度
				//conh:400,//高度
				FixedTop: false, //弹出层出现位置
				FixedLeft: false, //弹出层出现位置
				Opacity: .4, //透明度
				mack: false, //遮罩
				range: false, //移动范围
				Save_button: "", //保存按钮
				Ok_button: "", //确定按钮
				sd: "slow", //弹出速度
				Close: true,
				buttonCon: false,
				functions: false, //返回函数
				Fun: false, //加载完毕回调方法
				FunData: false,
				loadIcon: 'cj/jsbox/images_jsbox/loading.gif', //加载提示图片路径
				error: '<h3>Error 404</h3>' //ajax报错信息
			}, _options || {});

			this.zw = document.documentElement.clientWidth || document.body.clientWidth;
			this.zh = document.documentElement.clientHeight || document.body.clientHeight;
			this.optionsID = new Date().getTime();
			//var options = ".jsbox";
			this.options = ".jsbox" + this.optionsID;
		};
		this.show = function (_options) {
			var _this = this;
			this.optionInit(_options);

			$("#" + this.options_.onlyid).remove();

			var wc = "";var mw = "";
			_this.options_.FixedLeft != false ? wc = _this.options_.FixedLeft : wc = "50%";mw = _this.options_.conw / 2;
			console.log(mw);
			var hc = "";
			_this.options_.FixedTop != false ? hc = _this.options_.FixedTop : hc = this.zh / 2 - 150;

			_this.options_.buttonCon != false ? _this.options_.buttonCon = _this.options_.buttonCon : _this.options_.buttonCon = "确定";

			var jsboxContent = $('.jsboxContent');
			var loading = $('<div class="loading"></div>');
			//var urlcss = $('<link rel="stylesheet" type="text/css" href="../../../../js/plug-in/jsbox/'+_this.options_.url_css+'.css" />');
			var save_button = $("<div class='jsboxAn_save'><input class='btn btn-primary btn-flat btn-block' type='button' " + _this.options_.Save_button + " value='" + _this.options_.buttonCon + "'></div>");
			var ok_button = $("<div class='jsboxAn_ok'><input class='btn btn-primary btn-flat btn-block' type='button' " + _this.options_.Ok_button + " value='" + _this.options_.buttonCon + "'></div>");
			if (_this.options_.Close == true) {
				var Close = '<a href="javascript:void(0)" title="关闭" mid="' + _this.options_.onlyid + '" oid="' + _this.options + '" j-click=\"jsboxClose\" class="jsbox_close">';
			} else {
				var Close = '<a style="display:none;" href="javascript:void(0)" title="关闭" mid="' + _this.options_.onlyid + '" oid="' + _this.options + '" j-click=\"jsboxClose\" class="jsbox_close">';
			}
			var boxtitle = $('<h2 class="jsboxTitle">' + _this.options_.title + '</h2>' + Close + '</a>');
			var boxfooter = $("<div class='jsboxFooter'><div mid='" + _this.options_.onlyid + "' oid=\"" + _this.options + "\" j-click=\"jsboxAnCancel\" class='jsboxAn_Cancel'><input class='Cancel btn btn-default btn-flat btn-block' type='button' value='取消'></div></div>");
			var zon = "<div class=\"popupComponent " + _this.options_.onlyid + "_lightBox\" id=\"lightBox\"><div class=\"popupCover\"></div></div>";
			var con = "<div id='" + _this.options_.onlyid + "' class='jsbox jsbox" + this.optionsID + "'>" + "<div class='jsboxContent' style='width:" + _this.options_.conw + "px;height:" + _this.options_.conh + "px;'></div>" + "</div>";

			if (_this.options_.mack != false) {
				var isclass = $('.popupComponent').is("." + _this.options_.onlyid + "_lightBox");
				if (!isclass) {
					var leng = $('.popupComponent').length + 1;
					var $zon = $(zon).appendTo('body').fadeTo("500", 1);
					$zon.css({ 'zIndex': leng * 100 + 1000 - 10 });
					var html_h = $("body").height();
					var wid_h = $(window).height();
					var mack_h = '';
					if (html_h > wid_h) {
						mack_h = html_h;
					} else {
						mack_h = wid_h;
					};
					$('.' + _this.options_.onlyid + '_lightBox').show().height(mack_h);
				}
			}

			var Tollp = $("html").scrollTop() || document.body.scrollTop | document.documentElement.scrollTop;
			var leng = $('.jsbox').length + 1;
			var $con = $(con).appendTo('body');
			$con.css({ 'zIndex': leng * 100 + 1000 });
			//$('body').css('overflow','hidden');

			$(_this.options).css({ top: hc + Tollp, left: wc, marginLeft: -mw }); //修改左定位：left:wc
			var t = hc + Tollp - 50;
			//$('.jsboxContent').css('margin-top',t+'px');
			$(".topLeft,.topCenter,.topRight,.centerLeft,.centerRight,.bottomLeft,.bottomCenter,.bottomRight").fadeTo(20, _this.options_.Opacity);

			var iframeh;
			if (_this.options_.title != false && _this.options_.footer != false) {
				$('.jsboxContent', _this.options).append(boxtitle);
				$('.jsboxContent', _this.options).append(boxfooter);
				if (_this.options_.Save_button != "") {
					$(".jsboxFooter", _this.options).prepend(save_button);
				}
				if (_this.options_.Ok_button != "") {
					$(".jsboxFooter", _this.options).prepend(ok_button);
				}
				iframeh = _this.options_.conh - 83;
			} else if (_this.options_.title != false) {
				$('.jsboxContent', _this.options).append(boxtitle);
				iframeh = _this.options_.conh - 30;
			} else if (_this.options_.footer != false) {
				$('.jsboxContent', _this.options).append(boxfooter);
				iframeh = _this.options_.conh - 48;
				if (_this.options_.Save_button != "") {
					$(".jsboxFooter", _this.options).prepend(save_button);
				}
				if (_this.options_.Ok_button != "") {
					$(".jsboxFooter", _this.options).prepend(ok_button);
				}
			} else {
				iframeh = _this.options_.conh;
			}

			var iframe = $('<iframe name="jsboxFrame" class="iframebox" style="width:100%; height:' + iframeh + 'px;" frameborder="no" border="0"></iframe>');
			var ajaxcon = $('<div class="jtycom" style="width:100%; height:' + iframeh + 'px;"></div>');
			var loaddiv = $('<div class="loaddiv" style="display:block; height:' + iframeh + 'px;"></div>');
			var content = $('<div class="loaddiv" style="display:block; height:' + iframeh + 'px;">' + _this.options_.content + '</div>');

			if (_this.options_.url != false && _this.options_.iframe != false) {
				$('.jsboxContent', _this.options).append(loading);

				if (_this.options_.footer != false) {
					$(".jsboxFooter", _this.options).before(iframe);
				} else {
					$('.jsboxContent', _this.options).append(iframe);
				}

				$('.iframebox', _this.options).hide().attr("src", _this.options_.url);
				$('.iframebox', _this.options).load(function () {
					$(this).show();
					$(".jsboxFooter", _this.options).show();
					loading.fadeTo(500, 0).hide();
				});
			} else if (_this.options_.url != false && _this.options_.ajax != false) {
				$('.jsboxContent', _this.options).append(loading);

				$.ajax({
					url: _this.options_.url,
					type: 'GET',
					dataType: 'json',
					error: function () {
						$('.jsboxContent', _this.options).html(_this.options_.error);
					},
					success: function (date) {

						if (_this.options_.url_css != false) {
							//加载样式表
							if ($("link[href$='" + _this.options_.url_css + ".css']").length == 0) {
								var css_href = _this.options_.url_css + '.css';
								var styleTag = document.createElement("link");
								styleTag.setAttribute('type', 'text/css');
								styleTag.setAttribute('rel', 'stylesheet');
								styleTag.setAttribute('href', css_href);
								$("head")[0].appendChild(styleTag);
							}
						}

						$('.jsboxContent', _this.options).append(ajaxcon);
						loading.fadeTo(500, 0).hide();
						if (_this.options_.footer != false) {
							$(".jsboxFooter", _this.options).show();
							$('.jsboxContent', _this.options).append(boxfooter);
						} else {
							$('.jsboxContent', _this.options).append(ajaxcon);
						}
						if (_this.options_.content != false) {
							_this.options_.content(date);
						};
					}
				});
			} else if (_this.options_.url != false && _this.options_.loads != false) {
				//if(_this.options_.url_css!=false){$('head').append(urlcss)}
				$('.jsboxContent', _this.options).append(loading);
				if (_this.options_.url_css != false) {
					//加载样式表
					if ($("link[href$='" + _this.options_.url_css + ".css']").length == 0) {
						var css_href = _this.options_.url_css + '.css';
						var styleTag = document.createElement("link");
						styleTag.setAttribute('type', 'text/css');
						styleTag.setAttribute('rel', 'stylesheet');
						styleTag.setAttribute('href', css_href);
						$("head")[0].appendChild(styleTag);
					}
				}

				if (_this.options_.footer != false) {
					$(".jsboxFooter", _this.options).before(loaddiv);
				} else {
					$('.jsboxContent', _this.options).append(loaddiv);
				}

				//$('.jsboxContent',options).append(loading);
				$('.loaddiv', _this.options).load(_this.options_.url, function () {
					loading.hide();
					$(".jsboxFooter", _this.options).show();

					if (_this.options_.Fun) {
						if (_this.options_.FunData) {
							alert(_this.options_.FunData);
							_this.options_.Fun(_this.options_.onlyid, _this.options_.FunData);
						} else {
							_this.options_.Fun(_this.options_.onlyid);
						}
					}
					if (_this.options_.functions != false) {
						//loadfun();
						$('.loaddiv').css({ "background": "none" });
					}
				});
			} else {

				if (_this.options_.footer != false) {
					$(".jsboxFooter", _this.options).before(content);
				} else {
					$('.jsboxContent', _this.options).append(content);
				}
				$(".jsboxFooter", _this.options).show();
			}

			if (_this.options_.Fun) {
				if (_this.options_.FunData) {
					_this.options_.Fun(_this.options_.onlyid, _this.options_.FunData);
				} else {
					_this.options_.Fun(_this.options_.onlyid);
				}
			}

			//if(!$show.is(":animated") ){
			//if(_this.options_.drag != false){_this.jsbox_yd()}else{_this.jsbox_hd(_this.options_.sd)}
			//if(_this.options_.slide != false){_this.jsbox_hdx()}else{_this.jsbox_hd()}
			//}
		};
		this.jsboxAnCancel = function (ths) {
			this.closeBox(ths);
		};
		this.jsboxClose = function (ths) {
			this.closeBox(ths);
		};
		this.closeBox = function (ths) {
			var mid = ths.attr('mid');
			var oid = ths.attr('oid');
			$(ths).parents(oid).remove();
			$('.' + mid + '_lightBox').remove();
			$('body').css('overflow', 'auto');
		};
		this.jsbox_csh = function () {
			var zw = document.documentElement.clientWidth || document.body.clientWidth;
			var zh = document.documentElement.clientHeight || document.body.clientHeight;
		};
		//移动
		this.jsbox_yd = function () {
			var _move = false; //移动标记
			var _x, _y; //鼠标离控件左上角的相对位置

			$(".jsboxTitle", _this.options).mousedown(function (e) {
				_move = true;
				_x = e.pageX - parseInt($(_this.options).css("left"));
				_y = e.pageY - parseInt($(_this.options).css("top"));

				//z-index
				if ($(".index_z").length == 0) {
					$("body").append('<input class="index_z"type="hidden" value="1300"/>');
				}
				var zzs = $(".index_z").val() * 1 + 1;
				var zjleng = $(".index_z").val(zzs);
				$(_this.options).css({ "z-index": zzs });

				$('.ud').text(_y);
			});

			var zsw = $(_this.options).width();
			var zsh = $(_this.options).height();

			var zws = document.documentElement.clientWidth || document.body.clientWidth;
			var zhs = document.documentElement.clientHeight || document.body.clientHeight;
			var obje = $(_this.options);
			$(document).mousemove(function (e) {
				if (_move) {

					var ws = zws - zsw;
					var hs = zhs - zsh;
					var x = e.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
					var y = e.pageY - _y;
					if (_this.options_.range != false) {
						if (x <= 0) {
							x = 0;
						}
						if (x >= ws) {
							x = ws;
						}
						if (y <= 0) {
							y = 0;
						}
						if (y >= hs) {
							y = hs;
						}
					}
					obje.css({ top: y, left: x }); //控件新位置
				}
			}).mouseup(function () {
				_move = false;
				return false;
			});
		};

		this.jsbox_hd = function (sd) {
			$(_this.options).fadeIn(sd);
		};
		this.jsbox_hdx = function () {
			$(_this.options).fadeIn('slow').animate({ opacity: '100', top: "+=50" }, 'slow');
		};

		this.init = function () {
			// this.create_con();
			// if(userData.showlist == "0" && listId != null){
			//     _this.showlist(listId);
			// }
		};
		return this.main();
	};

	var jsbox = new Jsbox();
	//module.exports = function(){return 123};
	module.exports = jsbox;

/***/ }
/******/ ]);