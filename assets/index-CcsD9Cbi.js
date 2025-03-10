(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function j(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function nf(e){return j(e).filter(t=>isNaN(Number(t)))}function Qe(e){return nf(e).map(n=>e[n])}var rf=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,sf=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,of=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Vi={Space_Separator:rf,ID_Start:sf,ID_Continue:of},ue={isSpaceSeparator(e){return typeof e=="string"&&Vi.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Vi.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Vi.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Ds,be,at,Zr,Mt,Ke,he,Ys,zn;var af=function(t,n){Ds=String(t),be="start",at=[],Zr=0,Mt=1,Ke=0,he=void 0,Ys=void 0,zn=void 0;do he=uf(),df[be]();while(he.type!=="eof");return typeof n=="function"?bs({"":zn},"",n):zn};function bs(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=String(i),o=bs(r,s,n);o===void 0?delete r[s]:Object.defineProperty(r,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const s=bs(r,i,n);s===void 0?delete r[i]:Object.defineProperty(r,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let L,B,Rn,it,R;function uf(){for(L="default",B="",Rn=!1,it=1;;){R=ut();const e=Ru[L]();if(e)return e}}function ut(){if(Ds[Zr])return String.fromCodePoint(Ds.codePointAt(Zr))}function y(){const e=ut();return e===`
`?(Mt++,Ke=0):e?Ke+=e.length:Ke++,e&&(Zr+=e.length),e}const Ru={default(){switch(R){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":y();return;case"/":y(),L="comment";return;case void 0:return y(),Q("eof")}if(ue.isSpaceSeparator(R)){y();return}return Ru[be]()},comment(){switch(R){case"*":y(),L="multiLineComment";return;case"/":y(),L="singleLineComment";return}throw X(y())},multiLineComment(){switch(R){case"*":y(),L="multiLineCommentAsterisk";return;case void 0:throw X(y())}y()},multiLineCommentAsterisk(){switch(R){case"*":y();return;case"/":y(),L="default";return;case void 0:throw X(y())}y(),L="multiLineComment"},singleLineComment(){switch(R){case`
`:case"\r":case"\u2028":case"\u2029":y(),L="default";return;case void 0:return y(),Q("eof")}y()},value(){switch(R){case"{":case"[":return Q("punctuator",y());case"n":return y(),It("ull"),Q("null",null);case"t":return y(),It("rue"),Q("boolean",!0);case"f":return y(),It("alse"),Q("boolean",!1);case"-":case"+":y()==="-"&&(it=-1),L="sign";return;case".":B=y(),L="decimalPointLeading";return;case"0":B=y(),L="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":B=y(),L="decimalInteger";return;case"I":return y(),It("nfinity"),Q("numeric",1/0);case"N":return y(),It("aN"),Q("numeric",NaN);case'"':case"'":Rn=y()==='"',B="",L="string";return}throw X(y())},identifierNameStartEscape(){if(R!=="u")throw X(y());y();const e=Es();switch(e){case"$":case"_":break;default:if(!ue.isIdStartChar(e))throw Po();break}B+=e,L="identifierName"},identifierName(){switch(R){case"$":case"_":case"‌":case"‍":B+=y();return;case"\\":y(),L="identifierNameEscape";return}if(ue.isIdContinueChar(R)){B+=y();return}return Q("identifier",B)},identifierNameEscape(){if(R!=="u")throw X(y());y();const e=Es();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!ue.isIdContinueChar(e))throw Po();break}B+=e,L="identifierName"},sign(){switch(R){case".":B=y(),L="decimalPointLeading";return;case"0":B=y(),L="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":B=y(),L="decimalInteger";return;case"I":return y(),It("nfinity"),Q("numeric",it*(1/0));case"N":return y(),It("aN"),Q("numeric",NaN)}throw X(y())},zero(){switch(R){case".":B+=y(),L="decimalPoint";return;case"e":case"E":B+=y(),L="decimalExponent";return;case"x":case"X":B+=y(),L="hexadecimal";return}return Q("numeric",it*0)},decimalInteger(){switch(R){case".":B+=y(),L="decimalPoint";return;case"e":case"E":B+=y(),L="decimalExponent";return}if(ue.isDigit(R)){B+=y();return}return Q("numeric",it*Number(B))},decimalPointLeading(){if(ue.isDigit(R)){B+=y(),L="decimalFraction";return}throw X(y())},decimalPoint(){switch(R){case"e":case"E":B+=y(),L="decimalExponent";return}if(ue.isDigit(R)){B+=y(),L="decimalFraction";return}return Q("numeric",it*Number(B))},decimalFraction(){switch(R){case"e":case"E":B+=y(),L="decimalExponent";return}if(ue.isDigit(R)){B+=y();return}return Q("numeric",it*Number(B))},decimalExponent(){switch(R){case"+":case"-":B+=y(),L="decimalExponentSign";return}if(ue.isDigit(R)){B+=y(),L="decimalExponentInteger";return}throw X(y())},decimalExponentSign(){if(ue.isDigit(R)){B+=y(),L="decimalExponentInteger";return}throw X(y())},decimalExponentInteger(){if(ue.isDigit(R)){B+=y();return}return Q("numeric",it*Number(B))},hexadecimal(){if(ue.isHexDigit(R)){B+=y(),L="hexadecimalInteger";return}throw X(y())},hexadecimalInteger(){if(ue.isHexDigit(R)){B+=y();return}return Q("numeric",it*Number(B))},string(){switch(R){case"\\":y(),B+=lf();return;case'"':if(Rn)return y(),Q("string",B);B+=y();return;case"'":if(!Rn)return y(),Q("string",B);B+=y();return;case`
`:case"\r":throw X(y());case"\u2028":case"\u2029":ff(R);break;case void 0:throw X(y())}B+=y()},start(){switch(R){case"{":case"[":return Q("punctuator",y())}L="value"},beforePropertyName(){switch(R){case"$":case"_":B=y(),L="identifierName";return;case"\\":y(),L="identifierNameStartEscape";return;case"}":return Q("punctuator",y());case'"':case"'":Rn=y()==='"',L="string";return}if(ue.isIdStartChar(R)){B+=y(),L="identifierName";return}throw X(y())},afterPropertyName(){if(R===":")return Q("punctuator",y());throw X(y())},beforePropertyValue(){L="value"},afterPropertyValue(){switch(R){case",":case"}":return Q("punctuator",y())}throw X(y())},beforeArrayValue(){if(R==="]")return Q("punctuator",y());L="value"},afterArrayValue(){switch(R){case",":case"]":return Q("punctuator",y())}throw X(y())},end(){throw X(y())}};function Q(e,t){return{type:e,value:t,line:Mt,column:Ke}}function It(e){for(const t of e){if(ut()!==t)throw X(y());y()}}function lf(){switch(ut()){case"b":return y(),"\b";case"f":return y(),"\f";case"n":return y(),`
`;case"r":return y(),"\r";case"t":return y(),"	";case"v":return y(),"\v";case"0":if(y(),ue.isDigit(ut()))throw X(y());return"\0";case"x":return y(),cf();case"u":return y(),Es();case`
`:case"\u2028":case"\u2029":return y(),"";case"\r":return y(),ut()===`
`&&y(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw X(y());case void 0:throw X(y())}return y()}function cf(){let e="",t=ut();if(!ue.isHexDigit(t)||(e+=y(),t=ut(),!ue.isHexDigit(t)))throw X(y());return e+=y(),String.fromCodePoint(parseInt(e,16))}function Es(){let e="",t=4;for(;t-- >0;){const n=ut();if(!ue.isHexDigit(n))throw X(y());e+=y()}return String.fromCodePoint(parseInt(e,16))}const df={start(){if(he.type==="eof")throw Bt();Ri()},beforePropertyName(){switch(he.type){case"identifier":case"string":Ys=he.value,be="afterPropertyName";return;case"punctuator":br();return;case"eof":throw Bt()}},afterPropertyName(){if(he.type==="eof")throw Bt();be="beforePropertyValue"},beforePropertyValue(){if(he.type==="eof")throw Bt();Ri()},beforeArrayValue(){if(he.type==="eof")throw Bt();if(he.type==="punctuator"&&he.value==="]"){br();return}Ri()},afterPropertyValue(){if(he.type==="eof")throw Bt();switch(he.value){case",":be="beforePropertyName";return;case"}":br()}},afterArrayValue(){if(he.type==="eof")throw Bt();switch(he.value){case",":be="beforeArrayValue";return;case"]":br()}},end(){}};function Ri(){let e;switch(he.type){case"punctuator":switch(he.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=he.value;break}if(zn===void 0)zn=e;else{const t=at[at.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ys,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")at.push(e),Array.isArray(e)?be="beforeArrayValue":be="beforePropertyName";else{const t=at[at.length-1];t==null?be="end":Array.isArray(t)?be="afterArrayValue":be="afterPropertyValue"}}function br(){at.pop();const e=at[at.length-1];e==null?be="end":Array.isArray(e)?be="afterArrayValue":be="afterPropertyValue"}function X(e){return Yr(e===void 0?`JSON5: invalid end of input at ${Mt}:${Ke}`:`JSON5: invalid character '${Wu(e)}' at ${Mt}:${Ke}`)}function Bt(){return Yr(`JSON5: invalid end of input at ${Mt}:${Ke}`)}function Po(){return Ke-=5,Yr(`JSON5: invalid identifier character at ${Mt}:${Ke}`)}function ff(e){console.warn(`JSON5: '${Wu(e)}' in strings is not valid ECMAScript; consider escaping`)}function Wu(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function Yr(e){const t=new SyntaxError(e);return t.lineNumber=Mt,t.columnNumber=Ke,t}var hf=function(t,n,r){const i=[];let s="",o,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){o=[];for(const D of n){let T;typeof D=="string"?T=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(T=String(D)),T!==void 0&&o.indexOf(T)<0&&o.push(T)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),c("",{"":t});function c(D,T){let F=T[D];switch(F!=null&&(typeof F.toJSON5=="function"?F=F.toJSON5(D):typeof F.toJSON=="function"&&(F=F.toJSON(D))),a&&(F=a.call(T,D,F)),F instanceof Number?F=Number(F):F instanceof String?F=String(F):F instanceof Boolean&&(F=F.valueOf()),F){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof F=="string")return d(F);if(typeof F=="number")return String(F);if(typeof F=="object")return Array.isArray(F)?w(F):m(F)}function d(D){const T={"'":.1,'"':.2},F={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let O="";for(let z=0;z<D.length;z++){const se=D[z];switch(se){case"'":case'"':T[se]++,O+=se;continue;case"\0":if(ue.isDigit(D[z+1])){O+="\\x00";continue}}if(F[se]){O+=F[se];continue}if(se<" "){let pt=se.charCodeAt(0).toString(16);O+="\\x"+("00"+pt).substring(pt.length);continue}O+=se}const Z=l||Object.keys(T).reduce((z,se)=>T[z]<T[se]?z:se);return O=O.replace(new RegExp(Z,"g"),F[Z]),Z+O+Z}function m(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let T=s;s=s+u;let F=o||Object.keys(D),O=[];for(const z of F){const se=c(z,D);if(se!==void 0){let pt=p(z)+":";u!==""&&(pt+=" "),pt+=se,O.push(pt)}}let Z;if(O.length===0)Z="{}";else{let z;if(u==="")z=O.join(","),Z="{"+z+"}";else{let se=`,
`+s;z=O.join(se),Z=`{
`+s+z+`,
`+T+"}"}}return i.pop(),s=T,Z}function p(D){if(D.length===0)return d(D);const T=String.fromCodePoint(D.codePointAt(0));if(!ue.isIdStartChar(T))return d(D);for(let F=T.length;F<D.length;F++)if(!ue.isIdContinueChar(String.fromCodePoint(D.codePointAt(F))))return d(D);return D}function w(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let T=s;s=s+u;let F=[];for(let Z=0;Z<D.length;Z++){const z=c(String(Z),D);F.push(z!==void 0?z:"null")}let O;if(F.length===0)O="[]";else if(u==="")O="["+F.join(",")+"]";else{let Z=`,
`+s,z=F.join(Z);O=`[
`+s+z+`,
`+T+"]"}return i.pop(),s=T,O}};const mf={parse:af,stringify:hf};var pf=mf;function h(e){try{return pf.stringify(e)}catch{return String(e)}}const gf=[".",":",";",",","?","!"],yf=new RegExp(`[${gf.join("")}]+$`);function Lo(e){return e.replace(yf,"")}function He(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function mi(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&Lo(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:Lo(r)).join(": "):""}function de(e){return e instanceof Error?e:new Error(He(e))}function pi(e,t){const n=de(e);return n.message=mi(t,n.message),n}var _o;(function(e){e.Get="GET",e.Head="HEAD",e.Options="OPTIONS",e.Trace="TRACE",e.Put="PUT",e.Delete="DELETE",e.Post="POST",e.Patch="PATCH",e.Connect="CONNECT"})(_o||(_o={}));var g;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(g||(g={}));var $;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})($||($={}));$.ClientError,$.ServerError;g.Continue+"",$.Information,g.SwitchingProtocols+"",$.Information,g.Processing+"",$.Information,g.EarlyHints+"",$.Information,g.Ok+"",$.Success,g.Created+"",$.Success,g.Accepted+"",$.Success,g.NonAuthoritativeInformation+"",$.Success,g.NoContent+"",$.Success,g.ResetContent+"",$.Success,g.PartialContent+"",$.Success,g.MultiStatus+"",$.Success,g.AlreadyReported+"",$.Success,g.ImUsed+"",$.Success,g.MultipleChoices+"",$.Redirect,g.MovedPermanently+"",$.Redirect,g.Found+"",$.Redirect,g.SeeOther+"",$.Redirect,g.NotModified+"",$.Redirect,g.UseProxy+"",$.Redirect,g.Unused+"",$.Redirect,g.TemporaryRedirect+"",$.Redirect,g.PermanentRedirect+"",$.Redirect,g.BadRequest+"",$.ClientError,g.Unauthorized+"",$.ClientError,g.PaymentRequired+"",$.ClientError,g.Forbidden+"",$.ClientError,g.NotFound+"",$.ClientError,g.MethodNotAllowed+"",$.ClientError,g.NotAcceptable+"",$.ClientError,g.ProxyAuthenticationRequired+"",$.ClientError,g.RequestTimeout+"",$.ClientError,g.Conflict+"",$.ClientError,g.Gone+"",$.ClientError,g.LengthRequired+"",$.ClientError,g.PreconditionFailed+"",$.ClientError,g.PayloadTooLarge+"",$.ClientError,g.UriTooLong+"",$.ClientError,g.UnsupportedMediaType+"",$.ClientError,g.RangeNotSatisfiable+"",$.ClientError,g.ExpectationFailed+"",$.ClientError,g.ImATeapot+"",$.ClientError,g.MisdirectedRequest+"",$.ClientError,g.UnprocessableContent+"",$.ClientError,g.Locked+"",$.ClientError,g.FailedDependency+"",$.ClientError,g.TooEarly+"",$.ClientError,g.UpgradeRequired+"",$.ClientError,g.PreconditionRequired+"",$.ClientError,g.TooManyRequests+"",$.ClientError,g.RequestHeaderFieldsTooLarge+"",$.ClientError,g.UnavailableForLegalReasons+"",$.ClientError,g.InternalServerError+"",$.ServerError,g.NotImplemented+"",$.ServerError,g.BadGateway+"",$.ServerError,g.ServiceUnavailable+"",$.ServerError,g.GatewayTimeout+"",$.ServerError,g.HttpVersionNotSupported+"",$.ServerError,g.VariantAlsoNegotiates+"",$.ServerError,g.InsufficientStorage+"",$.ServerError,g.LoopDetected+"",$.ServerError,g.NotExtended+"",$.ServerError,g.NetworkAuthenticationRequired+"",$.ServerError;const _r={[$.Information]:[g.Continue,g.SwitchingProtocols,g.Processing,g.EarlyHints],[$.Success]:[g.Ok,g.Created,g.Accepted,g.NonAuthoritativeInformation,g.NoContent,g.ResetContent,g.PartialContent,g.MultiStatus,g.AlreadyReported,g.ImUsed],[$.Redirect]:[g.MultipleChoices,g.MovedPermanently,g.Found,g.SeeOther,g.NotModified,g.UseProxy,g.Unused,g.TemporaryRedirect,g.PermanentRedirect],[$.ClientError]:[g.BadRequest,g.Unauthorized,g.PaymentRequired,g.Forbidden,g.NotFound,g.MethodNotAllowed,g.NotAcceptable,g.ProxyAuthenticationRequired,g.RequestTimeout,g.Conflict,g.Gone,g.LengthRequired,g.PreconditionFailed,g.PayloadTooLarge,g.UriTooLong,g.UnsupportedMediaType,g.RangeNotSatisfiable,g.ExpectationFailed,g.ImATeapot,g.MisdirectedRequest,g.UnprocessableContent,g.Locked,g.FailedDependency,g.TooEarly,g.UpgradeRequired,g.PreconditionRequired,g.TooManyRequests,g.RequestHeaderFieldsTooLarge,g.UnavailableForLegalReasons],[$.ServerError]:[g.InternalServerError,g.NotImplemented,g.BadGateway,g.ServiceUnavailable,g.GatewayTimeout,g.HttpVersionNotSupported,g.VariantAlsoNegotiates,g.InsufficientStorage,g.LoopDetected,g.NotExtended,g.NetworkAuthenticationRequired]};function Uu({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Jr{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(de(r))}})}}class Zt extends Error{}class wf extends Zt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class vf extends Zt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Df extends Zt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class un extends Zt{}class Gu extends Zt{constructor(t){super(`Invalid unit ${t}`)}}class pe extends Zt{}class gt extends Zt{constructor(){super("Zone is an abstract class")}}const S="numeric",Ze="short",Ie="long",Qr={year:S,month:S,day:S},qu={year:S,month:Ze,day:S},bf={year:S,month:Ze,day:S,weekday:Ze},ju={year:S,month:Ie,day:S},zu={year:S,month:Ie,day:S,weekday:Ie},Ku={hour:S,minute:S},Hu={hour:S,minute:S,second:S},Zu={hour:S,minute:S,second:S,timeZoneName:Ze},Yu={hour:S,minute:S,second:S,timeZoneName:Ie},Ju={hour:S,minute:S,hourCycle:"h23"},Qu={hour:S,minute:S,second:S,hourCycle:"h23"},Xu={hour:S,minute:S,second:S,hourCycle:"h23",timeZoneName:Ze},el={hour:S,minute:S,second:S,hourCycle:"h23",timeZoneName:Ie},tl={year:S,month:S,day:S,hour:S,minute:S},nl={year:S,month:S,day:S,hour:S,minute:S,second:S},rl={year:S,month:Ze,day:S,hour:S,minute:S},il={year:S,month:Ze,day:S,hour:S,minute:S,second:S},Ef={year:S,month:Ze,day:S,weekday:Ze,hour:S,minute:S},sl={year:S,month:Ie,day:S,hour:S,minute:S,timeZoneName:Ze},ol={year:S,month:Ie,day:S,hour:S,minute:S,second:S,timeZoneName:Ze},al={year:S,month:Ie,day:S,weekday:Ie,hour:S,minute:S,timeZoneName:Ie},ul={year:S,month:Ie,day:S,weekday:Ie,hour:S,minute:S,second:S,timeZoneName:Ie};class dr{get type(){throw new gt}get name(){throw new gt}get ianaName(){return this.name}get isUniversal(){throw new gt}offsetName(t,n){throw new gt}formatOffset(t,n){throw new gt}offset(t){throw new gt}equals(t){throw new gt}get isValid(){throw new gt}}let Wi=null;class gi extends dr{static get instance(){return Wi===null&&(Wi=new gi),Wi}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return yl(t,n,r)}formatOffset(t,n){return Kn(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Or={};function Af(e){return Or[e]||(Or[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Or[e]}const Cf={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Sf(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,o,a,u,l,c]=r;return[o,i,s,a,u,l,c]}function $f(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:s,value:o}=n[i],a=Cf[s];s==="era"?r[a]=o:I(a)||(r[a]=parseInt(o,10))}return r}let Er={};class ct extends dr{static create(t){return Er[t]||(Er[t]=new ct(t)),Er[t]}static resetCache(){Er={},Or={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=ct.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return yl(t,n,r,this.name)}formatOffset(t,n){return Kn(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=Af(this.name);let[i,s,o,a,u,l,c]=r.formatToParts?$f(r,n):Sf(r,n);a==="BC"&&(i=-Math.abs(i)+1);const m=wi({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:c,millisecond:0});let p=+n;const w=p%1e3;return p-=w>=0?w:1e3+w,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Oo={};function Ff(e,t={}){const n=JSON.stringify([e,t]);let r=Oo[n];return r||(r=new Intl.ListFormat(e,t),Oo[n]=r),r}let As={};function Cs(e,t={}){const n=JSON.stringify([e,t]);let r=As[n];return r||(r=new Intl.DateTimeFormat(e,t),As[n]=r),r}let Ss={};function xf(e,t={}){const n=JSON.stringify([e,t]);let r=Ss[n];return r||(r=new Intl.NumberFormat(e,t),Ss[n]=r),r}let $s={};function Tf(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let s=$s[i];return s||(s=new Intl.RelativeTimeFormat(e,t),$s[i]=s),s}let Wn=null;function Mf(){return Wn||(Wn=new Intl.DateTimeFormat().resolvedOptions().locale,Wn)}let Vo={};function kf(e){let t=Vo[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,Vo[e]=t}return t}function Nf(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=Cs(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=Cs(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=r;return[i,s,o]}}function If(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Bf(e){const t=[];for(let n=1;n<=12;n++){const r=N.utc(2009,n,1);t.push(e(r))}return t}function Pf(e){const t=[];for(let n=1;n<=7;n++){const r=N.utc(2016,11,13+n);t.push(e(r))}return t}function Ar(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function Lf(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class _f{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...o}=r;if(!n||Object.keys(o).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=xf(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):to(t,3);return le(n,this.padTo)}}}class Of{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&ct.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=Cs(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Vf{constructor(t,n,r){this.opts={style:"long",...r},!n&&pl()&&(this.rtf=Tf(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):uh(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Rf={firstDay:1,minimalDays:4,weekend:[6,7]};class q{static fromOpts(t){return q.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,s=!1){const o=t||te.defaultLocale,a=o||(s?"en-US":Mf()),u=n||te.defaultNumberingSystem,l=r||te.defaultOutputCalendar,c=Fs(i)||te.defaultWeekSettings;return new q(a,u,l,c,o)}static resetCache(){Wn=null,As={},Ss={},$s={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return q.create(t,n,r,i)}constructor(t,n,r,i,s){const[o,a,u]=Nf(t);this.locale=o,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=If(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Lf(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:q.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Fs(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Ar(this,t,Dl,()=>{const r=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Bf(s=>this.extract(s,r,"month"))),this.monthsCache[i][t]})}weekdays(t,n=!1){return Ar(this,t,Al,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Pf(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Ar(this,void 0,()=>Cl,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[N.utc(2016,11,13,9),N.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ar(this,t,Sl,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[N.utc(-40,1,1),N.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===r);return o?o.value:null}numberFormatter(t={}){return new _f(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Of(t,this.intl,n)}relFormatter(t={}){return new Vf(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Ff(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:gl()?kf(this.locale):Rf}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Ui=null;class Ee extends dr{static get utcInstance(){return Ui===null&&(Ui=new Ee(0)),Ui}static instance(t){return t===0?Ee.utcInstance:new Ee(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ee(vi(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Kn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Kn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return Kn(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Wf extends dr{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Ct(e,t){if(I(e)||e===null)return t;if(e instanceof dr)return e;if(Kf(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?gi.instance:n==="utc"||n==="gmt"?Ee.utcInstance:Ee.parseSpecifier(n)||ct.create(e)}else return xt(e)?Ee.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Wf(e)}const Js={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ro={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Uf=Js.hanidec.replace(/[\[|\]]/g,"").split("");function Gf(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Js.hanidec)!==-1)t+=Uf.indexOf(e[n]);else for(const i in Ro){const[s,o]=Ro[i];r>=s&&r<=o&&(t+=r-s)}}return parseInt(t,10)}else return t}let rn={};function qf(){rn={}}function We({numberingSystem:e},t=""){const n=e||"latn";return rn[n]||(rn[n]={}),rn[n][t]||(rn[n][t]=new RegExp(`${Js[n]}${t}`)),rn[n][t]}let Wo=()=>Date.now(),Uo="system",Go=null,qo=null,jo=null,zo=60,Ko,Ho=null;class te{static get now(){return Wo}static set now(t){Wo=t}static set defaultZone(t){Uo=t}static get defaultZone(){return Ct(Uo,gi.instance)}static get defaultLocale(){return Go}static set defaultLocale(t){Go=t}static get defaultNumberingSystem(){return qo}static set defaultNumberingSystem(t){qo=t}static get defaultOutputCalendar(){return jo}static set defaultOutputCalendar(t){jo=t}static get defaultWeekSettings(){return Ho}static set defaultWeekSettings(t){Ho=Fs(t)}static get twoDigitCutoffYear(){return zo}static set twoDigitCutoffYear(t){zo=t%100}static get throwOnInvalid(){return Ko}static set throwOnInvalid(t){Ko=t}static resetCaches(){q.resetCache(),ct.resetCache(),N.resetCache(),qf()}}class je{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const ll=[0,31,59,90,120,151,181,212,243,273,304,334],cl=[0,31,60,91,121,152,182,213,244,274,305,335];function _e(e,t){return new je("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Qs(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function dl(e,t,n){return n+(fr(e)?cl:ll)[t-1]}function fl(e,t){const n=fr(e)?cl:ll,r=n.findIndex(s=>s<t),i=t-n[r];return{month:r+1,day:i}}function Xs(e,t){return(e-t+7)%7+1}function Xr(e,t=4,n=1){const{year:r,month:i,day:s}=e,o=dl(r,i,s),a=Xs(Qs(r,i,s),n);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=r-1,u=Jn(l,t,n)):u>Jn(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Di(e)}}function Zo(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=e,o=Xs(Qs(r,1,t),n),a=fn(r);let u=i*7+s-o-7+t,l;u<1?(l=r-1,u+=fn(l)):u>a?(l=r+1,u-=fn(r)):l=r;const{month:c,day:d}=fl(l,u);return{year:l,month:c,day:d,...Di(e)}}function Gi(e){const{year:t,month:n,day:r}=e,i=dl(t,n,r);return{year:t,ordinal:i,...Di(e)}}function Yo(e){const{year:t,ordinal:n}=e,{month:r,day:i}=fl(t,n);return{year:t,month:r,day:i,...Di(e)}}function Jo(e,t){if(!I(e.localWeekday)||!I(e.localWeekNumber)||!I(e.localWeekYear)){if(!I(e.weekday)||!I(e.weekNumber)||!I(e.weekYear))throw new un("Cannot mix locale-based week fields with ISO-based week fields");return I(e.localWeekday)||(e.weekday=e.localWeekday),I(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),I(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function jf(e,t=4,n=1){const r=yi(e.weekYear),i=Oe(e.weekNumber,1,Jn(e.weekYear,t,n)),s=Oe(e.weekday,1,7);return r?i?s?!1:_e("weekday",e.weekday):_e("week",e.weekNumber):_e("weekYear",e.weekYear)}function zf(e){const t=yi(e.year),n=Oe(e.ordinal,1,fn(e.year));return t?n?!1:_e("ordinal",e.ordinal):_e("year",e.year)}function hl(e){const t=yi(e.year),n=Oe(e.month,1,12),r=Oe(e.day,1,ei(e.year,e.month));return t?n?r?!1:_e("day",e.day):_e("month",e.month):_e("year",e.year)}function ml(e){const{hour:t,minute:n,second:r,millisecond:i}=e,s=Oe(t,0,23)||t===24&&n===0&&r===0&&i===0,o=Oe(n,0,59),a=Oe(r,0,59),u=Oe(i,0,999);return s?o?a?u?!1:_e("millisecond",i):_e("second",r):_e("minute",n):_e("hour",t)}function I(e){return typeof e>"u"}function xt(e){return typeof e=="number"}function yi(e){return typeof e=="number"&&e%1===0}function Kf(e){return typeof e=="string"}function Hf(e){return Object.prototype.toString.call(e)==="[object Date]"}function pl(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function gl(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Zf(e){return Array.isArray(e)?e:[e]}function Qo(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const s=[t(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}function Yf(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function yn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Fs(e){if(e==null)return null;if(typeof e!="object")throw new pe("Week settings must be an object");if(!Oe(e.firstDay,1,7)||!Oe(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Oe(t,1,7)))throw new pe("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Oe(e,t,n){return yi(e)&&e>=t&&e<=n}function Jf(e,t){return e-t*Math.floor(e/t)}function le(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function bt(e){if(!(I(e)||e===null||e===""))return parseInt(e,10)}function Pt(e){if(!(I(e)||e===null||e===""))return parseFloat(e)}function eo(e){if(!(I(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function to(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function fr(e){return e%4===0&&(e%100!==0||e%400===0)}function fn(e){return fr(e)?366:365}function ei(e,t){const n=Jf(t-1,12)+1,r=e+(t-n)/12;return n===2?fr(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function wi(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Xo(e,t,n){return-Xs(Qs(e,1,t),n)+t-1}function Jn(e,t=4,n=1){const r=Xo(e,t,n),i=Xo(e+1,t,n);return(fn(e)-r+i)/7}function xs(e){return e>99?e:e>te.twoDigitCutoffYear?1900+e:2e3+e}function yl(e,t,n,r=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(n,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function vi(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function wl(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new pe(`Invalid unit value ${e}`);return t}function ti(e,t){const n={};for(const r in e)if(yn(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=wl(i)}return n}function Kn(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${le(n,2)}:${le(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${le(n,2)}${le(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Di(e){return Yf(e,["hour","minute","second","millisecond"])}const Qf=["January","February","March","April","May","June","July","August","September","October","November","December"],vl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Xf=["J","F","M","A","M","J","J","A","S","O","N","D"];function Dl(e){switch(e){case"narrow":return[...Xf];case"short":return[...vl];case"long":return[...Qf];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const bl=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],El=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],eh=["M","T","W","T","F","S","S"];function Al(e){switch(e){case"narrow":return[...eh];case"short":return[...El];case"long":return[...bl];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Cl=["AM","PM"],th=["Before Christ","Anno Domini"],nh=["BC","AD"],rh=["B","A"];function Sl(e){switch(e){case"narrow":return[...rh];case"short":return[...nh];case"long":return[...th];default:return null}}function ih(e){return Cl[e.hour<12?0:1]}function sh(e,t){return Al(t)[e.weekday-1]}function oh(e,t){return Dl(t)[e.month-1]}function ah(e,t){return Sl(t)[e.year<0?0:1]}function uh(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&s){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${c} ago`:`in ${a} ${c}`}function ea(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const lh={D:Qr,DD:qu,DDD:ju,DDDD:zu,t:Ku,tt:Hu,ttt:Zu,tttt:Yu,T:Ju,TT:Qu,TTT:Xu,TTTT:el,f:tl,ff:rl,fff:sl,ffff:al,F:nl,FF:il,FFF:ol,FFFF:ul};class ye{static create(t,n={}){return new ye(t,n)}static parseFormat(t){let n=null,r="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(t){return lh[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return le(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,w)=>this.loc.extract(t,p,w),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>r?ih(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,w)=>r?oh(t,p):s(w?{month:p}:{month:p,day:"numeric"},"month"),l=(p,w)=>r?sh(t,p):s(w?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),c=p=>{const w=ye.macroTokenToFormatOpts(p);return w?this.formatWithSystemDefault(t,w):p},d=p=>r?ah(t,p):s({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(p)}};return ea(ye.parseFormat(n),m)}formatDurationFromString(t,n){const r=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const c=r(l);return c?this.num(u.get(c),l.length):l},s=ye.parseFormat(n),o=s.reduce((u,{literal:l,val:c})=>l?u:u.concat(c),[]),a=t.shiftTo(...o.map(r).filter(u=>u));return ea(s,i(a))}}const $l=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Sn(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function $n(...e){return t=>e.reduce(([n,r,i],s)=>{const[o,a,u]=s(t,i);return[{...n,...o},a||r,u]},[{},null,1]).slice(0,2)}function Fn(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function Fl(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=bt(t[n+i]);return[r,null,n+i]}}const xl=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ch=`(?:${xl.source}?(?:\\[(${$l.source})\\])?)?`,no=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Tl=RegExp(`${no.source}${ch}`),ro=RegExp(`(?:T${Tl.source})?`),dh=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,fh=/(\d{4})-?W(\d\d)(?:-?(\d))?/,hh=/(\d{4})-?(\d{3})/,mh=Fl("weekYear","weekNumber","weekDay"),ph=Fl("year","ordinal"),gh=/(\d{4})-(\d\d)-(\d\d)/,Ml=RegExp(`${no.source} ?(?:${xl.source}|(${$l.source}))?`),yh=RegExp(`(?: ${Ml.source})?`);function hn(e,t,n){const r=e[t];return I(r)?n:bt(r)}function wh(e,t){return[{year:hn(e,t),month:hn(e,t+1,1),day:hn(e,t+2,1)},null,t+3]}function xn(e,t){return[{hours:hn(e,t,0),minutes:hn(e,t+1,0),seconds:hn(e,t+2,0),milliseconds:eo(e[t+3])},null,t+4]}function hr(e,t){const n=!e[t]&&!e[t+1],r=vi(e[t+1],e[t+2]),i=n?null:Ee.instance(r);return[{},i,t+3]}function mr(e,t){const n=e[t]?ct.create(e[t]):null;return[{},n,t+1]}const vh=RegExp(`^T?${no.source}$`),Dh=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function bh(e){const[t,n,r,i,s,o,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",m=(p,w=!1)=>p!==void 0&&(w||p&&c)?-p:p;return[{years:m(Pt(n)),months:m(Pt(r)),weeks:m(Pt(i)),days:m(Pt(s)),hours:m(Pt(o)),minutes:m(Pt(a)),seconds:m(Pt(u),u==="-0"),milliseconds:m(eo(l),d)}]}const Eh={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function io(e,t,n,r,i,s,o){const a={year:t.length===2?xs(bt(t)):bt(t),month:vl.indexOf(n)+1,day:bt(r),hour:bt(i),minute:bt(s)};return o&&(a.second=bt(o)),e&&(a.weekday=e.length>3?bl.indexOf(e)+1:El.indexOf(e)+1),a}const Ah=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Ch(e){const[,t,n,r,i,s,o,a,u,l,c,d]=e,m=io(t,i,r,n,s,o,a);let p;return u?p=Eh[u]:l?p=0:p=vi(c,d),[m,new Ee(p)]}function Sh(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const $h=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Fh=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,xh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ta(e){const[,t,n,r,i,s,o,a]=e;return[io(t,i,r,n,s,o,a),Ee.utcInstance]}function Th(e){const[,t,n,r,i,s,o,a]=e;return[io(t,a,n,r,i,s,o),Ee.utcInstance]}const Mh=Sn(dh,ro),kh=Sn(fh,ro),Nh=Sn(hh,ro),Ih=Sn(Tl),kl=$n(wh,xn,hr,mr),Bh=$n(mh,xn,hr,mr),Ph=$n(ph,xn,hr,mr),Lh=$n(xn,hr,mr);function _h(e){return Fn(e,[Mh,kl],[kh,Bh],[Nh,Ph],[Ih,Lh])}function Oh(e){return Fn(Sh(e),[Ah,Ch])}function Vh(e){return Fn(e,[$h,ta],[Fh,ta],[xh,Th])}function Rh(e){return Fn(e,[Dh,bh])}const Wh=$n(xn);function Uh(e){return Fn(e,[vh,Wh])}const Gh=Sn(gh,yh),qh=Sn(Ml),jh=$n(xn,hr,mr);function zh(e){return Fn(e,[Gh,kl],[qh,jh])}const na="Invalid Duration",Nl={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Kh={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Nl},Be=146097/400,en=146097/4800,Hh={years:{quarters:4,months:12,weeks:Be/7,days:Be,hours:Be*24,minutes:Be*24*60,seconds:Be*24*60*60,milliseconds:Be*24*60*60*1e3},quarters:{months:3,weeks:Be/28,days:Be/4,hours:Be*24/4,minutes:Be*24*60/4,seconds:Be*24*60*60/4,milliseconds:Be*24*60*60*1e3/4},months:{weeks:en/7,days:en,hours:en*24,minutes:en*24*60,seconds:en*24*60*60,milliseconds:en*24*60*60*1e3},...Nl},Wt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Zh=Wt.slice(0).reverse();function yt(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new W(r)}function Il(e,t){let n=t.milliseconds??0;for(const r of Zh.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function ra(e,t){const n=Il(e,t)<0?-1:1;Wt.reduceRight((r,i)=>{if(I(t[i]))return r;if(r){const s=t[r]*n,o=e[i][r],a=Math.floor(s/o);t[i]+=a*n,t[r]-=a*o*n}return i},null),Wt.reduce((r,i)=>{if(I(t[i]))return r;if(r){const s=t[r]%1;t[r]-=s,t[i]+=s*e[r][i]}return i},null)}function Yh(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class W{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?Hh:Kh;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||q.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return W.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new pe(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new W({values:ti(t,W.normalizeUnit),loc:q.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(xt(t))return W.fromMillis(t);if(W.isDuration(t))return t;if(typeof t=="object")return W.fromObject(t);throw new pe(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Rh(t);return r?W.fromObject(r,n):W.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Uh(t);return r?W.fromObject(r,n):W.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new pe("need to specify a reason the Duration is invalid");const r=t instanceof je?t:new je(t,n);if(te.throwOnInvalid)throw new Df(r);return new W({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new Gu(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?ye.create(this.loc,r).formatDurationFromString(this,t):na}toHuman(t={}){if(!this.isValid)return na;const n=Wt.map(r=>{const i=this.values[r];return I(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=to(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},N.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Il(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=W.fromDurationLike(t),r={};for(const i of Wt)(yn(n.values,i)||yn(this.values,i))&&(r[i]=n.get(i)+this.get(i));return yt(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=W.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=wl(t(this.values[r],r));return yt(this,{values:n},!0)}get(t){return this[W.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...ti(t,W.normalizeUnit)};return yt(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return yt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return ra(this.matrix,t),yt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Yh(this.normalize().shiftToAll().toObject());return yt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>W.normalizeUnit(o));const n={},r={},i=this.toObject();let s;for(const o of Wt)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in r)a+=this.matrix[l][o]*r[l],r[l]=0;xt(i[o])&&(a+=i[o]);const u=Math.trunc(a);n[o]=u,r[o]=(a*1e3-u*1e3)/1e3}else xt(i[o])&&(r[o]=i[o]);for(const o in r)r[o]!==0&&(n[s]+=o===s?r[o]:r[o]/this.matrix[s][o]);return ra(this.matrix,n),yt(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return yt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of Wt)if(!n(this.values[r],t.values[r]))return!1;return!0}}const tn="Invalid Interval";function Jh(e,t){return!e||!e.isValid?re.invalid("missing or invalid start"):!t||!t.isValid?re.invalid("missing or invalid end"):t<e?re.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class re{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new pe("need to specify a reason the Interval is invalid");const r=t instanceof je?t:new je(t,n);if(te.throwOnInvalid)throw new vf(r);return new re({invalid:r})}static fromDateTimes(t,n){const r=In(t),i=In(n),s=Jh(r,i);return s??new re({start:r,end:i})}static after(t,n){const r=W.fromDurationLike(n),i=In(t);return re.fromDateTimes(i,i.plus(r))}static before(t,n){const r=W.fromDurationLike(n),i=In(t);return re.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let s,o;try{s=N.fromISO(r,n),o=s.isValid}catch{o=!1}let a,u;try{a=N.fromISO(i,n),u=a.isValid}catch{u=!1}if(o&&u)return re.fromDateTimes(s,a);if(o){const l=W.fromISO(i,n);if(l.isValid)return re.after(s,l)}else if(u){const l=W.fromISO(r,n);if(l.isValid)return re.before(a,l)}}return re.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?re.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(In).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const o=n[s]||this.e,a=+o>+this.e?this.e:o;r.push(re.fromDateTimes(i,a)),i=a,s+=1}return r}splitBy(t){const n=W.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const o=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(re.fromDateTimes(r,s)),r=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:re.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return re.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(re.fromDateTimes(n,u.time)),n=null);return re.merge(i)}difference(...t){return re.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:tn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Qr,n={}){return this.isValid?ye.create(this.s.loc.clone(n),t).formatInterval(this):tn}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:tn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:tn}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:tn}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:tn}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):W.invalid(this.invalidReason)}mapEndpoints(t){return re.fromDateTimes(t(this.s),t(this.e))}}class Cr{static hasDST(t=te.defaultZone){const n=N.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return ct.isValidZone(t)}static normalizeZone(t){return Ct(t,te.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||q.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||q.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||q.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||q.create(n,r,s)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||q.create(n,r,s)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||q.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||q.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return q.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return q.create(n,null,"gregory").eras(t)}static features(){return{relative:pl(),localeWeek:gl()}}}function ia(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(W.fromMillis(r).as("days"))}function Qh(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=ia(u,l);return(c-c%7)/7}],["days",ia]],i={},s=e;let o,a;for(const[u,l]of r)n.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Xh(e,t,n,r){let[i,s,o,a]=Qh(e,t,n);const u=t-i,l=n.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const c=W.fromObject(s,r);return l.length>0?W.fromMillis(u,r).shiftTo(...l).plus(c):c}const em="missing Intl.DateTimeFormat.formatToParts support";function G(e,t=n=>n){return{regex:e,deser:([n])=>t(Gf(n))}}const tm=" ",Bl=`[ ${tm}]`,Pl=new RegExp(Bl,"g");function nm(e){return e.replace(/\./g,"\\.?").replace(Pl,Bl)}function sa(e){return e.replace(/\./g,"").replace(Pl," ").toLowerCase()}function Ue(e,t){return e===null?null:{regex:RegExp(e.map(nm).join("|")),deser:([n])=>e.findIndex(r=>sa(n)===sa(r))+t}}function oa(e,t){return{regex:e,deser:([,n,r])=>vi(n,r),groups:t}}function Sr(e){return{regex:e,deser:([t])=>t}}function rm(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function im(e,t){const n=We(t),r=We(t,"{2}"),i=We(t,"{3}"),s=We(t,"{4}"),o=We(t,"{6}"),a=We(t,"{1,2}"),u=We(t,"{1,3}"),l=We(t,"{1,6}"),c=We(t,"{1,9}"),d=We(t,"{2,4}"),m=We(t,"{4,6}"),p=T=>({regex:RegExp(rm(T.val)),deser:([F])=>F,literal:!0}),D=(T=>{if(e.literal)return p(T);switch(T.val){case"G":return Ue(t.eras("short"),0);case"GG":return Ue(t.eras("long"),0);case"y":return G(l);case"yy":return G(d,xs);case"yyyy":return G(s);case"yyyyy":return G(m);case"yyyyyy":return G(o);case"M":return G(a);case"MM":return G(r);case"MMM":return Ue(t.months("short",!0),1);case"MMMM":return Ue(t.months("long",!0),1);case"L":return G(a);case"LL":return G(r);case"LLL":return Ue(t.months("short",!1),1);case"LLLL":return Ue(t.months("long",!1),1);case"d":return G(a);case"dd":return G(r);case"o":return G(u);case"ooo":return G(i);case"HH":return G(r);case"H":return G(a);case"hh":return G(r);case"h":return G(a);case"mm":return G(r);case"m":return G(a);case"q":return G(a);case"qq":return G(r);case"s":return G(a);case"ss":return G(r);case"S":return G(u);case"SSS":return G(i);case"u":return Sr(c);case"uu":return Sr(a);case"uuu":return G(n);case"a":return Ue(t.meridiems(),0);case"kkkk":return G(s);case"kk":return G(d,xs);case"W":return G(a);case"WW":return G(r);case"E":case"c":return G(n);case"EEE":return Ue(t.weekdays("short",!1),1);case"EEEE":return Ue(t.weekdays("long",!1),1);case"ccc":return Ue(t.weekdays("short",!0),1);case"cccc":return Ue(t.weekdays("long",!0),1);case"Z":case"ZZ":return oa(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return oa(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Sr(/[a-z_+-/]{1,256}?/i);case" ":return Sr(/[^\S\n\r]/);default:return p(T)}})(e)||{invalidReason:em};return D.token=e,D}const sm={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function om(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[r];let o=r;r==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=n.hour12?"hour12":"hour24");let a=sm[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function am(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function um(e,t,n){const r=e.match(t);if(r){const i={};let s=1;for(const o in n)if(yn(n,o)){const a=n[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(s,s+u))),s+=u}return[r,i]}else return[r,{}]}function lm(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return I(e.z)||(n=ct.create(e.z)),I(e.Z)||(n||(n=new Ee(e.Z)),r=e.Z),I(e.q)||(e.M=(e.q-1)*3+1),I(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),I(e.u)||(e.S=eo(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),n,r]}let qi=null;function cm(){return qi||(qi=N.fromMillis(1555555555555)),qi}function dm(e,t){if(e.literal)return e;const n=ye.macroTokenToFormatOpts(e.val),r=Vl(n,t);return r==null||r.includes(void 0)?e:r}function Ll(e,t){return Array.prototype.concat(...e.map(n=>dm(n,t)))}class _l{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=Ll(ye.parseFormat(n),t),this.units=this.tokens.map(r=>im(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=am(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=um(t,this.regex,this.handlers),[i,s,o]=r?lm(r):[null,null,void 0];if(yn(r,"a")&&yn(r,"H"))throw new un("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Ol(e,t,n){return new _l(e,n).explainFromTokens(t)}function fm(e,t,n){const{result:r,zone:i,specificOffset:s,invalidReason:o}=Ol(e,t,n);return[r,i,s,o]}function Vl(e,t){if(!e)return null;const r=ye.create(t,e).dtFormatter(cm()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(o=>om(o,e,s))}const ji="Invalid DateTime",hm=864e13;function Un(e){return new je("unsupported zone",`the zone "${e.name}" is not supported`)}function zi(e){return e.weekData===null&&(e.weekData=Xr(e.c)),e.weekData}function Ki(e){return e.localWeekData===null&&(e.localWeekData=Xr(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Lt(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new N({...n,...t,old:n})}function Rl(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function $r(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Vr(e,t,n){return Rl(wi(e),t,n)}function aa(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:r,month:i,day:Math.min(e.c.day,ei(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=W.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=wi(s);let[u,l]=Rl(a,n,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function nn(e,t,n,r,i,s){const{setZone:o,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=N.fromObject(e,{...n,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return N.invalid(new je("unparsable",`the input "${i}" can't be parsed as ${r}`))}function Fr(e,t,n=!0){return e.isValid?ye.create(q.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Hi(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=le(e.c.year,n?6:4),t?(r+="-",r+=le(e.c.month),r+="-",r+=le(e.c.day)):(r+=le(e.c.month),r+=le(e.c.day)),r}function ua(e,t,n,r,i,s){let o=le(e.c.hour);return t?(o+=":",o+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=":")):o+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=le(e.c.second),(e.c.millisecond!==0||!r)&&(o+=".",o+=le(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=le(Math.trunc(-e.o/60)),o+=":",o+=le(Math.trunc(-e.o%60))):(o+="+",o+=le(Math.trunc(e.o/60)),o+=":",o+=le(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const Wl={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},mm={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},pm={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ul=["year","month","day","hour","minute","second","millisecond"],gm=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],ym=["year","ordinal","hour","minute","second","millisecond"];function wm(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Gu(e);return t}function la(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return wm(e)}}function vm(e){return Wr[e]||(Rr===void 0&&(Rr=te.now()),Wr[e]=e.offset(Rr)),Wr[e]}function ca(e,t){const n=Ct(t.zone,te.defaultZone);if(!n.isValid)return N.invalid(Un(n));const r=q.fromObject(t);let i,s;if(I(e.year))i=te.now();else{for(const u of Ul)I(e[u])&&(e[u]=Wl[u]);const o=hl(e)||ml(e);if(o)return N.invalid(o);const a=vm(n);[i,s]=Vr(e,a,n)}return new N({ts:i,zone:n,loc:r,o:s})}function da(e,t,n){const r=I(n.round)?!0:n.round,i=(o,a)=>(o=to(o,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(o,a)),s=o=>n.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(n.unit)return i(s(n.unit),n.unit);for(const o of n.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,n.units[n.units.length-1])}function fa(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let Rr,Wr={};class N{constructor(t){const n=t.zone||te.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new je("invalid input"):null)||(n.isValid?null:Un(n));this.ts=I(t.ts)?te.now():t.ts;let i=null,s=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,s]=[t.old.c,t.old.o];else{const a=xt(t.o)&&!t.old?t.o:n.offset(this.ts);i=$r(this.ts,a),r=Number.isNaN(i.year)?new je("invalid input"):null,i=r?null:i,s=r?null:a}this._zone=n,this.loc=t.loc||q.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new N({})}static local(){const[t,n]=fa(arguments),[r,i,s,o,a,u,l]=n;return ca({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=fa(arguments),[r,i,s,o,a,u,l]=n;return t.zone=Ee.utcInstance,ca({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=Hf(t)?t.valueOf():NaN;if(Number.isNaN(r))return N.invalid("invalid input");const i=Ct(n.zone,te.defaultZone);return i.isValid?new N({ts:r,zone:i,loc:q.fromObject(n)}):N.invalid(Un(i))}static fromMillis(t,n={}){if(xt(t))return t<-864e13||t>hm?N.invalid("Timestamp out of range"):new N({ts:t,zone:Ct(n.zone,te.defaultZone),loc:q.fromObject(n)});throw new pe(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(xt(t))return new N({ts:t*1e3,zone:Ct(n.zone,te.defaultZone),loc:q.fromObject(n)});throw new pe("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Ct(n.zone,te.defaultZone);if(!r.isValid)return N.invalid(Un(r));const i=q.fromObject(n),s=ti(t,la),{minDaysInFirstWeek:o,startOfWeek:a}=Jo(s,i),u=te.now(),l=I(n.specificOffset)?r.offset(u):n.specificOffset,c=!I(s.ordinal),d=!I(s.year),m=!I(s.month)||!I(s.day),p=d||m,w=s.weekYear||s.weekNumber;if((p||c)&&w)throw new un("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new un("Can't mix ordinal dates with month/day");const D=w||s.weekday&&!p;let T,F,O=$r(u,l);D?(T=gm,F=mm,O=Xr(O,o,a)):c?(T=ym,F=pm,O=Gi(O)):(T=Ul,F=Wl);let Z=!1;for(const Nn of T){const tf=s[Nn];I(tf)?Z?s[Nn]=F[Nn]:s[Nn]=O[Nn]:Z=!0}const z=D?jf(s,o,a):c?zf(s):hl(s),se=z||ml(s);if(se)return N.invalid(se);const pt=D?Zo(s,o,a):c?Yo(s):s,[Xd,ef]=Vr(pt,l,r),kn=new N({ts:Xd,zone:r,o:ef,loc:i});return s.weekday&&p&&t.weekday!==kn.weekday?N.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${kn.toISO()}`):kn.isValid?kn:N.invalid(kn.invalid)}static fromISO(t,n={}){const[r,i]=_h(t);return nn(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=Oh(t);return nn(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=Vh(t);return nn(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(I(t)||I(n))throw new pe("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,o=q.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,c]=fm(o,t,n);return c?N.invalid(c):nn(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return N.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=zh(t);return nn(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new pe("need to specify a reason the DateTime is invalid");const r=t instanceof je?t:new je(t,n);if(te.throwOnInvalid)throw new wf(r);return new N({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=Vl(t,q.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return Ll(ye.parseFormat(t),q.fromObject(n)).map(i=>i.val).join("")}static resetCache(){Rr=void 0,Wr={}}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?zi(this).weekYear:NaN}get weekNumber(){return this.isValid?zi(this).weekNumber:NaN}get weekday(){return this.isValid?zi(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Ki(this).weekday:NaN}get localWeekNumber(){return this.isValid?Ki(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Ki(this).weekYear:NaN}get ordinal(){return this.isValid?Gi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Cr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Cr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Cr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Cr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=wi(this.c),i=this.zone.offset(r-t),s=this.zone.offset(r+t),o=this.zone.offset(r-i*n),a=this.zone.offset(r-s*n);if(o===a)return[this];const u=r-o*n,l=r-a*n,c=$r(u,o),d=$r(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[Lt(this,{ts:u}),Lt(this,{ts:l})]:[this]}get isInLeapYear(){return fr(this.year)}get daysInMonth(){return ei(this.year,this.month)}get daysInYear(){return this.isValid?fn(this.year):NaN}get weeksInWeekYear(){return this.isValid?Jn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Jn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=ye.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Ee.instance(t),n)}toLocal(){return this.setZone(te.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Ct(t,te.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const s=t.offset(this.ts),o=this.toObject();[i]=Vr(o,s,t)}return Lt(this,{ts:i,zone:t})}else return N.invalid(Un(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return Lt(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=ti(t,la),{minDaysInFirstWeek:r,startOfWeek:i}=Jo(n,this.loc),s=!I(n.weekYear)||!I(n.weekNumber)||!I(n.weekday),o=!I(n.ordinal),a=!I(n.year),u=!I(n.month)||!I(n.day),l=a||u,c=n.weekYear||n.weekNumber;if((l||o)&&c)throw new un("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new un("Can't mix ordinal dates with month/day");let d;s?d=Zo({...Xr(this.c,r,i),...n},r,i):I(n.ordinal)?(d={...this.toObject(),...n},I(n.day)&&(d.day=Math.min(ei(d.year,d.month),d.day))):d=Yo({...Gi(this.c),...n});const[m,p]=Vr(d,this.o,this.zone);return Lt(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const n=W.fromDurationLike(t);return Lt(this,aa(this,n))}minus(t){if(!this.isValid)return this;const n=W.fromDurationLike(t).negate();return Lt(this,aa(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=W.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?ye.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):ji}toLocaleString(t=Qr,n={}){return this.isValid?ye.create(this.loc.clone(n),t).formatDateTime(this):ji}toLocaleParts(t={}){return this.isValid?ye.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Hi(this,o);return a+="T",a+=ua(this,o,n,r,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?Hi(this,t==="extended"):null}toISOWeekDate(){return Fr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+ua(this,o==="extended",n,t,r,s):null}toRFC2822(){return Fr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Fr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Hi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Fr(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():ji}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return W.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=Zf(n).map(W.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Xh(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(N.now(),t,n)}until(t){return this.isValid?re.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||N.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),da(n,this.plus(r),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?da(t.base||N.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(N.isDateTime))throw new pe("min requires all arguments be DateTimes");return Qo(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(N.isDateTime))throw new pe("max requires all arguments be DateTimes");return Qo(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,o=q.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return Ol(o,t,n)}static fromStringExplain(t,n,r={}){return N.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,s=q.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new _l(s,t)}static fromFormatParser(t,n,r={}){if(I(t)||I(n))throw new pe("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=r,o=q.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(n.locale))throw new pe(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?N.invalid(c):nn(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return Qr}static get DATE_MED(){return qu}static get DATE_MED_WITH_WEEKDAY(){return bf}static get DATE_FULL(){return ju}static get DATE_HUGE(){return zu}static get TIME_SIMPLE(){return Ku}static get TIME_WITH_SECONDS(){return Hu}static get TIME_WITH_SHORT_OFFSET(){return Zu}static get TIME_WITH_LONG_OFFSET(){return Yu}static get TIME_24_SIMPLE(){return Ju}static get TIME_24_WITH_SECONDS(){return Qu}static get TIME_24_WITH_SHORT_OFFSET(){return Xu}static get TIME_24_WITH_LONG_OFFSET(){return el}static get DATETIME_SHORT(){return tl}static get DATETIME_SHORT_WITH_SECONDS(){return nl}static get DATETIME_MED(){return rl}static get DATETIME_MED_WITH_SECONDS(){return il}static get DATETIME_MED_WITH_WEEKDAY(){return Ef}static get DATETIME_FULL(){return sl}static get DATETIME_FULL_WITH_SECONDS(){return ol}static get DATETIME_HUGE(){return al}static get DATETIME_HUGE_WITH_SECONDS(){return ul}}function In(e){if(N.isDateTime(e))return e;if(e&&e.valueOf&&xt(e.valueOf()))return N.fromJSDate(e);if(e&&typeof e=="object")return N.fromObject(e);throw new pe(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var k;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(k||(k={}));k.Years+"",k.Quarters+"",k.Months+"",k.Weeks+"",k.Days+"",k.Hours+"",k.Minutes+"",k.Seconds+"",k.Milliseconds+"";k.Years+"",k.Quarters+"",k.Months+"",k.Weeks+"",k.Days+"",k.Hours+"",k.Minutes+"",k.Seconds+"",k.Milliseconds+"";const Gl=[k.Milliseconds,k.Seconds,k.Minutes,k.Hours,k.Days,k.Weeks,k.Months,k.Quarters,k.Years];k.Milliseconds+"",k.Seconds+"",k.Minutes+"",k.Hours+"",k.Days+"",k.Weeks+"",k.Months+"",k.Quarters+"",k.Years+"";function Dm(e){return Gl.filter(t=>e[t])}function Ts(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function bm(e){return Ts(Math.max(e-.4,0),{roundToDigits:0})}function ha(e){return e===0?0:Math.sign(e)}function wn(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=W.fromObject(e).as(k.Milliseconds);const u=Dm(t).reverse(),l=ha(a);u.forEach((p,w)=>{const D=w===u.length-1;if(s&&o||s)r[p]=1/0;else if(o)r[p]=-1/0;else if(p===k.Milliseconds)r.milliseconds=Ts(a,i);else{const T=W.fromObject({milliseconds:a}).as(p),F=Math.sign(T),O=Math.abs(T),Z=D?Ts(O,i):Math.floor(i.roundToDigits==null?O:bm(O)),z=Z===0?0:Z*F;r[p]=z,a-=W.fromObject({[p]:z}).as(k.Milliseconds),l!==ha(a)&&(a=0)}});let c=!1;const d=[],m=Gl.toReversed().filter(p=>r[p]?(c=!0,!0):c?(d.push(p),!1):!0);if(m.length<u.length){const p={};m.forEach(D=>p[D]=!0);const w=wn(e,p,i);return d.forEach(D=>w[D]=0),w}return r}var x;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(x||(x={}));x.Year,x.Hour,x.Minute,x.Second,x.Millisecond;x.Quarter,x.Month,x.Week,x.Day;x.Millisecond,x.Second,x.Minute,x.Hour,x.Day,x.Week,x.Month,x.Quarter,x.Year;var ge;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(ge||(ge={}));ge.Sunday+"",ge.Monday+"",ge.Tuesday+"",ge.Wednesday+"",ge.Thursday+"",ge.Friday+"",ge.Saturday+"";ge.Sunday,ge.Monday,ge.Tuesday,ge.Wednesday,ge.Thursday,ge.Friday,ge.Saturday;var Se;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Se||(Se={}));Se.January,Se.February,Se.March,Se.April,Se.May,Se.June,Se.July,Se.August,Se.September,Se.October,Se.November,Se.December;const ma={min:1,max:12},pa={min:1,max:31},ga={min:0,max:23},ya={min:0,max:59},wa={min:0,max:59},va={min:0,max:999};function ni(e){const t=new Jr,n=wn(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var Em=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var dt;(function(e){e.Node="node",e.Web="web"})(dt||(dt={}));function Am(){return Em?dt.Node:dt.Web}const ql=Am();function Cm(e){return ql===e}function jl(e){return e[ql]()}class f extends Error{name="AssertionError";constructor(t,n){super(mi(n,t)||"Assertion failed.")}}const Da={interval:{milliseconds:100},timeout:{seconds:10}},Zi=Symbol("not set");async function zl(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=Sm(t),a=wn(o.timeout,{milliseconds:!0}).milliseconds,u=wn(o.interval,{milliseconds:!0});let l=Zi,c;async function d(){try{l=n?r():await r(),e(l,...i)}catch(p){l=Zi,c=de(p)}}const m=Date.now();for(;l===Zi;)if(await d(),await ni(u),Date.now()-m>=a){const w=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw pi(c,w)}return l}function E(e,t=!1){return(...n)=>zl(e,n,t)}function Sm(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Kl(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Kl(e){return{interval:e?.interval||Da.interval,timeout:e?.timeout||Da.timeout}}const Bn={isFalse(e,t){if(e!==!1)throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new f(`'${h(e)}' is not truthy.`,t)}},Hl={assert:Bn,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new f(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:E(Bn.isFalse),isFalsy:E(Bn.isFalsy),isTrue:E(Bn.isTrue),isTruthy:E(Bn.isTruthy)}};function $m(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,n)}function Fm(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,n)}function xm(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,n)}function Tm(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,n)}const Pn={endsWith:$m,endsWithout:Fm,startsWith:xm,startsWithout:Tm},Zl={assert:Pn,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,n);return e},endsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,n);return e},startsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,n);return e},startsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,n);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:E(Pn.endsWith),endsWithout:E(Pn.endsWithout),startsWith:E(Pn.startsWith),startsWithout:E(Pn.startsWithout)}};function Mm(e,t,n){const r=Qe(t);if(!r.includes(e))throw new f(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function ot(e,t){return Qe(t).includes(e)}const Yi={isEnumValue(e,t,n){Mm(e,t,n)},isNotEnumValue(e,t,n){const r=Qe(t);if(r.includes(e))throw new f(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Yl={assert:Yi,check:{isEnumValue:ot,isNotEnumValue(e,t){return!Qe(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=Qe(t);if(!r.includes(e))throw new f(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=Qe(t);if(r.includes(e))throw new f(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(Qe(t).includes(e))return e},isNotEnumValue(e,t){if(!Qe(t).includes(e))return e}},waitUntil:{isEnumValue:E(Yi.isEnumValue),isNotEnumValue:E(Yi.isNotEnumValue)}},Ji={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new f("Entries are equal.",n)}},Jl={assert:Ji,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],s=t[r];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],s=t[r];return i!==s})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new f("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:E(Ji.entriesEqual),notEntriesEqual:E(Ji.notEntriesEqual)}};function ri(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Qn(e,t){if(!(e===t||ri(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!ri(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{Qn(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${He(o)}`)}})}throw new Error("Values are not JSON equal.")}}function Gn(e,t){if(e===t||ri(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!ri(n,r)?!1:Object.keys(e).every(s=>Gn(e[s],t[s]))}return!1}const Qi={jsonEquals(e,t,n){try{Qn(e,t)}catch(r){throw new f(He(r),n)}},notJsonEquals(e,t,n){try{Qn(e,t)}catch{return}throw new f("Values are JSON equal.",n)}},Ql={assert:Qi,check:{jsonEquals(e,t){return Gn(e,t)},notJsonEquals(e,t){return!Gn(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Qn(e,t),e}catch(r){throw new f(He(r),n)}},notJsonEquals(e,t,n){try{Qn(e,t)}catch{return e}throw new f("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(Gn(e,t))return e},notJsonEquals(e,t){if(!Gn(e,t))return e}},waitUntil:{jsonEquals:E(Qi.jsonEquals),notJsonEquals:E(Qi.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function ba(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Xl(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Xl.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var ec=typeof WeakMap=="function"?WeakMap:Xl;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Ea(e,t,n){if(!n||vn(e)||vn(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function xr(e,t,n,r){if(!(!n||vn(e)||vn(t))){var i=n.get(e);i?i.set(t,r):(i=new ec,i.set(t,r),n.set(e,i))}}function Ge(e,t,n){if(n&&n.comparator)return Aa(e,t,n);var r=tc(e,t);return r!==null?r:Aa(e,t,n)}function tc(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:vn(e)||vn(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Aa(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new ec;var r=n&&n.comparator,i=Ea(e,t,n.memoize);if(i!==null)return i;var s=Ea(t,e,n.memoize);if(s!==null)return s;if(r){var o=r(e,t);if(o===!1||o===!0)return xr(e,t,n.memoize,o),o;var a=tc(e,t);if(a!==null)return a}var u=ba(e);if(u!==ba(t))return xr(e,t,n.memoize,!1),!1;xr(e,t,n.memoize,!0);var l=km(e,t,u,n);return xr(e,t,n.memoize,l),l}function km(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Ge(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return nc(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Gt(e,t,r);case"RegExp":return Nm(e,t);case"Generator":return Im(e,t,r);case"DataView":return Gt(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return Gt(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Ca(e,t,r);case"Map":return Ca(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Pm(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function Nm(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ca(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(o,a){r.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),Gt(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Gt(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Ge(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Im(e,t,n){return Gt(Ms(e),Ms(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function Bm(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Sa(e){if(Bm(e))try{return Ms(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Ms(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function $a(e){var t=[];for(var n in e)t.push(n);return t}function Fa(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function nc(e,t,n,r){var i=n.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(Ge(e[n[s]],t[n[s]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Pm(e,t,n){var r=$a(e),i=$a(t),s=Fa(e),o=Fa(t);if(r=r.concat(s),i=i.concat(o),r.length&&r.length===i.length)return Gt(xa(r).sort(),xa(i).sort())===!1?!1:nc(e,t,r,n);var a=Sa(e),u=Sa(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Gt(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function vn(e){return e===null||typeof e!="object"}function xa(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}const vt={strictEquals(e,t,n){if(e!==t)throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,n)},deepEquals(e,t,n){if(!Ge(e,t))throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,n)},notDeepEquals(e,t,n){if(Ge(e,t))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,n)}},rc=vt.deepEquals,ic={assert:vt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Ge(e,t)},notDeepEquals(e,t){return!Ge(e,t)}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,n);return e},deepEquals(e,t,n){if(Ge(e,t))return e;throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,n)},notDeepEquals(e,t,n){if(Ge(e,t))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Ge(e,t))return e},notDeepEquals(e,t){if(!Ge(e,t))return e}},waitUntil:{strictEquals:E(vt.strictEquals),notStrictEquals:E(vt.notStrictEquals),looseEquals:E(vt.looseEquals),notLooseEquals:E(vt.notLooseEquals),deepEquals:E(vt.deepEquals),notDeepEquals:E(vt.notDeepEquals)}};function Me(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function Pe(e,t){return typeof t=="string"?t.includes(e):Me(t,e)}const rt={hasValue(e,t,n){if(!Me(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,n)},lacksValue(e,t,n){if(Me(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new f(`'${h(e)}' does not have values '${h(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new f(`'${h(e)}' has values '${h(r)}'.`,n)},isIn(e,t,n){if(!Pe(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,n)},isNotIn(e,t,n){if(Pe(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is not empty.`,t)}}},sc={assert:rt,check:{hasValue(e,t){return Me(e,t)},lacksValue(e,t){return!Me(e,t)},hasValues(e,t){return t.every(n=>Me(e,n))},lacksValues(e,t){return t.every(n=>!Me(e,n))},isIn(e,t){return Pe(e,t)},isNotIn(e,t){return!Pe(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!Me(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,n);return e},lacksValue(e,t,n){if(Me(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new f(`'${h(e)}' does not have values '${h(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new f(`'${h(e)}' has values '${h(r)}'.`,n);return e},isIn(e,t,n){if(!Pe(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,n);return e},isNotIn(e,t,n){if(Pe(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Me(e,t))return e},lacksValue(e,t){if(!Me(e,t))return e},hasValues(e,t){if(t.every(n=>Me(e,n)))return e},lacksValues(e,t){if(!t.every(n=>Me(e,n)))return e},isIn(e,t){if(Pe(e,t))return e},isNotIn(e,t){if(!Pe(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:E(rt.hasValue),lacksValue:E(rt.lacksValue),hasValues:E(rt.hasValues),lacksValues:E(rt.lacksValues),isIn:E(rt.isIn),isNotIn:E(rt.isNotIn),isEmpty:E(rt.isEmpty),isNotEmpty:E(rt.isNotEmpty)}},Xi={isHttpStatus(e,t){if(!ot(e,g))throw new f(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(ot(e,g)){if(!Pe(e,_r[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new f(`${h(e)} is not a valid HTTP status.`,n)}},oc={assert:Xi,check:{isHttpStatus(e){return ot(e,g)},isHttpStatusCategory(e,t){return ot(e,g)&&Pe(e,_r[t])}},assertWrap:{isHttpStatus(e,t){if(!ot(e,g))throw new f(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(ot(e,g)){if(!Pe(e,_r[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new f(`${h(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(ot(e,g))return e},isHttpStatusCategory(e,t){if(ot(e,g)&&Pe(e,_r[t]))return e}},waitUntil:{isHttpStatus:E(Xi.isHttpStatus),isHttpStatusCategory:E(Xi.isHttpStatusCategory)}},es={instanceOf(e,t,n){if(!(e instanceof t))throw new f(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,n)}},ac={assert:es,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new f(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:E(es.instanceOf),notInstanceOf:E(es.notInstanceOf)}},Lm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ee(e,t){return Lm.some(n=>{try{return n(e,t)}catch{return!1}})}const _t={isKeyOf(e,t,n){if(!ee(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,n)},isNotKeyOf(e,t,n){if(ee(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,n)},hasKey(e,t,n){if(!ee(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(ee(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!ee(e,i));if(r.length)throw new f(`'${h(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>ee(e,i));if(r.length)throw new f(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n)}},uc={assert:_t,check:{isKeyOf(e,t){return ee(t,e)},isNotKeyOf(e,t){return!ee(t,e)},hasKey:ee,lacksKey(e,t){return!ee(e,t)},hasKeys(e,t){return t.every(n=>ee(e,n))},lacksKeys(e,t){return t.every(n=>!ee(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!ee(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(ee(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,n);return e},hasKey(e,t,n){if(!ee(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(ee(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!ee(e,i));if(r.length)throw new f(`'${h(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>ee(e,i));if(r.length)throw new f(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(ee(t,e))return e},isNotKeyOf(e,t){if(!ee(t,e))return e},hasKey(e,t){if(ee(e,t))return e},lacksKey(e,t){if(!ee(e,t))return e},hasKeys(e,t){if(t.every(n=>ee(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!ee(e,n)))return e}},waitUntil:{isKeyOf:E(_t.isKeyOf),isNotKeyOf:E(_t.isNotKeyOf),hasKey:E(_t.hasKey),lacksKey:E(_t.lacksKey),hasKeys:E(_t.hasKeys),lacksKeys:E(_t.lacksKeys)}};function _m(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:j(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,n)}function Om(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:j(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,n)}const ts={isLengthAtLeast:_m,isLengthExactly:Om},lc={assert:ts,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:j(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:j(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:j(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,n);return e},isLengthExactly:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:j(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,n);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:j(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:j(e).length)===t)return e}},waitUntil:{isLengthAtLeast:E(ts.isLengthAtLeast),isLengthExactly:E(ts.isLengthExactly)}},ns={isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new f(`'${h(e)}' is not a nullish.`,t)}},cc={assert:ns,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new f(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:E(ns.isDefined),isNullish:E(ns.isNullish)}},Ce={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new f(`${e} is not within the bounds ${h({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new f(`${e} is not outside the bounds ${h({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new f(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new f(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new f(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new f(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new f(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new f(`${e} is within ±${n} of ${t}`,r)}},dc={assert:Ce,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new f(`${e} is not within the bounds ${h({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new f(`${e} is not outside the bounds ${h({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new f(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new f(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new f(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new f(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new f(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new f(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:E(Ce.isInBounds),isOutBounds:E(Ce.isOutBounds),isInteger:E(Ce.isInteger),isNotInteger:E(Ce.isNotInteger),isAbove:E(Ce.isAbove),isAtLeast:E(Ce.isAtLeast),isBelow:E(Ce.isBelow),isAtMost:E(Ce.isAtMost),isNaN:E(Ce.isNaN),isFinite:E(Ce.isFinite),isInfinite:E(Ce.isInfinite),isApproximately:E(Ce.isApproximately),isNotApproximately:E(Ce.isNotApproximately)}};function Vm(e,t,n,r,i){return pr(...bi(e,t,n,r,i),!1)}function bi(e,t,n,r,i){const s=Array.isArray(n);return[s?e:rc,s?t:e,s?n:t,s?r:n,s?i:r]}function pr(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new f(`Output from '${t.name}' did not produce expected output with input: ${h(n)}: ${He(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new f(`Output from '${t.name}' did not produce expected output with input: ${h(n)}: ${He(a)}`,i)}}function Rm(e,t,n,r,i){try{const s=pr(...bi(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function Wm(e,t,n,r,i){return pr(...bi(e,t,n,r,i),!0)}function Um(e,t,n,r,i){try{const s=pr(...bi(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const rs=Symbol("not set");async function Gm(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:rc,u=o?t:e,l=o?n:t,c=o?r:n,d=Kl(o?i:r),m=o?s:i,p=wn(d.timeout,{milliseconds:!0}).milliseconds,w=wn(d.interval,{milliseconds:!0});let D=rs,T;async function F(){try{D=await pr(a,u,l,c,void 0,!0)}catch(Z){D=rs,T=de(Z)}}const O=Date.now();for(;D===rs;)if(await F(),await ni(w),Date.now()-O>=p)throw pi(T,mi(m,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return D}const qm={output:Vm},fc={assert:qm,check:{output:Rm},assertWrap:{output:Wm},checkWrap:{output:Um},waitUntil:{output:Gm}},Ln={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t)}},hc={assert:Ln,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:E(Ln.isNotPrimitive),isNotPropertyKey:E(Ln.isNotPropertyKey),isPrimitive:E(Ln.isPrimitive),isPropertyKey:E(Ln.isPropertyKey)}},_n={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t)}},mc={assert:_n,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:E(_n.isPromiseLike,!0),isNotPromiseLike:E(_n.isNotPromiseLike,!0),isPromise:E(_n.isPromise,!0),isNotPromise:E(_n.isNotPromise,!0)}},is={matches(e,t,n){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new f(`'${e}' matches ${t}`,n)}},pc={assert:is,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new f(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:E(is.matches,!0),mismatches:E(is.mismatches,!0)}},oe={isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t)}},gc={assert:oe,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:E(oe.isArray),isBigInt:E(oe.isBigInt),isBoolean:E(oe.isBoolean),isFunction:E(oe.isFunction),isNull:E(oe.isNull),isNumber:E(oe.isNumber),isObject:E(oe.isObject),isString:E(oe.isString),isSymbol:E(oe.isSymbol),isUndefined:E(oe.isUndefined),isNotArray:E(oe.isNotArray),isNotBigInt:E(oe.isNotBigInt),isNotBoolean:E(oe.isNotBoolean),isNotFunction:E(oe.isNotFunction),isNotNull:E(oe.isNotNull),isNotNumber:E(oe.isNotNumber),isNotObject:E(oe.isNotObject),isNotString:E(oe.isNotString),isNotSymbol:E(oe.isNotSymbol),isNotUndefined:E(oe.isNotUndefined)}};var Fe;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Fe||(Fe={}));function so(e,t,n){oo(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n)}function Ta(e,t,n){oo(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,n)}function oo(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new f(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=He(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new f(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new f(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new f(t.notInstance,r);else throw new f(t.noError,r)}function Ma(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=He(e);if(typeof t.matchMessage=="string"){if(!n.includes(t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Ei(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=de(u)}try{Ta(i,n,r),e===Fe.Assert?o():e===Fe.Check?o(!0):o(i)}catch(u){e===Fe.CheckWrap?o(void 0):e===Fe.Check?o(!1):a(de(u))}})}catch(s){i=de(s)}try{return Ta(i,n,r),e===Fe.Check?!0:e!==Fe.Assert?i:void 0}catch(s){if(e===Fe.CheckWrap)return;if(e===Fe.Check)return!1;throw s}}function jm(e,t,n){return Ei(Fe.Assert,e,t,n)}function zm(e,t){return Ei(Fe.Check,e,t)}function Km(e,t,n){return Ei(Fe.AssertWrap,e,t,n)}function Hm(e,t,n){return Ei(Fe.CheckWrap,e,t,n)}const Zm=E(so);function Ym(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${h(s)}'`);return Zm(i,async()=>{try{await s();return}catch(u){return de(u)}},a,o)}const Jm={throws:jm,isError:so},yc={assert:Jm,check:{throws:zm,isError(e,t){return Ma(e,t)}},assertWrap:{throws:Km,isError(e,t,n){return oo(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:Hm,isError(e,t){if(Ma(e,t))return e}},waitUntil:{throws:Ym,isError:E(so)}},Et=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,ss={isUuid(e,t){if(!String(e).match(Et))throw new f(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Et))throw new f(`'${String(e)}' is a UUID.`,t)}},wc={assert:ss,check:{isUuid(e){return!!String(e).match(Et)},isNotUuid(e){return!String(e).match(Et)}},assertWrap:{isUuid(e,t){if(!String(e).match(Et))throw new f(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Et))throw new f(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Et))return e},isNotUuid(e){if(!String(e).match(Et))return e}},waitUntil:{isUuid:E(ss.isUuid),isNotUuid:E(ss.isNotUuid)}},Qm={...Hl.assert,...Zl.assert,...Jl.assert,...Yl.assert,...ac.assert,...Ql.assert,...uc.assert,...lc.assert,...cc.assert,...dc.assert,...hc.assert,...mc.assert,...pc.assert,...gc.assert,...ic.assert,...yc.assert,...wc.assert,...sc.assert,...oc.assert,...fc.assert},Ai=[Hl,Zl,Jl,Yl,ac,Ql,uc,lc,cc,dc,hc,mc,pc,gc,ic,yc,wc,sc,oc,fc],Xm=Object.assign({},...Ai.map(e=>e.check)),A=Object.assign(function(t){return!!t},Xm);function ep(e,t,n){return Ur(e,t,n,new Set)}function Ur(e,t,n,r){if(e=ka(e),t=ka(t),A.isObject(e)&&A.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Ur(j(e).sort(),j(t).sort(),n,r))return!1;let i=!1;const s=j(e).map(o=>{const a=Ur(e[o],t[o],n,r);return A.isPromise(a)&&(i=!0),a});return Na(i,s)}else if(A.isArray(e)&&A.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Ur(o,t[a],n,r);return A.isPromise(u)&&(i=!0),u});return Na(i,s)}else return n(e,t)}function ka(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Na(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(A.isTrue))}catch(i){r(de(i))}}):t.every(A.isTrue)}const tp=Object.assign({},...Ai.map(e=>e.assertWrap)),np=Object.assign(function(t,n){if(!t)throw new f("Assertion failed.",n);return t},tp);function rp(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const ip={tsType:rp},sp={assert:ip},op={fail:e=>{throw new f("Failure triggered.",e)}},ap={...sp.assert,...Qm,...op},Ye=Object.assign(function(t,n){if(!t)throw new f("Assertion failed.",n)},ap),up=Object.assign({},...Ai.map(e=>e.checkWrap));Object.assign(function(t){if(t)return t},up);const lp=Object.assign({},...Ai.map(e=>e.waitUntil));Object.assign(function(t,n){return zl((r,i)=>{if(!r)throw new f("Assertion failed.",i)},[t,n],!1)},lp);function vc(e,t,n){if(t in e)return e[t];{const r=n();return A.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(de(o))}}):(e[t]=r,r)}}function ao(e){return j(e).map(t=>[t,e[t]])}function Dn(e){return Object.fromEntries(e)}function Ci(e,t,n){return e.reduce((r,i,s,o)=>{const a=t(i,s,o);return n(a,i,s,o)&&r.push(a),r},[])}function cp(e,t){try{let n=!1;const r=e.map((i,s,o)=>{const a=t(i,s,o);return a instanceof Promise?(n=!0,a):a?[a.key,a.value]:void 0}).filter(A.isTruthy);return n?new Promise(async(i,s)=>{try{const o=Ci(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},A.isTruthy);i(Dn(o))}catch(o){s(de(o))}}):Dn(r)}catch(n){throw de(n)}}function dp({min:e,max:t}){const{min:n,max:r}=Uu({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,m)=>c+d*256**m,0);while(l>=a);return n+l%i}const Ia=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function os(e=16){let t="";for(let n=0;n<e;n++){const r=dp({min:0,max:Ia.length-1});t+=Ia[r]}return t}var Ba;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ba||(Ba={}));function ks(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const fp="modulepreload",hp=function(e){return"/gamepad-type/"+e},Pa={},uo=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(n.map(u=>{if(u=hp(u),u in Pa)return;Pa[u]=!0;const l=u.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":fp,l||(d.as="script"),d.crossOrigin="",d.href=u,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((m,p)=>{d.addEventListener("load",m),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var ce;(function(e){e.Standard="stdout",e.Error="stderr"})(ce||(ce={}));var V;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(V||(V={}));async function mp(){return await jl({async[dt.Node](){const e=(await uo(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[V.Bold]:e.bold.open,[V.Debug]:e.blueBright.open,[V.Error]:e.red.open,[V.Faint]:e.gray.open,[V.Info]:e.cyan.open,[V.Mutate]:e.magenta.open,[V.NormalWeight]:"\x1B[22m",[V.Plain]:"",[V.Reset]:e.reset.open,[V.Success]:e.green.open,[V.Warning]:e.yellow.open}},[dt.Web](){return Promise.resolve({[V.Bold]:"font-weight: bold",[V.Debug]:"color: blue",[V.Error]:"color: red",[V.Faint]:"color: grey",[V.Info]:"color: teal",[V.Mutate]:"color: magenta",[V.NormalWeight]:"",[V.Plain]:"",[V.Reset]:"",[V.Success]:"color: green",[V.Warning]:"color: orange"})}})}const Te=await mp(),pp={[V.Bold]:{colors:[Te.bold],logType:ce.Standard},[V.Debug]:{colors:[Te.debug],logType:ce.Standard},[V.Faint]:{colors:[Te.faint],logType:ce.Standard},[V.Info]:{colors:[Te.info],logType:ce.Standard},[V.Mutate]:{colors:[Te.mutate,Te.bold],logType:ce.Standard},[V.NormalWeight]:{colors:[Te.normalWeight],logType:ce.Standard},[V.Plain]:{colors:[],logType:ce.Standard},[V.Reset]:{colors:[Te.reset],logType:ce.Standard},[V.Success]:{colors:[Te.success,Te.bold],logType:ce.Standard},[V.Error]:{colors:[Te.error,Te.bold],logType:ce.Error},[V.Warning]:{colors:[Te.warning],logType:ce.Error}};function gp(e){return e.replace(/,/g,"")}function yp(e){return typeof e=="number"?e:Number(typeof e=="string"?gp(e):e)}function La(e){const t=wp(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function wp(e){const t=yp(e);if(!isNaN(t))return t}const vp="px";function Dp(e){return bp({value:e,suffix:vp})}function bp({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Ep({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Ap(){return await jl({async[dt.Node](){const{inspect:e}=await uo(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[V.Reset].colors.join("")].join(""),css:void 0}}},[dt.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:Ci(n.colorConfig[t].colors,o=>Ep({value:o,suffix:";"}),A.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:o instanceof Error?He(o):h(o)).join(`
`),n.omitColors?"":n.colorConfig[V.Reset].colors.join("")].join(""),css:r}}}})}const Cp=await Ap();function _a({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Dc(e,t){try{let n=!1;const r=ao(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(n=!0,o):o?[o.key,o.value]:void 0}).filter(A.isTruthy);return n?new Promise(async(i,s)=>{try{const o=Ci(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},A.isTruthy);i(Dn(o))}catch(o){s(de(o))}}):Dn(r)}catch(n){throw de(n)}}function Sp(e,t){return Dc(e,(n,r)=>{const i=r,s=t(r,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function bc(e,...t){const n={...e};return t.forEach(r=>{r&&ao(r).forEach(([i,s])=>{s!=null&&(n[i]=s)})}),n}const $p={colorConfig:pp,omitColors:!1},Fp=Ec({[ce.Error](){},[ce.Standard](){}});function Ec(e,t){const n=bc($p,t);function r(s){e[n.colorConfig[s.colorKey].logType](Cp({...s,options:n}))}const i=Sp(V,s=>(...o)=>r({args:o,colorKey:s}));return{...i,if(s){return s?i:Fp}}}const xp=Cm(dt.Node)?{[ce.Error]({text:e}){process.stderr.write(e+`
`)},[ce.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ce.Error]({text:e,css:t}){console.error(_a({value:e,prefix:"%c"}),t)},[ce.Standard]({text:e,css:t}){console.log(_a({value:e,prefix:"%c"}),t)}};Ec(xp);function as(e,t){const{min:n,max:r}=Uu(t);return e>r?n:e<n?r:e}function tt(e,t){let n=!1;const r=j(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),i[s]=o,i},{});return n?new Promise(async(i,s)=>{try{await Promise.all(j(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(de(o))}}):r}function Ac(e,t){const n=ao(e).filter(([r,i])=>t(r,i,e));return Dn(n)}function Cc(e,t){return Ac(e,n=>t.includes(n))}function jt(e){return j(e).map(t=>e[t])}function Tp(e,t){return t.capitalizeFirstLetter?Sc(e):e}function Sc(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Mp={capitalizeFirstLetter:!1};var bn;(function(e){e.Upper="upper",e.Lower="lower"})(bn||(bn={}));function kp(e){return e.toLowerCase()!==e.toUpperCase()}function Oa(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(kp(r)){if(t===bn.Upper&&r!==r.toUpperCase()||t===bn.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function $c(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Tp(r,bc(Mp,t))}function Np(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=Oa(o,bn.Lower,{rejectNoCaseCharacters:!0})||Oa(a,bn.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Ip(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Tn(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function lo(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class Fc{listeners={};getListenerCount(){return jt(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)}listen(t,n,r={}){const i=this.listeners,s=A.isString(t)?t:t.type;function o(){return i[s]?.delete(n)||!1}function a(u,l){r.once&&o(),n(u,l)}return vc(i,s,()=>new Map).set(n,{listener:a,removeListener:o}),o}removeListener(t,n){const r=A.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const s=i.get(n);return s?s.removeListener():!1}dispatch(t){const n=this.listeners[t.type],r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),r}removeAllListeners(){const n=jt(this.listeners).reduce((r,i)=>{const s=i.size||0;return i.clear(),r+s},0);return this.listeners={},n}destroy(){this.removeAllListeners()}}class xc extends Fc{}function Bp(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Rt(e,t,n){return Bp(globalThis,e,t,n)}const Tc=Symbol("no update");function Va(e){return e!==Tc}class us extends Tn()("observable-value-update"){}class Pp extends Tn()("observable-value-resolve"){}class Lp extends Tn()("observable-value-error"){}class _p extends lo("observable-destroy"){}class Op extends lo("observable-callback-call"){}class Vp extends Tn()("observable-params-update"){}class Mc{listenTarget=new xc;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];return n===Tc||(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)?!1:(this.value=n,this.listenTarget.dispatch(new us({detail:n})),!0)}listen(t,n){const r=i=>n(i.detail);return this.listenerMap.set(n,r),t&&n(this.value),this.listenTarget.listen(us,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(us,n)}destroy(){this.listenTarget.dispatch(new _p),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function co(e,t){return ep(e,t,(n,r)=>A.isFunction(n)&&A.isFunction(r)?!0:A.strictEquals(n,r))}class Rp extends Mc{equalityCheck;waitingForValueDeferredPromise=new Jr;lastSetPromise;lastSetId=os();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||co,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const n=os();return this.lastSetId=n,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Jr,super.setValue(this.waitingForValueDeferredPromise.promise,A.strictEquals)),t.then(r=>{this.lastSetPromise!==t||this.lastSetId!==n||this.resolveValue(r)}).catch(r=>{if(this.lastSetPromise!==t||this.lastSetId!==n)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=de(r);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return Va(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,A.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=os(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new Pp({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,A.strictEquals),this.dispatch(new Lp({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Va(t)?this.resolveValue(t):!1}catch(n){return this.rejectValue(de(n)),!0}}listen(t,n){return super.listen(t,n)}}class ln extends Rp{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==ln.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||co,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:ln.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===ln.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(de(t))}finally{this.dispatch(new Op)}}updateLastParams(t){try{return this.internalParams===ln.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new Vp({detail:this.internalParams})),!0):!1}catch(n){return this.setValue(de(n)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return A.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}const kc="__vir__shape__definition__key__do__not__use__in__actual__objects",fo="__vir__shape__specifier__key__do__not__use__in__actual__objects",Nc="__vir__custom__specifier__key__do__not__use__in__actual__objects";function ho(e){return A.hasKey(e,Nc)}function Ic({customName:e,defaultValue:t,checker:n}){return{customName:e,checker:n,defaultValue:t,[Nc]:!0,[fo]:!0}}Ic({customName:"UUID",defaultValue:np.isUuid("00000000-0000-1000-0000-000000000000"),checker:A.isUuid});function mo(e){return A.hasKey(e,kc)}var fe;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(fe||(fe={}));function Wp(...e){return Yt(e,fe.And)}function Up(...e){return Yt(e,fe.Enum)}function P(...e){return Yt(e,fe.Exact)}function Gp(...e){return Yt(e,fe.IndexedKeys)}function wt(...e){return Yt(e,fe.Or)}function qp(e){return Yt([e],fe.Unknown)}function cn(e,t){return Yt([e,t],fe.NumericRange)}function Si(e){return nt(e,fe.And)}function $i(e){return nt(e,fe.Class)}function Fi(e){return nt(e,fe.Enum)}function xi(e){return nt(e,fe.Exact)}function Ti(e){return nt(e,fe.IndexedKeys)}function Bc(e){return nt(e,fe.Tuple)}function gr(e){return nt(e,fe.Or)}function Mi(e){return nt(e,fe.Unknown)}function Pc(e){return nt(e,fe.NumericRange)}function ii(e){return nt(e,fe.Optional)}function nt(e,t){const n=yr(e);return!!n&&n.specifierType===t}function Yt(e,t){return{[fo]:!0,specifierType:t,parts:e}}function yr(e){if(!(!A.isObject(e)||!A.hasKey(e,fo)))return e}class Ra extends TypeError{name="DefaultValueConstructionError"}function jp(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}class $e extends TypeError{name="ShapeMismatchError"}function zp(e,t,n={}){try{return Kp(e,t,n),!0}catch{return!1}}function Kp(e,t,n={},r=""){try{ve({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?pi(i,r):i}}function Ns(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ve({subject:e,shape:t,keys:n,options:r}){if(Mi(t))return!0;if(mo(t))return ve({subject:e,shape:t.shape,keys:n,options:r});if(ho(t)){if(!t.checker(e))throw new $e(`Subject ${h(e)} does not match ${t.customName} shape.`);return!0}const i=Ns(n);if(yr(e))throw new $e(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(Bc(t)){if(!A.isArray(e))throw new $e(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((o,a)=>{const u=e[a];return ve({keys:[...n,a],options:r,shape:o,subject:u})})}else{if(ii(t))return ve({keys:n,options:r,shape:t.parts[0],subject:e});if(Gr(e,t,n,r)){if(A.isFunction(t))return A.isFunction(e);if($i(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(c=>[c,!1])),u=[];let l=!1;if(gr(t)){const c=[];l=t.parts.some(d=>{try{const m=ve({subject:e,shape:d,keys:n,options:r});return Object.assign(a,m),!0}catch(m){if(m instanceof $e)return c.push(m.message),!1;throw m}}),!l&&A.isLengthAtLeast(c,1)&&u.push(c[0])}else if(Si(t))l=t.parts.every(c=>{try{const d=ve({subject:e,shape:c,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,d),!0}catch(d){if(d instanceof $e)return u.push(d.message),!1;throw d}});else if(xi(t)){const c=ve({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,c),l=!0}else{if(Fi(t))throw new $e(`Cannot compare an enum specifier to an object at ${i}`);if(A.isArray(t)&&A.isArray(o))l=o.every((c,d)=>{const m=t.some(p=>{try{return ve({subject:c,shape:p,keys:[...n,d],options:r}),!0}catch(w){if(w instanceof $e)return u.push(w.message),!1;throw w}});return a[d]=m,m});else if(Ti(t)){const c=tt(e,(d,m)=>(r.ignoreExtraKeys||ve({shape:t.parts[0].keys,subject:d,keys:[...n,d],options:r}),ve({shape:t.parts[0].values,subject:m,keys:[...n,d],options:r}),!0));Object.assign(a,c),l=!0}else{const c=Hp({keys:n,options:r,shape:t,subject:e});Object.assign(a,c),l=!0}}if(u.length)throw new $e(mi(u));if(!l){const d=`Failed on key(s): ${Object.keys(a).filter(m=>!a[m]).map(m=>Ns([...n,m])).join(",")}`;throw new $e(d)}return r.ignoreExtraKeys||Object.entries(a).forEach(([c,d])=>{if(!d)throw new $e(`subject as extra key '${c}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new $e(`Subject does not match shape definition at key ${i}`)}return!0}function Hp({keys:e,options:t,shape:n,subject:r}){const i=Ns(e),s={};if(A.isObject(n)){const o=new Set(j(n)),a=new Set(j(r));o.forEach(u=>{(u in r||ii(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new $e(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],c=gr(l)?l.parts.includes(void 0):!1,d=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!c&&!d)throw new $e(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&ii(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const c=n[u];ve({subject:l,shape:c,keys:[...e,u],options:t}),s[u]=!0})}else throw new $e(`Shape definition at ${i} was not an object.`);return s}function Gr(e,t,n,r,i){const s=yr(t);if(s){if(ho(s))return s.checker(e);if(Pc(s))return A.isNumber(e)?e>=s.parts[0]&&e<=s.parts[1]:!1;if($i(s))return e instanceof s.parts[0];if(Si(s))return s.parts.every(o=>{try{return ve({subject:e,shape:o,keys:n,options:{...r,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(gr(s))return s.parts.some(o=>{try{return ve({subject:e,shape:o,keys:n,options:r}),!0}catch{return!1}});if(xi(s))return A.isObject(e)?(ve({subject:e,shape:s.parts[0],keys:n,options:{...r,exactValues:!0}}),!0):e===s.parts[0];if(Fi(s))return A.hasValue(Object.values(s.parts[0]),e);if(Ti(s)){if(!A.isObject(e))return!1;const o=Zp(e,s,!!r.ignoreExtraKeys),a=jt(e).every(u=>{try{return ve({subject:u,shape:s.parts[0].values,keys:n,options:r}),!0}catch{return!1}});return o&&a}else if(Mi(s))return!0}return i?t===e:jp(e,t)}function Zp(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys,s=po(t);if(A.isBoolean(s))return j(e).every(u=>Gr(u,i,[],{exactValues:!1,ignoreExtraKeys:n}));const o=r?s.every(u=>j(e).some(l=>Gr(l,u,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return j(e).every(u=>s.includes(u)?Gr(u,i,[],{exactValues:!1,ignoreExtraKeys:!1}):n)&&o}function po(e){const t=e.parts[0].keys,n=yr(t);if(A.isPropertyKey(t))return!0;if(n){if($i(n))return!1;if(Si(n))return!1;if(gr(n)){const r=n.parts.map(i=>po(Gp({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(A.isPropertyKey)}else if(xi(n)){const r=n.parts.filter(A.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(Fi(n))return Object.values(n.parts[0]);if(Ti(n))return!1;if(Mi(n))return!0}}return!1}function Is(e){return Vt(e)}function Vt(e){const t=yr(e);if(ho(e))return e.defaultValue;if(t){if(Bc(t))return t.parts.map(n=>Vt(n));if(ii(t))return Vt(t.parts[0]);if(Pc(t))return t.parts[0];if($i(t)){const n=t.parts[0];try{return new n}catch(r){throw new Ra(`Failed to create default value for classShape for class '${n.name}': ${He(r)}`)}}else{if(gr(t)||xi(t))return Vt(t.parts[0]);if(Si(t))return t.parts.reduce((n,r)=>Object.assign(n,Vt(r)),{});if(Fi(t))return t.parts[1]||Object.values(t.parts[0])[0];if(Ti(t)){const n=po(t);return!t.parts[0].required||A.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Vt(t.parts[0].values)]))}else{if(Mi(t))return t.parts[0]??{};throw new Ra(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return mo(e)?Is(e.shape):e instanceof RegExp?e:A.isArray(e)?e.map(Vt):A.isObject(e)?tt(e,(n,r)=>Is(r)):e}function Mn(e,t=!1){if(mo(e))return e;const n={shape:e,isReadonly:t,get defaultValue(){return Is(e)},[kc]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}const Yp=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Lc=Yp.reduce((e,t)=>(e[t]=t,e),{});te.defaultZone.name;const _c=Lc.UTC,Jp=Mn({hour:cn(ga.min,ga.max),minute:cn(ya.min,ya.max),second:cn(wa.min,wa.max),millisecond:cn(va.min,va.max),timezone:Up(Lc,_c)}),Qp=Mn({year:2023,month:cn(ma.min,ma.max),day:cn(pa.min,pa.max),timezone:_c});Mn(Wp(Qp,Jp));k.Years+"",k.Quarters+"",k.Months+"",k.Weeks+"",k.Days+"",k.Hours+"",k.Minutes+"",k.Seconds+"",k.Milliseconds+"";Mn(wt({get:P(x.Month),in:wt(P(x.Year),P(x.Quarter))},{get:P(x.Week),in:wt(P(x.Year),P(x.Quarter),P(x.Month))},{get:P(x.Day),in:wt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week))},{get:P(x.Hour),in:wt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week),P(x.Day))},{get:P(x.Minute),in:wt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week),P(x.Day),P(x.Hour))},{get:P(x.Second),in:wt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week),P(x.Day),P(x.Hour),P(x.Minute))},{get:P(x.Millisecond),in:wt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week),P(x.Day),P(x.Hour),P(x.Minute),P(x.Second))}));var Wa;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Wa||(Wa={}));var Bs;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Bs||(Bs={}));var Ua;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Ua||(Ua={}));const Xp={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Cc(Xp,Qe(Bs));te.defaultLocale;Mn(Ic({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return eg(e)}}));function eg(e){return N.fromISO(e).toUTC().toISO()===e}const tg=Mn({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:qp()});function ls(e){return zp(e,tg,{allowExtraKeys:!0})}class ng extends Mc{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||co}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=globalThis,go=qr.ShadowRoot&&(qr.ShadyCSS===void 0||qr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yo=Symbol(),Ga=new WeakMap;let Oc=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==yo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(go&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Ga.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ga.set(n,t))}return t}toString(){return this.cssText}};const ze=e=>new Oc(typeof e=="string"?e:e+"",void 0,yo),jr=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Oc(n,e,yo)},rg=(e,t)=>{if(go)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=qr.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},qa=go?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ze(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ig,defineProperty:sg,getOwnPropertyDescriptor:og,getOwnPropertyNames:ag,getOwnPropertySymbols:ug,getPrototypeOf:lg}=Object,ki=globalThis,ja=ki.trustedTypes,cg=ja?ja.emptyScript:"",dg=ki.reactiveElementPolyfillSupport,Hn=(e,t)=>e,si={toAttribute(e,t){switch(t){case Boolean:e=e?cg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},wo=(e,t)=>!ig(e,t),za={attribute:!0,type:String,converter:si,reflect:!1,hasChanged:wo};Symbol.metadata??=Symbol("metadata"),ki.litPropertyMetadata??=new WeakMap;class sn extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=za){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&sg(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=og(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??za}static _$Ei(){if(this.hasOwnProperty(Hn("elementProperties")))return;const t=lg(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Hn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hn("properties"))){const n=this.properties,r=[...ag(n),...ug(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(qa(i))}else t!==void 0&&n.push(qa(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rg(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:si).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:si;this._$Em=i,this[i]=o.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??wo)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}}sn.elementStyles=[],sn.shadowRootOptions={mode:"open"},sn[Hn("elementProperties")]=new Map,sn[Hn("finalized")]=new Map,dg?.({ReactiveElement:sn}),(ki.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=globalThis,oi=vo.trustedTypes,Ka=oi?oi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vc="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,Rc="?"+St,fg=`<${Rc}>`,zt=document,Xn=()=>zt.createComment(""),er=e=>e===null||typeof e!="object"&&typeof e!="function",Do=Array.isArray,hg=e=>Do(e)||typeof e?.[Symbol.iterator]=="function",cs=`[ 	
\f\r]`,On=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ha=/-->/g,Za=/>/g,Ot=RegExp(`>|${cs}(?:([^\\s"'>=/]+)(${cs}*=${cs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ya=/'/g,Ja=/"/g,Wc=/^(?:script|style|textarea|title)$/i,mg=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),pg=mg(1),Re=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Qa=new WeakMap,Ut=zt.createTreeWalker(zt,129);function Uc(e,t){if(!Do(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ka!==void 0?Ka.createHTML(t):t}const gg=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=On;for(let a=0;a<n;a++){const u=e[a];let l,c,d=-1,m=0;for(;m<u.length&&(o.lastIndex=m,c=o.exec(u),c!==null);)m=o.lastIndex,o===On?c[1]==="!--"?o=Ha:c[1]!==void 0?o=Za:c[2]!==void 0?(Wc.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=Ot):c[3]!==void 0&&(o=Ot):o===Ot?c[0]===">"?(o=i??On,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?Ot:c[3]==='"'?Ja:Ya):o===Ja||o===Ya?o=Ot:o===Ha||o===Za?o=On:(o=Ot,i=void 0);const p=o===Ot&&e[a+1].startsWith("/>")?" ":"";s+=o===On?u+fg:d>=0?(r.push(l),u.slice(0,d)+Vc+u.slice(d)+St+p):u+St+(d===-2?a:p)}return[Uc(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class tr{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,c]=gg(t,n);if(this.el=tr.createElement(l,r),Ut.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Ut.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Vc)){const m=c[o++],p=i.getAttribute(d).split(St),w=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:w[2],strings:p,ctor:w[1]==="."?wg:w[1]==="?"?vg:w[1]==="@"?Dg:Ni}),i.removeAttribute(d)}else d.startsWith(St)&&(u.push({type:6,index:s}),i.removeAttribute(d));if(Wc.test(i.tagName)){const d=i.textContent.split(St),m=d.length-1;if(m>0){i.textContent=oi?oi.emptyScript:"";for(let p=0;p<m;p++)i.append(d[p],Xn()),Ut.nextNode(),u.push({type:2,index:++s});i.append(d[m],Xn())}}}else if(i.nodeType===8)if(i.data===Rc)u.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(St,d+1))!==-1;)u.push({type:7,index:s}),d+=St.length-1}s++}}static createElement(t,n){const r=zt.createElement("template");return r.innerHTML=t,r}}function En(e,t,n=e,r){if(t===Re)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=er(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=En(e,i._$AS(e,t.values),i,r)),t}class yg{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??zt).importNode(n,!0);Ut.currentNode=i;let s=Ut.nextNode(),o=0,a=0,u=r[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new wr(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new bg(s,this,t)),this._$AV.push(l),u=r[++a]}o!==u?.index&&(s=Ut.nextNode(),o++)}return Ut.currentNode=zt,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class wr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=En(this,t,n),er(t)?t===ie||t==null||t===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):t!==this._$AH&&t!==Re&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):hg(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ie&&er(this._$AH)?this._$AA.nextSibling.data=t:this.T(zt.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=tr.createElement(Uc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new yg(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=Qa.get(t.strings);return n===void 0&&Qa.set(t.strings,n=new tr(t)),n}k(t){Do(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new wr(this.O(Xn()),this.O(Xn()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ni{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ie}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=En(this,t,n,0),o=!er(t)||t!==this._$AH&&t!==Re,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=En(this,a[r+u],n,u),l===Re&&(l=this._$AH[u]),o||=!er(l)||l!==this._$AH[u],l===ie?t=ie:t!==ie&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wg extends Ni{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ie?void 0:t}}class vg extends Ni{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ie)}}class Dg extends Ni{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=En(this,t,n,0)??ie)===Re)return;const r=this._$AH,i=t===ie&&r!==ie||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==ie&&(r===ie||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class bg{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){En(this,t)}}const Eg=vo.litHtmlPolyfillSupport;Eg?.(tr,wr),(vo.litHtmlVersions??=[]).push("3.2.1");const Ag=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new wr(t.insertBefore(Xn(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Zn=class extends sn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ag(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}};Zn._$litElement$=!0,Zn.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Zn});const Cg=globalThis.litElementPolyfillSupport;Cg?.({LitElement:Zn});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Jt=e=>(...t)=>({_$litDirective$:e,values:t});class kt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sg={attribute:!0,type:String,converter:si,reflect:!1,hasChanged:wo},$g=(e=Sg,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(r==="setter"){const{name:o}=n;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+r)};function Fg(e){return(t,n)=>typeof n=="object"?$g(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr=Jt(class extends kt{constructor(e){if(super(e),e.type!==bo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Re}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gc=e=>e??ie;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ps extends kt{constructor(t){if(super(t),this.it=ie,t.type!==bo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ie||t==null)return this._t=void 0,this.it=t;if(t===Re)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Ps.directiveName="unsafeHTML",Ps.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xa extends Ps{}Xa.directiveName="unsafeSVG",Xa.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xg(e,t,n){return e?t(e):n?.(e)}class qc extends Zn{static assign;static assignedInputs;static tagName;static styles;static render;static inputsType;static stateType;static updateStateType;static events;static stateInitStatic;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function Qt(e){if(A.isObject(e))return tt(e,(n,r)=>{if(!A.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Np(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?ze(n):n.startsWith("-")?jr`-${ze(n)}`:jr`--${ze(n)}`;return{name:o,value:jr`var(${o}, ${ze(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${Qt.name}' function.`)}function Tg(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function zr(e){return A.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Eo(e){return A.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function jc(e){return Ci(e,t=>{if(zr(t))return t.definition;if(Eo(t))return t.tagInterpolationKey||t},A.isTruthy)}const zc=new WeakMap;function Mg(e,t){const n=jc(t);return Kc(zc,[e,...n]).value?.template}function kg(e,t,n){const r=jc(t);return Zc(zc,[e,...r],n)}function Kc(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=Hc(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Kc(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Hc(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function Zc(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Hc(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Zc(u,t,n,r+1)}function Yc(e,t,n){const r=Mg(e,t),i=r??n();if(!r){const a=kg(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=Tg(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function Jc(e,t,n,r){const i=[],s=[],o=[],a=[];return e.forEach((l,c)=>{const d=i.length-1,m=i[d],p=c-1,w=t[p];r&&r(l);let D,T=[];if(typeof m=="string"&&(D=n(m,l,w),D)){i[d]=[m,D.replacement].join(""),o.push(p);const O=D.getExtraValues;T=O?O(w):[],T.length&&O?(i[d]+=" ",T.forEach((Z,z)=>{z&&i.push(" ")}),a.push(Z=>{const z=Z[p],se=O(z);return{index:p,values:se}}),i.push(l)):i[d]+=l}D||i.push(l);const F=e.raw[c];D?(s[d]=[s[d],D.replacement,F].join(""),T.length&&T.forEach(()=>{s.push("")})):s.push(F)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:o,valueInsertions:c}}}}function Ng(...[e,t,n]){if(Eo(n))return{replacement:n.tagName,getExtraValues:void 0}}function Ig(e,t){return Jc(e,t,Ng)}function _(e,...t){const n=Yc(e,t,()=>Ig(e,t));return jr(n.strings,...n.values)}const Bg={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Qc(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof qc?!0:Qc(n)}function Xc(e,t){const n=e.instanceState;j(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&j(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),Pg(e)}function Pg(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function eu(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Lg extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Ii(){return e=>class extends Lg{static type=e;_type=e;constructor(t){super(e,t)}}}function Ae(){return Ii()}function _g(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Ii()([e,r].join("-"));return n[r]=i,n},{}):{}}function Og(e){return e?tt(e,t=>t):{}}const rr=Symbol("element-vir-state-setup");function Vg(e){return A.isObject(e)?rr in e&&A.isFunction(e[rr]):!1}function ed(e,t){t in e||Fg()(e,t)}function Rg(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function tu(e,t){const n=e;function r(o){t?Rg(o,e,e.tagName):ed(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set(o,a,u){const l=Vg(u)?u[rr]():u;r(a);const c=n[a];function d(p){o[a]=p,n[a]=p}const m=e.observablePropertyListenerMap[a];if(c!==l&&ls(c)&&m&&c.removeListener(m),ls(l))if(m)l.listen(!1,m);else{let p=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=p,l.listen(!1,p)}else ls(c)&&(e.observablePropertyListenerMap[a]=void 0);return d(l),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function Wg({hostClassNames:e,cssVars:t}){return{hostClasses:tt(e,(n,r)=>({name:ze(r),selector:ze(`:host(.${r})`)})),cssVars:t}}function Ug({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&j(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function Gg({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(o){j(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:n,slotNames:r,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function qg(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}function Bi(e){const t=e;if(!A.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");if(!A.isString(t.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!t.render||typeof t.render=="string")throw new Error(`Failed to define element '${t.tagName}': render is not a function`);const n={...Bg,...t.options},r=_g(t.tagName,t.events),i=Og(t.hostClasses);t.hostClasses&&eu(t.tagName,t.hostClasses),t.cssVars&&eu(t.tagName,t.cssVars);const s=t.cssVars?Qt(t.cssVars):{},o=qg(t.slotNames),a=typeof t.styles=="function"?t.styles(Wg({hostClassNames:i,cssVars:s})):t.styles||_``,u=t.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends qc{static elementOptions=n;static tagName=t.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return Gg({element:this,eventsMap:r,cssVars:s,slotNamesMap:o})}static assign=l;static events=r;static render=u;static hostClasses=i;static cssVars=s;static init=t;static slotNames=o;static stateInitStatic=t.stateInitStatic;get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}_initCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;_haveInputsBeenSet=!1;render(){this._internalRenderCount++;try{Qc(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Bi.name}' to define ${t.tagName}.`),this._hasRendered=!0;const d=this.createRenderParams();if(!this._initCalled&&t.init&&(this._initCalled=!0,t.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const m=u(d);if(m instanceof Promise)throw new TypeError("render cannot be asynchronous");return Ug({host:d.host,hostClassesInit:t.hostClasses,hostClassNames:i,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},m}catch(d){const m=pi(d,`Failed to render ${t.tagName}`);return console.error(m),this._lastRenderError=m,He(m)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&t.init){this._initCalled=!0;const d=this.createRenderParams();if(t.init(d)instanceof Promise)throw new TypeError(`init in '${t.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{A.hasKey(d,"destroy")&&A.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanup){const d=this.createRenderParams();if(t.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${t.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(d){Xc(this,d)}observablePropertyListenerMap={};instanceInputs=tu(this,!1);instanceState=tu(this,!n.allowPolymorphicState);constructor(){super();const d=t.stateInitStatic||{};j(d).forEach(m=>{ed(this,m),this.instanceState[m]=d[m]}),this.definition=c}};return Object.defineProperties(c,{name:{value:$c(t.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,c),c}function Je(){return e=>{const t=e;if(!A.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return Bi({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}class td extends ln{}const nd=td;function ds(e){return{[rr](){return new td(e)}}}function Pi(e,t){return ir(e,t),e.element}function jg(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ir(e,t){const n=jg(e),r=n?`: in ${n}`:"";if(e.type!==bo.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function zg(e){const t=Jt(class extends kt{element;constructor(n){super(n),this.element=Pi(n,e)}render(n){return this.element.setAttribute(e,n),Re}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function fs(e){if(e instanceof nd)throw new TypeError("Pass AsyncProp.value, not AsyncProp itself.");return!(e instanceof Promise)}function hs(e){if(e instanceof nd)throw new TypeError("Pass AsyncProp.value, not AsyncProp itself.");return e instanceof Error}function U(e,t){return Kg(e,t)}const Kg=Jt(class extends kt{element;lastListenerMetaData;constructor(e){super(e),this.element=Pi(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),Re}}),nu="onDomCreated",Hg=Jt(class extends kt{element;constructor(e){super(e),ir(e,nu)}update(e,[t]){ir(e,nu);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),ms="onResize",rd=Jt(class extends kt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),ir(e,ms)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${ms} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ir(e,ms),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function dn(e,t,n){return xg(e,()=>t,()=>n)}const{attributeDirective:Zg}=zg("data-test-id"),qn=Zg;j({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",render:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function id(e){return{[rr]:e}}function Yg(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return{defineElement:()=>r=>(t(r),Je()(n(r))),defineElementNoInputs:r=>(t(r),Bi(n(r)))}}function Jg(e,t){return Qg(void 0,e)}const Qg=Jt(class extends kt{element;constructor(e){super(e),this.element=Pi(e,"assign")}render(e,t){return Xc(this.element,t),Re}}),Xg={};function ey(e,t){return t.map((n,r)=>{const i=e[r],s=e[r+1];if(i&&s){const{shouldHaveTagNameHere:o}=sd(i,s);if(o&&A.isString(n))return{tagName:n,tagInterpolationKey:vc(Xg,n,()=>({tagName:n}))}}return n})}function sd(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function ty(...[e,t,n]){const r=zr(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:s}=sd(e,t),o=Eo(r);if(o&&s&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(!s||!o)return;if(i&&r.elementOptions&&!r.elementOptions.ignoreUnsetInputs&&!zr(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(u){const l=zr(u)?u.inputs:void 0;return[i&&l?Jg(l):void 0].filter(A.isTruthy)}}}function ny(e){}function ry(e){return Jc(e.strings,e.values,ty,ny)}function C(e,...t){const n=ey(e,t),r=pg(e,...n),i=Yc(e,n,()=>ry(r));return{...r,strings:i.strings,values:i.values}}var me;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(me||(me={}));const Tr=window.navigator;function iy(){return cp(Array.from(A.hasKey(Tr,"webkitGetGamepads")?Tr.webkitGetGamepads():A.hasKey(Tr,"getGamepads")?Tr.getGamepads():[]),e=>{if(e)return{key:e.index,value:e}})}const od={Gamepad1:"0",Gamepad2:"1",Gamepad3:"2",Gamepad4:"3"};function sy(e){return A.hasValue(od,e)}const oy={Mouse:"mouse",Keyboard:"keyboard"},xe={...oy,...od};var lt;(function(e){e.Button="button",e.Axe="axe"})(lt||(lt={}));function jn(e){return`button-${e}`}function Ls(e){return`axe-${e}`}const ay=.01;function uy({value:e,gamepadDeadZone:t,globalDeadZone:n}){const r=t??(n||ay);return Math.abs(e)>r?e:0}function ru({gamepadInput:e,inputIndex:t,deadZones:n,globalDeadZone:r}){const i=A.isNumber(e),s=i?Ls(t):jn(t),o=i?e:e.value;return{inputName:s,value:uy({value:o,gamepadDeadZone:n[s],globalDeadZone:r}),inputType:i?lt.Axe:lt.Button}}function ly({gamepad:e,deadZoneSettings:t,globalDeadZone:n}){const r=String(e.index);if(!sy(r))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);const i=t[e.id]||{},s=e.axes.map((u,l)=>ru({gamepadInput:u,inputIndex:l,deadZones:i,globalDeadZone:n})),o=e.buttons.map((u,l)=>ru({deadZones:i,gamepadInput:u,globalDeadZone:n,inputIndex:l})),a=Dn([...o,...s].map(u=>[u.inputName,u]));return{axes:s,buttons:o,isConnected:e.connected,gamepadName:e.id,deviceKey:r,mapping:e.mapping,serialized:!0,timestamp:e.timestamp,inputsByName:a}}function cy(e){return tt(iy(),(t,n)=>ly({gamepad:n,...e}))}function dy(e){const t={},n={deviceKey:e.deviceKey,deviceName:e.gamepadName,deviceType:me.Gamepad};return Object.values(e.inputsByName).forEach(r=>{r.value&&(t[r.inputName]={...n,details:r,inputName:r.inputName,inputValue:r.value})}),t}function fy(e){return tt(e,(t,n)=>({currentInputs:dy(n),deviceDetails:n,deviceName:n.gamepadName,deviceKey:n.deviceKey,deviceType:me.Gamepad}))}function iu(e){return jt(e).map(r=>r.currentInputs).filter(A.isTruthy).map(r=>jt(r)).flat()}const su={deviceDetails:void 0,deviceKey:xe.Keyboard,deviceName:"keyboard",deviceType:me.Keyboard},Mr={deviceDetails:void 0,deviceKey:xe.Mouse,deviceName:"mouse",deviceType:me.Mouse};xe.Gamepad1+"",me.Gamepad,xe.Gamepad2+"",me.Gamepad,xe.Gamepad3+"",me.Gamepad,xe.Gamepad4+"",me.Gamepad,xe.Keyboard+"",me.Keyboard,xe.Mouse+"",me.Mouse;function Li(){return(e,t)=>{const n=$c(e,{capitalizeFirstLetter:!0}),r=class extends Tn()(e){eventType=e;static getNewData=t;static constructIfDataIsNew(i,...s){const o=r.getNewData(...s);if(o)return new r({detail:{timestamp:i,inputs:o}})}};return Object.defineProperty(r,"name",{value:n,writable:!0}),r}}function hy(...[e,t]){return t}const my=Li()("all-devices-updated",hy);function ou(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function py(...[e,t]){const n=iu(t),r=e?iu(e):[];if(!A.jsonEquals(r,n)){const i=n.filter(o=>!r.some(a=>ou(a,o))),s=r.filter(o=>!n.some(a=>ou(a,o)));return{newInputs:i,removedInputs:s,allCurrentInputs:n}}}const ai=Li()("current-inputs-changed",py);function gy(...[e,t]){if(!e)return[];const n=j(e).filter(r=>!A.hasKey(t,r));if(n.length)return n.map(r=>e[r]).filter(A.isTruthy)}const yy=Li()("devices-removed",gy);function wy(...[e,t]){if(!e)return jt(t).filter(A.isTruthy);const n=j(t).filter(r=>!A.hasKey(e,r));if(n.length)return n.map(r=>t[r]).filter(A.isTruthy)}const vy=Li()("new-devices-added",wy),ad=[my,vy,yy,ai];Object.fromEntries(ad.map(e=>[e.type,e]));const au="code";class Dy extends Fc{currentKeyboardInputs={};currentMouseInputs={};gamepadDeadZoneSettings={};lastReadInputDevices;loopIsRunning=!1;globalDeadZone=0;removeGlobalListeners=()=>{};currentLoopIndex=-1;lastEventDetails={};constructor(t={}){super(),t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),t.globalDeadZone&&(this.globalDeadZone=t.globalDeadZone),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){const n=[Rt("keydown",r=>{const i=jn(r[au]);if(this.currentKeyboardInputs.hasOwnProperty(i))return;const s={deviceType:me.Keyboard,details:{keyboardEvent:r},deviceKey:xe.Keyboard,deviceName:su.deviceName,inputName:i,inputValue:1};this.currentKeyboardInputs[i]=s}),Rt("keyup",r=>{delete this.currentKeyboardInputs[jn(r[au])]}),Rt("mousedown",r=>{const i=jn(r.button);this.currentMouseInputs.hasOwnProperty(i)||(this.currentMouseInputs[i]={deviceType:me.Mouse,details:{mouseEvent:r},deviceName:Mr.deviceName,deviceKey:xe.Mouse,inputName:i,inputValue:1})}),Rt("mouseup",r=>{delete this.currentMouseInputs[jn(r.button)]}),t.disableMouseMovement?void 0:Rt("mousemove",r=>{const i=Ls("x"),s=Ls("y");this.currentMouseInputs[i]={deviceType:me.Mouse,details:{mouseEvent:r},deviceName:Mr.deviceName,deviceKey:xe.Mouse,inputName:i,inputValue:r.clientX},this.currentMouseInputs[s]={deviceType:me.Mouse,details:{mouseEvent:r},deviceName:Mr.deviceName,deviceKey:xe.Mouse,inputName:s,inputValue:r.clientY}})];this.removeGlobalListeners=()=>{n.forEach(r=>r?.())}}runPollingLoop(t,n){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,n),requestAnimationFrame(r=>{this.runPollingLoop(t,r)}))}fireEvents(t,n,r){ad.forEach(i=>{const s=i.constructIfDataIsNew(t,n,r);s&&(this.lastEventDetails[s.type]={constructor:i,constructorInputs:[t,n,r]},this.dispatch(s))})}getCurrentDeviceValues(t,n){const r=cy({deadZoneSettings:t,globalDeadZone:n}),i=fy(r);return{[xe.Keyboard]:{...su,currentInputs:{...this.currentKeyboardInputs}},[xe.Mouse]:{...Mr,currentInputs:{...this.currentMouseInputs}},...i}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,n=performance.now(),r=this.globalDeadZone){const i=this.getCurrentDeviceValues(t,r),s=this.lastReadInputDevices;return this.lastReadInputDevices=i,this.fireEvents(n,s,i),i}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}var sr;(function(e){e.Browser="browser",e.Node="node"})(sr||(sr={}));function ud(e,t){return{extra:{...t.wasSentPrematurely?{wasSentPrematurely:!0}:{},...e.extraContext},level:e.severity}}var uu;(function(e){e.Upper="upper",e.Lower="lower"})(uu||(uu={}));var lu;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(lu||(lu={}));function by(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}by();function Ey(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function mn(e,t){return Ey(e)===t}const Ay=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ld(e,t){return e?Ay.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function Cy(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Sy(e){return!!e}var cu;(function(e){e.Upper="upper",e.Lower="lower"})(cu||(cu={}));var du;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(du||(du={}));function cd(e){return e?e instanceof Error?e.message:ld(e,"message")?String(e.message):String(e):""}function $y(e){return Cy(e).filter(t=>isNaN(Number(t)))}function Fy(e){return $y(e).map(n=>e[n])}function xy(e,t){return Fy(t).includes(e)}function Ty(e,t){try{return My(e,t),!0}catch{return!1}}function My(e,t,n){if(e.length<t)throw new Error(`Array is not at least '${t}' in length.`)}function dd(...e){if(!Ty(e,1))return{};if(e.length===1)return e[0];let t;const n={};return e.forEach(r=>{if(mn(r,"object"))mn(t,"object")||(t={...r});else{t=r;return}Object.entries(r).forEach(([i,s])=>{n[i]||(n[i]=[]),n[i].push(s)})}),mn(t,"object")&&Object.entries(n).forEach(([r,i])=>{const s=dd(...i);s===void 0&&r in t?delete t[r]:s!==void 0&&(t[r]=s)}),t}function ky(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ky();var De;(function(e){e.Warning="warning",e.Info="info",e.Debug="debug",e.Fatal="fatal",e.Error="error"})(De||(De={}));const Ny={[De.Warning]:console.warn,[De.Info]:console.info,[De.Debug]:console.debug,[De.Fatal]:console.error,[De.Error]:console.error};function fd(e){return xy(e.level,De)?e.level:De.Info}const hd=Symbol("extra-event-context");function Iy(e){return ld(e,hd)}function fu(e){if(Iy(e))return e[hd]}function hu(e){const t=fu(e),n="originalException"in e?fu(e.originalException):void 0,r="captureContext"in e&&"extra"in e.captureContext?e.captureContext?.extra:void 0,i={...t,...n,...r};if(Object.keys(i).length)return i}const _s=[];function By(){for(;_s.length;)try{const e=_s.pop();if(!e)return;e.callback(...e.inputs)}catch(e){console.error("error while trying to send premature sentry events:",e)}}function Py(e,t){_s.push({callback:e,inputs:t})}let Yn;async function Ly(e){const t=!!Yn;Yn=await e,t||By()}function _y(e,t,n){const r={...hu(t),...hu(e),...n?.(),originalFullMessage:e.message||cd(t.originalException)},i=ud({severity:fd(e),extraContext:r},{wasSentPrematurely:!1});return Object.assign(e,i),e}function md(e,t){return e.message||cd(t?.originalException)}var Tt;(function(e){e.Dev="dev",e.Prod="prod",e.NoSentryYet="no-sentry-yet"})(Tt||(Tt={}));function Oy(e,t,n){pd(fd(e),n,{event:e,extra:e.extra,hint:t,message:md(e,t),originalException:t.originalException})}function pd(e,t,n){const r=Ny[e],i={...n.event?{event:n.event}:void 0,...n.hint?{hint:n.hint}:void 0},s=[n.message,n.extra,Object.keys(i).length?i:void 0,n.originalException].filter(Sy);t===Tt.Dev?r("Would have sent to Sentry:",...s):t===Tt.Prod?r("Sending to Sentry:",...s):t===Tt.NoSentryYet&&r("Logging before Sentry init:",...s)}function mu(e){function t(n,r){return n.extra?.wasSentPrematurely||Oy(n,r,e?Tt.Dev:Tt.Prod),e?null:n}return t}async function Vy(e,t,n,r,i){const s={beforeSend:mu(i),beforeSendTransaction:mu(i),defaultIntegrations:!1,enabled:!0,maxValueLength:1e4},o=Ry[e](t);return dd(s,o,n,r||{})}const Ry={[sr.Browser](e){return{integrations:[e.httpContextIntegration(),e.dedupeIntegration(),e.inboundFiltersIntegration(),e.functionToStringIntegration(),e.globalHandlersIntegration()]}},[sr.Node](e){return{integrations:[e.onUncaughtExceptionIntegration(),e.onUnhandledRejectionIntegration(),e.contextLinesIntegration(),e.nodeContextIntegration(),e.functionToStringIntegration()]}}};async function Wy({dsn:e,releaseEnv:t,releaseName:n,sentryConfigOverrides:r,createUniversalContext:i,sentryDep:s,executionEnv:o,isDev:a}){const u=await Vy(o,s,{dsn:e,environment:t,release:n},r,a);return s.init(u),s.addEventProcessor((l,c)=>_y(l,c,i)),Ly(s),s}const Uy={[De.Debug]:ps(De.Debug),[De.Info]:ps(De.Info),[De.Warning]:ps(De.Warning)};function ps(e){return(t,n)=>gd(t,{extraContext:n,severity:e},{wasSentPrematurely:!1})}function gd(e,t,n){try{if(!Yn){pd(t.severity,Tt.NoSentryYet,{message:mn(e,"string")?e:md(e,void 0),event:mn(e,"string")?void 0:e,extra:t.extraContext,hint:void 0,originalException:void 0}),Py(gd,[e,t,{wasSentPrematurely:!0}]);return}const r=ud(t,n);return mn(e,"string")?Yn.captureMessage(e,r):Yn.captureEvent({...e,...r})}catch(r){console.error("Error while trying to send Sentry log:",r);return}}const pu="vira-",{defineElement:Gy}=Yg({assertInputs:e=>{if(!e.tagName.startsWith(pu))throw new Error(`Tag name should start with '${pu}' but got '${e.tagName}'`)}}),ft=Gy,b=Qt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ne({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const qy=ne({name:"Check24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Xe=Qt({"vira-form-input-radius":"8px"}),_i=_`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,et=Qt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Kt=Qt({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":_`calc(${Xe["vira-form-input-radius"].value} + 4px)`});function Ao({selector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=2}){const i=ze(Dp(r+n+t));return _`
        ${ze(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${Kt["vira-focus-outline-color"].value};
            border-radius: ${Kt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const $t=Qt({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Kt["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),vr=_`
    padding: 0;
    margin: 0;
`,Ne=_`
    ${vr};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,gu=_`#e2e2e2`,yd={menuShadow:_`
        filter: drop-shadow(0px 5px 5px ${gu});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:_`
        filter: drop-shadow(0px -5px 5px ${gu});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},or=_`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,J=ft()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>_`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),gs=ft()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>_`
        :host {
            display: flex;
            ${or};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${J} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${J} {
            transition: opacity
                ${et["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${Xe["vira-form-input-radius"].value}
                ${Xe["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${Xe["vira-form-input-radius"].value}
                ${Xe["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return C`
            <div class="option">
                <${J.assign({icon:qy})}></${J}>
                <slot>${e.label}</slot>
            </div>
        `}}),Os="group";function jy(e,t,n){return[e,t,n].filter(r=>r!==void 0).join(",")||""}function zy(e){const[t,n,r]=e.split(",");return n?{type:"2d",xCord:La(t),yCord:La(n),isGroup:r===Os}:{type:"1d",isGroup:t===Os}}function Ky(e,t){Object.entries(t).forEach(([n,r])=>{A.isBoolean(r)&&r?e.setAttribute(n,""):A.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const Hy=Jt(class extends kt{element;lastKey;constructor(e){super(e),this.element=Pi(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Re}}),Vs={name:"data-nav"},on="nav-activated",Rs={js:{click(e){return`${e}.${on}`},selected(e){return`${e}:focus`}},css:{click(e){return _`
                ${ze(Rs.js.click(e))}
            `},selected(e){return _`
                ${ze(Rs.js.selected(e))}
            `}}},Zy={activateKeys:["Space","Return","Enter"]};function Yy(){wd=ks(Zy)}let wd;Yy();function yu(e){return wd.activateKeys.some(t=>{const n=t.toLowerCase();return n===e.key.toLowerCase()||n===e.code.toLowerCase()})}function Jy(e,t){const n=jy(e,t);return Hy(`${e}-${t}`,r=>{const i=r.hasAttribute("tabindex")||e===Os?{}:{tabindex:0},s={[Vs.name]:n,...i};Ye.instanceOf(r,HTMLElement),Ky(r,s),r.style.getPropertyValue("cursor")||r.style.setProperty("cursor","pointer"),r.addEventListener("mousemove",o=>{o.target===r&&r.focus()},!0),r.addEventListener("mouseleave",o=>{o.target===r&&r.blur()},!0),r.addEventListener("mousedown",o=>{o.target===r&&r.classList.add(on)},!0),r.addEventListener("mouseup",o=>{o.target===r&&r.classList.remove(on)},!0),r.addEventListener("blur",()=>{r.classList.remove(on)},!0),r.addEventListener("keydown",o=>{o.target===r&&yu(o)&&r.classList.add(on)},!0),r.addEventListener("keyup",o=>{o.target===r&&yu(o)&&r.classList.remove(on)},!0)})}async function vd(e=1){const t=new Jr;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function Qy(e){return[...e.children,...e.shadowRoot?.children??[]]}function Xy(e){return e.matches(":focus")}function ui(e){if(e instanceof ShadowRoot)return ui(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:ui(t)}function Dd(e,t){if(t(e))return e;const n=ui(e);if(n)return Dd(n,t)}function e0(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,s=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return r}function t0(e){const t=ui(e);return t&&Dd(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}const n0={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},r0=Object.keys(n0),i0={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},s0=Object.keys(i0),o0={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},a0=Object.keys(o0);Array.from(new Set([...r0,...a0,...s0].sort()));function u0(e,t){return bd([],e,t)}function bd(e,t,n){return!t||t.type==="child"?!1:t.type==="1d"?wu(t.children,t,0,e,n):t.children.some((r,i)=>wu(r,t,i,e,n))}function wu(e,t,n,r,i){return e.some((s,o)=>{const a=A.hasKey(t,"isRoot")&&t.isRoot?r:[t,...r];return i(a,s,{x:o,y:n})?!0:bd(a,s,i)})}function l0(e){return e.toReversed().find(t=>!t.isGroup)}function ar(e){if(!e)return;let t,n,r;u0(e,(o,a,u)=>Xy(a.element)?(t=o,n=a,r=u,!0):!1);const i=t?t[0]||e:void 0,s=t?l0(t)||e:void 0;if(!(!n||!i||!r||!s||!t))return{node:n,parent:i,nonGroupParent:s,ancestors:t}}function ur(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function c0(e){if(!e)return{success:!1,reason:"no nav tree"};const t=ar(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const n=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return n?(ur(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element}):{success:!1,reason:"failed to find first child to enter into"}}function d0(e){if(!e)return{success:!1,reason:"no nav tree"};const t=ar(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};const n=t.nonGroupParent;return n.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to"}:(ur(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element})}function Ed(e){const t=[];return Qy(e).forEach(n=>{if(!(n instanceof HTMLElement))return;const r=Ed(n),i=n.hasAttribute(Vs.name)?zy(n.getAttribute(Vs.name)||""):void 0;if(!i){t.push(...r);return}t.push({children:r,element:n,navValue:i})}),t}function f0(e){const t=Ed(e);return Ad(t)}function Ad(e){if(!A.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(n=>{const r=n.children.length?Ad(n.children):void 0;if(n.navValue.isGroup&&!r){const o=new Error("group nav has no children");throw console.error(o,n),o}const i=h0(n,t.children),s=r?{element:n.element,children:r.children,type:r.type,isGroup:n.navValue.isGroup,coords:i}:{element:n.element,type:"child",coords:i,isGroup:!1};if(n.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(Ye.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(n.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==n.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,n),o}}),t}function h0(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}function vu(e,t){return e>t}function Du(e,t){return e<t}var Le;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Le||(Le={}));function Co(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?Co(t):t}function bu(e,t,n){if(!e)return{success:!1,reason:"no nav tree"};const r=ar(e);if(!r){const a=Co(e);return a?(ur(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Cd(r.parent,t,r.node),o=n?!0:!s;return i&&o?(ur(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"failed to find node to focus"}}function Cd(e,t,n){if(t===Le.Down||t===Le.Up){const i=t===Le.Down?Du:vu,s=t===Le.Down?1:-1,o=e.type==="1d"?0:as(n.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?as(n.coords.x+s,{min:0,max:e.children.length-1}):a&&n.coords.x>=a.length?a.length-1:n.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],c=e.type==="1d"?i(u.x,n.coords.x):i(u.y,n.coords.y);return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:c}}else{const i=t===Le.Right?Du:vu,s=t===Le.Right?1:-1,o=e.type==="1d"?e.children:e.children[n.coords.y];Ye.isDefined(o,`No current row found at y index: '${n.coords.y}'`);const a={x:as(n.coords.x+s,{min:0,max:o.length-1}),y:n.coords.y},u=i(a.x,n.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:u}}}function m0(e,t,n,r){const i=A.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from"};const{nextNode:o,requiresWrapping:a}=Cd(i,n,s),u=o?.isGroup?Co(o):o,l=r?!0:!a;return u?l?(ur(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a}):{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"no node to navigate to"}}class Sd{rootElement;constructor(t){this.rootElement=t}getCurrentlyFocused(){return ar(this.buildNavTree())}buildNavTree(){return f0(this.rootElement)}navigate({direction:t,allowWrapping:n}){return bu(this.buildNavTree(),t,n)}enterInto(){return c0(this.buildNavTree())}exitOutOf(){return d0(this.buildNavTree())}navigatePibling({allowWrapping:t,direction:n}){const r=this.buildNavTree(),i=ar(r);return!i||!r?bu(r,n,t):m0(r,i,n,t)}}const p0={option:"dropdown-option"},kr=ft()({tagName:"vira-dropdown-options",events:{selectionChange:Ae()},styles:_`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${Xe["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${$t["vira-form-background-color"].value};
            border: 1px solid ${$t["vira-form-border-color"].value};
            color: ${$t["vira-form-foreground-color"].value};
            ${yd.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Rs.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${$t["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${gs} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${_i};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:n}){const r=e.options.map(i=>{const s=i.template||C`
                    <${gs.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${gs}>
                `;return C`
                <div
                    class="dropdown-item ${nr({disabled:!!i.disabled})}"
                    ${qn(p0.option)}
                    title=${Gc(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?ie:Jy()}
                    ${U("mousedown",o=>{o.stopPropagation()})}
                    ${U("mouseup",o=>{o.stopPropagation(),i.disabled||t(new n.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return C`
            <slot>${r}</slot>
        `}});ne({name:"Chat24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});const g0=ne({name:"ChevronUp24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${b["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),$d=ne({name:"CloseX24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ne({name:"Commit24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});ne({name:"Document24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});ne({name:"Element16Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ne({name:"Element24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const y0=ne({name:"EyeClosed24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),w0=ne({name:"EyeOpen24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),v0=ne({name:"Loader24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),D0=_`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${et["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Fd=ne({name:"LoaderAnimated24Icon",svgTemplate:C`
        <style>
            ${D0}
        </style>
        ${v0.svgTemplate}
    `});ne({name:"Options24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ne({name:"Pencil24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});ne({name:"Shield24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"SpeakerLoud24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"SpeakerMedium24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"SpeakerMuted24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"SpeakerQuiet24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"Star24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});const b0=ne({name:"StatusFailure24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ne({name:"StatusInProgress24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});ne({name:"StatusSuccess24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});class E0 extends ng{constructor(){super({defaultValue:document.hidden,equalityCheck:A.strictEquals}),globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n));const t=n=>this.updateVisibility(n);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const n=C0.includes(t.type),r=A0.includes(t.type),i=n?!0:r?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const A0=["blur","focusout","pagehide"],C0=["focus","focusin","pageshow"],S0=new E0;function $0(e,t){return S0.listen(e,t)}const Eu={top:0,left:0,right:0,bottom:0};class xd extends lo("hide-pop-up"){}class Td extends Tn()("nav-select"){}class F0{listenTarget=new xc;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const n=new Sd(t);this.cleanupCallbacks=[$0(!1,r=>{r||this.removePopUp()}),Rt("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Rt("keydown",r=>{const i=r.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Le.Down,allowWrapping:!1});else if(i==="ArrowUp")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Le.Up,allowWrapping:!1});else if(i==="ArrowLeft")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Le.Left,allowWrapping:!1});else if(i==="ArrowRight")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Le.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=n.getCurrentlyFocused();s&&(n.enterInto(),this.listenTarget.dispatch(new Td({detail:s.node.coords})),r.stopImmediatePropagation(),r.preventDefault())}}})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new xd)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=t0(t);Ye.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},c=tt(Eu,p=>s[p]),d=tt(Eu,p=>{const w=l[p],D=c[p];return Math.abs(w-D)}),m=d.top>d.bottom+r.verticalDiffThreshold&&d.bottom<r.minDownSpace;return this.attachGlobalListeners(t),{popDown:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function x0({selected:e,options:t,isMultiSelect:n}){if(e.length&&t.length){const r=t.filter(i=>e.includes(i.id));return r.length>1&&!n?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),r.slice(0,1)):r}else return[]}function T0(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${Ip(n)}`)}function Au(e,t,n){return n?t.includes(e)?t.filter(r=>r!==e):[...t,e]:[e]}function Cu({open:e,emitEvent:t},{updateState:n,popUpManager:r,dispatch:i,host:s}){e?n({showPopUpResult:r.showPopUp(s)}):r.removePopUp(),t&&i(e)}const Nr={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"};ft()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>_`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Kt["vira-focus-outline-color"].name}: ${$t["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Ne};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${Xe["vira-form-input-radius"].value};
            transition: border-radius
                ${et["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${Ao({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${et["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${$t["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${or};
            border-radius: inherit;
            background-color: ${$t["vira-form-background-color"].value};
            color: ${$t["vira-form-foreground-color"].value};
        }

        .open-upwards ${kr} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${yd.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${_i}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
            left: 0;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:Ae(),openChange:Ae()},stateInitStatic:{showPopUpResult:void 0,popUpManager:id(()=>new F0),navController:void 0},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:s}){e.popUpManager.listen(xd,()=>{if(t({showPopUpResult:void 0}),!r.isDisabled){const o=n.shadowRoot.querySelector(".dropdown-wrapper");Ye.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(Td,o=>{const a=o.detail.x,u=r.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);r.isMultiSelect||Cu({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:n,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Au(u.id,r.selected,!!r.isMultiSelect)))}),t({navController:new Sd(n)})},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:s}){T0(r.options);function o(w){Cu(w,{dispatch:D=>{e(new t.openChange(D))},host:s,popUpManager:n.popUpManager,updateState:i})}r.isDisabled?o({open:!1,emitEvent:!1}):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?o({emitEvent:!1,open:!1}):r.z_debug_forceOpenState&&!n.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=x0(r),u=r.icon?C`
                  <${J.assign({icon:r.icon})}
                      ${qn(Nr.icon)}
                  ></${J}>
              `:"",l=n.showPopUpResult?n.showPopUpResult.popDown?_`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                  `:_`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                  `:void 0;function c(){o({emitEvent:!0,open:!n.showPopUpResult})}const d=!a.length,m=r.selectionPrefix&&!d?C`
                      <span class="selected-label-prefix" ${qn(Nr.prefix)}>
                          ${r.selectionPrefix}
                      </span>
                  `:"",p=d?r.placeholder||"":a.map(w=>w.label).join(", ");return C`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${nr({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                ${qn(Nr.trigger)}
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${U("keydown",w=>{!n.showPopUpResult&&w.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${U("click",w=>{w.detail===0&&c()})}
                ${U("mousedown",w=>{w.button===0&&c()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${nr({"using-placeholder":d})}"
                        title=${Gc(d?p:void 0)}
                    >
                        ${m} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${J.assign({icon:g0})}
                            class="trigger-icon"
                        ></${J}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${dn(!!n.showPopUpResult,C`
                            <${kr.assign({options:r.options,selectedOptions:a})}
                                ${U(kr.events.selectionChange,w=>{r.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(Au(w.detail.id,r.selected,!!r.isMultiSelect)))})}
                                ${qn(Nr.options)}
                            ></${kr}>
                        `)}
                </div>
            </button>
        `}});Je()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>_`
        .bold-wrapper {
            position: relative;
        }

        .bold {
            font-weight: ${t["vira-bold-bold-weight"].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-bold-bold"].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${e["vira-bold-bold"].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,render({inputs:e}){return C`
            <span class="bold-wrapper">
                <span class="bold">${e.text}</span>

                <span class="normal">${e.text}</span>
            </span>
        `}});var li;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(li||(li={}));const st=ft()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===li.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>_`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${or};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Kt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${_i};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Ne};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Xe["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${et["vira-interaction-animation-duration"].value},
                background-color
                    ${et["vira-interaction-animation-duration"].value},
                border-color ${et["vira-interaction-animation-duration"].value};
        }

        ${Ao({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${J} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?C`
                  <${J.assign({icon:e.icon})}></${J}>
              `:"",n=e.text?C`
                  <span class="text-template">${e.text}</span>
              `:"";return C`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});ft()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>_`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ne};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${et["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ae()},stateInitStatic:{contentHeight:0},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:s}){const o=s.expanded?_`
                  height: ${e.contentHeight}px;
              `:_`
                  height: 0;
              `;return C`
            <button
                class="header-wrapper"
                ${U("click",()=>{r(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${rd(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});ft()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:Ae(),imageError:Ae()},styles:({hostClasses:e})=>_`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?C`
                  <slot class="status-wrapper" name=${s.error}>
                      <${J.assign({icon:b0})} class="error"></${J}>
                  </slot>
              `:t.loadedUrls[o]?void 0:C`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${J.assign({icon:Fd})}></${J}>
                    </slot>
                `;return C`
            ${dn(!!a,a)}
            <img
                class=${nr({hidden:!!a})}
                ${U("load",async()=>{e._debugLoadDelay&&await ni(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[o]:!0}}),r(new i.imageLoad)})}
                ${U("error",async u=>{e._debugLoadDelay&&await ni(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[o]:!0}}),r(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function Ws({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Ws({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function M0({value:e,allowed:t,blocked:n}){const r=t?Ws({input:e,matcher:t}):!0,i=n?Ws({input:e,matcher:n}):!1;return r&&!i}function Us(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(M0({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function k0({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){if(!(n instanceof InputEvent))throw new TypeError("Text input event was not an InputEvent.");const s=e0(n,HTMLInputElement),o=n.data;if(o){const{blocked:u}=Us({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=Us({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var qt;(function(e){e.Default="text",e.Password="password",e.Email="email"})(qt||(qt={}));const qe=ft()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Kt["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ae(),inputBlocked:Ae()},styles:({hostClasses:e,cssVars:t})=>_`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Kt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${_i};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${Ne};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${or};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Ne};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${Xe["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${et["vira-interaction-animation-duration"].value};
            }

            label {
                ${Ne};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Xe["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Ao({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ne};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${or};
            }

            button {
                ${Ne};
                cursor: pointer;
                display: flex;
                transition: color
                    ${et["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i})=>{const{filtered:s}=Us({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?C`
                  <${J.assign({icon:e.icon})} class="left-side-icon"></${J}>
              `:"",a=e.fitText?_`
                  width: ${n.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type===qt.Password;return C`
            <label>
                ${o}
                ${dn(!!e.fitText,C`
                        <span
                            class="size-span"
                            ${rd(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${N0(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${U("input",l=>{k0({inputs:e,previousValue:s,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${dn(!!(e.showClearButton&&e.value),C`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${U("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${J.assign({icon:$d})}></${J}>
                        </button>
                    `)}
                ${dn(e.type===qt.Password,C`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${U("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${J.assign({icon:n.showPassword?w0:y0})}></${J}>
                        </button>
                    `)}
                ${dn(!!e.suffix,C`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function N0(e,t){return e===qt.Password&&t?qt.Default:e||qt.Default}ft()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>_`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(n){if(!e.route)return;const r=e.route.router.setRouteOnDirectNavigation(e.route.route,n);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:r?"instant":"smooth"})}if(e.link?.newTab)return C`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return C`
                <a href=${n} rel="noopener noreferrer" ${U("click",t)}>
                    <slot></slot>
                </a>
            `}}});var K=(e=>(e.SwitchPro="switch-pro",e.PlaystationDualShock="playstation-dual-shock",e.PlaystationDualShock4="playstation-dual-shock-4",e.PlaystationDualSense="playstation-dual-sense",e.SteamDeck="steam-deck",e.Xbox360="xbox-360",e.XboxWireless="xbox-wireless",e))(K||{}),ke=(e=>(e.Microsoft="microsoft",e.Nintendo="nintendo",e.Sony="sony",e.Valve="valve",e))(ke||{});const I0={"switch-pro":"Nintendo Switch Pro gamepad for the Nintendo Switch console.","playstation-dual-sense":"Sony PlayStation DualSense gamepad for the Sony PlayStation 5 console.","playstation-dual-shock":"Sony PlayStation DualShock gamepad for the Sony PlayStation 1 through Sony PlayStation 3 consoles.","playstation-dual-shock-4":"Sony PlayStation DualShock 4 gamepad for the Sony PlayStation 4 console.","steam-deck":"Gamepad for the Valve Steam Deck handheld console.","xbox-360":"Microsoft Xbox 360 gamepad for the Microsoft Xbox 360 console. Can be wired or wireless.","xbox-wireless":"Microsoft Xbox Wireless gamepad for Microsoft Xbox One through Xbox Series X/S consoles."},So=[{gamepadModels:[K.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The capture / screenshot button is not detected by this browser."}},{gamepadModels:[K.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The share button is not detected by this browser."}},{gamepadModels:[K.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"B","button-1":"A","button-2":"Y","button-3":"X","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home","button-17":"capture"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[K.PlaystationDualSense],systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation"},gamepadModels:[K.PlaystationDualSense],systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation, the touch pad button, and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"L2-axe","axe-5":"R2-axe","axe-6":"d-pad","button-0":"square","button-1":"X","button-2":"O","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"playstation","button-13":"touch-pad","button-14":"mute","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[K.PlaystationDualSense],systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[K.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"d-pad","button-0":"A","button-1":"B","button-2":"unknown","button-3":"X","button-4":"Y","button-5":"unknown","button-6":"LB","button-7":"RB","button-8":"unknown","button-9":"unknown","button-10":"view","button-11":"menu","button-12":"guide","button-13":"L3","button-14":"R3","button-15":"LT","button-16":"RT"},systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[K.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-17":"share"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0}],lr={"Pro Controller Extended Gamepad":K.SwitchPro,"Xbox Wireless Controller Extended Gamepad":K.XboxWireless,"DualSense Wireless Controller Extended Gamepad":K.PlaystationDualSense,"Wireless Controller Extended Gamepad":K.PlaystationDualSense,"54c-ce6-Wireless Controller":K.PlaystationDualSense,"45e-b13-Xbox Wireless Controller":K.XboxWireless,"Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)":K.SwitchPro,"Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)":K.PlaystationDualSense,"Xbox Series X Controller (STANDARD GAMEPAD Vendor: 045e Product: 0b12)":K.XboxWireless,"DUALSHOCK 4 Wireless Controller Extended Gamepad":K.PlaystationDualShock4,"DUALSHOCK 4 Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 09cc)":K.PlaystationDualShock4,"54c-9cc-DUALSHOCK 4 Wireless Controller":K.PlaystationDualShock4},B0={[K.SwitchPro]:ke.Nintendo,[K.Xbox360]:ke.Microsoft,[K.XboxWireless]:ke.Microsoft,[K.PlaystationDualSense]:ke.Sony,[K.PlaystationDualShock]:ke.Sony,[K.PlaystationDualShock4]:ke.Sony,[K.SteamDeck]:ke.Valve},P0={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},Md={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},ae={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},we={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Dt={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class v{static getFirstMatch(t,n){const r=n.match(t);return r&&r.length>0&&r[1]||""}static getSecondMatch(t,n){const r=n.match(t);return r&&r.length>1&&r[2]||""}static matchAndReturnConst(t,n,r){if(t.test(n))return r}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const n=t.split(".").splice(0,2).map(r=>parseInt(r,10)||0);if(n.push(0),n[0]===10)switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const n=t.split(".").splice(0,2).map(r=>parseInt(r,10)||0);if(n.push(0),!(n[0]===1&&n[1]<5)){if(n[0]===1&&n[1]<6)return"Cupcake";if(n[0]===1&&n[1]>=6)return"Donut";if(n[0]===2&&n[1]<2)return"Eclair";if(n[0]===2&&n[1]===2)return"Froyo";if(n[0]===2&&n[1]>2)return"Gingerbread";if(n[0]===3)return"Honeycomb";if(n[0]===4&&n[1]<1)return"Ice Cream Sandwich";if(n[0]===4&&n[1]<4)return"Jelly Bean";if(n[0]===4&&n[1]>=4)return"KitKat";if(n[0]===5)return"Lollipop";if(n[0]===6)return"Marshmallow";if(n[0]===7)return"Nougat";if(n[0]===8)return"Oreo";if(n[0]===9)return"Pie"}}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,n,r=!1){const i=v.getVersionPrecision(t),s=v.getVersionPrecision(n);let o=Math.max(i,s),a=0;const u=v.map([t,n],l=>{const c=o-v.getVersionPrecision(l),d=l+new Array(c+1).join(".0");return v.map(d.split("."),m=>new Array(20-m.length).join("0")+m).reverse()});for(r&&(a=o-Math.min(i,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}}static map(t,n){const r=[];let i;if(Array.prototype.map)return Array.prototype.map.call(t,n);for(i=0;i<t.length;i+=1)r.push(n(t[i]));return r}static find(t,n){let r,i;if(Array.prototype.find)return Array.prototype.find.call(t,n);for(r=0,i=t.length;r<i;r+=1){const s=t[r];if(n(s,r))return s}}static assign(t,...n){const r=t;let i,s;if(Object.assign)return Object.assign(t,...n);for(i=0,s=n.length;i<s;i+=1){const o=n[i];typeof o=="object"&&o!==null&&Object.keys(o).forEach(u=>{r[u]=o[u]})}return t}static getBrowserAlias(t){return P0[t]}static getBrowserTypeByAlias(t){return Md[t]||""}}const Y=/version\/(\d+(\.?_?\d+)+)/i,L0=[{test:[/googlebot/i],describe(e){const t={name:"Googlebot"},n=v.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/opera/i],describe(e){const t={name:"Opera"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opr\/|opios/i],describe(e){const t={name:"Opera"},n=v.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/SamsungBrowser/i],describe(e){const t={name:"Samsung Internet for Android"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Whale/i],describe(e){const t={name:"NAVER Whale Browser"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MZBrowser/i],describe(e){const t={name:"MZ Browser"},n=v.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/focus/i],describe(e){const t={name:"Focus"},n=v.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/swing/i],describe(e){const t={name:"Swing"},n=v.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/coast/i],describe(e){const t={name:"Opera Coast"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){const t={name:"Opera Touch"},n=v.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/yabrowser/i],describe(e){const t={name:"Yandex Browser"},n=v.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/ucbrowser/i],describe(e){const t={name:"UC Browser"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Maxthon|mxios/i],describe(e){const t={name:"Maxthon"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/epiphany/i],describe(e){const t={name:"Epiphany"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/puffin/i],describe(e){const t={name:"Puffin"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sleipnir/i],describe(e){const t={name:"Sleipnir"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/k-meleon/i],describe(e){const t={name:"K-Meleon"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/micromessenger/i],describe(e){const t={name:"WeChat"},n=v.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/qqbrowser/i],describe(e){const t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=v.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/msie|trident/i],describe(e){const t={name:"Internet Explorer"},n=v.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/\sedg\//i],describe(e){const t={name:"Microsoft Edge"},n=v.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe(e){const t={name:"Microsoft Edge"},n=v.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/vivaldi/i],describe(e){const t={name:"Vivaldi"},n=v.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/seamonkey/i],describe(e){const t={name:"SeaMonkey"},n=v.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sailfish/i],describe(e){const t={name:"Sailfish"},n=v.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t}},{test:[/silk/i],describe(e){const t={name:"Amazon Silk"},n=v.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/phantom/i],describe(e){const t={name:"PhantomJS"},n=v.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/slimerjs/i],describe(e){const t={name:"SlimerJS"},n=v.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t={name:"BlackBerry"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(web|hpw)[o0]s/i],describe(e){const t={name:"WebOS Browser"},n=v.getFirstMatch(Y,e)||v.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/bada/i],describe(e){const t={name:"Bada"},n=v.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/tizen/i],describe(e){const t={name:"Tizen"},n=v.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/qupzilla/i],describe(e){const t={name:"QupZilla"},n=v.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){const t={name:"Firefox"},n=v.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/electron/i],describe(e){const t={name:"Electron"},n=v.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MiuiBrowser/i],describe(e){const t={name:"Miui"},n=v.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/chromium/i],describe(e){const t={name:"Chromium"},n=v.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/chrome|crios|crmo/i],describe(e){const t={name:"Chrome"},n=v.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/GSA/i],describe(e){const t={name:"Google Search"},n=v.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){const t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){const t={name:"Android Browser"},n=v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/playstation 4/i],describe(e){const t={name:"PlayStation 4"},n=v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/safari|applewebkit/i],describe(e){const t={name:"Safari"},n=v.getFirstMatch(Y,e);return n&&(t.version=n),t}},{test:[/.*/i],describe(e){const t=/^(.*)\/(.*) /,n=/^(.*)\/(.*)[ \t]\((.*)/,i=e.search("\\(")!==-1?n:t;return{name:v.getFirstMatch(i,e),version:v.getSecondMatch(i,e)}}}],_0=[{test:[/Roku\/DVP/],describe(e){const t=v.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:we.Roku,version:t}}},{test:[/windows phone/i],describe(e){const t=v.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:we.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){const t=v.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=v.getWindowsVersionName(t);return{name:we.Windows,version:t,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){const t={name:we.iOS},n=v.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return n&&(t.version=n),t}},{test:[/macintosh/i],describe(e){const t=v.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=v.getMacOSVersionName(t),r={name:we.MacOS,version:t};return n&&(r.versionName=n),r}},{test:[/(ipod|iphone|ipad)/i],describe(e){const t=v.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:we.iOS,version:t}}},{test(e){const t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){const t=v.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=v.getAndroidVersionName(t),r={name:we.Android,version:t};return n&&(r.versionName=n),r}},{test:[/(web|hpw)[o0]s/i],describe(e){const t=v.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:we.WebOS};return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t=v.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||v.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||v.getFirstMatch(/\bbb(\d+)/i,e);return{name:we.BlackBerry,version:t}}},{test:[/bada/i],describe(e){const t=v.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:we.Bada,version:t}}},{test:[/tizen/i],describe(e){const t=v.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:we.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:we.Linux}}},{test:[/CrOS/],describe(){return{name:we.ChromeOS}}},{test:[/PlayStation 4/],describe(e){const t=v.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:we.PlayStation4,version:t}}}],O0=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){const t=v.getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:ae.mobile,vendor:"Huawei"};return t&&(n.model=t),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:ae.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:ae.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:ae.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:ae.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:ae.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:ae.tablet}}},{test(e){const t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i);return t&&!n},describe(e){const t=v.getFirstMatch(/(ipod|iphone)/i,e);return{type:ae.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:ae.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:ae.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:ae.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:ae.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:ae.mobile,vendor:"Microsoft"}}},{test(e){const t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:ae.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:ae.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:ae.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:ae.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:ae.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:ae.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:ae.tv}}}],V0=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:Dt.Blink};const n=v.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:Dt.EdgeHTML,version:n}}},{test:[/trident/i],describe(e){const t={name:Dt.Trident},n=v.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){return e.test(/presto/i)},describe(e){const t={name:Dt.Presto},n=v.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){const t=e.test(/gecko/i),n=e.test(/like gecko/i);return t&&!n},describe(e){const t={name:Dt.Gecko},n=v.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:Dt.Blink}}},{test:[/(apple)?webkit/i],describe(e){const t={name:Dt.WebKit},n=v.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}}];class Su{constructor(t,n=!1){if(t==null||t==="")throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},n!==!0&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=v.find(L0,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=v.find(_0,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:n}=this.getOS();return t?String(n).toLowerCase()||"":n||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:n}=this.getPlatform();return t?String(n).toLowerCase()||"":n||""}parsePlatform(){this.parsedResult.platform={};const t=v.find(O0,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=v.find(V0,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return v.assign({},this.parsedResult)}satisfies(t){const n={};let r=0;const i={};let s=0;if(Object.keys(t).forEach(a=>{const u=t[a];typeof u=="string"?(i[a]=u,s+=1):typeof u=="object"&&(n[a]=u,r+=1)}),r>0){const a=Object.keys(n),u=v.find(a,c=>this.isOS(c));if(u){const c=this.satisfies(n[u]);if(c!==void 0)return c}const l=v.find(a,c=>this.isPlatform(c));if(l){const c=this.satisfies(n[l]);if(c!==void 0)return c}}if(s>0){const a=Object.keys(i),u=v.find(a,l=>this.isBrowser(l,!0));if(u!==void 0)return this.compareVersion(i[u])}}isBrowser(t,n=!1){const r=this.getBrowserName().toLowerCase();let i=t.toLowerCase();const s=v.getBrowserTypeByAlias(i);return n&&s&&(i=s.toLowerCase()),i===r}compareVersion(t){let n=[0],r=t,i=!1;const s=this.getBrowserVersion();if(typeof s=="string")return t[0]===">"||t[0]==="<"?(r=t.substr(1),t[1]==="="?(i=!0,r=t.substr(2)):n=[],t[0]===">"?n.push(1):n.push(-1)):t[0]==="="?r=t.substr(1):t[0]==="~"&&(i=!0,r=t.substr(1)),n.indexOf(v.compareVersions(s,r,i))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,n=!1){return this.isBrowser(t,n)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(n=>this.is(n))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class R0{static getParser(t,n=!1){if(typeof t!="string")throw new Error("UserAgent should be a string");return new Su(t,n)}static parse(t){return new Su(t).getResult()}static get BROWSER_MAP(){return Md}static get ENGINE_MAP(){return Dt}static get OS_MAP(){return we}static get PLATFORMS_MAP(){return ae}}const Ir=R0.getParser(navigator.userAgent);function cr(){return{browserVersion:Ir.getBrowserVersion(),browserName:Ir.getBrowserName(),osName:Ir.getOSName(),osVersion:Ir.getOSVersion()}}function W0(e,t){return!!e.some(n=>A.jsonEquals(n,t))}function $u(e){return Dc(e,(t,n)=>({key:A.isString(t)?t.toLowerCase():t,value:n}))}function Gs({gamepad:e,layouts:t=So,gamepadModelMap:n=lr,systemVersions:r=cr()}){const i=(A.isString(e)?e:e?.deviceName)||"",{gamepadModel:s}=Ht({gamepad:i,gamepadModelMap:n}),o=s?t.filter(u=>u.gamepadModels.includes(s)):[];return o.length<=1?o[0]:o.reduce((u,l)=>{const c=U0(r,l);return c>u.score?{score:c,layout:l}:u},{layout:void 0,score:-1}).layout}function U0(e,t){const n=t.systemVersions.map(r=>Object.values(tt(e,(s,o)=>r[s].toLowerCase()===o.toLowerCase())).reduce((s,o)=>s+(o?1:0),0));return Math.max(...n)}function Ht({gamepad:e,gamepadModelMap:t=lr,gamepadBrandMap:n=B0}){const r=(typeof e=="string"?e:e?.deviceName)||void 0,i=r&&$u(t)[r.toLowerCase()]||void 0;return{gamepadModel:i,gamepadBrand:i&&$u(n)[i]||void 0,gamepadModelDescription:i&&I0[i]||void 0}}function G0(e,t){const{gamepadModel:n}=Ht({gamepad:e.deviceName,gamepadModelMap:t});return{inputMappings:{},gamepadModels:n?[n]:[],systemVersions:[cr()],notes:void 0}}const ci=Ii()("modal-close"),$o=Ii()("selected-gamepad-index-change");async function q0({dsn:e,releaseEnv:t,releaseName:n,sentryConfigOverrides:r,createUniversalContext:i,isDev:s}){const o=await uo(()=>import("./index-CegS22PY.js"),[]);return await Wy({dsn:e,releaseEnv:t,releaseName:n,sentryConfigOverrides:r,createUniversalContext:i,sentryDep:o,executionEnv:sr.Browser,isDev:s}),o}const j0={releaseName:typeof VITE_RELEASE_NAME>"u"?"unknown":VITE_RELEASE_NAME},Fu=window.location.hostname==="localhost";async function z0(){await q0({dsn:"https://5b5d58b459305bfcd595aabfd356136c@o4506447710060544.ingest.sentry.io/4506479530737664",isDev:Fu,releaseEnv:Fu?"dev":"prod",releaseName:j0.releaseName})}function xu({layouts:e,models:t},n){const r=e.filter(s=>{const o=!!So.some(u=>A.jsonEquals(u,s)),a=n?!!n.layouts.some(u=>A.jsonEquals(u,s)):!1;return!o&&!a}),i=Ac(t,(s,o)=>{const a=!(s in lr)||lr[s]!==o;return(n?!(s in n.models)||n.models[s]!==o:!0)&&a});return{layouts:r,models:i}}function K0(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var An=K0();function H0(){try{if(!An||!An.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function Fo(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(s){if(s.name!=="TypeError")throw s;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<e.length;i+=1)r.append(e[i]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const M=Promise;function H(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function an(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function ht(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function xo(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const qs="local-forage-detect-blob-support";let Br;const Ve={},Z0=Object.prototype.toString,Dr="readonly",Oi="readwrite";function Y0(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function J0(e){return new M(function(t){var n=e.transaction(qs,Oi),r=Fo([""]);n.objectStore(qs).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);t(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function Q0(e){return typeof Br=="boolean"?M.resolve(Br):J0(e).then(function(t){return Br=t,Br})}function di(e){var t=Ve[e.name],n={};n.promise=new M(function(r,i){n.resolve=r,n.reject=i}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function js(e){var t=Ve[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function zs(e,t){var n=Ve[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function kd(e,t){return new M(function(n,r){if(Ve[e.name]=Ve[e.name]||Pd(),e.db)if(t)di(e),e.db.close();else return n(e.db);var i=[e.name];t&&i.push(e.version);var s=An.open.apply(An,i);t&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(e.storeName),o.oldVersion<=1&&a.createObjectStore(qs)}catch(u){if(u.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw u}}),s.onerror=function(o){o.preventDefault(),r(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},n(o),js(e)}})}function To(e){return kd(e,!1)}function Mo(e){return kd(e,!0)}function Nd(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||n){if(n){var s=e.db.version+1;s>e.version&&(e.version=s)}return!0}return!1}function X0(e){return new M(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var s=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:s,type:e.type})},r.readAsBinaryString(e)})}function Id(e){var t=Y0(atob(e.data));return Fo([t],{type:e.type})}function Bd(e){return e&&e.__local_forage_encoded_blob}function ew(e){var t=this,n=t._initReady().then(function(){var r=Ve[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return an(n,e,e),n}function tw(e){di(e);for(var t=Ve[e.name],n=t.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,To(e).then(i=>(e.db=i,Nd(e)?Mo(e):i)).then(i=>{e.db=t.db=i;for(var s=0;s<n.length;s++)n[s]._dbInfo.db=i}).catch(i=>{throw zs(e,i),i})}function mt(e,t,n,r){r===void 0&&(r=1);try{var i=e.db.transaction(e.storeName,t);n(null,i)}catch(s){if(r>0&&(!e.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return M.resolve().then(()=>{if(!e.db||s.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Mo(e)}).then(()=>tw(e).then(function(){mt(e,t,n,r-1)})).catch(n);n(s)}}function Pd(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function nw(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=Ve[n.name];i||(i=Pd(),Ve[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=ew);var s=[];function o(){return M.resolve()}for(var a=0;a<i.forages.length;a++){var u=i.forages[a];u!==t&&s.push(u._initReady().catch(o))}var l=i.forages.slice(0);return M.all(s).then(function(){return n.db=i.db,To(n)}).then(function(c){return n.db=c,Nd(n,t._defaultConfig.version)?Mo(n):c}).then(function(c){n.db=i.db=c,t._dbInfo=n;for(var d=0;d<l.length;d++){var m=l[d];m!==t&&(m._dbInfo.db=n.db,m._dbInfo.version=n.version)}})}function rw(e,t){var n=this;e=ht(e);var r=new M(function(i,s){n.ready().then(function(){mt(n._dbInfo,Dr,function(o,a){if(o)return s(o);try{var u=a.objectStore(n._dbInfo.storeName),l=u.get(e);l.onsuccess=function(){var c=l.result;c===void 0&&(c=null),Bd(c)&&(c=Id(c)),i(c)},l.onerror=function(){s(l.error)}}catch(c){s(c)}})}).catch(s)});return H(r,t),r}function iw(e,t){var n=this,r=new M(function(i,s){n.ready().then(function(){mt(n._dbInfo,Dr,function(o,a){if(o)return s(o);try{var u=a.objectStore(n._dbInfo.storeName),l=u.openCursor(),c=1;l.onsuccess=function(){var d=l.result;if(d){var m=d.value;Bd(m)&&(m=Id(m));var p=e(m,d.key,c++);p!==void 0?i(p):d.continue()}else i()},l.onerror=function(){s(l.error)}}catch(d){s(d)}})}).catch(s)});return H(r,t),r}function sw(e,t,n){var r=this;e=ht(e);var i=new M(function(s,o){var a;r.ready().then(function(){return a=r._dbInfo,Z0.call(t)==="[object Blob]"?Q0(a.db).then(function(u){return u?t:X0(t)}):t}).then(function(u){mt(r._dbInfo,Oi,function(l,c){if(l)return o(l);try{var d=c.objectStore(r._dbInfo.storeName);u===null&&(u=void 0);var m=d.put(u,e);c.oncomplete=function(){u===void 0&&(u=null),s(u)},c.onabort=c.onerror=function(){var p=m.error?m.error:m.transaction.error;o(p)}}catch(p){o(p)}})}).catch(o)});return H(i,n),i}function ow(e,t){var n=this;e=ht(e);var r=new M(function(i,s){n.ready().then(function(){mt(n._dbInfo,Oi,function(o,a){if(o)return s(o);try{var u=a.objectStore(n._dbInfo.storeName),l=u.delete(e);a.oncomplete=function(){i()},a.onerror=function(){s(l.error)},a.onabort=function(){var c=l.error?l.error:l.transaction.error;s(c)}}catch(c){s(c)}})}).catch(s)});return H(r,t),r}function aw(e){var t=this,n=new M(function(r,i){t.ready().then(function(){mt(t._dbInfo,Oi,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.clear();o.oncomplete=function(){r()},o.onabort=o.onerror=function(){var l=u.error?u.error:u.transaction.error;i(l)}}catch(l){i(l)}})}).catch(i)});return H(n,e),n}function uw(e){var t=this,n=new M(function(r,i){t.ready().then(function(){mt(t._dbInfo,Dr,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.count();u.onsuccess=function(){r(u.result)},u.onerror=function(){i(u.error)}}catch(l){i(l)}})}).catch(i)});return H(n,e),n}function lw(e,t){var n=this,r=new M(function(i,s){if(e<0){i(null);return}n.ready().then(function(){mt(n._dbInfo,Dr,function(o,a){if(o)return s(o);try{var u=a.objectStore(n._dbInfo.storeName),l=!1,c=u.openKeyCursor();c.onsuccess=function(){var d=c.result;if(!d){i(null);return}e===0||l?i(d.key):(l=!0,d.advance(e))},c.onerror=function(){s(c.error)}}catch(d){s(d)}})}).catch(s)});return H(r,t),r}function cw(e){var t=this,n=new M(function(r,i){t.ready().then(function(){mt(t._dbInfo,Dr,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.openKeyCursor(),l=[];u.onsuccess=function(){var c=u.result;if(!c){r(l);return}l.push(c.key),c.continue()},u.onerror=function(){i(u.error)}}catch(c){i(c)}})}).catch(i)});return H(n,e),n}function dw(e,t){t=xo.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;if(!e.name)i=M.reject("Invalid arguments");else{const o=e.name===n.name&&r._dbInfo.db?M.resolve(r._dbInfo.db):To(e).then(a=>{const u=Ve[e.name],l=u.forages;u.db=a;for(var c=0;c<l.length;c++)l[c]._dbInfo.db=a;return a});e.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(e.storeName))return;const u=a.version+1;di(e);const l=Ve[e.name],c=l.forages;a.close();for(let m=0;m<c.length;m++){const p=c[m];p._dbInfo.db=null,p._dbInfo.version=u}return new M((m,p)=>{const w=An.open(e.name,u);w.onerror=D=>{w.result.close(),p(D)},w.onupgradeneeded=()=>{var D=w.result;D.deleteObjectStore(e.storeName)},w.onsuccess=()=>{const D=w.result;D.close(),m(D)}}).then(m=>{l.db=m;for(let p=0;p<c.length;p++){const w=c[p];w._dbInfo.db=m,js(w._dbInfo)}}).catch(m=>{throw(zs(e,m)||M.resolve()).catch(()=>{}),m})}):i=o.then(a=>{di(e);const u=Ve[e.name],l=u.forages;a.close();for(var c=0;c<l.length;c++){const m=l[c];m._dbInfo.db=null}return new M((m,p)=>{var w=An.deleteDatabase(e.name);w.onerror=()=>{const D=w.result;D&&D.close(),p(w.error)},w.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},w.onsuccess=()=>{const D=w.result;D&&D.close(),m(D)}}).then(m=>{u.db=m;for(var p=0;p<l.length;p++){const w=l[p];js(w._dbInfo)}}).catch(m=>{throw(zs(e,m)||M.resolve()).catch(()=>{}),m})})}return H(i,t),i}var fw={_driver:"asyncStorage",_initStorage:nw,_support:H0(),iterate:iw,getItem:rw,setItem:sw,removeItem:ow,clear:aw,length:uw,key:lw,keys:cw,dropInstance:dw};function hw(){return typeof openDatabase=="function"}var Ft="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",mw="~~local_forage_type~",Tu=/^~~local_forage_type~([^~]+)~/,fi="__lfsc__:",Ks=fi.length,ko="arbf",Hs="blob",Ld="si08",_d="ui08",Od="uic8",Vd="si16",Rd="si32",Wd="ur16",Ud="ui32",Gd="fl32",qd="fl64",Mu=Ks+ko.length,ku=Object.prototype.toString;function jd(e){var t=e.length*.75,n=e.length,r,i=0,s,o,a,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=new ArrayBuffer(t),c=new Uint8Array(l);for(r=0;r<n;r+=4)s=Ft.indexOf(e[r]),o=Ft.indexOf(e[r+1]),a=Ft.indexOf(e[r+2]),u=Ft.indexOf(e[r+3]),c[i++]=s<<2|o>>4,c[i++]=(o&15)<<4|a>>2,c[i++]=(a&3)<<6|u&63;return l}function Zs(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=Ft[t[r]>>2],n+=Ft[(t[r]&3)<<4|t[r+1]>>4],n+=Ft[(t[r+1]&15)<<2|t[r+2]>>6],n+=Ft[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function pw(e,t){var n="";if(e&&(n=ku.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&ku.call(e.buffer)==="[object ArrayBuffer]")){var r,i=fi;e instanceof ArrayBuffer?(r=e,i+=ko):(r=e.buffer,n==="[object Int8Array]"?i+=Ld:n==="[object Uint8Array]"?i+=_d:n==="[object Uint8ClampedArray]"?i+=Od:n==="[object Int16Array]"?i+=Vd:n==="[object Uint16Array]"?i+=Wd:n==="[object Int32Array]"?i+=Rd:n==="[object Uint32Array]"?i+=Ud:n==="[object Float32Array]"?i+=Gd:n==="[object Float64Array]"?i+=qd:t(new Error("Failed to get type for BinaryArray"))),t(i+Zs(r))}else if(n==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=mw+e.type+"~"+Zs(this.result);t(fi+Hs+o)},s.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(o){console.error("Couldn't convert value into a JSON string: ",e),t(null,o)}}function gw(e){if(e.substring(0,Ks)!==fi)return JSON.parse(e);var t=e.substring(Mu),n=e.substring(Ks,Mu),r;if(n===Hs&&Tu.test(t)){var i=t.match(Tu);r=i[1],t=t.substring(i[0].length)}var s=jd(t);switch(n){case ko:return s;case Hs:return Fo([s],{type:r});case Ld:return new Int8Array(s);case _d:return new Uint8Array(s);case Od:return new Uint8ClampedArray(s);case Vd:return new Int16Array(s);case Wd:return new Uint16Array(s);case Rd:return new Int32Array(s);case Ud:return new Uint32Array(s);case Gd:return new Float32Array(s);case qd:return new Float64Array(s);default:throw new Error("Unkown type: "+n)}}var No={serialize:pw,deserialize:gw,stringToBuffer:jd,bufferToString:Zs};function zd(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function yw(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var i=new M(function(s,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(a){return o(a)}n.db.transaction(function(a){zd(a,n,function(){t._dbInfo=n,s()},function(u,l){o(l)})},o)});return n.serializer=No,i}function Nt(e,t,n,r,i,s){e.executeSql(n,r,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(u,l){l.rows.length?s(u,a):zd(u,t,function(){u.executeSql(n,r,i,s)},s)},s):s(o,a)},s)}function ww(e,t){var n=this;e=ht(e);var r=new M(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Nt(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],function(u,l){var c=l.rows.length?l.rows.item(0).value:null;c&&(c=o.serializer.deserialize(c)),i(c)},function(u,l){s(l)})})}).catch(s)});return H(r,t),r}function vw(e,t){var n=this,r=new M(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Nt(a,o,`SELECT * FROM ${o.storeName}`,[],function(u,l){for(var c=l.rows,d=c.length,m=0;m<d;m++){var p=c.item(m),w=p.value;if(w&&(w=o.serializer.deserialize(w)),w=e(w,p.key,m+1),w!==void 0){i(w);return}}i()},function(u,l){s(l)})})}).catch(s)});return H(r,t),r}function Kd(e,t,n,r){var i=this;e=ht(e);var s=new M(function(o,a){i.ready().then(function(){t===void 0&&(t=null);var u=t,l=i._dbInfo;l.serializer.serialize(t,function(c,d){d?a(d):l.db.transaction(function(m){Nt(m,l,`INSERT OR REPLACE INTO ${l.storeName} (key, value) VALUES (?, ?)`,[e,c],function(){o(u)},function(p,w){a(w)})},function(m){if(m.code===m.QUOTA_ERR){if(r>0){o(Kd.apply(i,[e,u,n,r-1]));return}a(m)}})})}).catch(a)});return H(s,n),s}function Dw(e,t,n){return Kd.apply(this,[e,t,n,1])}function bw(e,t){var n=this;e=ht(e);var r=new M(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Nt(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],function(){i()},function(u,l){s(l)})})}).catch(s)});return H(r,t),r}function Ew(e){var t=this,n=new M(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Nt(o,s,`DELETE FROM ${s.storeName}`,[],function(){r()},function(a,u){i(u)})})}).catch(i)});return H(n,e),n}function Aw(e){var t=this,n=new M(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Nt(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,u){var l=u.rows.item(0).c;r(l)},function(a,u){i(u)})})}).catch(i)});return H(n,e),n}function Cw(e,t){var n=this,r=new M(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Nt(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],function(u,l){var c=l.rows.length?l.rows.item(0).key:null;i(c)},function(u,l){s(l)})})}).catch(s)});return H(r,t),r}function Sw(e){var t=this,n=new M(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Nt(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,u){for(var l=[],c=0;c<u.rows.length;c++)l.push(u.rows.item(c).key);r(l)},function(a,u){i(u)})})}).catch(i)});return H(n,e),n}function $w(e){return new M(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);t({db:e,storeNames:o})},function(i,s){n(s)})},function(r){n(r)})})}function Fw(e,t){t=xo.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;return e.name?i=new M(function(s){var o;e.name===n.name?o=r._dbInfo.db:o=openDatabase(e.name,"","",0),e.storeName?s({db:o,storeNames:[e.storeName]}):s($w(o))}).then(function(s){return new M(function(o,a){s.db.transaction(function(u){function l(p){return new M(function(w,D){u.executeSql(`DROP TABLE IF EXISTS ${p}`,[],function(){w()},function(T,F){D(F)})})}for(var c=[],d=0,m=s.storeNames.length;d<m;d++)c.push(l(s.storeNames[d]));M.all(c).then(function(){o()}).catch(function(p){a(p)})},function(u){a(u)})})}):i=M.reject("Invalid arguments"),H(i,t),i}var xw={_driver:"webSQLStorage",_initStorage:yw,_support:hw(),iterate:vw,getItem:ww,setItem:Dw,removeItem:bw,clear:Ew,length:Aw,key:Cw,keys:Sw,dropInstance:Fw};function Tw(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Hd(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function Mw(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function kw(){return!Mw()||localStorage.length>0}function Nw(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=Hd(e,t._defaultConfig),kw()?(t._dbInfo=n,n.serializer=No,M.resolve()):M.reject()}function Iw(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(r)===0&&localStorage.removeItem(s)}});return H(n,e),n}function Bw(e,t){var n=this;e=ht(e);var r=n.ready().then(function(){var i=n._dbInfo,s=localStorage.getItem(i.keyPrefix+e);return s&&(s=i.serializer.deserialize(s)),s});return H(r,t),r}function Pw(e,t){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,u=1,l=0;l<a;l++){var c=localStorage.key(l);if(c.indexOf(s)===0){var d=localStorage.getItem(c);if(d&&(d=i.serializer.deserialize(d)),d=e(d,c.substring(o),u++),d!==void 0)return d}}});return H(r,t),r}function Lw(e,t){var n=this,r=n.ready().then(function(){var i=n._dbInfo,s;try{s=localStorage.key(e)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return H(r,t),r}function _w(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(r.keyPrefix)===0&&s.push(a.substring(r.keyPrefix.length))}return s});return H(n,e),n}function Ow(e){var t=this,n=t.keys().then(function(r){return r.length});return H(n,e),n}function Vw(e,t){var n=this;e=ht(e);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return H(r,t),r}function Rw(e,t,n){var r=this;e=ht(e);var i=r.ready().then(function(){t===void 0&&(t=null);var s=t;return new M(function(o,a){var u=r._dbInfo;u.serializer.serialize(t,function(l,c){if(c)a(c);else try{localStorage.setItem(u.keyPrefix+e,l),o(s)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(d),a(d)}})})});return H(i,n),i}function Ww(e,t){if(t=xo.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,i;return e.name?i=new M(function(s){e.storeName?s(Hd(e,r._defaultConfig)):s(`${e.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=M.reject("Invalid arguments"),H(i,t),i}var Uw={_driver:"localStorageWrapper",_initStorage:Nw,_support:Tw(),iterate:Pw,getItem:Bw,setItem:Rw,removeItem:Vw,clear:Iw,length:Ow,key:Lw,keys:_w,dropInstance:Ww};const Gw=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),qw=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(Gw(e[r],t))return!0;r++}return!1},Zd=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Vn={},Nu={},pn={INDEXEDDB:fw,WEBSQL:xw,LOCALSTORAGE:Uw},jw=[pn.INDEXEDDB._driver,pn.WEBSQL._driver,pn.LOCALSTORAGE._driver],Kr=["dropInstance"],ys=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Kr),zw={description:"",driver:jw.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Kw(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function ws(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(Zd(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class Io{constructor(t){for(let n in pn)if(pn.hasOwnProperty(n)){const r=pn[n],i=r._driver;this[n]=i,Vn[i]||this.defineDriver(r)}this._defaultConfig=ws({},zw),this._config=ws({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const i=new M(function(s,o){try{const a=t._driver,u=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){o(u);return}const l=ys.concat("_initStorage");for(let m=0,p=l.length;m<p;m++){const w=l[m];if((!qw(Kr,w)||t[w])&&typeof t[w]!="function"){o(u);return}}(function(){const m=function(p){return function(){const w=new Error(`Method ${p} is not implemented by the current driver`),D=M.reject(w);return H(D,arguments[arguments.length-1]),D}};for(let p=0,w=Kr.length;p<w;p++){const D=Kr[p];t[D]||(t[D]=m(D))}})();const d=function(m){Vn[a]&&console.info(`Redefining LocalForage driver: ${a}`),Vn[a]=t,Nu[a]=m,s()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,o):d(!!t._support):d(!0)}catch(a){o(a)}});return an(i,n,r),i}driver(){return this._driver||null}getDriver(t,n,r){const i=Vn[t]?M.resolve(Vn[t]):M.reject(new Error("Driver not found."));return an(i,n,r),i}getSerializer(t){const n=M.resolve(No);return an(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return an(r,t,t),r}setDriver(t,n,r){const i=this;Zd(t)||(t=[t]);const s=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(c){return i._extend(c),o(),i._ready=i._initStorage(i._config),i._ready}function u(c){return function(){let d=0;function m(){for(;d<c.length;){let w=c[d];return d++,i._dbInfo=null,i._ready=null,i.getDriver(w).then(a).catch(m)}o();const p=new Error("No available storage method found.");return i._driverSet=M.reject(p),i._driverSet}return m()}}const l=this._driverSet!==null?this._driverSet.catch(()=>M.resolve()):M.resolve();return this._driverSet=l.then(()=>{const c=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(c).then(d=>{i._driver=d._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=u(s)})}).catch(()=>{o();const c=new Error("No available storage method found.");return i._driverSet=M.reject(c),i._driverSet}),an(this._driverSet,n,r),this._driverSet}supports(t){return!!Nu[t]}_extend(t){ws(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,i=t.length;r<i;r++){const s=t[r];this.supports(s)&&n.push(s)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=ys.length;t<n;t++)Kw(this,ys[t])}createInstance(t){return new Io(t)}}const Hw=new Io,Zw=Hw,Xt=Zw.createInstance({name:"gamepad-type",storeName:"gamepad-type",description:"For storing user-entered gamepad information."}),Yd="saved-layouts",Jd="saved-types",Qd="submitted-changes";async function Yw(){await Xt.clear()}async function Iu(){return await Xt.getItem(Yd)??So}async function Jw(e){await Xt.setItem(Yd,e)}async function Bu(){const e=await Xt.getItem(Jd)??{};return{...lr,...e}}async function Pu(e){await Xt.setItem(Jd,e)}async function Qw(){return await Xt.getItem(Qd)||void 0}async function Xw(e){await Xt.setItem(Qd,e)}const Pr=cr();function ev(e,t,n){return window.addEventListener(e,t,n),()=>{window.removeEventListener(e,t,n)}}const tv="#ffaaaa",nv={[ke.Microsoft]:"#aaff97",[ke.Nintendo]:"#ffaaaa",[ke.Sony]:"#86e2ff",[ke.Valve]:"#ffaaaa"};function Cn(e){return A.isEnumValue(e,ke)?nv[e]:tv}const Lu=Je()({tagName:"vir-gamepad-axe",cssVars:{"vir-gamepad-axe-color":Cn(void 0)},styles:({cssVars:e})=>_`
        :host {
            display: block;
            width: 200px;
            border: 2px solid ${e["vir-gamepad-axe-color"].value};
            text-align: center;
            position: relative;
            background-color: white;
        }

        .progress {
            z-index: 1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            right: 50%;
            border: 1px solid ${e["vir-gamepad-axe-color"].value};
            background-color: ${e["vir-gamepad-axe-color"].value};
        }

        p {
            ${vr};
            position: relative;
            z-index: 10;
        }
    `,render({inputs:e,host:t}){t.style.setProperty("--vir-gamepad-axe-color",Cn(e.gamepadBrand));const n=e.gamepadInput.value>=0?{left:50,right:50-e.gamepadInput.value*50}:{left:50+e.gamepadInput.value*50,right:50},r=_`
            left: ${n.left}%;
            right: ${n.right}%;
        `,i=e.gamepadLayout?.inputMappings[e.gamepadInput.inputName]||e.gamepadInput.inputName;return C`
            <div class="progress" style=${r}></div>
            <p class="axe-words">${i}</p>
            <p>${e.gamepadInput.value.toFixed(1)}</p>
        `}}),_u=Je()({tagName:"vir-gamepad-button",cssVars:{"vir-gamepad-button-button-size":"75px","vir-gamepad-button-color":Cn(void 0)},styles:({cssVars:e})=>_`
        :host {
            display: flex;
            position: relative;
            height: ${e["vir-gamepad-button-button-size"].value};
            width: ${e["vir-gamepad-button-button-size"].value};
            border: 2px solid ${e["vir-gamepad-button-color"].value};
            box-sizing: border-box;
            border-radius: 50%;
        }

        .button-fill-wrapper {
            box-sizing: border-box;
            position: absolute;
            top: -1px;
            left: -1px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .button-fill {
            box-sizing: border-box;
            width: 0%;
            height: 0%;
            pointer-events: none;
            opacity: 1;
            border-radius: 50%;
            background-color: ${e["vir-gamepad-button-color"].value};
            border: 2px solid ${e["vir-gamepad-button-color"].value};
            z-index: 1;
        }

        .no-fill {
            opacity: 0;
        }

        .button-name {
            z-index: 4;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    `,render({inputs:e,host:t}){if(e.gamepadInput.inputType!==lt.Button)throw new Error(`
                Incorrect input type '${e.gamepadInput.inputType}': expected
                '${lt.Button}'.
            `);t.style.setProperty("--vir-gamepad-button-color",Cn(e.gamepadBrand));const n=_`
            width: ${e.gamepadInput.value*100}%;
            height: ${e.gamepadInput.value*100}%;
        `,r=e.gamepadLayout?.inputMappings[e.gamepadInput.inputName]||e.gamepadInput.inputName;return C`
            <div class="button-fill-wrapper">
                <div
                    class="button-fill ${nr({"no-fill":!e.gamepadInput.value})}"
                    style=${n}
                ></div>
            </div>
            <div class="button-name">${r}</div>
        `}}),At=Je()({tagName:"vir-gamepad-input",hostClasses:{"vir-gamepad-input-circle":({inputs:e})=>e.gamepadInput.inputType===lt.Button},styles:({hostClasses:e})=>_`
        :host {
            display: flex;
        }

        ${e["vir-gamepad-input-circle"].selector} {
            border-radius: 50%;
        }
    `,render({inputs:e}){return e.gamepadInput.inputType===lt.Axe?C`
                <${Lu.assign(e)}></${Lu}>
            `:e.gamepadInput.inputType===lt.Button?C`
                <${_u.assign(e)}></${_u}>
            `:`Invalid gamepad type received: ${e.gamepadInput.inputType}`}}),Hr=Je()({tagName:"vir-gamepad-inputs",events:{gamepadInputClick:Ae()},styles:_`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .inputs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        ${At} {
            cursor: pointer;
            border: 1px solid transparent;
        }

        ${At}:hover {
            border-color: black;
        }

        .prefix.warning {
            color: red;
        }

        .prefix {
            font-weight: bold;
        }

        .prefix.info {
            color: dodgerblue;
        }
    `,render({inputs:e,dispatch:t,events:n}){const{gamepadBrand:r}=Ht({gamepad:e.gamepad.deviceName,gamepadModelMap:e.gamepadModelMap}),i=e.gamepad.deviceDetails.buttons.map(a=>C`
                <${At.assign({gamepadBrand:r,gamepadInput:a,gamepadLayout:e.gamepadLayout})}
                    ${U("click",()=>{t(new n.gamepadInputClick({details:a,deviceKey:e.gamepad.deviceKey,deviceName:e.gamepad.deviceName,deviceType:e.gamepad.deviceType,inputName:a.inputName,inputValue:a.value}))})}
                ></${At}>
            `),s=e.gamepad.deviceDetails.axes.map(a=>C`
                <${At.assign({gamepadBrand:r,gamepadInput:a,gamepadLayout:e.gamepadLayout})}
                    ${U("click",()=>{t(new n.gamepadInputClick({details:a,deviceKey:e.gamepad.deviceKey,deviceName:e.gamepad.deviceName,deviceType:e.gamepad.deviceType,inputName:a.inputName,inputValue:a.value}))})}
                ></${At}>
            `),o=e.gamepadLayout?.notes?j(e.gamepadLayout.notes).map(a=>{const u=e.gamepadLayout?.notes?.[a];return u?C`
                      <p class="notes">
                          <span class="prefix ${a}">${a==="info"?"Note":"WARNING"}:</span>
                          ${u}
                      </p>
                  `:""}):"";return C`
            ${o}
            <div class="inputs">${i}</div>
            <div class="inputs">${s}</div>
        `}});function Bo(e){return e.split("-").map(t=>Sc(t)).join(" ")}const Ou="create new gamepad model",gn=Je()({tagName:"vir-gamepad-name",cssVars:{"vir-gamepad-name-gamepad-brand-color":Cn(void 0)},events:{editMappingsClick:Ae(),gamepadModelOverride:Ae(),createNewModel:Ae()},styles:({cssVars:e})=>_`
        :host {
            border-radius: 24px;
            padding: 32px;
            gap: 16px;
            display: flex;
            flex-direction: column;
            background-color: ${e["vir-gamepad-name-gamepad-brand-color"].value};
            border: 2px solid ${e["vir-gamepad-name-gamepad-brand-color"].value};
            background-image: linear-gradient(
                hsla(0, 0%, 100%, 0.8),
                hsla(0, 0%, 100%, 0) 75px,
                hsla(0, 0%, 0%, 0.01) 75px,
                hsla(0, 0%, 100%, 0)
            );
            text-shadow: 0 2px 4px hsla(0, 0%, 100%, 0.7);
            box-shadow: inset 0 5px 20px hsla(0, 0%, 100%, 0.9);
        }

        h2,
        p {
            ${vr}
        }

        h2 {
            font-size: 2em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .subtitle {
            color: #575757;
        }

        .subtitle:hover {
            color: black;
        }

        button {
            ${Ne};
            align-self: center;
            transition: 100ms;
            border: 1px solid ${e["vir-gamepad-name-gamepad-brand-color"].value};
            background-color: white;
            padding: 4px 8px;
            font: inherit;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover,
        button:active {
            color: ${e["vir-gamepad-name-gamepad-brand-color"].value};
            background-color: black;
        }

        select {
            ${Ne};
            flex-grow: 1;
            padding: 2px 4px;
            cursor: pointer;
            width: 0;
            font: inherit;
        }
    `,render({inputs:e,host:t,dispatch:n,events:r}){const{gamepadBrand:i,gamepadModel:s,gamepadModelDescription:o}=Ht({gamepad:e.gamepad,gamepadModelMap:e.gamepadModelMap});t.style.setProperty("--vir-gamepad-name-gamepad-brand-color",Cn(i));const a=Array.from(new Set([...Qe(K),...jt(e.gamepadModelMap)])),u=C`
            <select
                ${Hg(l=>{Ye.instanceOf(l,HTMLSelectElement),s&&(l.value=s)})}
                ${U("change",l=>{const c=l.currentTarget;Ye.instanceOf(c,HTMLSelectElement);const d=c.value;d===Ou?(n(new r.createNewModel),s?c.value=s:c.value=""):n(new r.gamepadModelOverride(d))})}
            >
                ${a.map(l=>C`
                        <option ?selected=${s===l} value=${l}>
                            ${Bo(l)}
                        </option>
                    `)}
                <option value=${Ou}>&gt; Enter New Gamepad Model</option>
            </select>
        `;return C`
            <h2>
                <span>${e.gamepadIndex}:</span>
                ${u}
            </h2>
            <p class="subtitle">
                "${e.gamepad.deviceName}"
                <br />
                <br />
                ${o}
            </p>
            <button
                ${U("click",()=>{n(new r.editMappingsClick)})}
            >
                Edit Mappings
            </button>
        `}}),Vu=Je()({tagName:"vir-gamepad",styles:_`
        :host {
            display: flex;
            background-color: white;
            color: black;
            gap: 16px;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        ${gn} {
            flex-grow: 1;
            flex-basis: 600px;
        }

        ${Hr} {
            flex-grow: 1000000;
            flex-shrink: 1;
            flex-basis: 300px;
        }
    `,render({inputs:e}){return C`
            <${gn.assign({gamepad:e.gamepad,gamepadIndex:e.gamepadIndex,gamepadModelMap:e.gamepadModelMap})}></${gn}>
            <${Hr.assign({gamepad:e.gamepad,gamepadLayout:e.gamepadLayout,gamepadModelMap:e.gamepadModelMap})}></${Hr}>
        `}}),hi=Je()({tagName:"vir-modal",styles:_`
        .background {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.8);
        }

        .modal-wrapper {
            background-color: white;
            border: 4px solid #ddd;
            border-radius: 16px;
            padding: 0 0 32px 16px;
        }

        h1 {
            ${vr};
            font-size: 1.8em;
            margin-top: 8px;
            margin-bottom: 16px;
            flex-grow: 1;
        }

        .slot-wrapper {
            margin: 0 32px 16px 16px;
        }

        .close-x {
            ${Ne};
            padding: 2px;
            font-family: monospace;
            color: #aaa;
            cursor: pointer;
            transition: 100ms;
        }

        .close-x:hover {
            color: black;
        }

        header {
            display: flex;
            align-items: flex-start;
        }
    `,render({inputs:e,dispatch:t}){return C`
            <div
                class="background"
                ${U("mousedown",n=>{n.target===n.currentTarget&&t(new ci)})}
            >
                <div class="modal-wrapper">
                    <header>
                        <h1>${e.modalTitle}</h1>
                        <button
                            class="close-x"
                            ${U("click",()=>{t(new ci)})}
                        >
                            <${J.assign({icon:$d})}></${J}>
                        </button>
                    </header>
                    <div class="slot-wrapper">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `}}),vs=Je()({tagName:"vir-create-new-type-modal",events:{newModelCreate:Ae()},styles:_`
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
        }

        select {
            ${Ne};
            flex-grow: 1;
            cursor: pointer;
            padding: 2px 4px;
            font: inherit;
            margin: 2px 0;
        }

        .selected-gamepad {
            display: flex;
            flex-direction: column;
        }

        .new-model-name {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        ${qe} {
            width: 100%;
        }
    `,stateInitStatic:{newModelName:""},init({host:e}){setTimeout(async()=>{await vd();const t=e.shadowRoot.querySelector(qe.tagName);t&&(Ye.instanceOf(t,qe),t.shadowRoot.querySelector("input")?.select())},0)},render({inputs:e,dispatch:t,state:n,updateState:r,events:i}){const s=e.gamepadDevices[e.selectedGamepadIndex];if(!s)return C`
                No selected gamepad.
            `;const o=C`
            <select
                ${U("change",c=>{const d=c.currentTarget;Ye.instanceOf(d,HTMLSelectElement);const m=Number(d.value);isNaN(m)||t(new $o(m))})}
            >
                ${e.gamepadDevices.map((c,d)=>C`
                        <option
                            ?selected=${e.selectedGamepadIndex===d}
                            value=${String(d)}
                            title=${c.deviceName}
                        >
                            &nbsp;${d}: "${c.deviceName}"
                        </option>
                    `)}
            </select>
        `,{gamepadModel:a}=Ht({gamepad:s}),u=C`
            <p>Current model: ${a?Bo(a):"unknown"}</p>
        `,l=C`
            <${qe.assign({placeholder:"Enter a new model name",value:n.newModelName,disableBrowserHelps:!0})}
                ${U(qe.events.valueChange,c=>{r({newModelName:c.detail})})}
            ></${qe}>
            <${st.assign({text:"Save"})}
                ${U("click",()=>{t(new i.newModelCreate(n.newModelName)),t(new ci)})}
            ></${st}>
        `;return C`
            <${hi.assign({modalTitle:"Enter New Model"})}>
                <div class="wrapper">
                    <div class="selected-gamepad">
                        <span>Selected Gamepad by Name:</span>
                        ${o}
                    </div>
                    <div class="current-model">${u}</div>
                    <div class="new-model-name">${l}</div>
                </div>
            </${hi}>
        `}}),Lr=Je()({tagName:"vir-edit-mappings-modal",events:{inputMapSave:Ae(),selectedGamepadInputChange:Ae()},styles:_`
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
        }

        select {
            ${Ne};
            flex-grow: 1;
            cursor: pointer;
            padding: 2px 4px;
            font: inherit;
            margin: 2px 0;
        }

        .selected-gamepad {
            display: flex;
            flex-direction: column;
        }

        .current-input {
            display: flex;
            justify-content: center;
        }
    `,stateInitStatic:{cleanup:void 0},init({state:e,updateState:t,inputs:n,host:r,dispatch:i,events:s}){function o(){setTimeout(async()=>{await vd();const a=r.shadowRoot.querySelector(qe.tagName);a&&(Ye.instanceOf(a,qe),a.shadowRoot.querySelector("input")?.select())},0)}if(o(),!e.cleanup){const a=n.inputDeviceHandler.listen(ai,u=>{const l=n.gamepadDevices[n.selectedGamepadIndex];if(!l)return;const c=u.detail.inputs.newInputs.filter(m=>m.deviceKey===l.deviceKey).sort((m,p)=>Math.abs(p.inputValue)-Math.abs(m.inputValue));if(!c.length)return;const d=c[0];d&&n.selectedGamepadInput?.inputName!==d.inputName&&(o(),i(new s.selectedGamepadInputChange(d)))});t({cleanup:a})}},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e,dispatch:t,events:n}){const r=e.gamepadDevices[e.selectedGamepadIndex];if(!r)return C`
                No selected gamepad.
            `;const{gamepadBrand:i}=Ht({gamepad:r.deviceName,gamepadModelMap:e.savedGamepadModelMap});e.selectedGamepadInput&&(r.deviceKey!==e.selectedGamepadInput.deviceKey||r.deviceName!==e.selectedGamepadInput.deviceName)&&t(new n.selectedGamepadInputChange(void 0));const s=C`
            <select
                ${U("change",c=>{const d=c.currentTarget;Ye.instanceOf(d,HTMLSelectElement);const m=Number(d.value);isNaN(m)||t(new $o(m))})}
            >
                ${e.gamepadDevices.map((c,d)=>{const{gamepadModel:m}=Ht({gamepad:c.deviceName,gamepadModelMap:e.savedGamepadModelMap});return C`
                        <option
                            ?selected=${e.selectedGamepadIndex===d}
                            value=${String(d)}
                        >
                            &nbsp;${d}:
                            ${m?Bo(m):"unknown"}
                        </option>
                    `})}
            </select>
        `,o=e.selectedGamepadInput?r.deviceDetails.inputsByName[e.selectedGamepadInput.inputName]:void 0,a=o?C`
                  <${At.assign({gamepadLayout:void 0,gamepadInput:o,gamepadBrand:i})}></${At}>
              `:C`
                  <p>Press an input on this gamepad to map it.</p>
              `,u=Gs({gamepad:r,layouts:e.savedGamepadLayouts,gamepadModelMap:e.savedGamepadModelMap}),l=o?C`
                  <${qe.assign({placeholder:"Enter an input name",value:u?.inputMappings[o.inputName]||"",disableBrowserHelps:!0})}
                      ${U(qe.events.valueChange,c=>{t(new n.inputMapSave({inputName:o.inputName,mappedName:c.detail}))})}
                  ></${qe}>
              `:"";return C`
            <${hi.assign({modalTitle:"Edit Mappings"})}>
                <div class="wrapper">
                    <div class="selected-gamepad">
                        <span>Selected Gamepad:</span>
                        ${s}
                    </div>
                    <div class="current-input">${a}</div>
                    <div class="current-mapping">${l}</div>
                </div>
            </${hi}>
        `}});z0();Bi({tagName:"vir-app",styles:_`
        :host {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            font-family: sans-serif;
        }

        main {
            box-sizing: border-box;
            width: 100%;
            min-height: 100%;
            display: flex;
            flex-direction: column;
            padding: 24px;
            gap: 24px;
        }

        p {
            margin: 0;
        }

        .description {
            font-size: 0.5em;
            opacity: 0.3;
            transition: 100ms;
        }

        .description:hover {
            opacity: 1;
        }

        .modal-wrapper {
            position: absolute;
        }

        .gamepads-wrapper {
            display: flex;
            flex-direction: column;
            gap: 64px;
        }

        ${J} {
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
            transform: scale(2);
        }

        header {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        header .column {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        h1 {
            ${vr};
        }

        header .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        .reset-button {
            ${st.cssVars["vira-button-primary-color"].name}: red;
            ${st.cssVars["vira-button-primary-hover-color"].name}: red;
            ${st.cssVars["vira-button-primary-active-color"].name}: red;
        }

        .submission-buttons {
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }

        .submission-buttons .subtitle {
            opacity: 0.3;
            font-size: 0.5em;
            transition: 100ms;
        }

        .user-agent {
            opacity: 0.5;
            font-size: 0.7em;
            transition: 100ms;
        }

        .user-agent:hover,
        .submission-buttons .subtitle:hover {
            opacity: 1;
        }
        
        .error {
            font-weight: bold
            color: red;
        }
    `,stateInitStatic:{deviceHandler:id(()=>new Dy({startLoopImmediately:!1,disableMouseMovement:!0,globalDeadZone:.1})),gamepadDevices:[],newInputs:{timestamp:0,devices:[]},gamepadIndexForEditing:0,inputForEditing:void 0,savedGamepadLayouts:ds({defaultValue:Iu().then(e=>(console.info("Loaded layouts:"),console.info(JSON.stringify(e)),e))}),submittedChanges:ds({defaultValue:Qw()}),savedGamepadModelMap:ds({defaultValue:Bu().then(e=>(console.info("Loaded model map:"),console.info(JSON.stringify(e)),e))}),overrides:{gamepadLayouts:[],gamepadTypes:{}},editMode:"none",cleanup:void 0},init({state:e,updateState:t}){const n=[e.deviceHandler.listen(ai,()=>{const r=e.deviceHandler.getLastPollResults();t({gamepadDevices:Object.values(r).filter(i=>i.deviceType===me.Gamepad)})}),e.deviceHandler.listen(ai,r=>{const i=Date.now(),s=r.detail.inputs.newInputs.reduce((o,a)=>(o.add(String(a.deviceKey)),o),new Set);s.size&&t({newInputs:{timestamp:i,devices:Array.from(s)}})}),ev("keydown",r=>{r.code.toLowerCase()==="escape"&&e.editMode!=="none"&&t({editMode:"none"})})];t({cleanup(){n.forEach(r=>r())}}),e.deviceHandler.startPollingLoop()},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({state:e,updateState:t}){const n=e.savedGamepadLayouts.value,r=e.savedGamepadModelMap.value,i=e.submittedChanges.value;if(!fs(n)||!fs(r)||!fs(i))return C`
                <${J.assign({icon:Fd})}></${J}>
            `;if(hs(n)||hs(r)||hs(i))return C`
                <p class="error">Failed to initialize.</p>
            `;const s=xu({layouts:n,models:r},i),o=xu({layouts:n,models:r},void 0),a=o.layouts.length||Object.values(o.models).length,u=s.layouts.length||Object.values(s.models).length,l=[...e.gamepadDevices],c=l.map((m,p)=>{const w=Gs({gamepad:m,layouts:n,gamepadModelMap:r});return C`
                <${Vu.assign({gamepad:m,gamepadIndex:p,gamepadLayout:w,gamepadModelMap:r})}
                    ${U(gn.events.editMappingsClick,()=>{t({gamepadIndexForEditing:p,editMode:"mappings"})})}
                    ${U(gn.events.gamepadModelOverride,async D=>{const T={...r,[m.deviceName.toLowerCase()]:D.detail};e.savedGamepadModelMap.setValue(T),await Pu(T)})}
                    ${U(Hr.events.gamepadInputClick,D=>{t({editMode:"mappings",gamepadIndexForEditing:p,inputForEditing:D.detail})})}
                    ${U(gn.events.createNewModel,()=>{t({editMode:"create-type",gamepadIndexForEditing:p})})}
                ></${Vu}>
            `}),d=e.editMode==="create-type"?C`
                      <${vs.assign({gamepadDevices:l,selectedGamepadIndex:e.gamepadIndexForEditing})}
                          ${U(vs.events.newModelCreate,async m=>{const p=e.gamepadDevices[e.gamepadIndexForEditing];if(!p)throw new Error("Cannot update layouts, failed to find selected device");const w={...r,[p.deviceName.toLowerCase()]:m.detail};console.info("Saving updated model map:"),console.info(JSON.stringify(w)),e.savedGamepadModelMap.setValue(w),await Pu(w)})}
                      ></${vs}>
                  `:e.editMode==="mappings"?C`
                        <${Lr.assign({savedGamepadLayouts:n,gamepadDevices:l,selectedGamepadIndex:e.gamepadIndexForEditing,savedGamepadModelMap:r,selectedGamepadInput:e.inputForEditing,inputDeviceHandler:e.deviceHandler})}
                            ${U(Lr.events.selectedGamepadInputChange,m=>{t({inputForEditing:m.detail})})}
                            ${U(Lr.events.inputMapSave,async m=>{if(n instanceof Error)throw new TypeError("Cannot save mapping, failed to load current mappings.");const p=e.gamepadDevices[e.gamepadIndexForEditing];if(!p)throw new Error("Cannot update layouts, failed to find selected device");const w=Gs({gamepad:p,layouts:n,gamepadModelMap:r}),D=cr(),T=w?W0(w.systemVersions,D):!0,F=G0(p),O=T?w??F:w?{...ks(w),systemVersions:F.systemVersions}:F;O.inputMappings[m.detail.inputName]=m.detail.mappedName,(!w||!T)&&n.push(O),console.info("Saving updated layouts:"),console.info(JSON.stringify(n)),e.savedGamepadLayouts.setValue(ks(n)),await Jw(n)})}
                        ></${Lr}>
                    `:"";return C`
            <main
                ${U(ci,()=>{t({editMode:"none"})})}
                ${U($o,m=>{t({gamepadIndexForEditing:m.detail})})}
            >
                <div class="modal-wrapper">${d}</div>
                <header>
                    <div class="column">
                        <h1>Gamepad Layout Tester</h1>
                        <p>
                            Map gamepad ids to gamepad models, brands, and input names using the
                            gamepad-type npm package.
                        </p>
                        <ul>
                            <li>
                                <a href="https://electrovir.github.io/gamepad-type/docs">
                                    Full API docs
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/electrovir/gamepad-type">
                                    Repository in GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.npmjs.com/package/gamepad-type">
                                    Package on npm
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <p
                            class="user-agent"
                            title="These versions determine gamepad input mappings."
                        >
                            Current system versions (used for correct mapping):
                            <br />
                            ${Pr.osName} ${Pr.osVersion}
                            <br />
                            ${Pr.browserName} ${Pr.browserVersion}
                        </p>
                        <div class="submission-buttons">
                            <div class="column">
                                <${st.assign({text:"Submit Changes",disabled:!u})}
                                    ${U("click",async()=>{await Xw(s),e.submittedChanges.setValue(s),Uy.info("New mapping override received",{changes:s,systemVersions:cr(),connectedDevices:e.gamepadDevices.map(m=>Cc(m,["deviceKey","deviceName","deviceType"]))})})}
                                ></${st}>
                                <p class="subtitle">
                                    Submit your changes. IP address is not stored.
                                </p>
                            </div>
                            <${st.assign({text:"Reset Changes",disabled:!a,buttonStyle:li.Outline})}
                                ${U("click",async()=>{await Yw(),e.savedGamepadLayouts.setValue(Iu()),e.savedGamepadModelMap.setValue(Bu())})}
                                class="reset-button"
                            ></${st}>
                        </div>
                    </div>
                </header>
                <div class="gamepads-wrapper">
                    ${c.length?c:C`
                              Connect a gamepad and press a button on it.
                          `}
                </div>
            </main>
        `}});
