(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function z(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Id(e){return z(e).filter(t=>isNaN(Number(t)))}function Je(e){return Id(e).map(r=>e[r])}var Bd=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Pd=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,_d=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,xi={Space_Separator:Bd,ID_Start:Pd,ID_Continue:_d},ue={isSpaceSeparator(e){return typeof e=="string"&&xi.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||xi.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||xi.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let us,De,ot,Vn,xt,Ke,fe,js,Wr;var Od=function(t,r){us=String(t),De="start",ot=[],Vn=0,xt=1,Ke=0,fe=void 0,js=void 0,Wr=void 0;do fe=Ld(),Wd[De]();while(fe.type!=="eof");return typeof r=="function"?ls({"":Wr},"",r):Wr};function ls(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const s=String(i),o=ls(n,s,r);o===void 0?delete n[s]:Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const s=ls(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let _,B,Br,nt,R;function Ld(){for(_="default",B="",Br=!1,nt=1;;){R=at();const e=Nu[_]();if(e)return e}}function at(){if(us[Vn])return String.fromCodePoint(us.codePointAt(Vn))}function v(){const e=at();return e===`
`?(xt++,Ke=0):e?Ke+=e.length:Ke++,e&&(Vn+=e.length),e}const Nu={default(){switch(R){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":v();return;case"/":v(),_="comment";return;case void 0:return v(),H("eof")}if(ue.isSpaceSeparator(R)){v();return}return Nu[De]()},comment(){switch(R){case"*":v(),_="multiLineComment";return;case"/":v(),_="singleLineComment";return}throw Q(v())},multiLineComment(){switch(R){case"*":v(),_="multiLineCommentAsterisk";return;case void 0:throw Q(v())}v()},multiLineCommentAsterisk(){switch(R){case"*":v();return;case"/":v(),_="default";return;case void 0:throw Q(v())}v(),_="multiLineComment"},singleLineComment(){switch(R){case`
`:case"\r":case"\u2028":case"\u2029":v(),_="default";return;case void 0:return v(),H("eof")}v()},value(){switch(R){case"{":case"[":return H("punctuator",v());case"n":return v(),Tt("ull"),H("null",null);case"t":return v(),Tt("rue"),H("boolean",!0);case"f":return v(),Tt("alse"),H("boolean",!1);case"-":case"+":v()==="-"&&(nt=-1),_="sign";return;case".":B=v(),_="decimalPointLeading";return;case"0":B=v(),_="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":B=v(),_="decimalInteger";return;case"I":return v(),Tt("nfinity"),H("numeric",1/0);case"N":return v(),Tt("aN"),H("numeric",NaN);case'"':case"'":Br=v()==='"',B="",_="string";return}throw Q(v())},identifierNameStartEscape(){if(R!=="u")throw Q(v());v();const e=cs();switch(e){case"$":case"_":break;default:if(!ue.isIdStartChar(e))throw Io();break}B+=e,_="identifierName"},identifierName(){switch(R){case"$":case"_":case"‌":case"‍":B+=v();return;case"\\":v(),_="identifierNameEscape";return}if(ue.isIdContinueChar(R)){B+=v();return}return H("identifier",B)},identifierNameEscape(){if(R!=="u")throw Q(v());v();const e=cs();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!ue.isIdContinueChar(e))throw Io();break}B+=e,_="identifierName"},sign(){switch(R){case".":B=v(),_="decimalPointLeading";return;case"0":B=v(),_="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":B=v(),_="decimalInteger";return;case"I":return v(),Tt("nfinity"),H("numeric",nt*(1/0));case"N":return v(),Tt("aN"),H("numeric",NaN)}throw Q(v())},zero(){switch(R){case".":B+=v(),_="decimalPoint";return;case"e":case"E":B+=v(),_="decimalExponent";return;case"x":case"X":B+=v(),_="hexadecimal";return}return H("numeric",nt*0)},decimalInteger(){switch(R){case".":B+=v(),_="decimalPoint";return;case"e":case"E":B+=v(),_="decimalExponent";return}if(ue.isDigit(R)){B+=v();return}return H("numeric",nt*Number(B))},decimalPointLeading(){if(ue.isDigit(R)){B+=v(),_="decimalFraction";return}throw Q(v())},decimalPoint(){switch(R){case"e":case"E":B+=v(),_="decimalExponent";return}if(ue.isDigit(R)){B+=v(),_="decimalFraction";return}return H("numeric",nt*Number(B))},decimalFraction(){switch(R){case"e":case"E":B+=v(),_="decimalExponent";return}if(ue.isDigit(R)){B+=v();return}return H("numeric",nt*Number(B))},decimalExponent(){switch(R){case"+":case"-":B+=v(),_="decimalExponentSign";return}if(ue.isDigit(R)){B+=v(),_="decimalExponentInteger";return}throw Q(v())},decimalExponentSign(){if(ue.isDigit(R)){B+=v(),_="decimalExponentInteger";return}throw Q(v())},decimalExponentInteger(){if(ue.isDigit(R)){B+=v();return}return H("numeric",nt*Number(B))},hexadecimal(){if(ue.isHexDigit(R)){B+=v(),_="hexadecimalInteger";return}throw Q(v())},hexadecimalInteger(){if(ue.isHexDigit(R)){B+=v();return}return H("numeric",nt*Number(B))},string(){switch(R){case"\\":v(),B+=Rd();return;case'"':if(Br)return v(),H("string",B);B+=v();return;case"'":if(!Br)return v(),H("string",B);B+=v();return;case`
`:case"\r":throw Q(v());case"\u2028":case"\u2029":Ud(R);break;case void 0:throw Q(v())}B+=v()},start(){switch(R){case"{":case"[":return H("punctuator",v())}_="value"},beforePropertyName(){switch(R){case"$":case"_":B=v(),_="identifierName";return;case"\\":v(),_="identifierNameStartEscape";return;case"}":return H("punctuator",v());case'"':case"'":Br=v()==='"',_="string";return}if(ue.isIdStartChar(R)){B+=v(),_="identifierName";return}throw Q(v())},afterPropertyName(){if(R===":")return H("punctuator",v());throw Q(v())},beforePropertyValue(){_="value"},afterPropertyValue(){switch(R){case",":case"}":return H("punctuator",v())}throw Q(v())},beforeArrayValue(){if(R==="]")return H("punctuator",v());_="value"},afterArrayValue(){switch(R){case",":case"]":return H("punctuator",v())}throw Q(v())},end(){throw Q(v())}};function H(e,t){return{type:e,value:t,line:xt,column:Ke}}function Tt(e){for(const t of e){if(at()!==t)throw Q(v());v()}}function Rd(){switch(at()){case"b":return v(),"\b";case"f":return v(),"\f";case"n":return v(),`
`;case"r":return v(),"\r";case"t":return v(),"	";case"v":return v(),"\v";case"0":if(v(),ue.isDigit(at()))throw Q(v());return"\0";case"x":return v(),Vd();case"u":return v(),cs();case`
`:case"\u2028":case"\u2029":return v(),"";case"\r":return v(),at()===`
`&&v(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Q(v());case void 0:throw Q(v())}return v()}function Vd(){let e="",t=at();if(!ue.isHexDigit(t)||(e+=v(),t=at(),!ue.isHexDigit(t)))throw Q(v());return e+=v(),String.fromCodePoint(parseInt(e,16))}function cs(){let e="",t=4;for(;t-- >0;){const r=at();if(!ue.isHexDigit(r))throw Q(v());e+=v()}return String.fromCodePoint(parseInt(e,16))}const Wd={start(){if(fe.type==="eof")throw Mt();ki()},beforePropertyName(){switch(fe.type){case"identifier":case"string":js=fe.value,De="afterPropertyName";return;case"punctuator":yn();return;case"eof":throw Mt()}},afterPropertyName(){if(fe.type==="eof")throw Mt();De="beforePropertyValue"},beforePropertyValue(){if(fe.type==="eof")throw Mt();ki()},beforeArrayValue(){if(fe.type==="eof")throw Mt();if(fe.type==="punctuator"&&fe.value==="]"){yn();return}ki()},afterPropertyValue(){if(fe.type==="eof")throw Mt();switch(fe.value){case",":De="beforePropertyName";return;case"}":yn()}},afterArrayValue(){if(fe.type==="eof")throw Mt();switch(fe.value){case",":De="beforeArrayValue";return;case"]":yn()}},end(){}};function ki(){let e;switch(fe.type){case"punctuator":switch(fe.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=fe.value;break}if(Wr===void 0)Wr=e;else{const t=ot[ot.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,js,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")ot.push(e),Array.isArray(e)?De="beforeArrayValue":De="beforePropertyName";else{const t=ot[ot.length-1];t==null?De="end":Array.isArray(t)?De="afterArrayValue":De="afterPropertyValue"}}function yn(){ot.pop();const e=ot[ot.length-1];e==null?De="end":Array.isArray(e)?De="afterArrayValue":De="afterPropertyValue"}function Q(e){return Wn(e===void 0?`JSON5: invalid end of input at ${xt}:${Ke}`:`JSON5: invalid character '${Tu(e)}' at ${xt}:${Ke}`)}function Mt(){return Wn(`JSON5: invalid end of input at ${xt}:${Ke}`)}function Io(){return Ke-=5,Wn(`JSON5: invalid identifier character at ${xt}:${Ke}`)}function Ud(e){console.warn(`JSON5: '${Tu(e)}' in strings is not valid ECMAScript; consider escaping`)}function Tu(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Wn(e){const t=new SyntaxError(e);return t.lineNumber=xt,t.columnNumber=Ke,t}var qd=function(t,r,n){const i=[];let s="",o,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){o=[];for(const D of r){let k;typeof D=="string"?k=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(k=String(D)),k!==void 0&&o.indexOf(k)<0&&o.push(k)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(D,k){let S=k[D];switch(S!=null&&(typeof S.toJSON5=="function"?S=S.toJSON5(D):typeof S.toJSON=="function"&&(S=S.toJSON(D))),a&&(S=a.call(k,D,S)),S instanceof Number?S=Number(S):S instanceof String?S=String(S):S instanceof Boolean&&(S=S.valueOf()),S){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof S=="string")return d(S);if(typeof S=="number")return String(S);if(typeof S=="object")return Array.isArray(S)?y(S):m(S)}function d(D){const k={"'":.1,'"':.2},S={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let L="";for(let G=0;G<D.length;G++){const se=D[G];switch(se){case"'":case'"':k[se]++,L+=se;continue;case"\0":if(ue.isDigit(D[G+1])){L+="\\x00";continue}}if(S[se]){L+=S[se];continue}if(se<" "){let ht=se.charCodeAt(0).toString(16);L+="\\x"+("00"+ht).substring(ht.length);continue}L+=se}const Z=l||Object.keys(k).reduce((G,se)=>k[G]<k[se]?G:se);return L=L.replace(new RegExp(Z,"g"),S[Z]),Z+L+Z}function m(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let k=s;s=s+u;let S=o||Object.keys(D),L=[];for(const G of S){const se=c(G,D);if(se!==void 0){let ht=p(G)+":";u!==""&&(ht+=" "),ht+=se,L.push(ht)}}let Z;if(L.length===0)Z="{}";else{let G;if(u==="")G=L.join(","),Z="{"+G+"}";else{let se=`,
`+s;G=L.join(se),Z=`{
`+s+G+`,
`+k+"}"}}return i.pop(),s=k,Z}function p(D){if(D.length===0)return d(D);const k=String.fromCodePoint(D.codePointAt(0));if(!ue.isIdStartChar(k))return d(D);for(let S=k.length;S<D.length;S++)if(!ue.isIdContinueChar(String.fromCodePoint(D.codePointAt(S))))return d(D);return D}function y(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let k=s;s=s+u;let S=[];for(let Z=0;Z<D.length;Z++){const G=c(String(Z),D);S.push(G!==void 0?G:"null")}let L;if(S.length===0)L="[]";else if(u==="")L="["+S.join(",")+"]";else{let Z=`,
`+s,G=S.join(Z);L=`[
`+s+G+`,
`+k+"]"}return i.pop(),s=k,L}};const jd={parse:Od,stringify:qd};var zd=jd;function h(e){try{return zd.stringify(e)}catch{return String(e)}}const Gd=[".",":",";",",","?","!"],Kd=new RegExp(`[${Gd.join("")}]+$`);function Bo(e){return e.replace(Kd,"")}function Le(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function oi(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(n=>n&&Bo(n));return t.length===1?t[0]:t.length?t.map((n,i)=>i===t.length-1?n:Bo(n)).join(": "):""}function ce(e){return e instanceof Error?e:new Error(Le(e))}function ai(e,t){const r=ce(e),n=oi(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var g;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(g||(g={}));var F;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(F||(F={}));F.ClientError,F.ServerError;g.Continue+"",F.Information,g.SwitchingProtocols+"",F.Information,g.Processing+"",F.Information,g.EarlyHints+"",F.Information,g.Ok+"",F.Success,g.Created+"",F.Success,g.Accepted+"",F.Success,g.NonAuthoritativeInformation+"",F.Success,g.NoContent+"",F.Success,g.ResetContent+"",F.Success,g.PartialContent+"",F.Success,g.MultiStatus+"",F.Success,g.AlreadyReported+"",F.Success,g.ImUsed+"",F.Success,g.MultipleChoices+"",F.Redirect,g.MovedPermanently+"",F.Redirect,g.Found+"",F.Redirect,g.SeeOther+"",F.Redirect,g.NotModified+"",F.Redirect,g.UseProxy+"",F.Redirect,g.Unused+"",F.Redirect,g.TemporaryRedirect+"",F.Redirect,g.PermanentRedirect+"",F.Redirect,g.BadRequest+"",F.ClientError,g.Unauthorized+"",F.ClientError,g.PaymentRequired+"",F.ClientError,g.Forbidden+"",F.ClientError,g.NotFound+"",F.ClientError,g.MethodNotAllowed+"",F.ClientError,g.NotAcceptable+"",F.ClientError,g.ProxyAuthenticationRequired+"",F.ClientError,g.RequestTimeout+"",F.ClientError,g.Conflict+"",F.ClientError,g.Gone+"",F.ClientError,g.LengthRequired+"",F.ClientError,g.PreconditionFailed+"",F.ClientError,g.PayloadTooLarge+"",F.ClientError,g.UriTooLong+"",F.ClientError,g.UnsupportedMediaType+"",F.ClientError,g.RangeNotSatisfiable+"",F.ClientError,g.ExpectationFailed+"",F.ClientError,g.ImATeapot+"",F.ClientError,g.MisdirectedRequest+"",F.ClientError,g.UnprocessableContent+"",F.ClientError,g.Locked+"",F.ClientError,g.FailedDependency+"",F.ClientError,g.TooEarly+"",F.ClientError,g.UpgradeRequired+"",F.ClientError,g.PreconditionRequired+"",F.ClientError,g.TooManyRequests+"",F.ClientError,g.RequestHeaderFieldsTooLarge+"",F.ClientError,g.UnavailableForLegalReasons+"",F.ClientError,g.InternalServerError+"",F.ServerError,g.NotImplemented+"",F.ServerError,g.BadGateway+"",F.ServerError,g.ServiceUnavailable+"",F.ServerError,g.GatewayTimeout+"",F.ServerError,g.HttpVersionNotSupported+"",F.ServerError,g.VariantAlsoNegotiates+"",F.ServerError,g.InsufficientStorage+"",F.ServerError,g.LoopDetected+"",F.ServerError,g.NotExtended+"",F.ServerError,g.NetworkAuthenticationRequired+"",F.ServerError;const Mn={[F.Information]:[g.Continue,g.SwitchingProtocols,g.Processing,g.EarlyHints],[F.Success]:[g.Ok,g.Created,g.Accepted,g.NonAuthoritativeInformation,g.NoContent,g.ResetContent,g.PartialContent,g.MultiStatus,g.AlreadyReported,g.ImUsed],[F.Redirect]:[g.MultipleChoices,g.MovedPermanently,g.Found,g.SeeOther,g.NotModified,g.UseProxy,g.Unused,g.TemporaryRedirect,g.PermanentRedirect],[F.ClientError]:[g.BadRequest,g.Unauthorized,g.PaymentRequired,g.Forbidden,g.NotFound,g.MethodNotAllowed,g.NotAcceptable,g.ProxyAuthenticationRequired,g.RequestTimeout,g.Conflict,g.Gone,g.LengthRequired,g.PreconditionFailed,g.PayloadTooLarge,g.UriTooLong,g.UnsupportedMediaType,g.RangeNotSatisfiable,g.ExpectationFailed,g.ImATeapot,g.MisdirectedRequest,g.UnprocessableContent,g.Locked,g.FailedDependency,g.TooEarly,g.UpgradeRequired,g.PreconditionRequired,g.TooManyRequests,g.RequestHeaderFieldsTooLarge,g.UnavailableForLegalReasons],[F.ServerError]:[g.InternalServerError,g.NotImplemented,g.BadGateway,g.ServiceUnavailable,g.GatewayTimeout,g.HttpVersionNotSupported,g.VariantAlsoNegotiates,g.InsufficientStorage,g.LoopDetected,g.NotExtended,g.NetworkAuthenticationRequired]};function Mu({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Un{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(ce(n))}})}}class Kt extends Error{}class Zd extends Kt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Yd extends Kt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Jd extends Kt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class ir extends Kt{}class Iu extends Kt{constructor(t){super(`Invalid unit ${t}`)}}class me extends Kt{}class mt extends Kt{constructor(){super("Zone is an abstract class")}}const $="numeric",Ze="short",Te="long",qn={year:$,month:$,day:$},Bu={year:$,month:Ze,day:$},Hd={year:$,month:Ze,day:$,weekday:Ze},Pu={year:$,month:Te,day:$},_u={year:$,month:Te,day:$,weekday:Te},Ou={hour:$,minute:$},Lu={hour:$,minute:$,second:$},Ru={hour:$,minute:$,second:$,timeZoneName:Ze},Vu={hour:$,minute:$,second:$,timeZoneName:Te},Wu={hour:$,minute:$,hourCycle:"h23"},Uu={hour:$,minute:$,second:$,hourCycle:"h23"},qu={hour:$,minute:$,second:$,hourCycle:"h23",timeZoneName:Ze},ju={hour:$,minute:$,second:$,hourCycle:"h23",timeZoneName:Te},zu={year:$,month:$,day:$,hour:$,minute:$},Gu={year:$,month:$,day:$,hour:$,minute:$,second:$},Ku={year:$,month:Ze,day:$,hour:$,minute:$},Zu={year:$,month:Ze,day:$,hour:$,minute:$,second:$},Qd={year:$,month:Ze,day:$,weekday:Ze,hour:$,minute:$},Yu={year:$,month:Te,day:$,hour:$,minute:$,timeZoneName:Ze},Ju={year:$,month:Te,day:$,hour:$,minute:$,second:$,timeZoneName:Ze},Hu={year:$,month:Te,day:$,weekday:Te,hour:$,minute:$,timeZoneName:Te},Qu={year:$,month:Te,day:$,weekday:Te,hour:$,minute:$,second:$,timeZoneName:Te};class an{get type(){throw new mt}get name(){throw new mt}get ianaName(){return this.name}get isUniversal(){throw new mt}offsetName(t,r){throw new mt}formatOffset(t,r){throw new mt}offset(t){throw new mt}equals(t){throw new mt}get isValid(){throw new mt}}let Ni=null;class ui extends an{static get instance(){return Ni===null&&(Ni=new ui),Ni}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return ll(t,r,n)}formatOffset(t,r){return Ur(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const ds=new Map;function Xd(e){let t=ds.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),ds.set(e,t)),t}const ef={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function tf(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,o,a,u,l,c]=n;return[o,i,s,a,u,l,c]}function rf(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:s,value:o}=r[i],a=ef[s];s==="era"?n[a]=o:I(a)||(n[a]=parseInt(o,10))}return n}const Ti=new Map;class lt extends an{static create(t){let r=Ti.get(t);return r===void 0&&Ti.set(t,r=new lt(t)),r}static resetCache(){Ti.clear(),ds.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=lt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return ll(t,r,n,this.name)}formatOffset(t,r){return Ur(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=Xd(this.name);let[i,s,o,a,u,l,c]=n.formatToParts?rf(n,r):tf(n,r);a==="BC"&&(i=-Math.abs(i)+1);const m=ci({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:c,millisecond:0});let p=+r;const y=p%1e3;return p-=y>=0?y:1e3+y,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Po={};function nf(e,t={}){const r=JSON.stringify([e,t]);let n=Po[r];return n||(n=new Intl.ListFormat(e,t),Po[r]=n),n}const fs=new Map;function hs(e,t={}){const r=JSON.stringify([e,t]);let n=fs.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),fs.set(r,n)),n}const ms=new Map;function sf(e,t={}){const r=JSON.stringify([e,t]);let n=ms.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),ms.set(r,n)),n}const ps=new Map;function of(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let s=ps.get(i);return s===void 0&&(s=new Intl.RelativeTimeFormat(e,t),ps.set(i,s)),s}let Pr=null;function af(){return Pr||(Pr=new Intl.DateTimeFormat().resolvedOptions().locale,Pr)}const gs=new Map;function Xu(e){let t=gs.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),gs.set(e,t)),t}const ys=new Map;function uf(e){let t=ys.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...el,...t}),ys.set(e,t)}return t}function lf(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=hs(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=hs(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=n;return[i,s,o]}}function cf(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function df(e){const t=[];for(let r=1;r<=12;r++){const n=M.utc(2009,r,1);t.push(e(n))}return t}function ff(e){const t=[];for(let r=1;r<=7;r++){const n=M.utc(2016,11,13+r);t.push(e(n))}return t}function vn(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function hf(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Xu(e.locale).numberingSystem==="latn"}class mf{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=sf(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Ys(t,3);return le(r,this.padTo)}}}class pf{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&lt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=hs(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class gf{constructor(t,r,n){this.opts={style:"long",...n},!r&&al()&&(this.rtf=of(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Lf(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const el={firstDay:1,minimalDays:4,weekend:[6,7]};class j{static fromOpts(t){return j.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,s=!1){const o=t||ee.defaultLocale,a=o||(s?"en-US":af()),u=r||ee.defaultNumberingSystem,l=n||ee.defaultOutputCalendar,c=ws(i)||ee.defaultWeekSettings;return new j(a,u,l,c,o)}static resetCache(){Pr=null,fs.clear(),ms.clear(),ps.clear(),gs.clear(),ys.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return j.create(t,r,n,i)}constructor(t,r,n,i,s){const[o,a,u]=lf(t);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=cf(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=hf(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:j.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,ws(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return vn(this,t,fl,()=>{const n=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=df(s=>this.extract(s,n,"month"))),this.monthsCache[i][t]})}weekdays(t,r=!1){return vn(this,t,pl,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=ff(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return vn(this,void 0,()=>gl,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[M.utc(2016,11,13,9),M.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return vn(this,t,yl,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[M.utc(-40,1,1),M.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new mf(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new pf(t,this.intl,r)}relFormatter(t={}){return new gf(this.intl,this.isEnglish(),t)}listFormatter(t={}){return nf(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Xu(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:ul()?uf(this.locale):el}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Mi=null;class be extends an{static get utcInstance(){return Mi===null&&(Mi=new be(0)),Mi}static instance(t){return t===0?be.utcInstance:new be(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new be(di(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Ur(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Ur(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Ur(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class yf extends an{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function At(e,t){if(I(e)||e===null)return t;if(e instanceof an)return e;if(Ef(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?ui.instance:r==="utc"||r==="gmt"?be.utcInstance:be.parseSpecifier(r)||lt.create(e)}else return Ft(e)?be.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new yf(e)}const zs={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},_o={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},vf=zs.hanidec.replace(/[\[|\]]/g,"").split("");function wf(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(zs.hanidec)!==-1)t+=vf.indexOf(e[r]);else for(const i in _o){const[s,o]=_o[i];n>=s&&n<=o&&(t+=n-s)}}return parseInt(t,10)}else return t}const vs=new Map;function Df(){vs.clear()}function We({numberingSystem:e},t=""){const r=e||"latn";let n=vs.get(r);n===void 0&&(n=new Map,vs.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${zs[r]}${t}`),n.set(t,i)),i}let Oo=()=>Date.now(),Lo="system",Ro=null,Vo=null,Wo=null,Uo=60,qo,jo=null;class ee{static get now(){return Oo}static set now(t){Oo=t}static set defaultZone(t){Lo=t}static get defaultZone(){return At(Lo,ui.instance)}static get defaultLocale(){return Ro}static set defaultLocale(t){Ro=t}static get defaultNumberingSystem(){return Vo}static set defaultNumberingSystem(t){Vo=t}static get defaultOutputCalendar(){return Wo}static set defaultOutputCalendar(t){Wo=t}static get defaultWeekSettings(){return jo}static set defaultWeekSettings(t){jo=ws(t)}static get twoDigitCutoffYear(){return Uo}static set twoDigitCutoffYear(t){Uo=t%100}static get throwOnInvalid(){return qo}static set throwOnInvalid(t){qo=t}static resetCaches(){j.resetCache(),lt.resetCache(),M.resetCache(),Df()}}class ze{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const tl=[0,31,59,90,120,151,181,212,243,273,304,334],rl=[0,31,60,91,121,152,182,213,244,274,305,335];function Pe(e,t){return new ze("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Gs(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function nl(e,t,r){return r+(un(e)?rl:tl)[t-1]}function il(e,t){const r=un(e)?rl:tl,n=r.findIndex(s=>s<t),i=t-r[n];return{month:n+1,day:i}}function Ks(e,t){return(e-t+7)%7+1}function jn(e,t=4,r=1){const{year:n,month:i,day:s}=e,o=nl(n,i,s),a=Ks(Gs(n,i,s),r);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=n-1,u=Kr(l,t,r)):u>Kr(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...fi(e)}}function zo(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=e,o=Ks(Gs(n,1,t),r),a=ur(n);let u=i*7+s-o-7+t,l;u<1?(l=n-1,u+=ur(l)):u>a?(l=n+1,u-=ur(n)):l=n;const{month:c,day:d}=il(l,u);return{year:l,month:c,day:d,...fi(e)}}function Ii(e){const{year:t,month:r,day:n}=e,i=nl(t,r,n);return{year:t,ordinal:i,...fi(e)}}function Go(e){const{year:t,ordinal:r}=e,{month:n,day:i}=il(t,r);return{year:t,month:n,day:i,...fi(e)}}function Ko(e,t){if(!I(e.localWeekday)||!I(e.localWeekNumber)||!I(e.localWeekYear)){if(!I(e.weekday)||!I(e.weekNumber)||!I(e.weekYear))throw new ir("Cannot mix locale-based week fields with ISO-based week fields");return I(e.localWeekday)||(e.weekday=e.localWeekday),I(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),I(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function bf(e,t=4,r=1){const n=li(e.weekYear),i=_e(e.weekNumber,1,Kr(e.weekYear,t,r)),s=_e(e.weekday,1,7);return n?i?s?!1:Pe("weekday",e.weekday):Pe("week",e.weekNumber):Pe("weekYear",e.weekYear)}function Af(e){const t=li(e.year),r=_e(e.ordinal,1,ur(e.year));return t?r?!1:Pe("ordinal",e.ordinal):Pe("year",e.year)}function sl(e){const t=li(e.year),r=_e(e.month,1,12),n=_e(e.day,1,zn(e.year,e.month));return t?r?n?!1:Pe("day",e.day):Pe("month",e.month):Pe("year",e.year)}function ol(e){const{hour:t,minute:r,second:n,millisecond:i}=e,s=_e(t,0,23)||t===24&&r===0&&n===0&&i===0,o=_e(r,0,59),a=_e(n,0,59),u=_e(i,0,999);return s?o?a?u?!1:Pe("millisecond",i):Pe("second",n):Pe("minute",r):Pe("hour",t)}function I(e){return typeof e>"u"}function Ft(e){return typeof e=="number"}function li(e){return typeof e=="number"&&e%1===0}function Ef(e){return typeof e=="string"}function Cf(e){return Object.prototype.toString.call(e)==="[object Date]"}function al(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function ul(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function $f(e){return Array.isArray(e)?e:[e]}function Zo(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const s=[t(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function Ff(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function fr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ws(e){if(e==null)return null;if(typeof e!="object")throw new me("Week settings must be an object");if(!_e(e.firstDay,1,7)||!_e(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!_e(t,1,7)))throw new me("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function _e(e,t,r){return li(e)&&e>=t&&e<=r}function Sf(e,t){return e-t*Math.floor(e/t)}function le(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function wt(e){if(!(I(e)||e===null||e===""))return parseInt(e,10)}function It(e){if(!(I(e)||e===null||e===""))return parseFloat(e)}function Zs(e){if(!(I(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Ys(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function un(e){return e%4===0&&(e%100!==0||e%400===0)}function ur(e){return un(e)?366:365}function zn(e,t){const r=Sf(t-1,12)+1,n=e+(t-r)/12;return r===2?un(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function ci(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Yo(e,t,r){return-Ks(Gs(e,1,t),r)+t-1}function Kr(e,t=4,r=1){const n=Yo(e,t,r),i=Yo(e+1,t,r);return(ur(e)-n+i)/7}function Ds(e){return e>99?e:e>ee.twoDigitCutoffYear?1900+e:2e3+e}function ll(e,t,r,n=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(r,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function di(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function cl(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new me(`Invalid unit value ${e}`);return t}function Gn(e,t){const r={};for(const n in e)if(fr(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=cl(i)}return r}function Ur(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${le(r,2)}:${le(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${le(r,2)}${le(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function fi(e){return Ff(e,["hour","minute","second","millisecond"])}const xf=["January","February","March","April","May","June","July","August","September","October","November","December"],dl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],kf=["J","F","M","A","M","J","J","A","S","O","N","D"];function fl(e){switch(e){case"narrow":return[...kf];case"short":return[...dl];case"long":return[...xf];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const hl=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ml=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Nf=["M","T","W","T","F","S","S"];function pl(e){switch(e){case"narrow":return[...Nf];case"short":return[...ml];case"long":return[...hl];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const gl=["AM","PM"],Tf=["Before Christ","Anno Domini"],Mf=["BC","AD"],If=["B","A"];function yl(e){switch(e){case"narrow":return[...If];case"short":return[...Mf];case"long":return[...Tf];default:return null}}function Bf(e){return gl[e.hour<12?0:1]}function Pf(e,t){return pl(t)[e.weekday-1]}function _f(e,t){return fl(t)[e.month-1]}function Of(e,t){return yl(t)[e.year<0?0:1]}function Lf(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${c} ago`:`in ${a} ${c}`}function Jo(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Rf={D:qn,DD:Bu,DDD:Pu,DDDD:_u,t:Ou,tt:Lu,ttt:Ru,tttt:Vu,T:Wu,TT:Uu,TTT:qu,TTTT:ju,f:zu,ff:Ku,fff:Yu,ffff:Hu,F:Gu,FF:Zu,FFF:Ju,FFFF:Qu};class ge{static create(t,r={}){return new ge(t,r)}static parseFormat(t){let r=null,n="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return Rf[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return le(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,y)=>this.loc.extract(t,p,y),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>n?Bf(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,y)=>n?_f(t,p):s(y?{month:p}:{month:p,day:"numeric"},"month"),l=(p,y)=>n?Pf(t,p):s(y?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),c=p=>{const y=ge.macroTokenToFormatOpts(p);return y?this.formatWithSystemDefault(t,y):p},d=p=>n?Of(t,p):s({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(p)}};return Jo(ge.parseFormat(r),m)}formatDurationFromString(t,r){const n=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const c=n(l);return c?this.num(u.get(c),l.length):l},s=ge.parseFormat(r),o=s.reduce((u,{literal:l,val:c})=>l?u:u.concat(c),[]),a=t.shiftTo(...o.map(n).filter(u=>u));return Jo(s,i(a))}}const vl=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Dr(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function br(...e){return t=>e.reduce(([r,n,i],s)=>{const[o,a,u]=s(t,i);return[{...r,...o},a||n,u]},[{},null,1]).slice(0,2)}function Ar(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function wl(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=wt(t[r+i]);return[n,null,r+i]}}const Dl=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Vf=`(?:${Dl.source}?(?:\\[(${vl.source})\\])?)?`,Js=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,bl=RegExp(`${Js.source}${Vf}`),Hs=RegExp(`(?:T${bl.source})?`),Wf=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Uf=/(\d{4})-?W(\d\d)(?:-?(\d))?/,qf=/(\d{4})-?(\d{3})/,jf=wl("weekYear","weekNumber","weekDay"),zf=wl("year","ordinal"),Gf=/(\d{4})-(\d\d)-(\d\d)/,Al=RegExp(`${Js.source} ?(?:${Dl.source}|(${vl.source}))?`),Kf=RegExp(`(?: ${Al.source})?`);function lr(e,t,r){const n=e[t];return I(n)?r:wt(n)}function Zf(e,t){return[{year:lr(e,t),month:lr(e,t+1,1),day:lr(e,t+2,1)},null,t+3]}function Er(e,t){return[{hours:lr(e,t,0),minutes:lr(e,t+1,0),seconds:lr(e,t+2,0),milliseconds:Zs(e[t+3])},null,t+4]}function ln(e,t){const r=!e[t]&&!e[t+1],n=di(e[t+1],e[t+2]),i=r?null:be.instance(n);return[{},i,t+3]}function cn(e,t){const r=e[t]?lt.create(e[t]):null;return[{},r,t+1]}const Yf=RegExp(`^T?${Js.source}$`),Jf=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Hf(e){const[t,r,n,i,s,o,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",m=(p,y=!1)=>p!==void 0&&(y||p&&c)?-p:p;return[{years:m(It(r)),months:m(It(n)),weeks:m(It(i)),days:m(It(s)),hours:m(It(o)),minutes:m(It(a)),seconds:m(It(u),u==="-0"),milliseconds:m(Zs(l),d)}]}const Qf={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Qs(e,t,r,n,i,s,o){const a={year:t.length===2?Ds(wt(t)):wt(t),month:dl.indexOf(r)+1,day:wt(n),hour:wt(i),minute:wt(s)};return o&&(a.second=wt(o)),e&&(a.weekday=e.length>3?hl.indexOf(e)+1:ml.indexOf(e)+1),a}const Xf=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function eh(e){const[,t,r,n,i,s,o,a,u,l,c,d]=e,m=Qs(t,i,n,r,s,o,a);let p;return u?p=Qf[u]:l?p=0:p=di(c,d),[m,new be(p)]}function th(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const rh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,nh=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,ih=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ho(e){const[,t,r,n,i,s,o,a]=e;return[Qs(t,i,n,r,s,o,a),be.utcInstance]}function sh(e){const[,t,r,n,i,s,o,a]=e;return[Qs(t,a,r,n,i,s,o),be.utcInstance]}const oh=Dr(Wf,Hs),ah=Dr(Uf,Hs),uh=Dr(qf,Hs),lh=Dr(bl),El=br(Zf,Er,ln,cn),ch=br(jf,Er,ln,cn),dh=br(zf,Er,ln,cn),fh=br(Er,ln,cn);function hh(e){return Ar(e,[oh,El],[ah,ch],[uh,dh],[lh,fh])}function mh(e){return Ar(th(e),[Xf,eh])}function ph(e){return Ar(e,[rh,Ho],[nh,Ho],[ih,sh])}function gh(e){return Ar(e,[Jf,Hf])}const yh=br(Er);function vh(e){return Ar(e,[Yf,yh])}const wh=Dr(Gf,Kf),Dh=Dr(Al),bh=br(Er,ln,cn);function Ah(e){return Ar(e,[wh,El],[Dh,bh])}const Qo="Invalid Duration",Cl={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Eh={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Cl},Me=146097/400,Qt=146097/4800,Ch={years:{quarters:4,months:12,weeks:Me/7,days:Me,hours:Me*24,minutes:Me*24*60,seconds:Me*24*60*60,milliseconds:Me*24*60*60*1e3},quarters:{months:3,weeks:Me/28,days:Me/4,hours:Me*24/4,minutes:Me*24*60/4,seconds:Me*24*60*60/4,milliseconds:Me*24*60*60*1e3/4},months:{weeks:Qt/7,days:Qt,hours:Qt*24,minutes:Qt*24*60,seconds:Qt*24*60*60,milliseconds:Qt*24*60*60*1e3},...Cl},Rt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],$h=Rt.slice(0).reverse();function pt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new V(n)}function $l(e,t){let r=t.milliseconds??0;for(const n of $h.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Xo(e,t){const r=$l(e,t)<0?-1:1;Rt.reduceRight((n,i)=>{if(I(t[i]))return n;if(n){const s=t[n]*r,o=e[i][n],a=Math.floor(s/o);t[i]+=a*r,t[n]-=a*o*r}return i},null),Rt.reduce((n,i)=>{if(I(t[i]))return n;if(n){const s=t[n]%1;t[n]-=s,t[i]+=s*e[n][i]}return i},null)}function Fh(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class V{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Ch:Eh;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||j.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return V.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new me(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new V({values:Gn(t,V.normalizeUnit),loc:j.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Ft(t))return V.fromMillis(t);if(V.isDuration(t))return t;if(typeof t=="object")return V.fromObject(t);throw new me(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=gh(t);return n?V.fromObject(n,r):V.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=vh(t);return n?V.fromObject(n,r):V.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new me("need to specify a reason the Duration is invalid");const n=t instanceof ze?t:new ze(t,r);if(ee.throwOnInvalid)throw new Jd(n);return new V({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Iu(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ge.create(this.loc,n).formatDurationFromString(this,t):Qo}toHuman(t={}){if(!this.isValid)return Qo;const r=Rt.map(n=>{const i=this.values[n];return I(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ys(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},M.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?$l(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=V.fromDurationLike(t),n={};for(const i of Rt)(fr(r.values,i)||fr(this.values,i))&&(n[i]=r.get(i)+this.get(i));return pt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=V.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=cl(t(this.values[n],n));return pt(this,{values:r},!0)}get(t){return this[V.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Gn(t,V.normalizeUnit)};return pt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return pt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Xo(this.matrix,t),pt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Fh(this.normalize().shiftToAll().toObject());return pt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>V.normalizeUnit(o));const r={},n={},i=this.toObject();let s;for(const o of Rt)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in n)a+=this.matrix[l][o]*n[l],n[l]=0;Ft(i[o])&&(a+=i[o]);const u=Math.trunc(a);r[o]=u,n[o]=(a*1e3-u*1e3)/1e3}else Ft(i[o])&&(n[o]=i[o]);for(const o in n)n[o]!==0&&(r[s]+=o===s?n[o]:n[o]/this.matrix[s][o]);return Xo(this.matrix,r),pt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return pt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of Rt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Xt="Invalid Interval";function Sh(e,t){return!e||!e.isValid?ne.invalid("missing or invalid start"):!t||!t.isValid?ne.invalid("missing or invalid end"):t<e?ne.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ne{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new me("need to specify a reason the Interval is invalid");const n=t instanceof ze?t:new ze(t,r);if(ee.throwOnInvalid)throw new Yd(n);return new ne({invalid:n})}static fromDateTimes(t,r){const n=Sr(t),i=Sr(r),s=Sh(n,i);return s??new ne({start:n,end:i})}static after(t,r){const n=V.fromDurationLike(r),i=Sr(t);return ne.fromDateTimes(i,i.plus(n))}static before(t,r){const n=V.fromDurationLike(r),i=Sr(t);return ne.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let s,o;try{s=M.fromISO(n,r),o=s.isValid}catch{o=!1}let a,u;try{a=M.fromISO(i,r),u=a.isValid}catch{u=!1}if(o&&u)return ne.fromDateTimes(s,a);if(o){const l=V.fromISO(i,r);if(l.isValid)return ne.after(s,l)}else if(u){const l=V.fromISO(n,r);if(l.isValid)return ne.before(a,l)}}return ne.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ne.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Sr).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const o=r[s]||this.e,a=+o>+this.e?this.e:o;n.push(ne.fromDateTimes(i,a)),i=a,s+=1}return n}splitBy(t){const r=V.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(ne.fromDateTimes(n,s)),n=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ne.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ne.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(ne.fromDateTimes(r,u.time)),r=null);return ne.merge(i)}difference(...t){return ne.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Xt}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=qn,r={}){return this.isValid?ge.create(this.s.loc.clone(r),t).formatInterval(this):Xt}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Xt}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Xt}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Xt}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Xt}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):V.invalid(this.invalidReason)}mapEndpoints(t){return ne.fromDateTimes(t(this.s),t(this.e))}}class wn{static hasDST(t=ee.defaultZone){const r=M.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return lt.isValidZone(t)}static normalizeZone(t){return At(t,ee.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||j.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||j.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||j.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||j.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||j.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||j.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||j.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return j.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return j.create(r,null,"gregory").eras(t)}static features(){return{relative:al(),localeWeek:ul()}}}function ea(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(V.fromMillis(n).as("days"))}function xh(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=ea(u,l);return(c-c%7)/7}],["days",ea]],i={},s=e;let o,a;for(const[u,l]of n)r.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function kh(e,t,r,n){let[i,s,o,a]=xh(e,t,r);const u=t-i,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const c=V.fromObject(s,n);return l.length>0?V.fromMillis(u,n).shiftTo(...l).plus(c):c}const Nh="missing Intl.DateTimeFormat.formatToParts support";function U(e,t=r=>r){return{regex:e,deser:([r])=>t(wf(r))}}const Th=" ",Fl=`[ ${Th}]`,Sl=new RegExp(Fl,"g");function Mh(e){return e.replace(/\./g,"\\.?").replace(Sl,Fl)}function ta(e){return e.replace(/\./g,"").replace(Sl," ").toLowerCase()}function Ue(e,t){return e===null?null:{regex:RegExp(e.map(Mh).join("|")),deser:([r])=>e.findIndex(n=>ta(r)===ta(n))+t}}function ra(e,t){return{regex:e,deser:([,r,n])=>di(r,n),groups:t}}function Dn(e){return{regex:e,deser:([t])=>t}}function Ih(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Bh(e,t){const r=We(t),n=We(t,"{2}"),i=We(t,"{3}"),s=We(t,"{4}"),o=We(t,"{6}"),a=We(t,"{1,2}"),u=We(t,"{1,3}"),l=We(t,"{1,6}"),c=We(t,"{1,9}"),d=We(t,"{2,4}"),m=We(t,"{4,6}"),p=k=>({regex:RegExp(Ih(k.val)),deser:([S])=>S,literal:!0}),D=(k=>{if(e.literal)return p(k);switch(k.val){case"G":return Ue(t.eras("short"),0);case"GG":return Ue(t.eras("long"),0);case"y":return U(l);case"yy":return U(d,Ds);case"yyyy":return U(s);case"yyyyy":return U(m);case"yyyyyy":return U(o);case"M":return U(a);case"MM":return U(n);case"MMM":return Ue(t.months("short",!0),1);case"MMMM":return Ue(t.months("long",!0),1);case"L":return U(a);case"LL":return U(n);case"LLL":return Ue(t.months("short",!1),1);case"LLLL":return Ue(t.months("long",!1),1);case"d":return U(a);case"dd":return U(n);case"o":return U(u);case"ooo":return U(i);case"HH":return U(n);case"H":return U(a);case"hh":return U(n);case"h":return U(a);case"mm":return U(n);case"m":return U(a);case"q":return U(a);case"qq":return U(n);case"s":return U(a);case"ss":return U(n);case"S":return U(u);case"SSS":return U(i);case"u":return Dn(c);case"uu":return Dn(a);case"uuu":return U(r);case"a":return Ue(t.meridiems(),0);case"kkkk":return U(s);case"kk":return U(d,Ds);case"W":return U(a);case"WW":return U(n);case"E":case"c":return U(r);case"EEE":return Ue(t.weekdays("short",!1),1);case"EEEE":return Ue(t.weekdays("long",!1),1);case"ccc":return Ue(t.weekdays("short",!0),1);case"cccc":return Ue(t.weekdays("long",!0),1);case"Z":case"ZZ":return ra(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return ra(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return Dn(/[a-z_+-/]{1,256}?/i);case" ":return Dn(/[^\S\n\r]/);default:return p(k)}})(e)||{invalidReason:Nh};return D.token=e,D}const Ph={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function _h(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[n];let o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=Ph[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function Oh(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function Lh(e,t,r){const n=e.match(t);if(n){const i={};let s=1;for(const o in r)if(fr(r,o)){const a=r[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(s,s+u))),s+=u}return[n,i]}else return[n,{}]}function Rh(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return I(e.z)||(r=lt.create(e.z)),I(e.Z)||(r||(r=new be(e.Z)),n=e.Z),I(e.q)||(e.M=(e.q-1)*3+1),I(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),I(e.u)||(e.S=Zs(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),r,n]}let Bi=null;function Vh(){return Bi||(Bi=M.fromMillis(1555555555555)),Bi}function Wh(e,t){if(e.literal)return e;const r=ge.macroTokenToFormatOpts(e.val),n=Tl(r,t);return n==null||n.includes(void 0)?e:n}function xl(e,t){return Array.prototype.concat(...e.map(r=>Wh(r,t)))}class kl{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=xl(ge.parseFormat(r),t),this.units=this.tokens.map(n=>Bh(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=Oh(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=Lh(t,this.regex,this.handlers),[i,s,o]=n?Rh(n):[null,null,void 0];if(fr(n,"a")&&fr(n,"H"))throw new ir("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Nl(e,t,r){return new kl(e,r).explainFromTokens(t)}function Uh(e,t,r){const{result:n,zone:i,specificOffset:s,invalidReason:o}=Nl(e,t,r);return[n,i,s,o]}function Tl(e,t){if(!e)return null;const n=ge.create(t,e).dtFormatter(Vh()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(o=>_h(o,e,s))}const Pi="Invalid DateTime",qh=864e13;function _r(e){return new ze("unsupported zone",`the zone "${e.name}" is not supported`)}function _i(e){return e.weekData===null&&(e.weekData=jn(e.c)),e.weekData}function Oi(e){return e.localWeekData===null&&(e.localWeekData=jn(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Bt(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new M({...r,...t,old:r})}function Ml(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function bn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function In(e,t,r){return Ml(ci(e),t,r)}function na(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:i,day:Math.min(e.c.day,zn(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=V.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ci(s);let[u,l]=Ml(a,r,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function er(e,t,r,n,i,s){const{setZone:o,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=M.fromObject(e,{...r,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return M.invalid(new ze("unparsable",`the input "${i}" can't be parsed as ${n}`))}function An(e,t,r=!0){return e.isValid?ge.create(j.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Li(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=le(e.c.year,r?6:4),t?(n+="-",n+=le(e.c.month),n+="-",n+=le(e.c.day)):(n+=le(e.c.month),n+=le(e.c.day)),n}function ia(e,t,r,n,i,s){let o=le(e.c.hour);return t?(o+=":",o+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=":")):o+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=le(e.c.second),(e.c.millisecond!==0||!n)&&(o+=".",o+=le(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=le(Math.trunc(-e.o/60)),o+=":",o+=le(Math.trunc(-e.o%60))):(o+="+",o+=le(Math.trunc(e.o/60)),o+=":",o+=le(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const Il={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},jh={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},zh={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Bl=["year","month","day","hour","minute","second","millisecond"],Gh=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Kh=["year","ordinal","hour","minute","second","millisecond"];function Zh(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Iu(e);return t}function sa(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Zh(e)}}function Yh(e){if(Or===void 0&&(Or=ee.now()),e.type!=="iana")return e.offset(Or);const t=e.name;let r=bs.get(t);return r===void 0&&(r=e.offset(Or),bs.set(t,r)),r}function oa(e,t){const r=At(t.zone,ee.defaultZone);if(!r.isValid)return M.invalid(_r(r));const n=j.fromObject(t);let i,s;if(I(e.year))i=ee.now();else{for(const u of Bl)I(e[u])&&(e[u]=Il[u]);const o=sl(e)||ol(e);if(o)return M.invalid(o);const a=Yh(r);[i,s]=In(e,a,r)}return new M({ts:i,zone:r,loc:n,o:s})}function aa(e,t,r){const n=I(r.round)?!0:r.round,i=(o,a)=>(o=Ys(o,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(o,a)),s=o=>r.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(r.unit)return i(s(r.unit),r.unit);for(const o of r.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,r.units[r.units.length-1])}function ua(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Or;const bs=new Map;class M{constructor(t){const r=t.zone||ee.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new ze("invalid input"):null)||(r.isValid?null:_r(r));this.ts=I(t.ts)?ee.now():t.ts;let i=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,s]=[t.old.c,t.old.o];else{const a=Ft(t.o)&&!t.old?t.o:r.offset(this.ts);i=bn(this.ts,a),n=Number.isNaN(i.year)?new ze("invalid input"):null,i=n?null:i,s=n?null:a}this._zone=r,this.loc=t.loc||j.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new M({})}static local(){const[t,r]=ua(arguments),[n,i,s,o,a,u,l]=r;return oa({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=ua(arguments),[n,i,s,o,a,u,l]=r;return t.zone=be.utcInstance,oa({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=Cf(t)?t.valueOf():NaN;if(Number.isNaN(n))return M.invalid("invalid input");const i=At(r.zone,ee.defaultZone);return i.isValid?new M({ts:n,zone:i,loc:j.fromObject(r)}):M.invalid(_r(i))}static fromMillis(t,r={}){if(Ft(t))return t<-864e13||t>qh?M.invalid("Timestamp out of range"):new M({ts:t,zone:At(r.zone,ee.defaultZone),loc:j.fromObject(r)});throw new me(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Ft(t))return new M({ts:t*1e3,zone:At(r.zone,ee.defaultZone),loc:j.fromObject(r)});throw new me("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=At(r.zone,ee.defaultZone);if(!n.isValid)return M.invalid(_r(n));const i=j.fromObject(r),s=Gn(t,sa),{minDaysInFirstWeek:o,startOfWeek:a}=Ko(s,i),u=ee.now(),l=I(r.specificOffset)?n.offset(u):r.specificOffset,c=!I(s.ordinal),d=!I(s.year),m=!I(s.month)||!I(s.day),p=d||m,y=s.weekYear||s.weekNumber;if((p||c)&&y)throw new ir("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new ir("Can't mix ordinal dates with month/day");const D=y||s.weekday&&!p;let k,S,L=bn(u,l);D?(k=Gh,S=jh,L=jn(L,o,a)):c?(k=Kh,S=zh,L=Ii(L)):(k=Bl,S=Il);let Z=!1;for(const Fr of k){const Md=s[Fr];I(Md)?Z?s[Fr]=S[Fr]:s[Fr]=L[Fr]:Z=!0}const G=D?bf(s,o,a):c?Af(s):sl(s),se=G||ol(s);if(se)return M.invalid(se);const ht=D?zo(s,o,a):c?Go(s):s,[Nd,Td]=In(ht,l,n),$r=new M({ts:Nd,zone:n,o:Td,loc:i});return s.weekday&&p&&t.weekday!==$r.weekday?M.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${$r.toISO()}`):$r.isValid?$r:M.invalid($r.invalid)}static fromISO(t,r={}){const[n,i]=hh(t);return er(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=mh(t);return er(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=ph(t);return er(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(I(t)||I(r))throw new me("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,o=j.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,c]=Uh(o,t,r);return c?M.invalid(c):er(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return M.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=Ah(t);return er(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new me("need to specify a reason the DateTime is invalid");const n=t instanceof ze?t:new ze(t,r);if(ee.throwOnInvalid)throw new Zd(n);return new M({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Tl(t,j.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return xl(ge.parseFormat(t),j.fromObject(r)).map(i=>i.val).join("")}static resetCache(){Or=void 0,bs.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?_i(this).weekYear:NaN}get weekNumber(){return this.isValid?_i(this).weekNumber:NaN}get weekday(){return this.isValid?_i(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Oi(this).weekday:NaN}get localWeekNumber(){return this.isValid?Oi(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Oi(this).weekYear:NaN}get ordinal(){return this.isValid?Ii(this.c).ordinal:NaN}get monthShort(){return this.isValid?wn.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?wn.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?wn.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?wn.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=ci(this.c),i=this.zone.offset(n-t),s=this.zone.offset(n+t),o=this.zone.offset(n-i*r),a=this.zone.offset(n-s*r);if(o===a)return[this];const u=n-o*r,l=n-a*r,c=bn(u,o),d=bn(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[Bt(this,{ts:u}),Bt(this,{ts:l})]:[this]}get isInLeapYear(){return un(this.year)}get daysInMonth(){return zn(this.year,this.month)}get daysInYear(){return this.isValid?ur(this.year):NaN}get weeksInWeekYear(){return this.isValid?Kr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Kr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=ge.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(be.instance(t),r)}toLocal(){return this.setZone(ee.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=At(t,ee.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const s=t.offset(this.ts),o=this.toObject();[i]=In(o,s,t)}return Bt(this,{ts:i,zone:t})}else return M.invalid(_r(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Bt(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Gn(t,sa),{minDaysInFirstWeek:n,startOfWeek:i}=Ko(r,this.loc),s=!I(r.weekYear)||!I(r.weekNumber)||!I(r.weekday),o=!I(r.ordinal),a=!I(r.year),u=!I(r.month)||!I(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||o)&&c)throw new ir("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new ir("Can't mix ordinal dates with month/day");let d;s?d=zo({...jn(this.c,n,i),...r},n,i):I(r.ordinal)?(d={...this.toObject(),...r},I(r.day)&&(d.day=Math.min(zn(d.year,d.month),d.day))):d=Go({...Ii(this.c),...r});const[m,p]=In(d,this.o,this.zone);return Bt(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const r=V.fromDurationLike(t);return Bt(this,na(this,r))}minus(t){if(!this.isValid)return this;const r=V.fromDurationLike(t).negate();return Bt(this,na(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=V.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?ge.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Pi}toLocaleString(t=qn,r={}){return this.isValid?ge.create(this.loc.clone(r),t).formatDateTime(this):Pi}toLocaleParts(t={}){return this.isValid?ge.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Li(this,o);return a+="T",a+=ia(this,o,r,n,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?Li(this,t==="extended"):null}toISOWeekDate(){return An(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+ia(this,o==="extended",r,t,n,s):null}toRFC2822(){return An(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return An(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Li(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),An(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Pi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return V.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=$f(r).map(V.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=kh(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(M.now(),t,r)}until(t){return this.isValid?ne.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||M.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),aa(r,this.plus(n),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?aa(t.base||M.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(M.isDateTime))throw new me("min requires all arguments be DateTimes");return Zo(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(M.isDateTime))throw new me("max requires all arguments be DateTimes");return Zo(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,o=j.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return Nl(o,t,r)}static fromStringExplain(t,r,n={}){return M.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,s=j.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new kl(s,t)}static fromFormatParser(t,r,n={}){if(I(t)||I(r))throw new me("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=n,o=j.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(r.locale))throw new me(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?M.invalid(c):er(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return qn}static get DATE_MED(){return Bu}static get DATE_MED_WITH_WEEKDAY(){return Hd}static get DATE_FULL(){return Pu}static get DATE_HUGE(){return _u}static get TIME_SIMPLE(){return Ou}static get TIME_WITH_SECONDS(){return Lu}static get TIME_WITH_SHORT_OFFSET(){return Ru}static get TIME_WITH_LONG_OFFSET(){return Vu}static get TIME_24_SIMPLE(){return Wu}static get TIME_24_WITH_SECONDS(){return Uu}static get TIME_24_WITH_SHORT_OFFSET(){return qu}static get TIME_24_WITH_LONG_OFFSET(){return ju}static get DATETIME_SHORT(){return zu}static get DATETIME_SHORT_WITH_SECONDS(){return Gu}static get DATETIME_MED(){return Ku}static get DATETIME_MED_WITH_SECONDS(){return Zu}static get DATETIME_MED_WITH_WEEKDAY(){return Qd}static get DATETIME_FULL(){return Yu}static get DATETIME_FULL_WITH_SECONDS(){return Ju}static get DATETIME_HUGE(){return Hu}static get DATETIME_HUGE_WITH_SECONDS(){return Qu}}function Sr(e){if(M.isDateTime(e))return e;if(e&&e.valueOf&&Ft(e.valueOf()))return M.fromJSDate(e);if(e&&typeof e=="object")return M.fromObject(e);throw new me(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var T;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(T||(T={}));T.Years+"",T.Quarters+"",T.Months+"",T.Weeks+"",T.Days+"",T.Hours+"",T.Minutes+"",T.Seconds+"",T.Milliseconds+"";T.Years+"",T.Quarters+"",T.Months+"",T.Weeks+"",T.Days+"",T.Hours+"",T.Minutes+"",T.Seconds+"",T.Milliseconds+"";const Pl=[T.Milliseconds,T.Seconds,T.Minutes,T.Hours,T.Days,T.Weeks,T.Months,T.Quarters,T.Years];T.Milliseconds+"",T.Seconds+"",T.Minutes+"",T.Hours+"",T.Days+"",T.Weeks+"",T.Months+"",T.Quarters+"",T.Years+"";function Jh(e){return Pl.filter(t=>e[t])}function As(e,{roundToDigits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function Hh(e){return As(Math.max(e-.4,0),{roundToDigits:0})}function la(e){return e===0?0:Math.sign(e)}function hr(e,t,r={}){const n={},i={roundToDigits:r.roundToDigits==null?void 0:Math.round(Math.abs(r.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=V.fromObject(e).as(T.Milliseconds);const u=Jh(t).reverse(),l=la(a);u.forEach((p,y)=>{const D=y===u.length-1;if(s&&o||s)n[p]=1/0;else if(o)n[p]=-1/0;else if(p===T.Milliseconds)n.milliseconds=As(a,i);else{const k=V.fromObject({milliseconds:a}).as(p),S=Math.sign(k),L=Math.abs(k),Z=D?As(L,i):Math.floor(i.roundToDigits==null?L:Hh(L)),G=Z===0?0:Z*S;n[p]=G,a-=V.fromObject({[p]:G}).as(T.Milliseconds),l!==la(a)&&(a=0)}});let c=!1;const d=[],m=Pl.toReversed().filter(p=>n[p]?(c=!0,!0):c?(d.push(p),!1):!0);if(m.length<u.length){const p={};m.forEach(D=>p[D]=!0);const y=hr(e,p,i);return d.forEach(D=>y[D]=0),y}return n}var x;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(x||(x={}));x.Year,x.Hour,x.Minute,x.Second,x.Millisecond;x.Quarter,x.Month,x.Week,x.Day;x.Millisecond,x.Second,x.Minute,x.Hour,x.Day,x.Week,x.Month,x.Quarter,x.Year;var pe;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(pe||(pe={}));pe.Sunday+"",pe.Monday+"",pe.Tuesday+"",pe.Wednesday+"",pe.Thursday+"",pe.Friday+"",pe.Saturday+"";pe.Sunday,pe.Monday,pe.Tuesday,pe.Wednesday,pe.Thursday,pe.Friday,pe.Saturday;var Ce;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Ce||(Ce={}));Ce.January,Ce.February,Ce.March,Ce.April,Ce.May,Ce.June,Ce.July,Ce.August,Ce.September,Ce.October,Ce.November,Ce.December;const ca={min:1,max:12},da={min:1,max:31},fa={min:0,max:23},ha={min:0,max:59},ma={min:0,max:59},pa={min:0,max:999};function Kn(e){const t=new Un,r=hr(e,{milliseconds:!0}).milliseconds;return r!==1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}class f extends Error{name="AssertionError";constructor(t,r){super(oi(r,t)||"Assertion failed.")}}const ga={interval:{milliseconds:100},timeout:{seconds:10}},Ri=Symbol("not set");async function Qh(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:s,options:o}=Xh(t),a=hr(o.timeout,{milliseconds:!0}).milliseconds,u=hr(o.interval,{milliseconds:!0});let l=Ri,c;async function d(){try{l=r?n():await n(),e(l,...i)}catch(p){l=Ri,c=ce(p)}}const m=Date.now();for(;l===Ri;)if(await d(),await Kn(u),Date.now()-m>=a){const y=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw ai(c,y)}return l}function E(e,t=!1){return(...r)=>Qh(e,r,t)}function Xh(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:_l(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function _l(e){return{interval:e?.interval||ga.interval,timeout:e?.timeout||ga.timeout}}const xr={isFalse(e,t){if(e!==!1)throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new f(`'${h(e)}' is not truthy.`,t)}},Ol={assert:xr,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new f(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:E(xr.isFalse),isFalsy:E(xr.isFalsy),isTrue:E(xr.isTrue),isTruthy:E(xr.isTruthy)}};function em(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,r)}function tm(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,r)}function rm(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,r)}function nm(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,r)}const kr={endsWith:em,endsWithout:tm,startsWith:rm,startsWithout:nm},Ll={assert:kr,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,r);return e},endsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,r);return e},startsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,r);return e},startsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,r);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:E(kr.endsWith),endsWithout:E(kr.endsWithout),startsWith:E(kr.startsWith),startsWithout:E(kr.startsWithout)}};function im(e,t,r){const n=Je(t);if(!n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function st(e,t){return Je(t).includes(e)}const Vi={isEnumValue(e,t,r){im(e,t,r)},isNotEnumValue(e,t,r){const n=Je(t);if(n.includes(e))throw new f(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Rl={assert:Vi,check:{isEnumValue:st,isNotEnumValue(e,t){return!Je(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=Je(t);if(!n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=Je(t);if(n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(Je(t).includes(e))return e},isNotEnumValue(e,t){if(!Je(t).includes(e))return e}},waitUntil:{isEnumValue:E(Vi.isEnumValue),isNotEnumValue:E(Vi.isNotEnumValue)}},Wi={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new f("Entries are equal.",r)}},Vl={assert:Wi,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],s=t[n];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],s=t[n];return i!==s})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new f("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:E(Wi.entriesEqual),notEntriesEqual:E(Wi.notEntriesEqual)}};function Zn(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Zr(e,t){if(!(e===t||Zn(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Zn(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{Zr(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${Le(o)}`)}})}throw new Error("Values are not JSON equal.")}}function Lr(e,t){if(e===t||Zn(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Zn(r,n)?!1:Object.keys(e).every(s=>Lr(e[s],t[s]))}return!1}const Ui={jsonEquals(e,t,r){try{Zr(e,t)}catch(n){throw new f(Le(n),r)}},notJsonEquals(e,t,r){try{Zr(e,t)}catch{return}throw new f("Values are JSON equal.",r)}},Wl={assert:Ui,check:{jsonEquals(e,t){return Lr(e,t)},notJsonEquals(e,t){return!Lr(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Zr(e,t),e}catch(n){throw new f(Le(n),r)}},notJsonEquals(e,t,r){try{Zr(e,t)}catch{return e}throw new f("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Lr(e,t))return e},notJsonEquals(e,t){if(!Lr(e,t))return e}},waitUntil:{jsonEquals:E(Ui.jsonEquals),notJsonEquals:E(Ui.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function ya(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Ul(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Ul.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var ql=typeof WeakMap=="function"?WeakMap:Ul;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function va(e,t,r){if(!r||mr(e)||mr(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function En(e,t,r,n){if(!(!r||mr(e)||mr(t))){var i=r.get(e);i?i.set(t,n):(i=new ql,i.set(t,n),r.set(e,i))}}function qe(e,t,r){if(r&&r.comparator)return wa(e,t,r);var n=jl(e,t);return n!==null?n:wa(e,t,r)}function jl(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:mr(e)||mr(t)?!1:null}/*!
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
*/function wa(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new ql;var n=r&&r.comparator,i=va(e,t,r.memoize);if(i!==null)return i;var s=va(t,e,r.memoize);if(s!==null)return s;if(n){var o=n(e,t);if(o===!1||o===!0)return En(e,t,r.memoize,o),o;var a=jl(e,t);if(a!==null)return a}var u=ya(e);if(u!==ya(t))return En(e,t,r.memoize,!1),!1;En(e,t,r.memoize,!0);var l=sm(e,t,u,r);return En(e,t,r.memoize,l),l}function sm(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return qe(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return zl(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Wt(e,t,n);case"RegExp":return om(e,t);case"Generator":return am(e,t,n);case"DataView":return Wt(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Wt(new Uint8Array(e),new Uint8Array(t),n);case"Set":return Da(e,t,n);case"Map":return Da(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return lm(e,t,n)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function om(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Da(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(o,a){n.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),Wt(n.sort(),i.sort(),r)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Wt(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(qe(e[i],t[i],r)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function am(e,t,r){return Wt(Es(e),Es(t),r)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function um(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function ba(e){if(um(e))try{return Es(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Es(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Aa(e){var t=[];for(var r in e)t.push(r);return t}function Ea(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function zl(e,t,r,n){var i=r.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(qe(e[r[s]],t[r[s]],n)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function lm(e,t,r){var n=Aa(e),i=Aa(t),s=Ea(e),o=Ea(t);if(n=n.concat(s),i=i.concat(o),n.length&&n.length===i.length)return Wt(Ca(n).sort(),Ca(i).sort())===!1?!1:zl(e,t,n,r);var a=ba(e),u=ba(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Wt(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function mr(e){return e===null||typeof e!="object"}function Ca(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}const yt={strictEquals(e,t,r){if(e!==t)throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,r)},deepEquals(e,t,r){if(!qe(e,t))throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(qe(e,t))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,r)}},Gl=yt.deepEquals,Kl={assert:yt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return qe(e,t)},notDeepEquals(e,t){return!qe(e,t)}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,r);return e},deepEquals(e,t,r){if(qe(e,t))return e;throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(qe(e,t))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(qe(e,t))return e},notDeepEquals(e,t){if(!qe(e,t))return e}},waitUntil:{strictEquals:E(yt.strictEquals),notStrictEquals:E(yt.notStrictEquals),looseEquals:E(yt.looseEquals),notLooseEquals:E(yt.notLooseEquals),deepEquals:E(yt.deepEquals),notDeepEquals:E(yt.notDeepEquals)}};function xe(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Ie(e,t){return typeof t=="string"?t.includes(e):xe(t,e)}const rt={hasValue(e,t,r){if(!xe(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,r)},lacksValue(e,t,r){if(xe(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new f(`'${h(e)}' does not have values '${h(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new f(`'${h(e)}' has values '${h(n)}'.`,r)},isIn(e,t,r){if(!Ie(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,r)},isNotIn(e,t,r){if(Ie(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is not empty.`,t)}}},Zl={assert:rt,check:{hasValue(e,t){return xe(e,t)},lacksValue(e,t){return!xe(e,t)},hasValues(e,t){return t.every(r=>xe(e,r))},lacksValues(e,t){return t.every(r=>!xe(e,r))},isIn(e,t){return Ie(e,t)},isNotIn(e,t){return!Ie(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!xe(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,r);return e},lacksValue(e,t,r){if(xe(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new f(`'${h(e)}' does not have values '${h(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new f(`'${h(e)}' has values '${h(n)}'.`,r);return e},isIn(e,t,r){if(!Ie(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,r);return e},isNotIn(e,t,r){if(Ie(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(xe(e,t))return e},lacksValue(e,t){if(!xe(e,t))return e},hasValues(e,t){if(t.every(r=>xe(e,r)))return e},lacksValues(e,t){if(!t.every(r=>xe(e,r)))return e},isIn(e,t){if(Ie(e,t))return e},isNotIn(e,t){if(!Ie(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:E(rt.hasValue),lacksValue:E(rt.lacksValue),hasValues:E(rt.hasValues),lacksValues:E(rt.lacksValues),isIn:E(rt.isIn),isNotIn:E(rt.isNotIn),isEmpty:E(rt.isEmpty),isNotEmpty:E(rt.isNotEmpty)}},qi={isHttpStatus(e,t){if(!st(e,g))throw new f(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(st(e,g)){if(!Ie(e,Mn[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new f(`${h(e)} is not a valid HTTP status.`,r)}},Yl={assert:qi,check:{isHttpStatus(e){return st(e,g)},isHttpStatusCategory(e,t){return st(e,g)&&Ie(e,Mn[t])}},assertWrap:{isHttpStatus(e,t){if(!st(e,g))throw new f(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(st(e,g)){if(!Ie(e,Mn[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new f(`${h(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(st(e,g))return e},isHttpStatusCategory(e,t){if(st(e,g)&&Ie(e,Mn[t]))return e}},waitUntil:{isHttpStatus:E(qi.isHttpStatus),isHttpStatusCategory:E(qi.isHttpStatusCategory)}},ji={instanceOf(e,t,r){if(!(e instanceof t))throw new f(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,r)}},Jl={assert:ji,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new f(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:E(ji.instanceOf),notInstanceOf:E(ji.notInstanceOf)}},cm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function X(e,t){return cm.some(r=>{try{return r(e,t)}catch{return!1}})}const Pt={isKeyOf(e,t,r){if(!X(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,r)},isNotKeyOf(e,t,r){if(X(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,r)},hasKey(e,t,r){if(!X(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(X(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!X(e,i));if(n.length)throw new f(`'${h(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>X(e,i));if(n.length)throw new f(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r)}},Hl={assert:Pt,check:{isKeyOf(e,t){return X(t,e)},isNotKeyOf(e,t){return!X(t,e)},hasKey:X,lacksKey(e,t){return!X(e,t)},hasKeys(e,t){return t.every(r=>X(e,r))},lacksKeys(e,t){return t.every(r=>!X(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!X(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(X(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,r);return e},hasKey(e,t,r){if(!X(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(X(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!X(e,i));if(n.length)throw new f(`'${h(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>X(e,i));if(n.length)throw new f(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(X(t,e))return e},isNotKeyOf(e,t){if(!X(t,e))return e},hasKey(e,t){if(X(e,t))return e},lacksKey(e,t){if(!X(e,t))return e},hasKeys(e,t){if(t.every(r=>X(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!X(e,r)))return e}},waitUntil:{isKeyOf:E(Pt.isKeyOf),isNotKeyOf:E(Pt.isNotKeyOf),hasKey:E(Pt.hasKey),lacksKey:E(Pt.lacksKey),hasKeys:E(Pt.hasKeys),lacksKeys:E(Pt.lacksKeys)}};function dm(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:z(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,r)}function fm(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:z(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,r)}const zi={isLengthAtLeast:dm,isLengthExactly:fm},Ql={assert:zi,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:z(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:z(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:z(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,r);return e},isLengthExactly:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:z(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,r);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:z(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:z(e).length)===t)return e}},waitUntil:{isLengthAtLeast:E(zi.isLengthAtLeast),isLengthExactly:E(zi.isLengthExactly)}},Gi={isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new f(`'${h(e)}' is not a nullish.`,t)}},Xl={assert:Gi,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new f(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:E(Gi.isDefined),isNullish:E(Gi.isNullish)}},Ee={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new f(`${e} is not within the bounds ${h({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new f(`${e} is not outside the bounds ${h({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new f(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new f(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new f(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new f(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new f(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new f(`${e} is within ±${r} of ${t}`,n)}},ec={assert:Ee,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new f(`${e} is not within the bounds ${h({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new f(`${e} is not outside the bounds ${h({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new f(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new f(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new f(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new f(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new f(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new f(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:E(Ee.isInBounds),isOutBounds:E(Ee.isOutBounds),isInteger:E(Ee.isInteger),isNotInteger:E(Ee.isNotInteger),isAbove:E(Ee.isAbove),isAtLeast:E(Ee.isAtLeast),isBelow:E(Ee.isBelow),isAtMost:E(Ee.isAtMost),isNaN:E(Ee.isNaN),isFinite:E(Ee.isFinite),isInfinite:E(Ee.isInfinite),isApproximately:E(Ee.isApproximately),isNotApproximately:E(Ee.isNotApproximately)}};function hm(e,t,r,n,i){return dn(...hi(e,t,r,n,i),!1)}function hi(e,t,r,n,i){const s=Array.isArray(r);return[s?e:Gl,s?t:e,s?r:t,s?n:r,s?i:n]}function dn(e,t,r,n,i,s){const o=t(...r);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,n),s?a(l):a()}catch(l){u(new f(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Le(l)}`,i))}});try{return e(o,n),s?o:void 0}catch(a){throw new f(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Le(a)}`,i)}}function mm(e,t,r,n,i){try{const s=dn(...hi(e,t,r,n,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function pm(e,t,r,n,i){return dn(...hi(e,t,r,n,i),!0)}function gm(e,t,r,n,i){try{const s=dn(...hi(e,t,r,n,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const Ki=Symbol("not set");async function ym(e,t,r,n,i,s){const o=Array.isArray(r),a=o?e:Gl,u=o?t:e,l=o?r:t,c=o?n:r,d=_l(o?i:n),m=o?s:i,p=hr(d.timeout,{milliseconds:!0}).milliseconds,y=hr(d.interval,{milliseconds:!0});let D=Ki,k;async function S(){try{D=await dn(a,u,l,c,void 0,!0)}catch(Z){D=Ki,k=ce(Z)}}const L=Date.now();for(;D===Ki;)if(await S(),await Kn(y),Date.now()-L>=p)throw ai(k,oi(m,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return D}const vm={output:hm},tc={assert:vm,check:{output:mm},assertWrap:{output:pm},checkWrap:{output:gm},waitUntil:{output:ym}},Nr={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t)}},rc={assert:Nr,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:E(Nr.isNotPrimitive),isNotPropertyKey:E(Nr.isNotPropertyKey),isPrimitive:E(Nr.isPrimitive),isPropertyKey:E(Nr.isPropertyKey)}},Tr={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t)}},nc={assert:Tr,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:E(Tr.isPromiseLike,!0),isNotPromiseLike:E(Tr.isNotPromiseLike,!0),isPromise:E(Tr.isPromise,!0),isNotPromise:E(Tr.isNotPromise,!0)}},Zi={matches(e,t,r){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new f(`'${e}' matches ${t}`,r)}},ic={assert:Zi,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new f(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:E(Zi.matches,!0),mismatches:E(Zi.mismatches,!0)}},oe={isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t)}},sc={assert:oe,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:E(oe.isArray),isBigInt:E(oe.isBigInt),isBoolean:E(oe.isBoolean),isFunction:E(oe.isFunction),isNull:E(oe.isNull),isNumber:E(oe.isNumber),isObject:E(oe.isObject),isString:E(oe.isString),isSymbol:E(oe.isSymbol),isUndefined:E(oe.isUndefined),isNotArray:E(oe.isNotArray),isNotBigInt:E(oe.isNotBigInt),isNotBoolean:E(oe.isNotBoolean),isNotFunction:E(oe.isNotFunction),isNotNull:E(oe.isNotNull),isNotNumber:E(oe.isNotNumber),isNotObject:E(oe.isNotObject),isNotString:E(oe.isNotString),isNotSymbol:E(oe.isNotSymbol),isNotUndefined:E(oe.isNotUndefined)}};var Fe;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Fe||(Fe={}));function Xs(e,t,r){eo(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r)}function $a(e,t,r){eo(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,r)}function eo(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new f(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=Le(e);if(typeof r.matchMessage=="string"){if(!i.includes(r.matchMessage))throw new f(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new f(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new f(t.notInstance,n);else throw new f(t.noError,n)}function Fa(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Le(e);if(typeof t.matchMessage=="string"){if(!r.includes(t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function mi(e,t,r,n){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=ce(u)}try{$a(i,r,n),e===Fe.Assert?o():e===Fe.Check?o(!0):o(i)}catch(u){e===Fe.CheckWrap?o(void 0):e===Fe.Check?o(!1):a(ce(u))}})}catch(s){i=ce(s)}try{return $a(i,r,n),e===Fe.Check?!0:e!==Fe.Assert?i:void 0}catch(s){if(e===Fe.CheckWrap)return;if(e===Fe.Check)return!1;throw s}}function wm(e,t,r){return mi(Fe.Assert,e,t,r)}function Dm(e,t){return mi(Fe.Check,e,t)}function bm(e,t,r){return mi(Fe.AssertWrap,e,t,r)}function Am(e,t,r){return mi(Fe.CheckWrap,e,t,r)}const Em=E(Xs);function Cm(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${h(s)}'`);return Em(i,async()=>{try{await s();return}catch(u){return ce(u)}},a,o)}const $m={throws:wm,isError:Xs},oc={assert:$m,check:{throws:Dm,isError(e,t){return Fa(e,t)}},assertWrap:{throws:bm,isError(e,t,r){return eo(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:Am,isError(e,t){if(Fa(e,t))return e}},waitUntil:{throws:Cm,isError:E(Xs)}},Dt=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Yi={isUuid(e,t){if(!String(e).match(Dt))throw new f(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Dt))throw new f(`'${String(e)}' is a UUID.`,t)}},ac={assert:Yi,check:{isUuid(e){return!!String(e).match(Dt)},isNotUuid(e){return!String(e).match(Dt)}},assertWrap:{isUuid(e,t){if(!String(e).match(Dt))throw new f(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Dt))throw new f(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Dt))return e},isNotUuid(e){if(!String(e).match(Dt))return e}},waitUntil:{isUuid:E(Yi.isUuid),isNotUuid:E(Yi.isNotUuid)}},Fm={...Ol.assert,...Ll.assert,...Vl.assert,...Rl.assert,...Jl.assert,...Wl.assert,...Hl.assert,...Ql.assert,...Xl.assert,...ec.assert,...rc.assert,...nc.assert,...ic.assert,...sc.assert,...Kl.assert,...oc.assert,...ac.assert,...Zl.assert,...Yl.assert,...tc.assert},to=[Ol,Ll,Vl,Rl,Jl,Wl,Hl,Ql,Xl,ec,rc,nc,ic,sc,Kl,oc,ac,Zl,Yl,tc],Sm=Object.assign({},...to.map(e=>e.check)),A=Object.assign(function(t){return!!t},Sm);function xm(e,t,r){return Bn(e,t,r,new Set)}function Bn(e,t,r,n){if(e=Sa(e),t=Sa(t),A.isObject(e)&&A.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Bn(z(e).sort(),z(t).sort(),r,n))return!1;let i=!1;const s=z(e).map(o=>{const a=Bn(e[o],t[o],r,n);return A.isPromise(a)&&(i=!0),a});return xa(i,s)}else if(A.isArray(e)&&A.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Bn(o,t[a],r,n);return A.isPromise(u)&&(i=!0),u});return xa(i,s)}else return r(e,t)}function Sa(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function xa(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(A.isTrue))}catch(i){n(ce(i))}}):t.every(A.isTrue)}const km=Object.assign({},...to.map(e=>e.assertWrap)),Nm=Object.assign(function(t,r){if(!t)throw new f("Assertion failed.",r);return t},km);function Tm(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const Mm={tsType:Tm},Im={assert:Mm},Bm={fail:e=>{throw new f("Failure triggered.",e)}},Pm={...Im.assert,...Fm,...Bm},Re=Object.assign(function(t,r){if(!t)throw new f("Assertion failed.",r)},Pm),_m=Object.assign({},...to.map(e=>e.checkWrap)),Om=Object.assign(function(t){if(t)return t},_m);function uc(e,t,r){if(t in e)return e[t];{const n=r();return A.isPromise(n)?new Promise(async(i,s)=>{try{const o=await n;e[t]=o,i(o)}catch(o){s(ce(o))}}):(e[t]=n,n)}}function ro(e){return z(e).map(t=>[t,e[t]])}function pr(e){return Object.fromEntries(e)}function no(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function Lm(e,t){try{let r=!1;const n=e.map((i,s,o)=>{const a=t(i,s,o);return a instanceof Promise?(r=!0,a):a?[a.key,a.value]:void 0}).filter(A.isTruthy);return r?new Promise(async(i,s)=>{try{const o=no(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},A.isTruthy);i(pr(o))}catch(o){s(ce(o))}}):pr(n)}catch(r){throw ce(r)}}function Rm({min:e,max:t}){const{min:r,max:n}=Mu({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,m)=>c+d*256**m,0);while(l>=a);return r+l%i}const ka=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Ji(e=16){let t="";for(let r=0;r<e;r++){const n=Rm({min:0,max:ka.length-1});t+=ka[n]}return t}function Cs(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Vm="modulepreload",Wm=function(e){return"/gamepad-type/"+e},Na={},Um=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let o=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=a?.nonce||a?.getAttribute("nonce");i=o(r.map(l=>{if(l=Wm(l),l in Na)return;Na[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Vm,c||(m.as="script"),m.crossOrigin="",m.href=l,u&&m.setAttribute("nonce",u),document.head.appendChild(m),c)return new Promise((p,y)=>{m.addEventListener("load",p),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};function qm(e){return e.replace(/,/g,"")}function jm(e){return typeof e=="number"?e:Number(typeof e=="string"?qm(e):e)}function Ta(e){const t=zm(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function zm(e){const t=jm(e);if(!isNaN(t))return t}const Gm="px";function Km(e){return Zm({value:e,suffix:Gm})}function Zm({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Ym(e,t){try{let r=!1;const n=ro(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(r=!0,o):o?[o.key,o.value]:void 0}).filter(A.isTruthy);return r?new Promise(async(i,s)=>{try{const o=no(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},A.isTruthy);i(pr(o))}catch(o){s(ce(o))}}):pr(n)}catch(r){throw ce(r)}}function Jm(e,...t){const r={...e};return t.forEach(n=>{n&&ro(n).forEach(([i,s])=>{s!=null&&(r[i]=s)})}),r}function Hi(e,t){const{min:r,max:n}=Mu(t);return e>n?r:e<r?n:e}function Xe(e,t){let r=!1;const n=z(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),i[s]=o,i},{});return r?new Promise(async(i,s)=>{try{await Promise.all(z(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(ce(o))}}):n}function lc(...e){if(!A.isLengthAtLeast(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(n=>{if(A.isObject(n))A.isObject(t)||(t={...n});else{t=n;return}Object.entries(n).forEach(([i,s])=>{r[i]||(r[i]=[]),r[i].push(s)})}),A.isObject(t)&&Object.entries(r).forEach(([n,i])=>{const s=lc(...i);s===void 0&&n in t?delete t[n]:s!==void 0&&(t[n]=s)}),t}function cc(e,t){const r=ro(e).filter(([n,i])=>t(n,i,e));return pr(r)}function dc(e,t){return cc(e,r=>t.includes(r))}function qt(e){return z(e).map(t=>e[t])}function Hm(e,t){return t.capitalizeFirstLetter?fc(e):e}function fc(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Qm={capitalizeFirstLetter:!1};var gr;(function(e){e.Upper="upper",e.Lower="lower"})(gr||(gr={}));function Xm(e){return e.toLowerCase()!==e.toUpperCase()}function Ma(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(Xm(n)){if(t===gr.Upper&&n!==n.toUpperCase()||t===gr.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function hc(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Hm(n,Jm(Qm,t))}function ep(e){return e.split("").reduce((r,n,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=Ma(o,gr.Lower,{rejectNoCaseCharacters:!0})||Ma(a,gr.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function tp(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function et(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function io(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class mc{listeners={};getListenerCount(){return qt(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)}listen(t,r,n={}){const i=this.listeners,s=A.isString(t)?t:t.type;function o(){return i[s]?.delete(r)||!1}function a(u,l){n.once&&o(),r(u,l)}return uc(i,s,()=>new Map).set(r,{listener:a,removeListener:o}),o}removeListener(t,r){const n=A.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type],n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),n}removeAllListeners(){const r=qt(this.listeners).reduce((n,i)=>{const s=i.size||0;return i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class so extends mc{}function rp(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Lt(e,t,r){return rp(globalThis,e,t,r)}const pc=Symbol("no update");function Ia(e){return e!==pc}class Qi extends et()("observable-value-update"){}class np extends et()("observable-value-resolve"){}class ip extends et()("observable-value-error"){}class sp extends io("observable-destroy"){}class op extends io("observable-callback-call"){}class ap extends et()("observable-params-update"){}class gc{listenTarget=new so;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];return r===pc||(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)?!1:(this.value=r,this.listenTarget.dispatch(new Qi({detail:r})),!0)}listen(t,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(Qi,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Qi,r)}destroy(){this.listenTarget.dispatch(new sp),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function oo(e,t){return xm(e,t,(r,n)=>A.isFunction(r)&&A.isFunction(n)?!0:A.strictEquals(r,n))}class up extends gc{equalityCheck;waitingForValueDeferredPromise=new Un;lastSetPromise;lastSetId=Ji();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||oo,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Ji();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Un,super.setValue(this.waitingForValueDeferredPromise.promise,A.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=ce(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return Ia(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,A.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Ji(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new np({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,A.strictEquals),this.dispatch(new ip({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Ia(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(ce(r)),!0}}listen(t,r){return super.listen(t,r)}}class sr extends up{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==sr.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||oo,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:sr.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===sr.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(ce(t))}finally{this.dispatch(new op)}}updateLastParams(t){try{return this.internalParams===sr.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new ap({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(ce(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return A.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}const yc="__vir__shape__definition__key__do__not__use__in__actual__objects",ao="__vir__shape__specifier__key__do__not__use__in__actual__objects",vc="__vir__custom__specifier__key__do__not__use__in__actual__objects";function uo(e){return A.hasKey(e,vc)}function wc({customName:e,defaultValue:t,checker:r}){return{customName:e,checker:r,defaultValue:t,[vc]:!0,[ao]:!0}}wc({customName:"UUID",defaultValue:Nm.isUuid("00000000-0000-1000-0000-000000000000"),checker:A.isUuid});function lo(e){return A.hasKey(e,yc)}var de;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(de||(de={}));function lp(...e){return Zt(e,de.And)}function cp(...e){return Zt(e,de.Enum)}function P(...e){return Zt(e,de.Exact)}function dp(...e){return Zt(e,de.IndexedKeys)}function gt(...e){return Zt(e,de.Or)}function fp(e){return Zt([e],de.Unknown)}function or(e,t){return Zt([e,t],de.NumericRange)}function pi(e){return tt(e,de.And)}function gi(e){return tt(e,de.Class)}function yi(e){return tt(e,de.Enum)}function vi(e){return tt(e,de.Exact)}function wi(e){return tt(e,de.IndexedKeys)}function Dc(e){return tt(e,de.Tuple)}function fn(e){return tt(e,de.Or)}function Di(e){return tt(e,de.Unknown)}function bc(e){return tt(e,de.NumericRange)}function Yn(e){return tt(e,de.Optional)}function tt(e,t){const r=hn(e);return!!r&&r.specifierType===t}function Zt(e,t){return{[ao]:!0,specifierType:t,parts:e}}function hn(e){if(!(!A.isObject(e)||!A.hasKey(e,ao)))return e}class Ba extends TypeError{name="DefaultValueConstructionError"}function hp(e,t){const r=t?.constructor,n=e?.constructor?.prototype,i=e?.constructor===r,s=r&&n?n instanceof r:!1;return typeof e==typeof t&&(i||s)}class $e extends TypeError{name="ShapeMismatchError"}function mp(e,t,r={}){try{return pp(e,t,r),!0}catch{return!1}}function pp(e,t,r={},n=""){try{ve({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?ai(i,n):i}}function $s(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ve({subject:e,shape:t,keys:r,options:n}){if(Di(t))return!0;if(lo(t))return ve({subject:e,shape:t.shape,keys:r,options:n});if(uo(t)){if(!t.checker(e))throw new $e(`Subject ${h(e)} does not match ${t.customName} shape.`);return!0}const i=$s(r);if(hn(e))throw new $e(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(Dc(t)){if(!A.isArray(e))throw new $e(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((o,a)=>{const u=e[a];return ve({keys:[...r,a],options:n,shape:o,subject:u})})}else{if(Yn(t))return ve({keys:r,options:n,shape:t.parts[0],subject:e});if(Pn(e,t,r,n)){if(A.isFunction(t))return A.isFunction(e);if(gi(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(c=>[c,!1])),u=[];let l=!1;if(fn(t)){const c=[];l=t.parts.some(d=>{try{const m=ve({subject:e,shape:d,keys:r,options:n});return Object.assign(a,m),!0}catch(m){if(m instanceof $e)return c.push(m.message),!1;throw m}}),!l&&A.isLengthAtLeast(c,1)&&u.push(c[0])}else if(pi(t))l=t.parts.every(c=>{try{const d=ve({subject:e,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,d),!0}catch(d){if(d instanceof $e)return u.push(d.message),!1;throw d}});else if(vi(t)){const c=ve({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,c),l=!0}else{if(yi(t))throw new $e(`Cannot compare an enum specifier to an object at ${i}`);if(A.isArray(t)&&A.isArray(o))l=o.every((c,d)=>{const m=t.some(p=>{try{return ve({subject:c,shape:p,keys:[...r,d],options:n}),!0}catch(y){if(y instanceof $e)return u.push(y.message),!1;throw y}});return a[d]=m,m});else if(wi(t)){const c=Xe(e,(d,m)=>(n.ignoreExtraKeys||ve({shape:t.parts[0].keys,subject:d,keys:[...r,d],options:n}),ve({shape:t.parts[0].values,subject:m,keys:[...r,d],options:n}),!0));Object.assign(a,c),l=!0}else{const c=gp({keys:r,options:n,shape:t,subject:e});Object.assign(a,c),l=!0}}if(u.length)throw new $e(oi(u));if(!l){const d=`Failed on key(s): ${Object.keys(a).filter(m=>!a[m]).map(m=>$s([...r,m])).join(",")}`;throw new $e(d)}return n.ignoreExtraKeys||Object.entries(a).forEach(([c,d])=>{if(!d)throw new $e(`subject as extra key '${c}' in ${i}.`)}),a}else if(n.exactValues)return e===t}else throw new $e(`Subject does not match shape definition at key ${i}`)}return!0}function gp({keys:e,options:t,shape:r,subject:n}){const i=$s(e),s={};if(A.isObject(r)){const o=new Set(z(r)),a=new Set(z(n));o.forEach(u=>{(u in n||Yn(r[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new $e(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=r[u],c=fn(l)?l.parts.includes(void 0):!1,d=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!c&&!d)throw new $e(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in n)&&Yn(r[u])){s[u]=!0;return}const l=n[u];if(t.ignoreExtraKeys&&!o.has(u))return;const c=r[u];ve({subject:l,shape:c,keys:[...e,u],options:t}),s[u]=!0})}else throw new $e(`Shape definition at ${i} was not an object.`);return s}function Pn(e,t,r,n,i){const s=hn(t);if(s){if(uo(s))return s.checker(e);if(bc(s))return A.isNumber(e)?e>=s.parts[0]&&e<=s.parts[1]:!1;if(gi(s))return e instanceof s.parts[0];if(pi(s))return s.parts.every(o=>{try{return ve({subject:e,shape:o,keys:r,options:{...n,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(fn(s))return s.parts.some(o=>{try{return ve({subject:e,shape:o,keys:r,options:n}),!0}catch{return!1}});if(vi(s))return A.isObject(e)?(ve({subject:e,shape:s.parts[0],keys:r,options:{...n,exactValues:!0}}),!0):e===s.parts[0];if(yi(s))return A.hasValue(Object.values(s.parts[0]),e);if(wi(s)){if(!A.isObject(e))return!1;const o=yp(e,s,!!n.ignoreExtraKeys),a=qt(e).every(u=>{try{return ve({subject:u,shape:s.parts[0].values,keys:r,options:n}),!0}catch{return!1}});return o&&a}else if(Di(s))return!0}return i?t===e:hp(e,t)}function yp(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys,s=co(t);if(A.isBoolean(s))return z(e).every(u=>Pn(u,i,[],{exactValues:!1,ignoreExtraKeys:r}));const o=n?s.every(u=>z(e).some(l=>Pn(l,u,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return z(e).every(u=>s.includes(u)?Pn(u,i,[],{exactValues:!1,ignoreExtraKeys:!1}):r)&&o}function co(e){const t=e.parts[0].keys,r=hn(t);if(A.isPropertyKey(t))return!0;if(r){if(gi(r))return!1;if(pi(r))return!1;if(fn(r)){const n=r.parts.map(i=>co(dp({...e.parts[0],keys:i})));return n.includes(!1)?!1:n.flat().filter(A.isPropertyKey)}else if(vi(r)){const n=r.parts.filter(A.isPropertyKey);return n.length!==r.parts.length?!1:n}else{if(yi(r))return Object.values(r.parts[0]);if(wi(r))return!1;if(Di(r))return!0}}return!1}function Fs(e){return Ot(e)}function Ot(e){const t=hn(e);if(uo(e))return e.defaultValue;if(t){if(Dc(t))return t.parts.map(r=>Ot(r));if(Yn(t))return Ot(t.parts[0]);if(bc(t))return t.parts[0];if(gi(t)){const r=t.parts[0];try{return new r}catch(n){throw new Ba(`Failed to create default value for classShape for class '${r.name}': ${Le(n)}`)}}else{if(fn(t)||vi(t))return Ot(t.parts[0]);if(pi(t))return t.parts.reduce((r,n)=>Object.assign(r,Ot(n)),{});if(yi(t))return t.parts[1]||Object.values(t.parts[0])[0];if(wi(t)){const r=co(t);return!t.parts[0].required||A.isBoolean(r)?{}:Object.fromEntries(r.map(n=>[n,Ot(t.parts[0].values)]))}else{if(Di(t))return t.parts[0]??{};throw new Ba(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return lo(e)?Fs(e.shape):e instanceof RegExp?e:A.isArray(e)?e.map(Ot):A.isObject(e)?Xe(e,(r,n)=>Fs(n)):e}function Cr(e,t=!1){if(lo(e))return e;const r={shape:e,isReadonly:t,get defaultValue(){return Fs(e)},[yc]:!0};return Object.defineProperty(r,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),r}const vp=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Ac=vp.reduce((e,t)=>(e[t]=t,e),{});ee.defaultZone.name;const Ec=Ac.UTC,wp=Cr({hour:or(fa.min,fa.max),minute:or(ha.min,ha.max),second:or(ma.min,ma.max),millisecond:or(pa.min,pa.max),timezone:cp(Ac,Ec)}),Dp=Cr({year:2023,month:or(ca.min,ca.max),day:or(da.min,da.max),timezone:Ec});Cr(lp(Dp,wp));T.Years+"",T.Quarters+"",T.Months+"",T.Weeks+"",T.Days+"",T.Hours+"",T.Minutes+"",T.Seconds+"",T.Milliseconds+"";Cr(gt({get:P(x.Month),in:gt(P(x.Year),P(x.Quarter))},{get:P(x.Week),in:gt(P(x.Year),P(x.Quarter),P(x.Month))},{get:P(x.Day),in:gt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week))},{get:P(x.Hour),in:gt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week),P(x.Day))},{get:P(x.Minute),in:gt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week),P(x.Day),P(x.Hour))},{get:P(x.Second),in:gt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week),P(x.Day),P(x.Hour),P(x.Minute))},{get:P(x.Millisecond),in:gt(P(x.Year),P(x.Quarter),P(x.Month),P(x.Week),P(x.Day),P(x.Hour),P(x.Minute),P(x.Second))}));var Pa;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Pa||(Pa={}));var Ss;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Ss||(Ss={}));var _a;(function(e){e.Year="year",e.Month="month",e.Day="day"})(_a||(_a={}));const bp={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};dc(bp,Je(Ss));ee.defaultLocale;Cr(wc({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return Ap(e)}}));function Ap(e){return M.fromISO(e).toUTC().toISO()===e}const Ep=Cr({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:fp()});function Xi(e){return mp(e,Ep,{allowExtraKeys:!0})}class Cp extends gc{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||oo}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n=globalThis,fo=_n.ShadowRoot&&(_n.ShadyCSS===void 0||_n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ho=Symbol(),Oa=new WeakMap;let Cc=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ho)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(fo&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Oa.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Oa.set(r,t))}return t}toString(){return this.cssText}};const Ge=e=>new Cc(typeof e=="string"?e:e+"",void 0,ho),On=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Cc(r,e,ho)},$p=(e,t)=>{if(fo)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=_n.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},La=fo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Ge(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fp,defineProperty:Sp,getOwnPropertyDescriptor:xp,getOwnPropertyNames:kp,getOwnPropertySymbols:Np,getPrototypeOf:Tp}=Object,bi=globalThis,Ra=bi.trustedTypes,Mp=Ra?Ra.emptyScript:"",Ip=bi.reactiveElementPolyfillSupport,qr=(e,t)=>e,Jn={toAttribute(e,t){switch(t){case Boolean:e=e?Mp:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},mo=(e,t)=>!Fp(e,t),Va={attribute:!0,type:String,converter:Jn,reflect:!1,useDefault:!1,hasChanged:mo};Symbol.metadata??=Symbol("metadata"),bi.litPropertyMetadata??=new WeakMap;let tr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Va){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&Sp(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=xp(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){const a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Va}static _$Ei(){if(this.hasOwnProperty(qr("elementProperties")))return;const t=Tp(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(qr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qr("properties"))){const r=this.properties,n=[...kp(r),...Np(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(La(i))}else t!==void 0&&r.push(La(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $p(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:Jn).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Jn;this._$Em=i,this[i]=o.fromAttribute(r,s.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){const i=this.constructor,s=this[t];if(n??=i.getPropertyOptions(t),!((n.hasChanged??mo)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n){const{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},tr[qr("elementProperties")]=new Map,tr[qr("finalized")]=new Map,Ip?.({ReactiveElement:tr}),(bi.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=globalThis,Hn=po.trustedTypes,Wa=Hn?Hn.createPolicy("lit-html",{createHTML:e=>e}):void 0,$c="$lit$",Et=`lit$${Math.random().toFixed(9).slice(2)}$`,Fc="?"+Et,Bp=`<${Fc}>`,jt=document,Yr=()=>jt.createComment(""),Jr=e=>e===null||typeof e!="object"&&typeof e!="function",go=Array.isArray,Pp=e=>go(e)||typeof e?.[Symbol.iterator]=="function",es=`[ 	
\f\r]`,Mr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ua=/-->/g,qa=/>/g,_t=RegExp(`>|${es}(?:([^\\s"'>=/]+)(${es}*=${es}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ja=/'/g,za=/"/g,Sc=/^(?:script|style|textarea|title)$/i,_p=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Op=_p(1),Ve=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Ga=new WeakMap,Vt=jt.createTreeWalker(jt,129);function xc(e,t){if(!go(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wa!==void 0?Wa.createHTML(t):t}const Lp=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Mr;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,m=0;for(;m<u.length&&(o.lastIndex=m,c=o.exec(u),c!==null);)m=o.lastIndex,o===Mr?c[1]==="!--"?o=Ua:c[1]!==void 0?o=qa:c[2]!==void 0?(Sc.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=_t):c[3]!==void 0&&(o=_t):o===_t?c[0]===">"?(o=i??Mr,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?_t:c[3]==='"'?za:ja):o===za||o===ja?o=_t:o===Ua||o===qa?o=Mr:(o=_t,i=void 0);const p=o===_t&&e[a+1].startsWith("/>")?" ":"";s+=o===Mr?u+Bp:d>=0?(n.push(l),u.slice(0,d)+$c+u.slice(d)+Et+p):u+Et+(d===-2?a:p)}return[xc(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Hr{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,c]=Lp(t,r);if(this.el=Hr.createElement(l,n),Vt.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Vt.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith($c)){const m=c[o++],p=i.getAttribute(d).split(Et),y=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:y[2],strings:p,ctor:y[1]==="."?Vp:y[1]==="?"?Wp:y[1]==="@"?Up:Ai}),i.removeAttribute(d)}else d.startsWith(Et)&&(u.push({type:6,index:s}),i.removeAttribute(d));if(Sc.test(i.tagName)){const d=i.textContent.split(Et),m=d.length-1;if(m>0){i.textContent=Hn?Hn.emptyScript:"";for(let p=0;p<m;p++)i.append(d[p],Yr()),Vt.nextNode(),u.push({type:2,index:++s});i.append(d[m],Yr())}}}else if(i.nodeType===8)if(i.data===Fc)u.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(Et,d+1))!==-1;)u.push({type:7,index:s}),d+=Et.length-1}s++}}static createElement(t,r){const n=jt.createElement("template");return n.innerHTML=t,n}}function yr(e,t,r=e,n){if(t===Ve)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const s=Jr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=yr(e,i._$AS(e,t.values),i,n)),t}class Rp{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??jt).importNode(r,!0);Vt.currentNode=i;let s=Vt.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new mn(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new qp(s,this,t)),this._$AV.push(l),u=n[++a]}o!==u?.index&&(s=Vt.nextNode(),o++)}return Vt.currentNode=jt,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class mn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=yr(this,t,r),Jr(t)?t===ie||t==null||t===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):t!==this._$AH&&t!==Ve&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pp(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ie&&Jr(this._$AH)?this._$AA.nextSibling.data=t:this.T(jt.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Hr.createElement(xc(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new Rp(i,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(t){let r=Ga.get(t.strings);return r===void 0&&Ga.set(t.strings,r=new Hr(t)),r}k(t){go(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new mn(this.O(Yr()),this.O(Yr()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ai{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ie}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=yr(this,t,r,0),o=!Jr(t)||t!==this._$AH&&t!==Ve,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=yr(this,a[n+u],r,u),l===Ve&&(l=this._$AH[u]),o||=!Jr(l)||l!==this._$AH[u],l===ie?t=ie:t!==ie&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vp extends Ai{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ie?void 0:t}}class Wp extends Ai{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ie)}}class Up extends Ai{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=yr(this,t,r,0)??ie)===Ve)return;const n=this._$AH,i=t===ie&&n!==ie||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==ie&&(n===ie||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class qp{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){yr(this,t)}}const jp=po.litHtmlPolyfillSupport;jp?.(Hr,mn),(po.litHtmlVersions??=[]).push("3.3.0");const zp=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const s=r?.renderBefore??null;n._$litPart$=i=new mn(t.insertBefore(Yr(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yo=globalThis;let jr=class extends tr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zp(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ve}};jr._$litElement$=!0,jr.finalized=!0,yo.litElementHydrateSupport?.({LitElement:jr});const Gp=yo.litElementPolyfillSupport;Gp?.({LitElement:jr});(yo.litElementVersions??=[]).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Yt=e=>(...t)=>({_$litDirective$:e,values:t});class kt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kp={attribute:!0,type:String,converter:Jn,reflect:!1,hasChanged:mo},Zp=(e=Kp,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(n==="setter"){const{name:o}=r;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+n)};function Yp(e){return(t,r)=>typeof r=="object"?Zp(e,t,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=Yt(class extends kt{constructor(e){if(super(e),e.type!==vo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Ve}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=e=>e??ie;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xs extends kt{constructor(t){if(super(t),this.it=ie,t.type!==vo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ie||t==null)return this._t=void 0,this.it=t;if(t===Ve)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}xs.directiveName="unsafeHTML",xs.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ka extends xs{}Ka.directiveName="unsafeSVG",Ka.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jp(e,t,r){return e?t(e):r?.(e)}class Hp extends jr{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function Jt(e){if(A.isObject(e))return Xe(e,(r,n)=>{if(!A.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(ep(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,o=r.startsWith("--")?Ge(r):r.startsWith("-")?On`-${Ge(r)}`:On`--${Ge(r)}`;return{name:o,value:On`var(${o}, ${Ge(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${Jt.name}' function.`)}function Qp(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function ks(e){return A.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function wo(e){return A.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function kc(e){return no(e,t=>{if(ks(t))return t.definition;if(wo(t))return t.tagInterpolationKey||t},A.isTruthy)}const Nc=new WeakMap;function Xp(e,t){const r=kc(t);return Tc(Nc,[e,...r]).value?.template}function eg(e,t,r){const n=kc(t);return Ic(Nc,[e,...n],r)}function Tc(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=Mc(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Tc(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Mc(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function Ic(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Mc(e,t,n);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Ic(u,t,r,n+1)}function Bc(e,t,r){const n=Xp(e,t),i=n??r();if(!n){const a=eg(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=Qp(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function Pc(e,t,r,n){const i=[],s=[],o=[],a=[];return e.forEach((l,c)=>{const d=i.length-1,m=i[d],p=c-1,y=t[p];n&&n(l);let D,k=[];if(typeof m=="string"&&(D=r(m,l,y),D)){i[d]=[m,D.replacement].join(""),o.push(p);const L=D.getExtraValues;k=L?L(y):[],k.length&&L?(i[d]+=" ",k.forEach((Z,G)=>{G&&i.push(" ")}),a.push(Z=>{const G=Z[p],se=L(G);return{index:p,values:se}}),i.push(l)):i[d]+=l}D||i.push(l);const S=e.raw[c];D?(s[d]=[s[d],D.replacement,S].join(""),k.length&&k.forEach(()=>{s.push("")})):s.push(S)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:o,valueInsertions:c}}}}function tg(...[e,t,r]){if(wo(r))return{replacement:r.tagName,getExtraValues:void 0}}function rg(e,t){return Pc(e,t,tg)}function O(e,...t){const r=Bc(e,t,()=>rg(e,t));return On(r.strings,...r.values)}const ng={allowPolymorphicState:!1};function _c(e,t){const r=e.instanceState;z(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&z(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}function Za(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class ig extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Ei(){return e=>class extends ig{static type=e;_type=e;constructor(t){super(e,t)}}}function Ae(){return Ei()}function sg(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Ei()([e,n].join("-"));return r[n]=i,r},{}):{}}function og(e){return e?Xe(e,t=>t):{}}function Oc(e,t){t in e||Yp()(e,t)}function ag(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Ya(e,t){const r=e;function n(o){t?ag(o,e,e.tagName):Oc(e,o)}function i(o,a){return n(a),r[a]}return new Proxy({},{get:i,set(o,a,u){n(a);const l=r[a];function c(p){o[a]=p,r[a]=p}const d=e.observablePropertyListenerMap[a];if(l!==u&&Xi(l)&&d&&l.removeListener(d),Xi(u))if(d)u.listen(!1,d);else{let p=function(){e.requestUpdate()};var m=p;e.observablePropertyListenerMap[a]=p,u.listen(!1,p)}else Xi(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function ug({hostClassNames:e,cssVars:t}){return{hostClasses:Xe(e,(r,n)=>({name:Ge(n),selector:Ge(`:host(.${n})`)})),cssVars:t}}function lg({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&z(t).forEach(s=>{const o=t[s],a=r[s];typeof o=="function"&&(o({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function cg({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(o){z(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:r,slotNames:n,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function dg(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}function Do(e){if(!A.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!A.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...ng,...e.options},r=sg(e.tagName,e.events),n=og(e.hostClasses);e.hostClasses&&Za(e.tagName,e.hostClasses),e.cssVars&&Za(e.tagName,e.cssVars);const i=e.cssVars?Jt(e.cssVars):{},s=dg(e.slotNames),o=typeof e.styles=="function"?e.styles(ug({hostClassNames:n,cssVars:i})):e.styles||O``,a=e.render;function u(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:l,inputs:c}}const l=class extends Hp{static elementOptions=t;static tagName=e.tagName;static styles=o;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return cg({element:this,eventsMap:r,cssVars:i,slotNamesMap:s})}static assign=u;static events=r;static render=a;static hostClasses=n;static cssVars=i;static init=e;static slotNames=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const c=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(c);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");z(m).forEach(p=>{Oc(this,p),this.instanceState[p]=m[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=a(c);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return lg({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=ai(c,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,Le(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const c=this.createRenderParams();if(e.init(c)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{A.hasKey(c,"destroy")&&A.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const c=this.createRenderParams();if(e.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(c){_c(this,c)}observablePropertyListenerMap={};instanceInputs=Ya(this,!1);instanceState=Ya(this,!t.allowPolymorphicState);constructor(){super(),this.definition=l}};return Object.defineProperties(l,{name:{value:hc(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Ye(...e){return Re.isEmpty(e),t=>{const r=t;if(!A.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return Do({...r,options:{...r.options}})}}var zr;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(zr||(zr={}));class fg extends sr{get settledValue(){if(this.isSettled())return this.value}get state(){return this.isResolved()?zr.Resolved:this.isError()?zr.Rejected:zr.Waiting}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function ts(e){return new fg(e)}function Ci(e,t){return Xr(e,t),e.element}function hg(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Xr(e,t){const r=hg(e),n=r?`: in ${r}`:"";if(e.type!==vo.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function mg(e){const t=Yt(class extends kt{element;constructor(r){super(r),this.element=Ci(r,e)}render(r){return this.element.setAttribute(e,r),Ve}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function W(e,t){return pg(e,t)}const pg=Yt(class extends kt{element;lastListenerMetaData;constructor(e){super(e),this.element=Ci(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Ve}}),Ja="onDomCreated",gg=Yt(class extends kt{element;constructor(e){super(e),Xr(e,Ja)}update(e,[t]){Xr(e,Ja);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),rs="onResize",Lc=Yt(class extends kt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),Xr(e,rs)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${rs} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Xr(e,rs),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function ar(e,t,r){return Jp(e,()=>t,()=>r)}const{attributeDirective:yg}=mg("data-test-id"),Rr=yg;z({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",InputsType:"",render:"",slotNames:"",StateType:"",styles:"",tagName:"",UpdateStateType:""});function vg(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return{defineElement:(...n)=>i=>(t(i),Ye(...n)(r(i))),defineElementNoInputs:n=>(t(n),Do(r(n)))}}function wg(e,t){return Dg(void 0,e)}const Dg=Yt(class extends kt{element;constructor(e){super(e),this.element=Ci(e,"assign")}render(e,t){return _c(this.element,t),Ve}}),bg={};function Ag(e,t){return t.map((r,n)=>{const i=e[n],s=e[n+1];if(i&&s){const{shouldHaveTagNameHere:o}=Rc(i,s);if(o&&A.isString(r))return{tagName:r,tagInterpolationKey:uc(bg,r,()=>({tagName:r}))}}return r})}function Rc(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function Eg(...[e,t,r]){const n=ks(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=Rc(e,t),o=wo(n);if(o&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!s||!o?void 0:{replacement:n.tagName,getExtraValues(u){const l=ks(u)?u.inputs:void 0;return[i&&l?wg(l):void 0].filter(A.isTruthy)}}}function Cg(e){}function $g(e){return Pc(e.strings,e.values,Eg,Cg)}function C(e,...t){const r=Ag(e,t),n=Op(e,...r),i=Bc(e,r,()=>$g(n));return{...n,strings:i.strings,values:i.values}}var he;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(he||(he={}));const Cn=window.navigator;function Fg(){return Lm(Array.from(A.hasKey(Cn,"webkitGetGamepads")?Cn.webkitGetGamepads():A.hasKey(Cn,"getGamepads")?Cn.getGamepads():[]),e=>{if(e)return{key:e.index,value:e}})}const Vc={Gamepad1:"0",Gamepad2:"1",Gamepad3:"2",Gamepad4:"3"};function Sg(e){return A.hasValue(Vc,e)}const xg={Mouse:"mouse",Keyboard:"keyboard"},Se={...xg,...Vc};var ut;(function(e){e.Button="button",e.Axe="axe"})(ut||(ut={}));function Vr(e){return`button-${e}`}function Ns(e){return`axe-${e}`}const kg=.01;function Ng({value:e,gamepadDeadZone:t,globalDeadZone:r}){const n=t??(r||kg);return Math.abs(e)>n?e:0}function Ha({gamepadInput:e,inputIndex:t,deadZones:r,globalDeadZone:n}){const i=A.isNumber(e),s=i?Ns(t):Vr(t),o=i?e:e.value;return{inputName:s,value:Ng({value:o,gamepadDeadZone:r[s],globalDeadZone:n}),inputType:i?ut.Axe:ut.Button}}function Tg({gamepad:e,deadZoneSettings:t,globalDeadZone:r}){const n=String(e.index);if(!Sg(n))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);const i=t[e.id]||{},s=e.axes.map((u,l)=>Ha({gamepadInput:u,inputIndex:l,deadZones:i,globalDeadZone:r})),o=e.buttons.map((u,l)=>Ha({deadZones:i,gamepadInput:u,globalDeadZone:r,inputIndex:l})),a=pr([...o,...s].map(u=>[u.inputName,u]));return{axes:s,buttons:o,isConnected:e.connected,gamepadName:e.id,deviceKey:n,mapping:e.mapping,serialized:!0,timestamp:e.timestamp,inputsByName:a}}function Mg(e){return Xe(Fg(),(t,r)=>Tg({gamepad:r,...e}))}function Ig(e){const t={},r={deviceKey:e.deviceKey,deviceName:e.gamepadName,deviceType:he.Gamepad};return Object.values(e.inputsByName).forEach(n=>{n.value&&(t[n.inputName]={...r,details:n,inputName:n.inputName,inputValue:n.value})}),t}function Bg(e){return Xe(e,(t,r)=>({currentInputs:Ig(r),deviceDetails:r,deviceName:r.gamepadName,deviceKey:r.deviceKey,deviceType:he.Gamepad}))}function Qa(e){return qt(e).map(n=>n.currentInputs).filter(A.isTruthy).map(n=>qt(n)).flat()}const Xa={deviceDetails:void 0,deviceKey:Se.Keyboard,deviceName:"keyboard",deviceType:he.Keyboard},$n={deviceDetails:void 0,deviceKey:Se.Mouse,deviceName:"mouse",deviceType:he.Mouse};Se.Gamepad1+"",he.Gamepad,Se.Gamepad2+"",he.Gamepad,Se.Gamepad3+"",he.Gamepad,Se.Gamepad4+"",he.Gamepad,Se.Keyboard+"",he.Keyboard,Se.Mouse+"",he.Mouse;function $i(){return(e,t)=>{const r=hc(e,{capitalizeFirstLetter:!0}),n=class extends et()(e){eventType=e;static getNewData=t;static constructIfDataIsNew(i,...s){const o=n.getNewData(...s);if(o)return new n({detail:{timestamp:i,inputs:o}})}};return Object.defineProperty(n,"name",{value:r,writable:!0}),n}}function Pg(...[e,t]){return t}const _g=$i()("all-devices-updated",Pg);function eu(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function Og(...[e,t]){const r=Qa(t),n=e?Qa(e):[];if(!A.jsonEquals(n,r)){const i=r.filter(o=>!n.some(a=>eu(a,o))),s=n.filter(o=>!r.some(a=>eu(a,o)));return{newInputs:i,removedInputs:s,allCurrentInputs:r}}}const Xn=$i()("current-inputs-changed",Og);function Lg(...[e,t]){if(!e)return[];const r=z(e).filter(n=>!A.hasKey(t,n));if(r.length)return r.map(n=>e[n]).filter(A.isTruthy)}const Rg=$i()("devices-removed",Lg);function Vg(...[e,t]){if(!e)return qt(t).filter(A.isTruthy);const r=z(t).filter(n=>!A.hasKey(e,n));if(r.length)return r.map(n=>t[n]).filter(A.isTruthy)}const Wg=$i()("new-devices-added",Vg),Wc=[_g,Wg,Rg,Xn];Object.fromEntries(Wc.map(e=>[e.type,e]));const tu="code";class Ug extends mc{currentKeyboardInputs={};currentMouseInputs={};gamepadDeadZoneSettings={};lastReadInputDevices;loopIsRunning=!1;globalDeadZone=0;removeGlobalListeners=()=>{};currentLoopIndex=-1;lastEventDetails={};constructor(t={}){super(),t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),t.globalDeadZone&&(this.globalDeadZone=t.globalDeadZone),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){const r=[Lt("keydown",n=>{const i=Vr(n[tu]);if(this.currentKeyboardInputs.hasOwnProperty(i))return;const s={deviceType:he.Keyboard,details:{keyboardEvent:n},deviceKey:Se.Keyboard,deviceName:Xa.deviceName,inputName:i,inputValue:1};this.currentKeyboardInputs[i]=s}),Lt("keyup",n=>{delete this.currentKeyboardInputs[Vr(n[tu])]}),Lt("mousedown",n=>{const i=Vr(n.button);this.currentMouseInputs.hasOwnProperty(i)||(this.currentMouseInputs[i]={deviceType:he.Mouse,details:{mouseEvent:n},deviceName:$n.deviceName,deviceKey:Se.Mouse,inputName:i,inputValue:1})}),Lt("mouseup",n=>{delete this.currentMouseInputs[Vr(n.button)]}),t.disableMouseMovement?void 0:Lt("mousemove",n=>{const i=Ns("x"),s=Ns("y");this.currentMouseInputs[i]={deviceType:he.Mouse,details:{mouseEvent:n},deviceName:$n.deviceName,deviceKey:Se.Mouse,inputName:i,inputValue:n.clientX},this.currentMouseInputs[s]={deviceType:he.Mouse,details:{mouseEvent:n},deviceName:$n.deviceName,deviceKey:Se.Mouse,inputName:s,inputValue:n.clientY}})];this.removeGlobalListeners=()=>{r.forEach(n=>n?.())}}runPollingLoop(t,r){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,r),requestAnimationFrame(n=>{this.runPollingLoop(t,n)}))}fireEvents(t,r,n){Wc.forEach(i=>{const s=i.constructIfDataIsNew(t,r,n);s&&(this.lastEventDetails[s.type]={constructor:i,constructorInputs:[t,r,n]},this.dispatch(s))})}getCurrentDeviceValues(t,r){const n=Mg({deadZoneSettings:t,globalDeadZone:r}),i=Bg(n);return{[Se.Keyboard]:{...Xa,currentInputs:{...this.currentKeyboardInputs}},[Se.Mouse]:{...$n,currentInputs:{...this.currentMouseInputs}},...i}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,r=performance.now(),n=this.globalDeadZone){const i=this.getCurrentDeviceValues(t,n),s=this.lastReadInputDevices;return this.lastReadInputDevices=i,this.fireEvents(r,s,i),i}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}var en;(function(e){e.Browser="browser",e.Node="node"})(en||(en={}));function Uc(e,t){return{extra:{...t.wasSentPrematurely?{wasSentPrematurely:!0}:{},...e.extraContext},level:e.severity}}var we;(function(e){e.Warning="warning",e.Info="info",e.Debug="debug",e.Fatal="fatal",e.Error="error"})(we||(we={}));const qg={[we.Warning]:console.warn,[we.Info]:console.info,[we.Debug]:console.debug,[we.Fatal]:console.error,[we.Error]:console.error};function qc(e){return A.isEnumValue(e.level,we)?e.level:we.Info}const jc=Symbol("extra-event-context");function jg(e){return A.hasKey(e,jc)}function ru(e){if(jg(e))return e[jc]}function nu(e){const t=ru(e),r="originalException"in e?ru(e.originalException):void 0,n="captureContext"in e&&"extra"in e.captureContext?e.captureContext.extra:void 0,i={...t,...r,...n};if(Object.keys(i).length)return i}const Ts=[];function zg(){for(;Ts.length;)try{const e=Ts.pop();if(!e)return;e.callback(...e.inputs)}catch(e){console.error("error while trying to send premature sentry events:",e)}}function Gg(e,t){Ts.push({callback:e,inputs:t})}let Gr;async function Kg(e){const t=!!Gr;Gr=await e,t||zg()}function Zg(e,t,r){const n={...nu(t),...nu(e),...r?.(),originalFullMessage:e.message||Le(t.originalException)},i=Uc({severity:qc(e),extraContext:n},{wasSentPrematurely:!1});return Object.assign(e,i),e}function zc(e,t){return e.message||Le(t?.originalException)}var St;(function(e){e.Dev="dev",e.Prod="prod",e.NoSentryYet="no-sentry-yet"})(St||(St={}));function Yg(e,t,r){Gc(qc(e),r,{event:e,extra:e.extra,hint:t,message:zc(e,t),originalException:t.originalException})}function Gc(e,t,r){const n=qg[e],i={...r.event?{event:r.event}:void 0,...r.hint?{hint:r.hint}:void 0},s=[r.message,r.extra,Object.keys(i).length?i:void 0,r.originalException].filter(A.isTruthy);t===St.Dev?n("Would have sent to Sentry:",...s):t===St.Prod?n("Sending to Sentry:",...s):t===St.NoSentryYet&&n("Logging before Sentry init:",...s)}function iu(e){function t(r,n){return r.extra?.wasSentPrematurely||Yg(r,n,e?St.Dev:St.Prod),e?null:r}return t}function Jg(e,t,r,n,i){const s={beforeSend:iu(i),beforeSendTransaction:iu(i),defaultIntegrations:!1,enabled:!0,maxValueLength:1e4},o=Hg[e](t);return lc(s,o,r,n||{})}const Hg={[en.Browser](e){return{integrations:[e.httpContextIntegration(),e.dedupeIntegration(),e.eventFiltersIntegration(),e.functionToStringIntegration(),e.globalHandlersIntegration()]}},[en.Node](e){return{integrations:[e.onUncaughtExceptionIntegration(),e.onUnhandledRejectionIntegration(),e.contextLinesIntegration(),e.nodeContextIntegration(),e.functionToStringIntegration()]}}};async function Qg({dsn:e,releaseEnv:t,releaseName:r,sentryConfigOverrides:n,createUniversalContext:i,sentryDep:s,executionEnv:o,isDev:a}){const u=await Jg(o,s,{dsn:e,environment:t,release:r},n,a);return s.init(u),s.addEventProcessor((l,c)=>Zg(l,c,i)),Kg(s),s}const Xg={[we.Debug]:ns(we.Debug),[we.Info]:ns(we.Info),[we.Warning]:ns(we.Warning)};function ns(e){return(t,r)=>Kc(t,{extraContext:r,severity:e},{wasSentPrematurely:!1})}function Kc(e,t,r){try{if(!Gr){Gc(t.severity,St.NoSentryYet,{message:A.isString(e)?e:zc(e,void 0),event:A.isString(e)?void 0:e,extra:t.extraContext,hint:void 0,originalException:void 0}),Gg(Kc,[e,t,{wasSentPrematurely:!0}]);return}const n=Uc(t,r);return A.isString(e)?Gr.captureMessage(e,n):Gr.captureEvent({...e,...n})}catch(n){console.error("Error while trying to send Sentry log:",n);return}}const su="vira-",{defineElement:e0}=vg({assertInputs:e=>{if(!e.tagName.startsWith(su))throw new Error(`Tag name should start with '${su}' but got '${e.tagName}'`)}}),ct=e0,b=Jt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function re({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const t0=re({name:"Check24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),He=Jt({"vira-form-input-radius":"8px"}),Fi=O`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Qe=Jt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),zt=Jt({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":O`calc(${He["vira-form-input-radius"].value} + 4px)`});function bo({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const i=Ge(Km(n+r+t));return O`
        ${Ge(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${zt["vira-focus-outline-color"].value};
            border-radius: ${zt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Ct=Jt({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":zt["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),pn=O`
    padding: 0;
    margin: 0;
`,Ne=O`
    ${pn};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,ou=O`#e2e2e2`,Zc={menuShadow:O`
        filter: drop-shadow(0px 5px 5px ${ou});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:O`
        filter: drop-shadow(0px -5px 5px ${ou});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},tn=O`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,J=ct()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>O`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),is=ct()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>O`
        :host {
            display: flex;
            ${tn};
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
                ${Qe["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${He["vira-form-input-radius"].value}
                ${He["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${He["vira-form-input-radius"].value}
                ${He["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return C`
            <div class="option">
                <${J.assign({icon:t0})}></${J}>
                <slot>${e.label}</slot>
            </div>
        `}}),Ms="group";function r0(e,t,r){return[e,t,r].filter(n=>n!==void 0).join(",")||""}function n0(e){const[t,r,n]=e.split(",");return r?{type:"2d",xCord:Ta(t),yCord:Ta(r),isGroup:n===Ms}:{type:"1d",isGroup:t===Ms}}function i0(e,t){Object.entries(t).forEach(([r,n])=>{A.isBoolean(n)&&n?e.setAttribute(r,""):A.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const s0=Yt(class extends kt{element;lastKey;constructor(e){super(e),this.element=Ci(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Ve}}),Is={name:"data-nav"},rr="nav-activated",Bs={js:{click(e){return`${e}.${rr}`},selected(e){return`${e}:focus`}},css:{click(e){return O`
                ${Ge(Bs.js.click(e))}
            `},selected(e){return O`
                ${Ge(Bs.js.selected(e))}
            `}}},o0={activateKeys:["Space","Return","Enter"]};function a0(){Yc=Cs(o0)}let Yc;a0();function au(e){return Yc.activateKeys.some(t=>{const r=t.toLowerCase();return r===e.key.toLowerCase()||r===e.code.toLowerCase()})}function u0(e,t){const r=r0(e,t);return s0(`${e}-${t}`,n=>{const i=n.hasAttribute("tabindex")||e===Ms?{}:{tabindex:0},s={[Is.name]:r,...i};Re.instanceOf(n,HTMLElement),i0(n,s),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",o=>{o.target===n&&n.focus()},!0),n.addEventListener("mouseleave",o=>{o.target===n&&n.blur()},!0),n.addEventListener("mousedown",o=>{o.target===n&&n.classList.add(rr)},!0),n.addEventListener("mouseup",o=>{o.target===n&&n.classList.remove(rr)},!0),n.addEventListener("blur",()=>{n.classList.remove(rr)},!0),n.addEventListener("keydown",o=>{o.target===n&&au(o)&&n.classList.add(rr)},!0),n.addEventListener("keyup",o=>{o.target===n&&au(o)&&n.classList.remove(rr)},!0)})}async function Jc(e=1){const t=new Un;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function l0(e){return[...e.children,...e.shadowRoot?.children??[]]}function c0(e){return e.matches(":focus")}function ei(e){if(e instanceof ShadowRoot)return ei(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:ei(t)}function Hc(e,t){if(t(e))return e;const r=ei(e);if(r)return Hc(r,t)}function d0(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n?.constructor.name,o=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}function f0(e){const t=ei(e);return t&&Hc(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function h0(e,t){return Qc([],e,t)}function Qc(e,t,r){return!t||t.type==="child"?!1:t.type==="1d"?uu(t.children,t,0,e,r):t.children.some((n,i)=>uu(n,t,i,e,r))}function uu(e,t,r,n,i){return e.some((s,o)=>{const a=A.hasKey(t,"isRoot")&&t.isRoot?n:[t,...n];return i(a,s,{x:o,y:r})?!0:Qc(a,s,i)})}function m0(e){return e.toReversed().find(t=>!t.isGroup)}function rn(e){if(!e)return;let t,r,n;h0(e,(o,a,u)=>c0(a.element)?(t=o,r=a,n=u,!0):!1);const i=t?t[0]||e:void 0,s=t?m0(t)||e:void 0;if(!(!r||!i||!n||!s||!t))return{node:r,parent:i,nonGroupParent:s,ancestors:t}}function nn(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function lu(e,t){return e>t}function cu(e,t){return e<t}var Be;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Be||(Be={}));var te;(function(e){e.Enter="enter",e.Exit="exit",e.Navigate="navigate",e.Pibling="pibling"})(te||(te={}));function Ao(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?Ao(t):t}function du(e,t,r){if(!e)return{success:!1,reason:"no nav tree",direction:t,navAction:te.Navigate};const n=rn(e);if(!n){const a=Ao(e);return a?(nn(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element,direction:t,navAction:te.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:te.Navigate}}const{nextNode:i,requiresWrapping:s}=Xc(n.parent,t,n.node),o=r?!0:!s;return i&&o?(nn(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s,direction:t,navAction:te.Navigate}):i?o?{success:!1,reason:"no conditions matched",direction:t,navAction:te.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:te.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:te.Navigate}}function Xc(e,t,r){if(t===Be.Down||t===Be.Up){const i=t===Be.Down?cu:lu,s=t===Be.Down?1:-1,o=e.type==="1d"?0:Hi(r.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?Hi(r.coords.x+s,{min:0,max:e.children.length-1}):a&&r.coords.x>=a.length?a.length-1:r.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],c=e.type==="1d"?i(u.x,r.coords.x):i(u.y,r.coords.y);return{nextNode:l?.element===r.element?void 0:l,requiresWrapping:c}}else{const i=t===Be.Right?cu:lu,s=t===Be.Right?1:-1,o=e.type==="1d"?e.children:e.children[r.coords.y];Re.isDefined(o,`No current row found at y index: '${r.coords.y}'`);const a={x:Hi(r.coords.x+s,{min:0,max:o.length-1}),y:r.coords.y},u=i(a.x,r.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===r.element?void 0:l,requiresWrapping:u}}}function p0(e,t,r,n){const i=A.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from",direction:r,navAction:te.Pibling};const{nextNode:o,requiresWrapping:a}=Xc(i,r,s),u=o?.isGroup?Ao(o):o,l=n?!0:!a;return u?l?(nn(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a,direction:r,navAction:te.Pibling}):{success:!1,reason:"wrapping blocked",direction:r,navAction:te.Pibling}:{success:!1,reason:"no node to navigate to",direction:r,navAction:te.Pibling}}function g0(e){if(!e)return{success:!1,reason:"no nav tree",direction:void 0,navAction:te.Enter};const t=rn(e);if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:te.Enter};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:te.Enter};const r=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return r?(nn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:te.Enter}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:te.Enter}}function y0(e){if(!e)return{success:!1,reason:"no nav tree",direction:void 0,navAction:te.Exit};const t=rn(e);if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:te.Exit};const r=t.nonGroupParent;return r.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to",direction:void 0,navAction:te.Exit}:(nn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:te.Exit})}class v0 extends et()("nav-exit-event"){}class w0 extends et()("nav-exit-event"){}class D0 extends et()("navigate-event"){}class b0 extends et()("navigate-pibling-event"){}function ed(e){const t=[];return l0(e).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=ed(r),i=r.hasAttribute(Is.name)?n0(r.getAttribute(Is.name)||""):void 0;if(!i){t.push(...n);return}t.push({children:n,element:r,navValue:i})}),t}function A0(e){const t=ed(e);return td(t)}function td(e){if(!A.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(r=>{const n=r.children.length?td(r.children):void 0;if(r.navValue.isGroup&&!n){const o=new Error("group nav has no children");throw console.error(o,r),o}const i=E0(r,t.children),s=n?{element:r.element,children:n.children,type:n.type,isGroup:r.navValue.isGroup,coords:i}:{element:r.element,type:"child",coords:i,isGroup:!1};if(r.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(Re.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(r.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==r.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,r),o}}),t}function E0(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}class rd extends so{rootElement;constructor(t){super(),this.rootElement=t}getCurrentlyFocused(){return rn(this.buildNavTree())}buildNavTree(){return A0(this.rootElement)}navigate({direction:t,allowWrapping:r}){const n=du(this.buildNavTree(),t,r);return this.dispatch(new D0({detail:n})),n}enterInto(){const t=g0(this.buildNavTree());return this.dispatch(new w0({detail:t})),t}exitOutOf(){const t=y0(this.buildNavTree());return this.dispatch(new v0({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){const n=this.buildNavTree(),i=rn(n),o={...!i||!n?du(n,r,t):p0(n,i,r,t),navAction:te.Pibling};return this.dispatch(new b0({detail:o})),o}}const C0={option:"dropdown-option"},Fn=ct()({tagName:"vira-dropdown-options",events:{selectionChange:Ae()},styles:O`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${He["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Ct["vira-form-background-color"].value};
            border: 1px solid ${Ct["vira-form-border-color"].value};
            color: ${Ct["vira-form-foreground-color"].value};
            ${Zc.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Bs.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${Ct["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${is} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Fi};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=e.options.map(i=>{const s=i.template||C`
                    <${is.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${is}>
                `;return C`
                <div
                    class="dropdown-item ${Qr({disabled:!!i.disabled})}"
                    ${Rr(C0.option)}
                    title=${Qn(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?ie:u0()}
                    ${W("mousedown",o=>{o.stopPropagation()})}
                    ${W("mouseup",o=>{o.stopPropagation(),i.disabled||t(new r.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return C`
            <slot>${n}</slot>
        `}});re({name:"Chat24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});const $0=re({name:"ChevronUp24Icon",svgTemplate:C`
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
    `}),nd=re({name:"CloseX24Icon",svgTemplate:C`
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
    `});re({name:"Commit24Icon",svgTemplate:C`
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
    `});re({name:"Document24Icon",svgTemplate:C`
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
    `});re({name:"Element16Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});re({name:"Element24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const F0=re({name:"EyeClosed24Icon",svgTemplate:C`
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
    `}),S0=re({name:"EyeOpen24Icon",svgTemplate:C`
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
    `}),x0=re({name:"Loader24Icon",svgTemplate:C`
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
    `}),k0=O`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Qe["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,id=re({name:"LoaderAnimated24Icon",svgTemplate:C`
        <style>
            ${k0}
        </style>
        ${x0.svgTemplate}
    `});re({name:"Options24Icon",svgTemplate:C`
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
    `});re({name:"Pencil24Icon",svgTemplate:C`
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
    `});re({name:"Shield24Icon",svgTemplate:C`
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
    `});re({name:"SpeakerLoud24Icon",svgTemplate:C`
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
    `});re({name:"SpeakerMedium24Icon",svgTemplate:C`
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
    `});re({name:"SpeakerMuted24Icon",svgTemplate:C`
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
    `});re({name:"SpeakerQuiet24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `});re({name:"Star24Icon",svgTemplate:C`
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
    `});const N0=re({name:"StatusFailure24Icon",svgTemplate:C`
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
    `});re({name:"StatusInProgress24Icon",svgTemplate:C`
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
    `});re({name:"StatusSuccess24Icon",svgTemplate:C`
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
    `});class T0 extends Cp{constructor(){super({defaultValue:document.hidden,equalityCheck:A.strictEquals}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=I0.includes(t.type),n=M0.includes(t.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const M0=["blur","focusout","pagehide"],I0=["focus","focusin","pageshow"],B0=new T0;function P0(e,t){return B0.listen(e,t)}const fu={top:0,left:0,right:0,bottom:0};class sd extends io("hide-pop-up"){}class od extends et()("nav-select"){}class _0{listenTarget=new so;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const r=new rd(t);this.cleanupCallbacks=[P0(!1,n=>{n||this.removePopUp()}),Lt("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Lt("keydown",n=>{const i=n.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Be.Down,allowWrapping:!1});else if(i==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Be.Up,allowWrapping:!1});else if(i==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Be.Left,allowWrapping:!1});else if(i==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:Be.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=r.getCurrentlyFocused();s&&(r.enterInto(),this.listenTarget.dispatch(new od({detail:s.node.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new sd)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=f0(t);Re.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},c=Xe(fu,p=>s[p]),d=Xe(fu,p=>{const y=l[p],D=c[p];return Math.abs(y-D)}),m=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(t),{popDown:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function O0({selected:e,options:t,isMultiSelect:r}){if(e.length&&t.length){const n=t.filter(i=>e.includes(i.id));return n.length>1&&!r?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),n.slice(0,1)):n}else return[]}function L0(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${tp(r)}`)}function hu(e,t,r){return r?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[e]}function mu({open:e,emitEvent:t},{updateState:r,popUpManager:n,dispatch:i,host:s}){e?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),t&&i(e)}const Sn={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"};ct()({tagName:"vira-dropdown",state(){return{showPopUpResult:void 0,popUpManager:new _0,navController:void 0}},hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>O`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${zt["vira-focus-outline-color"].name}: ${Ct["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Ne};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${He["vira-form-input-radius"].value};
            transition: border-radius
                ${Qe["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${bo({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${Qe["vira-interaction-animation-duration"].value}
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
            border: 1px solid ${Ct["vira-form-border-color"].value};
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
            ${tn};
            border-radius: inherit;
            background-color: ${Ct["vira-form-background-color"].value};
            color: ${Ct["vira-form-foreground-color"].value};
        }

        .open-upwards ${Fn} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Zc.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Fi}
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
    `,events:{selectedChange:Ae(),openChange:Ae()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:s}){e.popUpManager.listen(sd,()=>{if(t({showPopUpResult:void 0}),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");Re.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(od,o=>{const a=o.detail.x,u=n.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);n.isMultiSelect||mu({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:r,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(hu(u.id,n.selected,!!n.isMultiSelect)))}),t({navController:new rd(r)})},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:s}){L0(n.options);function o(y){mu(y,{dispatch:D=>{e(new t.openChange(D))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?o({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?o({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=O0(n),u=n.icon?C`
                  <${J.assign({icon:n.icon})}
                      ${Rr(Sn.icon)}
                  ></${J}>
              `:"",l=r.showPopUpResult?r.showPopUpResult.popDown?O`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:O`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function c(){o({emitEvent:!0,open:!r.showPopUpResult})}const d=!a.length,m=n.selectionPrefix&&!d?C`
                      <span class="selected-label-prefix" ${Rr(Sn.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",p=d?n.placeholder||"":a.map(y=>y.label).join(", ");return C`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Qr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                ${Rr(Sn.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${W("keydown",y=>{!r.showPopUpResult&&y.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${W("click",y=>{y.detail===0&&c()})}
                ${W("mousedown",y=>{y.button===0&&c()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${Qr({"using-placeholder":d})}"
                        title=${Qn(d?p:void 0)}
                    >
                        ${m} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${J.assign({icon:$0})}
                            class="trigger-icon"
                        ></${J}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${ar(!!r.showPopUpResult,C`
                            <${Fn.assign({options:n.options,selectedOptions:a})}
                                ${W(Fn.events.selectionChange,y=>{n.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(hu(y.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${Rr(Sn.options)}
                            ></${Fn}>
                        `)}
                </div>
            </button>
        `}});Ye()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>O`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
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
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var ti;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ti||(ti={}));const it=ct()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ti.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>O`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${tn};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${zt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Fi};
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
            border-radius: ${He["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Qe["vira-interaction-animation-duration"].value},
                background-color
                    ${Qe["vira-interaction-animation-duration"].value},
                border-color ${Qe["vira-interaction-animation-duration"].value};
        }

        ${bo({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${J} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?C`
                  <${J.assign({icon:e.icon})}></${J}>
              `:"",r=e.text?C`
                  <span class="text-template">${e.text}</span>
              `:"";return C`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});ct()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>O`
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
            transition: height ${Qe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ae()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:s}){const o=s.expanded?O`
                  height: ${e.contentHeight}px;
              `:O`
                  height: 0;
              `;return C`
            <button
                class="header-wrapper"
                ${W("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${Lc(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});ct()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:Ae(),imageError:Ae()},styles:({hostClasses:e})=>O`
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
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?C`
                  <slot class="status-wrapper" name=${s.error}>
                      <${J.assign({icon:N0})} class="error"></${J}>
                  </slot>
              `:t.loadedUrls[o]?void 0:C`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${J.assign({icon:id})}></${J}>
                    </slot>
                `;return C`
            ${ar(!!a,a)}
            <img
                class=${Qr({hidden:!!a})}
                ${W("load",async()=>{e._debugLoadDelay&&await Kn(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[o]:!0}}),n(new i.imageLoad)})}
                ${W("error",async u=>{e._debugLoadDelay&&await Kn(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[o]:!0}}),n(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function Ps({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Ps({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function R0({value:e,allowed:t,blocked:r}){const n=t?Ps({input:e,matcher:t}):!0,i=r?Ps({input:e,matcher:r}):!1;return n&&!i}function _s(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(R0({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function V0({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const s=d0(r,HTMLInputElement),o=A.hasKey(r,"data")&&Om.isString(r.data)||"";if(o){const{blocked:u}=_s({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=_s({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var Ut;(function(e){e.Default="text",e.Password="password",e.Email="email"})(Ut||(Ut={}));const je=ct()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":zt["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>O`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${zt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Fi};
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
                ${tn};
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
                border-radius: ${He["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Qe["vira-interaction-animation-duration"].value};
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
                border-radius: ${He["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${bo({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${tn};
            }

            button {
                ${Ne};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Qe["vira-interaction-animation-duration"].value};
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
        `,events:{valueChange:Ae(),inputBlocked:Ae()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i})=>{const{filtered:s}=_s({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?C`
                  <${J.assign({icon:e.icon})} class="left-side-icon"></${J}>
              `:"",a=e.fitText?O`
                  width: ${r.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type===Ut.Password;return C`
            <label>
                ${o}
                ${ar(!!e.fitText,C`
                        <span
                            class="size-span"
                            ${Lc(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${W0(e.type,r.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${W("input",l=>{V0({inputs:e,previousValue:s,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ar(!!(e.showClearButton&&e.value),C`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${W("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${J.assign({icon:nd})}></${J}>
                        </button>
                    `)}
                ${ar(e.type===Ut.Password,C`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${W("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${J.assign({icon:r.showPassword?S0:F0})}></${J}>
                        </button>
                    `)}
                ${ar(!!e.suffix,C`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function W0(e,t){return e===Ut.Password&&t?Ut.Default:e||Ut.Default}ct()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>O`
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
    `,render({inputs:e}){function t(r){if(!e.route)return;const n=e.route.router.setRouteOnDirectNavigation(e.route.route,r);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:n?"instant":"smooth"})}if(e.link?.newTab)return C`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label=${Qn(e.aria?.label||void 0)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return C`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    aria-label=${Qn(e.aria?.label||void 0)}
                    ${W("click",t)}
                >
                    <slot></slot>
                </a>
            `}}});var q=(e=>(e.SwitchPro="switch-pro",e.PlaystationDualShock="playstation-dual-shock",e.PlaystationDualShock4="playstation-dual-shock-4",e.PlaystationDualSense="playstation-dual-sense",e.SteamDeck="steam-deck",e.Xbox360="xbox-360",e.XboxWireless="xbox-wireless",e))(q||{}),ke=(e=>(e.Microsoft="microsoft",e.Nintendo="nintendo",e.Sony="sony",e.Valve="valve",e))(ke||{});const U0={"switch-pro":"Nintendo Switch Pro gamepad for the Nintendo Switch console.","playstation-dual-sense":"Sony PlayStation DualSense gamepad for the Sony PlayStation 5 console.","playstation-dual-shock":"Sony PlayStation DualShock gamepad for the Sony PlayStation 1 through Sony PlayStation 3 consoles.","playstation-dual-shock-4":"Sony PlayStation DualShock 4 gamepad for the Sony PlayStation 4 console.","steam-deck":"Gamepad for the Valve Steam Deck handheld console.","xbox-360":"Microsoft Xbox 360 gamepad for the Microsoft Xbox 360 console. Can be wired or wireless.","xbox-wireless":"Microsoft Xbox Wireless gamepad for Microsoft Xbox One through Xbox Series X/S consoles."},Eo=[{gamepadModels:[q.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The capture / screenshot button is not detected by this browser."}},{gamepadModels:[q.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The share button is not detected by this browser."}},{gamepadModels:[q.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"B","button-1":"A","button-2":"Y","button-3":"X","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home","button-17":"capture"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[q.PlaystationDualSense],systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation"},gamepadModels:[q.PlaystationDualSense],systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation, the touch pad button, and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"L2-axe","axe-5":"R2-axe","axe-6":"d-pad","button-0":"square","button-1":"X","button-2":"O","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"playstation","button-13":"touch-pad","button-14":"mute","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[q.PlaystationDualSense],systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[q.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"d-pad","button-0":"A","button-1":"B","button-2":"unknown","button-3":"X","button-4":"Y","button-5":"unknown","button-6":"LB","button-7":"RB","button-8":"unknown","button-9":"unknown","button-10":"view","button-11":"menu","button-12":"guide","button-13":"L3","button-14":"R3","button-15":"LT","button-16":"RT"},systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[q.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-17":"share"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0}],sn={"Pro Controller Extended Gamepad":q.SwitchPro,"Xbox Wireless Controller Extended Gamepad":q.XboxWireless,"DualSense Wireless Controller Extended Gamepad":q.PlaystationDualSense,"Wireless Controller Extended Gamepad":q.PlaystationDualSense,"54c-ce6-Wireless Controller":q.PlaystationDualSense,"45e-b13-Xbox Wireless Controller":q.XboxWireless,"Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)":q.SwitchPro,"Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)":q.PlaystationDualSense,"Xbox Series X Controller (STANDARD GAMEPAD Vendor: 045e Product: 0b12)":q.XboxWireless,"DUALSHOCK 4 Wireless Controller Extended Gamepad":q.PlaystationDualShock4,"DUALSHOCK 4 Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 09cc)":q.PlaystationDualShock4,"54c-9cc-DUALSHOCK 4 Wireless Controller":q.PlaystationDualShock4,"HID-compliant game controller (STANDARD GAMEPAD Vendor: 045e Product: 0b13)":q.XboxWireless},q0={[q.SwitchPro]:ke.Nintendo,[q.Xbox360]:ke.Microsoft,[q.XboxWireless]:ke.Microsoft,[q.PlaystationDualSense]:ke.Sony,[q.PlaystationDualShock]:ke.Sony,[q.PlaystationDualShock4]:ke.Sony,[q.SteamDeck]:ke.Valve},j0={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},ad={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},ae={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},ye={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},vt={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class w{static getFirstMatch(t,r){const n=r.match(t);return n&&n.length>0&&n[1]||""}static getSecondMatch(t,r){const n=r.match(t);return n&&n.length>1&&n[2]||""}static matchAndReturnConst(t,r,n){if(t.test(r))return n}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const r=t.split(".").splice(0,2).map(n=>parseInt(n,10)||0);if(r.push(0),r[0]===10)switch(r[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const r=t.split(".").splice(0,2).map(n=>parseInt(n,10)||0);if(r.push(0),!(r[0]===1&&r[1]<5)){if(r[0]===1&&r[1]<6)return"Cupcake";if(r[0]===1&&r[1]>=6)return"Donut";if(r[0]===2&&r[1]<2)return"Eclair";if(r[0]===2&&r[1]===2)return"Froyo";if(r[0]===2&&r[1]>2)return"Gingerbread";if(r[0]===3)return"Honeycomb";if(r[0]===4&&r[1]<1)return"Ice Cream Sandwich";if(r[0]===4&&r[1]<4)return"Jelly Bean";if(r[0]===4&&r[1]>=4)return"KitKat";if(r[0]===5)return"Lollipop";if(r[0]===6)return"Marshmallow";if(r[0]===7)return"Nougat";if(r[0]===8)return"Oreo";if(r[0]===9)return"Pie"}}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,r,n=!1){const i=w.getVersionPrecision(t),s=w.getVersionPrecision(r);let o=Math.max(i,s),a=0;const u=w.map([t,r],l=>{const c=o-w.getVersionPrecision(l),d=l+new Array(c+1).join(".0");return w.map(d.split("."),m=>new Array(20-m.length).join("0")+m).reverse()});for(n&&(a=o-Math.min(i,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}}static map(t,r){const n=[];let i;if(Array.prototype.map)return Array.prototype.map.call(t,r);for(i=0;i<t.length;i+=1)n.push(r(t[i]));return n}static find(t,r){let n,i;if(Array.prototype.find)return Array.prototype.find.call(t,r);for(n=0,i=t.length;n<i;n+=1){const s=t[n];if(r(s,n))return s}}static assign(t,...r){const n=t;let i,s;if(Object.assign)return Object.assign(t,...r);for(i=0,s=r.length;i<s;i+=1){const o=r[i];typeof o=="object"&&o!==null&&Object.keys(o).forEach(u=>{n[u]=o[u]})}return t}static getBrowserAlias(t){return j0[t]}static getBrowserTypeByAlias(t){return ad[t]||""}}const Y=/version\/(\d+(\.?_?\d+)+)/i,z0=[{test:[/googlebot/i],describe(e){const t={name:"Googlebot"},r=w.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/opera/i],describe(e){const t={name:"Opera"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe(e){const t={name:"Opera"},r=w.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe(e){const t={name:"Samsung Internet for Android"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe(e){const t={name:"NAVER Whale Browser"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe(e){const t={name:"MZ Browser"},r=w.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/focus/i],describe(e){const t={name:"Focus"},r=w.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/swing/i],describe(e){const t={name:"Swing"},r=w.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/coast/i],describe(e){const t={name:"Opera Coast"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){const t={name:"Opera Touch"},r=w.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe(e){const t={name:"Yandex Browser"},r=w.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe(e){const t={name:"UC Browser"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe(e){const t={name:"Maxthon"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe(e){const t={name:"Epiphany"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe(e){const t={name:"Puffin"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe(e){const t={name:"Sleipnir"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe(e){const t={name:"K-Meleon"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe(e){const t={name:"WeChat"},r=w.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe(e){const t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=w.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe(e){const t={name:"Internet Explorer"},r=w.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe(e){const t={name:"Microsoft Edge"},r=w.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe(e){const t={name:"Microsoft Edge"},r=w.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe(e){const t={name:"Vivaldi"},r=w.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe(e){const t={name:"SeaMonkey"},r=w.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe(e){const t={name:"Sailfish"},r=w.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe(e){const t={name:"Amazon Silk"},r=w.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe(e){const t={name:"PhantomJS"},r=w.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe(e){const t={name:"SlimerJS"},r=w.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t={name:"BlackBerry"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe(e){const t={name:"WebOS Browser"},r=w.getFirstMatch(Y,e)||w.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe(e){const t={name:"Bada"},r=w.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe(e){const t={name:"Tizen"},r=w.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe(e){const t={name:"QupZilla"},r=w.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){const t={name:"Firefox"},r=w.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe(e){const t={name:"Electron"},r=w.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe(e){const t={name:"Miui"},r=w.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe(e){const t={name:"Chromium"},r=w.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe(e){const t={name:"Chrome"},r=w.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe(e){const t={name:"Google Search"},r=w.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){const t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe(e){const t={name:"Android Browser"},r=w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe(e){const t={name:"PlayStation 4"},r=w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe(e){const t={name:"Safari"},r=w.getFirstMatch(Y,e);return r&&(t.version=r),t}},{test:[/.*/i],describe(e){const t=/^(.*)\/(.*) /,r=/^(.*)\/(.*)[ \t]\((.*)/,i=e.search("\\(")!==-1?r:t;return{name:w.getFirstMatch(i,e),version:w.getSecondMatch(i,e)}}}],G0=[{test:[/Roku\/DVP/],describe(e){const t=w.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:ye.Roku,version:t}}},{test:[/windows phone/i],describe(e){const t=w.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:ye.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){const t=w.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=w.getWindowsVersionName(t);return{name:ye.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){const t={name:ye.iOS},r=w.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe(e){const t=w.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=w.getMacOSVersionName(t),n={name:ye.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe(e){const t=w.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:ye.iOS,version:t}}},{test(e){const t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe(e){const t=w.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=w.getAndroidVersionName(t),n={name:ye.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe(e){const t=w.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:ye.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t=w.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||w.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||w.getFirstMatch(/\bbb(\d+)/i,e);return{name:ye.BlackBerry,version:t}}},{test:[/bada/i],describe(e){const t=w.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:ye.Bada,version:t}}},{test:[/tizen/i],describe(e){const t=w.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:ye.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:ye.Linux}}},{test:[/CrOS/],describe(){return{name:ye.ChromeOS}}},{test:[/PlayStation 4/],describe(e){const t=w.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:ye.PlayStation4,version:t}}}],K0=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){const t=w.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:ae.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:ae.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:ae.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:ae.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:ae.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:ae.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:ae.tablet}}},{test(e){const t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe(e){const t=w.getFirstMatch(/(ipod|iphone)/i,e);return{type:ae.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:ae.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:ae.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:ae.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:ae.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:ae.mobile,vendor:"Microsoft"}}},{test(e){const t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:ae.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:ae.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:ae.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:ae.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:ae.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:ae.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:ae.tv}}}],Z0=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:vt.Blink};const r=w.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:vt.EdgeHTML,version:r}}},{test:[/trident/i],describe(e){const t={name:vt.Trident},r=w.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){return e.test(/presto/i)},describe(e){const t={name:vt.Presto},r=w.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){const t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe(e){const t={name:vt.Gecko},r=w.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:vt.Blink}}},{test:[/(apple)?webkit/i],describe(e){const t={name:vt.WebKit},r=w.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];class pu{constructor(t,r=!1){if(t==null||t==="")throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},r!==!0&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=w.find(z0,r=>{if(typeof r.test=="function")return r.test(this);if(r.test instanceof Array)return r.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=w.find(G0,r=>{if(typeof r.test=="function")return r.test(this);if(r.test instanceof Array)return r.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:r}=this.getOS();return t?String(r).toLowerCase()||"":r||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:r}=this.getPlatform();return t?String(r).toLowerCase()||"":r||""}parsePlatform(){this.parsedResult.platform={};const t=w.find(K0,r=>{if(typeof r.test=="function")return r.test(this);if(r.test instanceof Array)return r.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=w.find(Z0,r=>{if(typeof r.test=="function")return r.test(this);if(r.test instanceof Array)return r.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return w.assign({},this.parsedResult)}satisfies(t){const r={};let n=0;const i={};let s=0;if(Object.keys(t).forEach(a=>{const u=t[a];typeof u=="string"?(i[a]=u,s+=1):typeof u=="object"&&(r[a]=u,n+=1)}),n>0){const a=Object.keys(r),u=w.find(a,c=>this.isOS(c));if(u){const c=this.satisfies(r[u]);if(c!==void 0)return c}const l=w.find(a,c=>this.isPlatform(c));if(l){const c=this.satisfies(r[l]);if(c!==void 0)return c}}if(s>0){const a=Object.keys(i),u=w.find(a,l=>this.isBrowser(l,!0));if(u!==void 0)return this.compareVersion(i[u])}}isBrowser(t,r=!1){const n=this.getBrowserName().toLowerCase();let i=t.toLowerCase();const s=w.getBrowserTypeByAlias(i);return r&&s&&(i=s.toLowerCase()),i===n}compareVersion(t){let r=[0],n=t,i=!1;const s=this.getBrowserVersion();if(typeof s=="string")return t[0]===">"||t[0]==="<"?(n=t.substr(1),t[1]==="="?(i=!0,n=t.substr(2)):r=[],t[0]===">"?r.push(1):r.push(-1)):t[0]==="="?n=t.substr(1):t[0]==="~"&&(i=!0,n=t.substr(1)),r.indexOf(w.compareVersions(s,n,i))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,r=!1){return this.isBrowser(t,r)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(r=>this.is(r))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class Y0{static getParser(t,r=!1){if(typeof t!="string")throw new Error("UserAgent should be a string");return new pu(t,r)}static parse(t){return new pu(t).getResult()}static get BROWSER_MAP(){return ad}static get ENGINE_MAP(){return vt}static get OS_MAP(){return ye}static get PLATFORMS_MAP(){return ae}}const xn=Y0.getParser(navigator.userAgent);function on(){return{browserVersion:xn.getBrowserVersion(),browserName:xn.getBrowserName(),osName:xn.getOSName(),osVersion:xn.getOSVersion()}}function J0(e,t){return!!e.some(r=>A.jsonEquals(r,t))}function gu(e){return Ym(e,(t,r)=>({key:A.isString(t)?t.toLowerCase():t,value:r}))}function Os({gamepad:e,layouts:t=Eo,gamepadModelMap:r=sn,systemVersions:n=on()}){const i=(A.isString(e)?e:e?.deviceName)||"",{gamepadModel:s}=Gt({gamepad:i,gamepadModelMap:r}),o=s?t.filter(u=>u.gamepadModels.includes(s)):[];return o.length<=1?o[0]:o.reduce((u,l)=>{const c=H0(n,l);return c>u.score?{score:c,layout:l}:u},{layout:void 0,score:-1}).layout}function H0(e,t){const r=t.systemVersions.map(n=>Object.values(Xe(e,(s,o)=>n[s].toLowerCase()===o.toLowerCase())).reduce((s,o)=>s+(o?1:0),0));return Math.max(...r)}function Gt({gamepad:e,gamepadModelMap:t=sn,gamepadBrandMap:r=q0}){const n=(typeof e=="string"?e:e?.deviceName)||void 0,i=n&&gu(t)[n.toLowerCase()]||void 0;return{gamepadModel:i,gamepadBrand:i&&gu(r)[i]||void 0,gamepadModelDescription:i&&U0[i]||void 0}}function Q0(e,t){const{gamepadModel:r}=Gt({gamepad:e.deviceName,gamepadModelMap:t});return{inputMappings:{},gamepadModels:r?[r]:[],systemVersions:[on()],notes:void 0}}const ri=Ei()("modal-close"),Co=Ei()("selected-gamepad-index-change");async function X0({dsn:e,releaseEnv:t,releaseName:r,sentryConfigOverrides:n,createUniversalContext:i,isDev:s}){const o=await Um(()=>import("./index-BnAUlUL6.js"),[]);return await Qg({dsn:e,releaseEnv:t,releaseName:r,sentryConfigOverrides:n,createUniversalContext:i,sentryDep:o,executionEnv:en.Browser,isDev:s}),o}const ey={releaseName:typeof VITE_RELEASE_NAME>"u"?"unknown":VITE_RELEASE_NAME},yu=window.location.hostname==="localhost";async function ty(){await X0({dsn:"https://5b5d58b459305bfcd595aabfd356136c@o4506447710060544.ingest.sentry.io/4506479530737664",isDev:yu,releaseEnv:yu?"dev":"prod",releaseName:ey.releaseName})}function vu({layouts:e,models:t},r){const n=e.filter(s=>{const o=!!Eo.some(u=>A.jsonEquals(u,s)),a=r?!!r.layouts.some(u=>A.jsonEquals(u,s)):!1;return!o&&!a}),i=cc(t,(s,o)=>{const a=!(s in sn)||sn[s]!==o;return(r?!(s in r.models)||r.models[s]!==o:!0)&&a});return{layouts:n,models:i}}function ry(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var vr=ry();function ny(){try{if(!vr||!vr.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function $o(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(s){if(s.name!=="TypeError")throw s;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,i=0;i<e.length;i+=1)n.append(e[i]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const N=Promise;function K(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function nr(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function dt(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function Fo(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Ls="local-forage-detect-blob-support";let kn;const Oe={},iy=Object.prototype.toString,gn="readonly",Si="readwrite";function sy(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),i=0;i<t;i++)n[i]=e.charCodeAt(i);return r}function oy(e){return new N(function(t){var r=e.transaction(Ls,Si),n=$o([""]);r.objectStore(Ls).put(n,"key"),r.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},r.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);t(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function ay(e){return typeof kn=="boolean"?N.resolve(kn):oy(e).then(function(t){return kn=t,kn})}function ni(e){var t=Oe[e.name],r={};r.promise=new N(function(n,i){r.resolve=n,r.reject=i}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function Rs(e){var t=Oe[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Vs(e,t){var r=Oe[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function ud(e,t){return new N(function(r,n){if(Oe[e.name]=Oe[e.name]||fd(),e.db)if(t)ni(e),e.db.close();else return r(e.db);var i=[e.name];t&&i.push(e.version);var s=vr.open.apply(vr,i);t&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(e.storeName),o.oldVersion<=1&&a.createObjectStore(Ls)}catch(u){if(u.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw u}}),s.onerror=function(o){o.preventDefault(),n(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},r(o),Rs(e)}})}function So(e){return ud(e,!1)}function xo(e){return ud(e,!0)}function ld(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,i=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||r){if(r){var s=e.db.version+1;s>e.version&&(e.version=s)}return!0}return!1}function uy(e){return new N(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(i){var s=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:s,type:e.type})},n.readAsBinaryString(e)})}function cd(e){var t=sy(atob(e.data));return $o([t],{type:e.type})}function dd(e){return e&&e.__local_forage_encoded_blob}function ly(e){var t=this,r=t._initReady().then(function(){var n=Oe[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return nr(r,e,e),r}function cy(e){ni(e);for(var t=Oe[e.name],r=t.forages,n=0;n<r.length;n++){const i=r[n];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,So(e).then(i=>(e.db=i,ld(e)?xo(e):i)).then(i=>{e.db=t.db=i;for(var s=0;s<r.length;s++)r[s]._dbInfo.db=i}).catch(i=>{throw Vs(e,i),i})}function ft(e,t,r,n){n===void 0&&(n=1);try{var i=e.db.transaction(e.storeName,t);r(null,i)}catch(s){if(n>0&&(!e.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return N.resolve().then(()=>{if(!e.db||s.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),xo(e)}).then(()=>cy(e).then(function(){ft(e,t,r,n-1)})).catch(r);r(s)}}function fd(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function dy(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var i=Oe[r.name];i||(i=fd(),Oe[r.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=ly);var s=[];function o(){return N.resolve()}for(var a=0;a<i.forages.length;a++){var u=i.forages[a];u!==t&&s.push(u._initReady().catch(o))}var l=i.forages.slice(0);return N.all(s).then(function(){return r.db=i.db,So(r)}).then(function(c){return r.db=c,ld(r,t._defaultConfig.version)?xo(r):c}).then(function(c){r.db=i.db=c,t._dbInfo=r;for(var d=0;d<l.length;d++){var m=l[d];m!==t&&(m._dbInfo.db=r.db,m._dbInfo.version=r.version)}})}function fy(e,t){var r=this;e=dt(e);var n=new N(function(i,s){r.ready().then(function(){ft(r._dbInfo,gn,function(o,a){if(o)return s(o);try{var u=a.objectStore(r._dbInfo.storeName),l=u.get(e);l.onsuccess=function(){var c=l.result;c===void 0&&(c=null),dd(c)&&(c=cd(c)),i(c)},l.onerror=function(){s(l.error)}}catch(c){s(c)}})}).catch(s)});return K(n,t),n}function hy(e,t){var r=this,n=new N(function(i,s){r.ready().then(function(){ft(r._dbInfo,gn,function(o,a){if(o)return s(o);try{var u=a.objectStore(r._dbInfo.storeName),l=u.openCursor(),c=1;l.onsuccess=function(){var d=l.result;if(d){var m=d.value;dd(m)&&(m=cd(m));var p=e(m,d.key,c++);p!==void 0?i(p):d.continue()}else i()},l.onerror=function(){s(l.error)}}catch(d){s(d)}})}).catch(s)});return K(n,t),n}function my(e,t,r){var n=this;e=dt(e);var i=new N(function(s,o){var a;n.ready().then(function(){return a=n._dbInfo,iy.call(t)==="[object Blob]"?ay(a.db).then(function(u){return u?t:uy(t)}):t}).then(function(u){ft(n._dbInfo,Si,function(l,c){if(l)return o(l);try{var d=c.objectStore(n._dbInfo.storeName);u===null&&(u=void 0);var m=d.put(u,e);c.oncomplete=function(){u===void 0&&(u=null),s(u)},c.onabort=c.onerror=function(){var p=m.error?m.error:m.transaction.error;o(p)}}catch(p){o(p)}})}).catch(o)});return K(i,r),i}function py(e,t){var r=this;e=dt(e);var n=new N(function(i,s){r.ready().then(function(){ft(r._dbInfo,Si,function(o,a){if(o)return s(o);try{var u=a.objectStore(r._dbInfo.storeName),l=u.delete(e);a.oncomplete=function(){i()},a.onerror=function(){s(l.error)},a.onabort=function(){var c=l.error?l.error:l.transaction.error;s(c)}}catch(c){s(c)}})}).catch(s)});return K(n,t),n}function gy(e){var t=this,r=new N(function(n,i){t.ready().then(function(){ft(t._dbInfo,Si,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.clear();o.oncomplete=function(){n()},o.onabort=o.onerror=function(){var l=u.error?u.error:u.transaction.error;i(l)}}catch(l){i(l)}})}).catch(i)});return K(r,e),r}function yy(e){var t=this,r=new N(function(n,i){t.ready().then(function(){ft(t._dbInfo,gn,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.count();u.onsuccess=function(){n(u.result)},u.onerror=function(){i(u.error)}}catch(l){i(l)}})}).catch(i)});return K(r,e),r}function vy(e,t){var r=this,n=new N(function(i,s){if(e<0){i(null);return}r.ready().then(function(){ft(r._dbInfo,gn,function(o,a){if(o)return s(o);try{var u=a.objectStore(r._dbInfo.storeName),l=!1,c=u.openKeyCursor();c.onsuccess=function(){var d=c.result;if(!d){i(null);return}e===0||l?i(d.key):(l=!0,d.advance(e))},c.onerror=function(){s(c.error)}}catch(d){s(d)}})}).catch(s)});return K(n,t),n}function wy(e){var t=this,r=new N(function(n,i){t.ready().then(function(){ft(t._dbInfo,gn,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.openKeyCursor(),l=[];u.onsuccess=function(){var c=u.result;if(!c){n(l);return}l.push(c.key),c.continue()},u.onerror=function(){i(u.error)}}catch(c){i(c)}})}).catch(i)});return K(r,e),r}function Dy(e,t){t=Fo.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,i;if(!e.name)i=N.reject("Invalid arguments");else{const o=e.name===r.name&&n._dbInfo.db?N.resolve(n._dbInfo.db):So(e).then(a=>{const u=Oe[e.name],l=u.forages;u.db=a;for(var c=0;c<l.length;c++)l[c]._dbInfo.db=a;return a});e.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(e.storeName))return;const u=a.version+1;ni(e);const l=Oe[e.name],c=l.forages;a.close();for(let m=0;m<c.length;m++){const p=c[m];p._dbInfo.db=null,p._dbInfo.version=u}return new N((m,p)=>{const y=vr.open(e.name,u);y.onerror=D=>{y.result.close(),p(D)},y.onupgradeneeded=()=>{var D=y.result;D.deleteObjectStore(e.storeName)},y.onsuccess=()=>{const D=y.result;D.close(),m(D)}}).then(m=>{l.db=m;for(let p=0;p<c.length;p++){const y=c[p];y._dbInfo.db=m,Rs(y._dbInfo)}}).catch(m=>{throw(Vs(e,m)||N.resolve()).catch(()=>{}),m})}):i=o.then(a=>{ni(e);const u=Oe[e.name],l=u.forages;a.close();for(var c=0;c<l.length;c++){const m=l[c];m._dbInfo.db=null}return new N((m,p)=>{var y=vr.deleteDatabase(e.name);y.onerror=()=>{const D=y.result;D&&D.close(),p(y.error)},y.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},y.onsuccess=()=>{const D=y.result;D&&D.close(),m(D)}}).then(m=>{u.db=m;for(var p=0;p<l.length;p++){const y=l[p];Rs(y._dbInfo)}}).catch(m=>{throw(Vs(e,m)||N.resolve()).catch(()=>{}),m})})}return K(i,t),i}var by={_driver:"asyncStorage",_initStorage:dy,_support:ny(),iterate:hy,getItem:fy,setItem:my,removeItem:py,clear:gy,length:yy,key:vy,keys:wy,dropInstance:Dy};function Ay(){return typeof openDatabase=="function"}var $t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ey="~~local_forage_type~",wu=/^~~local_forage_type~([^~]+)~/,ii="__lfsc__:",Ws=ii.length,ko="arbf",Us="blob",hd="si08",md="ui08",pd="uic8",gd="si16",yd="si32",vd="ur16",wd="ui32",Dd="fl32",bd="fl64",Du=Ws+ko.length,bu=Object.prototype.toString;function Ad(e){var t=e.length*.75,r=e.length,n,i=0,s,o,a,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=new ArrayBuffer(t),c=new Uint8Array(l);for(n=0;n<r;n+=4)s=$t.indexOf(e[n]),o=$t.indexOf(e[n+1]),a=$t.indexOf(e[n+2]),u=$t.indexOf(e[n+3]),c[i++]=s<<2|o>>4,c[i++]=(o&15)<<4|a>>2,c[i++]=(a&3)<<6|u&63;return l}function qs(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=$t[t[n]>>2],r+=$t[(t[n]&3)<<4|t[n+1]>>4],r+=$t[(t[n+1]&15)<<2|t[n+2]>>6],r+=$t[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function Cy(e,t){var r="";if(e&&(r=bu.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&bu.call(e.buffer)==="[object ArrayBuffer]")){var n,i=ii;e instanceof ArrayBuffer?(n=e,i+=ko):(n=e.buffer,r==="[object Int8Array]"?i+=hd:r==="[object Uint8Array]"?i+=md:r==="[object Uint8ClampedArray]"?i+=pd:r==="[object Int16Array]"?i+=gd:r==="[object Uint16Array]"?i+=vd:r==="[object Int32Array]"?i+=yd:r==="[object Uint32Array]"?i+=wd:r==="[object Float32Array]"?i+=Dd:r==="[object Float64Array]"?i+=bd:t(new Error("Failed to get type for BinaryArray"))),t(i+qs(n))}else if(r==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=Ey+e.type+"~"+qs(this.result);t(ii+Us+o)},s.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(o){console.error("Couldn't convert value into a JSON string: ",e),t(null,o)}}function $y(e){if(e.substring(0,Ws)!==ii)return JSON.parse(e);var t=e.substring(Du),r=e.substring(Ws,Du),n;if(r===Us&&wu.test(t)){var i=t.match(wu);n=i[1],t=t.substring(i[0].length)}var s=Ad(t);switch(r){case ko:return s;case Us:return $o([s],{type:n});case hd:return new Int8Array(s);case md:return new Uint8Array(s);case pd:return new Uint8ClampedArray(s);case gd:return new Int16Array(s);case vd:return new Uint16Array(s);case yd:return new Int32Array(s);case wd:return new Uint32Array(s);case Dd:return new Float32Array(s);case bd:return new Float64Array(s);default:throw new Error("Unkown type: "+r)}}var No={serialize:Cy,deserialize:$y,stringToBuffer:Ad,bufferToString:qs};function Ed(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function Fy(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var i=new N(function(s,o){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(a){return o(a)}r.db.transaction(function(a){Ed(a,r,function(){t._dbInfo=r,s()},function(u,l){o(l)})},o)});return r.serializer=No,i}function Nt(e,t,r,n,i,s){e.executeSql(r,n,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(u,l){l.rows.length?s(u,a):Ed(u,t,function(){u.executeSql(r,n,i,s)},s)},s):s(o,a)},s)}function Sy(e,t){var r=this;e=dt(e);var n=new N(function(i,s){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(a){Nt(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],function(u,l){var c=l.rows.length?l.rows.item(0).value:null;c&&(c=o.serializer.deserialize(c)),i(c)},function(u,l){s(l)})})}).catch(s)});return K(n,t),n}function xy(e,t){var r=this,n=new N(function(i,s){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(a){Nt(a,o,`SELECT * FROM ${o.storeName}`,[],function(u,l){for(var c=l.rows,d=c.length,m=0;m<d;m++){var p=c.item(m),y=p.value;if(y&&(y=o.serializer.deserialize(y)),y=e(y,p.key,m+1),y!==void 0){i(y);return}}i()},function(u,l){s(l)})})}).catch(s)});return K(n,t),n}function Cd(e,t,r,n){var i=this;e=dt(e);var s=new N(function(o,a){i.ready().then(function(){t===void 0&&(t=null);var u=t,l=i._dbInfo;l.serializer.serialize(t,function(c,d){d?a(d):l.db.transaction(function(m){Nt(m,l,`INSERT OR REPLACE INTO ${l.storeName} (key, value) VALUES (?, ?)`,[e,c],function(){o(u)},function(p,y){a(y)})},function(m){if(m.code===m.QUOTA_ERR){if(n>0){o(Cd.apply(i,[e,u,r,n-1]));return}a(m)}})})}).catch(a)});return K(s,r),s}function ky(e,t,r){return Cd.apply(this,[e,t,r,1])}function Ny(e,t){var r=this;e=dt(e);var n=new N(function(i,s){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(a){Nt(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],function(){i()},function(u,l){s(l)})})}).catch(s)});return K(n,t),n}function Ty(e){var t=this,r=new N(function(n,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Nt(o,s,`DELETE FROM ${s.storeName}`,[],function(){n()},function(a,u){i(u)})})}).catch(i)});return K(r,e),r}function My(e){var t=this,r=new N(function(n,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Nt(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,u){var l=u.rows.item(0).c;n(l)},function(a,u){i(u)})})}).catch(i)});return K(r,e),r}function Iy(e,t){var r=this,n=new N(function(i,s){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(a){Nt(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],function(u,l){var c=l.rows.length?l.rows.item(0).key:null;i(c)},function(u,l){s(l)})})}).catch(s)});return K(n,t),n}function By(e){var t=this,r=new N(function(n,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Nt(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,u){for(var l=[],c=0;c<u.rows.length;c++)l.push(u.rows.item(c).key);n(l)},function(a,u){i(u)})})}).catch(i)});return K(r,e),r}function Py(e){return new N(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);t({db:e,storeNames:o})},function(i,s){r(s)})},function(n){r(n)})})}function _y(e,t){t=Fo.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,i;return e.name?i=new N(function(s){var o;e.name===r.name?o=n._dbInfo.db:o=openDatabase(e.name,"","",0),e.storeName?s({db:o,storeNames:[e.storeName]}):s(Py(o))}).then(function(s){return new N(function(o,a){s.db.transaction(function(u){function l(p){return new N(function(y,D){u.executeSql(`DROP TABLE IF EXISTS ${p}`,[],function(){y()},function(k,S){D(S)})})}for(var c=[],d=0,m=s.storeNames.length;d<m;d++)c.push(l(s.storeNames[d]));N.all(c).then(function(){o()}).catch(function(p){a(p)})},function(u){a(u)})})}):i=N.reject("Invalid arguments"),K(i,t),i}var Oy={_driver:"webSQLStorage",_initStorage:Fy,_support:Ay(),iterate:xy,getItem:Sy,setItem:ky,removeItem:Ny,clear:Ty,length:My,key:Iy,keys:By,dropInstance:_y};function Ly(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function $d(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function Ry(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Vy(){return!Ry()||localStorage.length>0}function Wy(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=$d(e,t._defaultConfig),Vy()?(t._dbInfo=r,r.serializer=No,N.resolve()):N.reject()}function Uy(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(n)===0&&localStorage.removeItem(s)}});return K(r,e),r}function qy(e,t){var r=this;e=dt(e);var n=r.ready().then(function(){var i=r._dbInfo,s=localStorage.getItem(i.keyPrefix+e);return s&&(s=i.serializer.deserialize(s)),s});return K(n,t),n}function jy(e,t){var r=this,n=r.ready().then(function(){for(var i=r._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,u=1,l=0;l<a;l++){var c=localStorage.key(l);if(c.indexOf(s)===0){var d=localStorage.getItem(c);if(d&&(d=i.serializer.deserialize(d)),d=e(d,c.substring(o),u++),d!==void 0)return d}}});return K(n,t),n}function zy(e,t){var r=this,n=r.ready().then(function(){var i=r._dbInfo,s;try{s=localStorage.key(e)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return K(n,t),n}function Gy(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(n.keyPrefix)===0&&s.push(a.substring(n.keyPrefix.length))}return s});return K(r,e),r}function Ky(e){var t=this,r=t.keys().then(function(n){return n.length});return K(r,e),r}function Zy(e,t){var r=this;e=dt(e);var n=r.ready().then(function(){var i=r._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return K(n,t),n}function Yy(e,t,r){var n=this;e=dt(e);var i=n.ready().then(function(){t===void 0&&(t=null);var s=t;return new N(function(o,a){var u=n._dbInfo;u.serializer.serialize(t,function(l,c){if(c)a(c);else try{localStorage.setItem(u.keyPrefix+e,l),o(s)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(d),a(d)}})})});return K(i,r),i}function Jy(e,t){if(t=Fo.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,i;return e.name?i=new N(function(s){e.storeName?s($d(e,n._defaultConfig)):s(`${e.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=N.reject("Invalid arguments"),K(i,t),i}var Hy={_driver:"localStorageWrapper",_initStorage:Wy,_support:Ly(),iterate:jy,getItem:qy,setItem:Yy,removeItem:Zy,clear:Uy,length:Ky,key:zy,keys:Gy,dropInstance:Jy};const Qy=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Xy=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(Qy(e[n],t))return!0;n++}return!1},Fd=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Ir={},Au={},cr={INDEXEDDB:by,WEBSQL:Oy,LOCALSTORAGE:Hy},ev=[cr.INDEXEDDB._driver,cr.WEBSQL._driver,cr.LOCALSTORAGE._driver],Ln=["dropInstance"],ss=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ln),tv={description:"",driver:ev.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function rv(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function os(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(Fd(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class To{constructor(t){for(let r in cr)if(cr.hasOwnProperty(r)){const n=cr[r],i=n._driver;this[r]=i,Ir[i]||this.defineDriver(n)}this._defaultConfig=os({},tv),this._config=os({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const i=new N(function(s,o){try{const a=t._driver,u=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){o(u);return}const l=ss.concat("_initStorage");for(let m=0,p=l.length;m<p;m++){const y=l[m];if((!Xy(Ln,y)||t[y])&&typeof t[y]!="function"){o(u);return}}(function(){const m=function(p){return function(){const y=new Error(`Method ${p} is not implemented by the current driver`),D=N.reject(y);return K(D,arguments[arguments.length-1]),D}};for(let p=0,y=Ln.length;p<y;p++){const D=Ln[p];t[D]||(t[D]=m(D))}})();const d=function(m){Ir[a]&&console.info(`Redefining LocalForage driver: ${a}`),Ir[a]=t,Au[a]=m,s()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,o):d(!!t._support):d(!0)}catch(a){o(a)}});return nr(i,r,n),i}driver(){return this._driver||null}getDriver(t,r,n){const i=Ir[t]?N.resolve(Ir[t]):N.reject(new Error("Driver not found."));return nr(i,r,n),i}getSerializer(t){const r=N.resolve(No);return nr(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return nr(n,t,t),n}setDriver(t,r,n){const i=this;Fd(t)||(t=[t]);const s=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(c){return i._extend(c),o(),i._ready=i._initStorage(i._config),i._ready}function u(c){return function(){let d=0;function m(){for(;d<c.length;){let y=c[d];return d++,i._dbInfo=null,i._ready=null,i.getDriver(y).then(a).catch(m)}o();const p=new Error("No available storage method found.");return i._driverSet=N.reject(p),i._driverSet}return m()}}const l=this._driverSet!==null?this._driverSet.catch(()=>N.resolve()):N.resolve();return this._driverSet=l.then(()=>{const c=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(c).then(d=>{i._driver=d._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=u(s)})}).catch(()=>{o();const c=new Error("No available storage method found.");return i._driverSet=N.reject(c),i._driverSet}),nr(this._driverSet,r,n),this._driverSet}supports(t){return!!Au[t]}_extend(t){os(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];this.supports(s)&&r.push(s)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=ss.length;t<r;t++)rv(this,ss[t])}createInstance(t){return new To(t)}}const nv=new To,iv=nv,Ht=iv.createInstance({name:"gamepad-type",storeName:"gamepad-type",description:"For storing user-entered gamepad information."}),Sd="saved-layouts",xd="saved-types",kd="submitted-changes";async function sv(){await Ht.clear()}async function Eu(){return await Ht.getItem(Sd)??Eo}async function ov(e){await Ht.setItem(Sd,e)}async function Cu(){const e=await Ht.getItem(xd)??{};return{...sn,...e}}async function $u(e){await Ht.setItem(xd,e)}async function av(){return await Ht.getItem(kd)||void 0}async function uv(e){await Ht.setItem(kd,e)}const Nn=on();function lv(e,t,r){return window.addEventListener(e,t,r),()=>{window.removeEventListener(e,t,r)}}const cv="#ffaaaa",dv={[ke.Microsoft]:"#aaff97",[ke.Nintendo]:"#ffaaaa",[ke.Sony]:"#86e2ff",[ke.Valve]:"#ffaaaa"};function wr(e){return A.isEnumValue(e,ke)?dv[e]:cv}const Fu=Ye()({tagName:"vir-gamepad-axe",cssVars:{"vir-gamepad-axe-color":wr(void 0)},styles:({cssVars:e})=>O`
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
            ${pn};
            position: relative;
            z-index: 10;
        }
    `,render({inputs:e,host:t}){t.style.setProperty("--vir-gamepad-axe-color",wr(e.gamepadBrand));const r=e.gamepadInput.value>=0?{left:50,right:50-e.gamepadInput.value*50}:{left:50+e.gamepadInput.value*50,right:50},n=O`
            left: ${r.left}%;
            right: ${r.right}%;
        `,i=e.gamepadLayout?.inputMappings[e.gamepadInput.inputName]||e.gamepadInput.inputName;return C`
            <div class="progress" style=${n}></div>
            <p class="axe-words">${i}</p>
            <p>${e.gamepadInput.value.toFixed(1)}</p>
        `}}),Su=Ye()({tagName:"vir-gamepad-button",cssVars:{"vir-gamepad-button-button-size":"75px","vir-gamepad-button-color":wr(void 0)},styles:({cssVars:e})=>O`
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
    `,render({inputs:e,host:t}){if(e.gamepadInput.inputType!==ut.Button)throw new Error(`
                Incorrect input type '${e.gamepadInput.inputType}': expected
                '${ut.Button}'.
            `);t.style.setProperty("--vir-gamepad-button-color",wr(e.gamepadBrand));const r=O`
            width: ${e.gamepadInput.value*100}%;
            height: ${e.gamepadInput.value*100}%;
        `,n=e.gamepadLayout?.inputMappings[e.gamepadInput.inputName]||e.gamepadInput.inputName;return C`
            <div class="button-fill-wrapper">
                <div
                    class="button-fill ${Qr({"no-fill":!e.gamepadInput.value})}"
                    style=${r}
                ></div>
            </div>
            <div class="button-name">${n}</div>
        `}}),bt=Ye()({tagName:"vir-gamepad-input",hostClasses:{"vir-gamepad-input-circle":({inputs:e})=>e.gamepadInput.inputType===ut.Button},styles:({hostClasses:e})=>O`
        :host {
            display: flex;
        }

        ${e["vir-gamepad-input-circle"].selector} {
            border-radius: 50%;
        }
    `,render({inputs:e}){return e.gamepadInput.inputType===ut.Axe?C`
                <${Fu.assign(e)}></${Fu}>
            `:e.gamepadInput.inputType===ut.Button?C`
                <${Su.assign(e)}></${Su}>
            `:`Invalid gamepad type received: ${e.gamepadInput.inputType}`}}),Rn=Ye()({tagName:"vir-gamepad-inputs",events:{gamepadInputClick:Ae()},styles:O`
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

        ${bt} {
            cursor: pointer;
            border: 1px solid transparent;
        }

        ${bt}:hover {
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
    `,render({inputs:e,dispatch:t,events:r}){const{gamepadBrand:n}=Gt({gamepad:e.gamepad.deviceName,gamepadModelMap:e.gamepadModelMap}),i=e.gamepad.deviceDetails.buttons.map(a=>C`
                <${bt.assign({gamepadBrand:n,gamepadInput:a,gamepadLayout:e.gamepadLayout})}
                    ${W("click",()=>{t(new r.gamepadInputClick({details:a,deviceKey:e.gamepad.deviceKey,deviceName:e.gamepad.deviceName,deviceType:e.gamepad.deviceType,inputName:a.inputName,inputValue:a.value}))})}
                ></${bt}>
            `),s=e.gamepad.deviceDetails.axes.map(a=>C`
                <${bt.assign({gamepadBrand:n,gamepadInput:a,gamepadLayout:e.gamepadLayout})}
                    ${W("click",()=>{t(new r.gamepadInputClick({details:a,deviceKey:e.gamepad.deviceKey,deviceName:e.gamepad.deviceName,deviceType:e.gamepad.deviceType,inputName:a.inputName,inputValue:a.value}))})}
                ></${bt}>
            `),o=e.gamepadLayout?.notes?z(e.gamepadLayout.notes).map(a=>{const u=e.gamepadLayout?.notes?.[a];return u?C`
                      <p class="notes">
                          <span class="prefix ${a}">${a==="info"?"Note":"WARNING"}:</span>
                          ${u}
                      </p>
                  `:""}):"";return C`
            ${o}
            <div class="inputs">${i}</div>
            <div class="inputs">${s}</div>
        `}});function Mo(e){return e.split("-").map(t=>fc(t)).join(" ")}const xu="create new gamepad model",dr=Ye()({tagName:"vir-gamepad-name",cssVars:{"vir-gamepad-name-gamepad-brand-color":wr(void 0)},events:{editMappingsClick:Ae(),gamepadModelOverride:Ae(),createNewModel:Ae()},styles:({cssVars:e})=>O`
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
            ${pn}
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
    `,render({inputs:e,host:t,dispatch:r,events:n}){const{gamepadBrand:i,gamepadModel:s,gamepadModelDescription:o}=Gt({gamepad:e.gamepad,gamepadModelMap:e.gamepadModelMap});t.style.setProperty("--vir-gamepad-name-gamepad-brand-color",wr(i));const a=Array.from(new Set([...Je(q),...qt(e.gamepadModelMap)])),u=C`
            <select
                ${gg(l=>{Re.instanceOf(l,HTMLSelectElement),s&&(l.value=s)})}
                ${W("change",l=>{const c=l.currentTarget;Re.instanceOf(c,HTMLSelectElement);const d=c.value;d===xu?(r(new n.createNewModel),s?c.value=s:c.value=""):r(new n.gamepadModelOverride(d))})}
            >
                ${a.map(l=>C`
                        <option ?selected=${s===l} value=${l}>
                            ${Mo(l)}
                        </option>
                    `)}
                <option value=${xu}>&gt; Enter New Gamepad Model</option>
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
                ${W("click",()=>{r(new n.editMappingsClick)})}
            >
                Edit Mappings
            </button>
        `}}),ku=Ye()({tagName:"vir-gamepad",styles:O`
        :host {
            display: flex;
            background-color: white;
            color: black;
            gap: 16px;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        ${dr} {
            flex-grow: 1;
            flex-basis: 600px;
        }

        ${Rn} {
            flex-grow: 1000000;
            flex-shrink: 1;
            flex-basis: 300px;
        }
    `,render({inputs:e}){return C`
            <${dr.assign({gamepad:e.gamepad,gamepadIndex:e.gamepadIndex,gamepadModelMap:e.gamepadModelMap})}></${dr}>
            <${Rn.assign({gamepad:e.gamepad,gamepadLayout:e.gamepadLayout,gamepadModelMap:e.gamepadModelMap})}></${Rn}>
        `}}),si=Ye()({tagName:"vir-modal",styles:O`
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
            ${pn};
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
                ${W("mousedown",r=>{r.target===r.currentTarget&&t(new ri)})}
            >
                <div class="modal-wrapper">
                    <header>
                        <h1>${e.modalTitle}</h1>
                        <button
                            class="close-x"
                            ${W("click",()=>{t(new ri)})}
                        >
                            <${J.assign({icon:nd})}></${J}>
                        </button>
                    </header>
                    <div class="slot-wrapper">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `}}),as=Ye()({tagName:"vir-create-new-type-modal",events:{newModelCreate:Ae()},styles:O`
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

        ${je} {
            width: 100%;
        }
    `,state(){return{newModelName:""}},init({host:e}){setTimeout(async()=>{await Jc();const t=e.shadowRoot.querySelector(je.tagName);t&&(Re.instanceOf(t,je),t.shadowRoot.querySelector("input")?.select())},0)},render({inputs:e,dispatch:t,state:r,updateState:n,events:i}){const s=e.gamepadDevices[e.selectedGamepadIndex];if(!s)return C`
                No selected gamepad.
            `;const o=C`
            <select
                ${W("change",c=>{const d=c.currentTarget;Re.instanceOf(d,HTMLSelectElement);const m=Number(d.value);isNaN(m)||t(new Co(m))})}
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
        `,{gamepadModel:a}=Gt({gamepad:s}),u=C`
            <p>Current model: ${a?Mo(a):"unknown"}</p>
        `,l=C`
            <${je.assign({placeholder:"Enter a new model name",value:r.newModelName,disableBrowserHelps:!0})}
                ${W(je.events.valueChange,c=>{n({newModelName:c.detail})})}
            ></${je}>
            <${it.assign({text:"Save"})}
                ${W("click",()=>{t(new i.newModelCreate(r.newModelName)),t(new ri)})}
            ></${it}>
        `;return C`
            <${si.assign({modalTitle:"Enter New Model"})}>
                <div class="wrapper">
                    <div class="selected-gamepad">
                        <span>Selected Gamepad by Name:</span>
                        ${o}
                    </div>
                    <div class="current-model">${u}</div>
                    <div class="new-model-name">${l}</div>
                </div>
            </${si}>
        `}}),Tn=Ye()({tagName:"vir-edit-mappings-modal",events:{inputMapSave:Ae(),selectedGamepadInputChange:Ae()},styles:O`
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
    `,state(){return{cleanup:void 0}},init({state:e,updateState:t,inputs:r,host:n,dispatch:i,events:s}){function o(){setTimeout(async()=>{await Jc();const a=n.shadowRoot.querySelector(je.tagName);a&&(Re.instanceOf(a,je),a.shadowRoot.querySelector("input")?.select())},0)}if(o(),!e.cleanup){const a=r.inputDeviceHandler.listen(Xn,u=>{const l=r.gamepadDevices[r.selectedGamepadIndex];if(!l)return;const c=u.detail.inputs.newInputs.filter(m=>m.deviceKey===l.deviceKey).sort((m,p)=>Math.abs(p.inputValue)-Math.abs(m.inputValue));if(!c.length)return;const d=c[0];d&&r.selectedGamepadInput?.inputName!==d.inputName&&(o(),i(new s.selectedGamepadInputChange(d)))});t({cleanup:a})}},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e,dispatch:t,events:r}){const n=e.gamepadDevices[e.selectedGamepadIndex];if(!n)return C`
                No selected gamepad.
            `;const{gamepadBrand:i}=Gt({gamepad:n.deviceName,gamepadModelMap:e.savedGamepadModelMap});e.selectedGamepadInput&&(n.deviceKey!==e.selectedGamepadInput.deviceKey||n.deviceName!==e.selectedGamepadInput.deviceName)&&t(new r.selectedGamepadInputChange(void 0));const s=C`
            <select
                ${W("change",c=>{const d=c.currentTarget;Re.instanceOf(d,HTMLSelectElement);const m=Number(d.value);isNaN(m)||t(new Co(m))})}
            >
                ${e.gamepadDevices.map((c,d)=>{const{gamepadModel:m}=Gt({gamepad:c.deviceName,gamepadModelMap:e.savedGamepadModelMap});return C`
                        <option
                            ?selected=${e.selectedGamepadIndex===d}
                            value=${String(d)}
                        >
                            &nbsp;${d}:
                            ${m?Mo(m):"unknown"}
                        </option>
                    `})}
            </select>
        `,o=e.selectedGamepadInput?n.deviceDetails.inputsByName[e.selectedGamepadInput.inputName]:void 0,a=o?C`
                  <${bt.assign({gamepadLayout:void 0,gamepadInput:o,gamepadBrand:i})}></${bt}>
              `:C`
                  <p>Press an input on this gamepad to map it.</p>
              `,u=Os({gamepad:n,layouts:e.savedGamepadLayouts,gamepadModelMap:e.savedGamepadModelMap}),l=o?C`
                  <${je.assign({placeholder:"Enter an input name",value:u?.inputMappings[o.inputName]||"",disableBrowserHelps:!0})}
                      ${W(je.events.valueChange,c=>{t(new r.inputMapSave({inputName:o.inputName,mappedName:c.detail}))})}
                  ></${je}>
              `:"";return C`
            <${si.assign({modalTitle:"Edit Mappings"})}>
                <div class="wrapper">
                    <div class="selected-gamepad">
                        <span>Selected Gamepad:</span>
                        ${s}
                    </div>
                    <div class="current-input">${a}</div>
                    <div class="current-mapping">${l}</div>
                </div>
            </${si}>
        `}});ty();Do({tagName:"vir-app",styles:O`
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
            ${pn};
        }

        header .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        .reset-button {
            ${it.cssVars["vira-button-primary-color"].name}: red;
            ${it.cssVars["vira-button-primary-hover-color"].name}: red;
            ${it.cssVars["vira-button-primary-active-color"].name}: red;
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
    `,state(){return{deviceHandler:new Ug({startLoopImmediately:!1,disableMouseMovement:!0,globalDeadZone:.1}),gamepadDevices:[],newInputs:{timestamp:0,devices:[]},gamepadIndexForEditing:0,inputForEditing:void 0,savedGamepadLayouts:ts({defaultValue:Eu().then(e=>(console.info("Loaded layouts:"),console.info(JSON.stringify(e)),e))}),submittedChanges:ts({defaultValue:av()}),savedGamepadModelMap:ts({defaultValue:Cu().then(e=>(console.info("Loaded model map:"),console.info(JSON.stringify(e)),e))}),overrides:{gamepadLayouts:[],gamepadTypes:{}},editMode:"none",cleanup:void 0}},init({state:e,updateState:t}){const r=[e.deviceHandler.listen(Xn,()=>{const n=e.deviceHandler.getLastPollResults();t({gamepadDevices:Object.values(n).filter(i=>i.deviceType===he.Gamepad)})}),e.deviceHandler.listen(Xn,n=>{const i=Date.now(),s=n.detail.inputs.newInputs.reduce((o,a)=>(o.add(String(a.deviceKey)),o),new Set);s.size&&t({newInputs:{timestamp:i,devices:Array.from(s)}})}),lv("keydown",n=>{n.code.toLowerCase()==="escape"&&e.editMode!=="none"&&t({editMode:"none"})})];t({cleanup(){r.forEach(n=>n())}}),e.deviceHandler.startPollingLoop()},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({state:e,updateState:t}){if(e.savedGamepadLayouts.isWaiting()||e.savedGamepadModelMap.isWaiting()||e.submittedChanges.isWaiting())return C`
                <${J.assign({icon:id})}></${J}>
            `;if(!e.savedGamepadLayouts.isResolved()||!e.savedGamepadModelMap.isResolved()||!e.submittedChanges.isResolved())return C`
                <p class="error">Failed to initialize.</p>
            `;const r=e.savedGamepadLayouts.value,n=e.savedGamepadModelMap.value,i=e.submittedChanges.value,s=vu({layouts:r,models:n},i),o=vu({layouts:r,models:n},void 0),a=o.layouts.length||Object.values(o.models).length,u=s.layouts.length||Object.values(s.models).length,l=[...e.gamepadDevices],c=l.map((m,p)=>{const y=Os({gamepad:m,layouts:r,gamepadModelMap:n});return C`
                <${ku.assign({gamepad:m,gamepadIndex:p,gamepadLayout:y,gamepadModelMap:n})}
                    ${W(dr.events.editMappingsClick,()=>{t({gamepadIndexForEditing:p,editMode:"mappings"})})}
                    ${W(dr.events.gamepadModelOverride,async D=>{const k={...n,[m.deviceName.toLowerCase()]:D.detail};e.savedGamepadModelMap.setValue(k),await $u(k)})}
                    ${W(Rn.events.gamepadInputClick,D=>{t({editMode:"mappings",gamepadIndexForEditing:p,inputForEditing:D.detail})})}
                    ${W(dr.events.createNewModel,()=>{t({editMode:"create-type",gamepadIndexForEditing:p})})}
                ></${ku}>
            `}),d=e.editMode==="create-type"?C`
                      <${as.assign({gamepadDevices:l,selectedGamepadIndex:e.gamepadIndexForEditing})}
                          ${W(as.events.newModelCreate,async m=>{const p=e.gamepadDevices[e.gamepadIndexForEditing];if(!p)throw new Error("Cannot update layouts, failed to find selected device");const y={...n,[p.deviceName.toLowerCase()]:m.detail};console.info("Saving updated model map:"),console.info(JSON.stringify(y)),e.savedGamepadModelMap.setValue(y),await $u(y)})}
                      ></${as}>
                  `:e.editMode==="mappings"?C`
                        <${Tn.assign({savedGamepadLayouts:r,gamepadDevices:l,selectedGamepadIndex:e.gamepadIndexForEditing,savedGamepadModelMap:n,selectedGamepadInput:e.inputForEditing,inputDeviceHandler:e.deviceHandler})}
                            ${W(Tn.events.selectedGamepadInputChange,m=>{t({inputForEditing:m.detail})})}
                            ${W(Tn.events.inputMapSave,async m=>{if(r instanceof Error)throw new TypeError("Cannot save mapping, failed to load current mappings.");const p=e.gamepadDevices[e.gamepadIndexForEditing];if(!p)throw new Error("Cannot update layouts, failed to find selected device");const y=Os({gamepad:p,layouts:r,gamepadModelMap:n}),D=on(),k=y?J0(y.systemVersions,D):!0,S=Q0(p),L=k?y??S:y?{...Cs(y),systemVersions:S.systemVersions}:S;L.inputMappings[m.detail.inputName]=m.detail.mappedName,(!y||!k)&&r.push(L),console.info("Saving updated layouts:"),console.info(JSON.stringify(r)),e.savedGamepadLayouts.setValue(Cs(r)),await ov(r)})}
                        ></${Tn}>
                    `:"";return C`
            <main
                ${W(ri,()=>{t({editMode:"none"})})}
                ${W(Co,m=>{t({gamepadIndexForEditing:m.detail})})}
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
                            ${Nn.osName} ${Nn.osVersion}
                            <br />
                            ${Nn.browserName} ${Nn.browserVersion}
                        </p>
                        <div class="submission-buttons">
                            <div class="column">
                                <${it.assign({text:"Submit Changes",disabled:!u})}
                                    ${W("click",async()=>{await uv(s),e.submittedChanges.setValue(s),Xg.info("New mapping override received",{changes:s,systemVersions:on(),connectedDevices:e.gamepadDevices.map(m=>dc(m,["deviceKey","deviceName","deviceType"]))})})}
                                ></${it}>
                                <p class="subtitle">
                                    Submit your changes. IP address is not stored.
                                </p>
                            </div>
                            <${it.assign({text:"Reset Changes",disabled:!a,buttonStyle:ti.Outline})}
                                ${W("click",async()=>{await sv(),e.savedGamepadLayouts.setValue(Eu()),e.savedGamepadModelMap.setValue(Cu())})}
                                class="reset-button"
                            ></${it}>
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
