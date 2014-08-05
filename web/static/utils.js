// Generated by CoffeeScript 1.7.1
(function() {
  define(function(require) {
    var exports, querystring, tough, url;
    require('/static/node_components');
    url = node_url;
    tough = node_tough;
    querystring = node_querystring;
    exports = {
      cookie_parse: function(cookie_string) {
        var cookie, each, index, key, value, _i, _len, _ref;
        cookie = {};
        _ref = cookie_string != null ? cookie_string.split(';') : void 0;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          each = _ref[_i];
          index = each.indexOf('=');
          index = index < 0 ? each.length : index;
          key = each.slice(0, +index + 1 || 9e9);
          value = each.slice(index + 1);
          cookie[decodeURIComponent(key)] = decodeURIComponent(value);
        }
        return cookie;
      },
      cookie_unparse: function(cookie) {
        var key, value;
        return ((function() {
          var _i, _len, _results;
          _results = [];
          for (value = _i = 0, _len = cookie.length; _i < _len; value = ++_i) {
            key = cookie[value];
            _results.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
          return _results;
        })()).join(';');
      },
      url_parse: node_url.parse,
      url_unparse: node_url.format,
      querystring_parse: node_querystring.parse,
      querystring_unparse: node_querystring.stringify,
      querystring_unparse_with_variables: function(obj) {
        var key, m, query, re, replace_list, value;
        query = node_querystring.stringify(obj);
        replace_list = {};
        for (key in obj) {
          value = obj[key];
          re = /{{\s*(\w+?)\s*}}/g;
          while (m = re.exec(key)) {
            replace_list[encodeURIComponent(m[0])] = m[0];
          }
          re = /{{\s*(\w+?)\s*}}/g;
          while (m = re.exec(value)) {
            replace_list[encodeURIComponent(m[0])] = m[0];
          }
        }
        for (key in replace_list) {
          value = replace_list[key];
          query = query.replace(key, value, 'g');
        }
        return query;
      },
      CookieJar: node_tough.CookieJar,
      Cookie: node_tough.Cookie,
      dict2list: function(dict) {
        var k, v, _results;
        _results = [];
        for (k in dict) {
          v = dict[k];
          _results.push({
            name: k,
            value: v
          });
        }
        return _results;
      },
      list2dict: function(list) {
        var dict, each, _i, _len, _results;
        dict = {};
        _results = [];
        for (_i = 0, _len = list.length; _i < _len; _i++) {
          each = list[_i];
          _results.push(dict[each.name] = each.value);
        }
        return _results;
      }
    };
    return exports;
  });

}).call(this);
