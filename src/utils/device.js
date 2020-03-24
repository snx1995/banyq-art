const sUserAgent = navigator.userAgent.toLowerCase();
const isIpad = sUserAgent.match(/ipad/i) == "ipad";
const isIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
const isMidp = sUserAgent.match(/midp/i) == "midp";
const isUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
const isUc = sUserAgent.match(/ucweb/i) == "ucweb";
const isAndroid = sUserAgent.match(/android/i) == "android";
const isCE = sUserAgent.match(/windows ce/i) == "windows ce";
const isWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

export default {
    isIpad,
    isIphoneOs,
    isMidp,
    isUc7,
    isUc,
    isAndroid,
    isCE,
    isWM,
    isMobile: (isIpad || isIphoneOs || isMidp || isUc7 || isUc || isAndroid || isCE || isWM)
}