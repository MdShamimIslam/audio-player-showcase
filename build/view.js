/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/utils/getCSS.js":
/*!*************************************!*\
  !*** ../Components/utils/getCSS.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBackgroundCSS: () => (/* binding */ getBackgroundCSS),
/* harmony export */   getBorderCSS: () => (/* binding */ getBorderCSS),
/* harmony export */   getBoxCSS: () => (/* binding */ getBoxCSS),
/* harmony export */   getColorsCSS: () => (/* binding */ getColorsCSS),
/* harmony export */   getIconCSS: () => (/* binding */ getIconCSS),
/* harmony export */   getMultiShadowCSS: () => (/* binding */ getMultiShadowCSS),
/* harmony export */   getSeparatorCSS: () => (/* binding */ getSeparatorCSS),
/* harmony export */   getShadowCSS: () => (/* binding */ getShadowCSS),
/* harmony export */   getSpaceCSS: () => (/* binding */ getSpaceCSS),
/* harmony export */   getTypoCSS: () => (/* binding */ getTypoCSS)
/* harmony export */ });
const getBackgroundCSS = (bg, isSolid = true, isGradient = true, isImage = true) => {
  const {
    type = 'solid',
    color = '#000000b3',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)',
    image = {},
    position = 'center center',
    attachment = 'initial',
    repeat = 'no-repeat',
    size = 'cover',
    overlayColor = '#000000b3'
  } = bg || {};
  const styles = 'gradient' === type && isGradient ? `background: ${gradient};` : 'image' === type && isImage ? `background: url(${image?.url});
				background-color: ${overlayColor};
				background-position: ${position};
				background-size: ${size};
				background-repeat: ${repeat};
				background-attachment: ${attachment};
				background-blend-mode: overlay;` : isSolid && `background: ${color};`;
  return styles;
}; // PHP version in Stepped Content

const getBorderCSS = border => {
  const {
    width = '0px',
    style = 'solid',
    color = '#0000',
    side = 'all',
    radius = '0px'
  } = border || {};
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
		${!radius ? '' : `border-radius: ${radius};`}
	`;
  return styles;
};
const getColorsCSS = colors => {
  const {
    color = '#333',
    bgType = 'solid',
    bg = '#0000',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = colors || {};
  const styles = `
		${color ? `color: ${color};` : ''}
		${gradient || bg ? `background: ${'gradient' === bgType ? gradient : bg};` : ''}
	`;
  return styles;
};
const getIconCSS = (icon, isSize = true, isColor = true) => {
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = icon || {};
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : `color: ${color};`;
  const styles = `
		${!fontSize || !isSize ? '' : `font-size: ${fontSize}px;`}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = (value, type = 'box') => {
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#7090b0',
      isInset = false
    } = item || {};
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator || {};
  const styles = `
		width: ${width};
		${'0px' === height && '0em' === height && '0rem' === height ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = shadow => {
  const {
    type = 'box',
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow || {};
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space || {};
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = (selector, typo, isFamily = true) => {
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo || {};
  const generateCss = (value, cssProperty) => !value ? '' : `${cssProperty}: ${value};`;
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const desktopFontSize = fontSize?.desktop || fontSize;
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${generateCss(fontWeight, 'font-weight')}
		${`font-size: ${desktopFontSize}px;`}
		${generateCss(fontStyle, 'font-style')}
		${generateCss(textTransform, 'text-transform')}
		${generateCss(textDecoration, 'text-decoration')}
		${generateCss(lineHeight, 'line-height')}
		${generateCss(letterSpace, 'letter-spacing')}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`,
    styles: `${selector}{
			${styles}
		}
		@media (max-width: 768px) {
			${selector}{
				${`font-size: ${tabletFontSize}px;`}
			}
		}
		@media (max-width: 576px) {
			${selector}{
				${`font-size: ${mobileFontSize}px;`}
			}
		}`.replace(/\s+/g, ' ').trim()
  };
};
const getBoxCSS = (val = {}) => Object.values(val).join(' ');

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/utils/getCSS */ "../Components/utils/getCSS.js");


const Style = ({
  attributes,
  id
}) => {
  const {
    colors
  } = attributes;
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksTestPurpose`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
		
			${blockSl} p{
				${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(colors)}
			}

	`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer1.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer1.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer1({
  attributes
}) {
  const {
    item = {},
    showcaseElements = {}
  } = attributes || {};
  const {
    title,
    artist,
    url
  } = item;
  const {
    isForBack,
    isVolume,
    isCurrentTime,
    isDurationTime
  } = showcaseElements;
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1-top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap1-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap1-artist"
  }, artist)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap1-time"
  }, isCurrentTime && formatTime(currentTime), isCurrentTime && isDurationTime && '/', isDurationTime && formatTime(duration))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1-bar-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1-bar-bg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1-bar-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1-controls"
  }, isForBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap1-btn"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 20
  }), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap1-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 24
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 24
  })), isForBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap1-btn"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 20
  }), " "), isVolume && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1-vol"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 16,
    className: "ap1-vol-icon"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1-vol-bg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap1-vol-fill"
  })))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer10.js":
/*!******************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer10.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer10)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer10({
  attributes
}) {
  const {
    title,
    artist,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-banner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-overlay"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap10-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap10-artist"
  }, artist))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-time"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(currentTime)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(duration))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-progress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap10-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 20
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-main"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap10-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 20
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap10-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 20
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 20,
    className: "ml-05"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap10-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 20
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap10-spacer"
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer11.js":
/*!******************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer11.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer11)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");




function AudioPlayer11({
  attributes
}) {
  const {
    title,
    artist,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleMute = () => setIsMuted(!isMuted);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap11"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap11-top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap11-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 18,
    className: "ml-05"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap11-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap11-artist"
  }, artist))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap11-progress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap11-time"
  }, formatTime(currentTime)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap11-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap11-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap11-time"
  }, formatTime(duration))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap11-bottom"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap11-bars"
  }, [1, 2, 3, 4, 5].map(i => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "ap11-bar-line",
    style: {
      height: 10 + Math.random() * 10
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap11-mute",
    onClick: toggleMute
  }, isMuted ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 18
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 18
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer12.js":
/*!******************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer12.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer12)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer12({
  attributes
}) {
  const {
    title,
    artist,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap12-head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap12-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap12-artist"
  }, artist)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap12-time"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(currentTime), " / ", formatTime(duration)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap12-progress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap12-progress-fill",
    style: {
      transform: `translateX(${-100 + currentTime / duration * 100}%)`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap12-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap12-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 24
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap12-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 24
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 24,
    className: "ml-1"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap12-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 24
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer13.js":
/*!******************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer13.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer13)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer13({
  attributes
}) {
  const {
    title,
    artist,
    cover,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13-thumb"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: cover,
    alt: title,
    className: "ap13-thumb-img"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ap13-overlay ${isPlaying ? 'show' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13-overlay-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 12,
    className: "ap13-pause-icon"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap13-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap13-artist"
  }, artist), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13-time"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(currentTime)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sep"
  }, "/"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(duration))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13-bar-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13-bar-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap13-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap13-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap13-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 14
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 14,
    className: "ml-05"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap13-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 16
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap13-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 16
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer14.js":
/*!******************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer14.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer14)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer14({
  attributes
}) {
  const {
    title,
    artist,
    cover,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14-top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap14-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap14-artist"
  }, artist)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14-cover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: cover,
    alt: title,
    className: "ap14-cover-img"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14-wavebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14-wavebar-top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14-wave"
  }, Array(10).fill(0).map((_, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "ap14-wave-bar",
    style: {
      height: `${4 + Math.random() * 16}px`,
      backgroundColor: i / 10 < currentTime / duration ? '#22D3EE' : '#4B5563'
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap14-time"
  }, formatTime(currentTime), " / ", formatTime(duration))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14-progress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14-progress-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap14-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap14-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 22
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap14-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 24
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 24,
    className: "ml-1"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap14-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 22
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap14-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 22
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer15.js":
/*!******************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer15.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer15)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer15({
  attributes
}) {
  const {
    title,
    artist,
    url,
    cover
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap15"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap15-head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap15-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap15-artist"
  }, artist)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ap15-cover ${isPlaying ? 'spin' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: cover,
    alt: title,
    className: "ap15-img"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap15-progressbox"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap15-bar-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap15-bar",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap15-time"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(currentTime)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(duration)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap15-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap15-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 30
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap15-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 30
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 30,
    className: "ml-1"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap15-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 30
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer2.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer2.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer2({
  attributes
}) {
  const {
    item = {},
    showcaseElements = {}
  } = attributes || {};
  const {
    title,
    artist,
    url,
    cover
  } = item;
  const {
    isForBack,
    isVolume,
    isCurrentTime
  } = showcaseElements;
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2-cover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: cover,
    alt: title,
    className: `ap2-img ${isPlaying ? 'spin' : ''}`
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2-top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap2-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap2-artist"
  }, artist)), isCurrentTime && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap2-time"
  }, formatTime(currentTime))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2-bar-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2-btns"
  }, isForBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap2-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap2-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 12
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 12
  })), isForBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap2-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 16
  }))), isVolume && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap2-vol"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 14
  })))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer3.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer3.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer3({
  attributes
}) {
  const {
    item = {},
    showcaseElements = {}
  } = attributes || {};
  const {
    title,
    artist,
    url
  } = item;
  const {
    isForBack,
    isVolume,
    isCurrentTime,
    isDurationTime
  } = showcaseElements;
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap3-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap3-artist"
  }, artist)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-status"
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-wave"
  }, [...Array(8)].map((_, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "ap3-bar"
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, " ", isDurationTime ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap3-duration"
  }, formatTime(duration)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null), " "))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-progress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-track"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-time"
  }, isCurrentTime ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(currentTime)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null), isDurationTime ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(duration)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-controls"
  }, isForBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap3-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 20
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap3-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 20
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 20,
    className: "ml-1"
  })), isForBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap3-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 20
  })), isVolume && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-vol"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 16,
    className: "ap3-vol-icon"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-vol-track"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap3-vol-fill"
  })))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer4.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer4.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer4({
  attributes
}) {
  const {
    item = {},
    showcaseElements = {}
  } = attributes || {};
  const {
    title,
    url
  } = item;
  const {
    isForBack,
    isVolume,
    isCurrentTime,
    isDurationTime
  } = showcaseElements;
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap4-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 18,
    className: "ml-05"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap4-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap4-top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap4-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap4-time"
  }, isCurrentTime && formatTime(currentTime), isCurrentTime && isDurationTime && '/', isDurationTime && formatTime(duration))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap4-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap4-bar-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap4-thumb"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap4-icons"
  }, isForBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap4-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 18
  })), isForBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap4-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 18
  })), isVolume && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap4-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 18
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer5.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer5.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer5)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-1.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer5({
  attributes
}) {
  const {
    title,
    artist,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  const generateWaveform = () => {
    return Array(50).fill(0).map(() => Math.random() * 30 + 5);
  };
  const waveform = generateWaveform();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "player"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "artist"
  }, artist)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "badge"
  }, "PLAYING")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "waveform"
  }, waveform.map((height, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "bar",
    style: {
      height: `${height}px`,
      opacity: i / waveform.length < currentTime / duration ? 1 : 0.3,
      backgroundColor: i / waveform.length < currentTime / duration ? '#10B981' : '#6B7280'
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "time"
  }, formatTime(currentTime)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btns"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "icon-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 20
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "play-btn",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 20
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 20,
    className: "ml-0.5"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "icon-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 20
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vol"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 18
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer6.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer6.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/heart.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer1({
  attributes
}) {
  const {
    title,
    artist,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-box"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap6-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap6-artist"
  }, artist)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap6-heart"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-progress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-track"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-thumb",
    style: {
      left: `${currentTime / duration * 100}%`,
      top: '50%'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-time"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(currentTime)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "-", formatTime(duration - currentTime)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-vol"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap6-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 22
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 22,
    className: "ml-1"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap6-speed"
  }, "1.0x"))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer7.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer7.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer7)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer7({
  attributes
}) {
  const {
    title,
    artist,
    cover,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap7"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap7-thumb"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: cover,
    alt: title,
    className: "ap7-img"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap7-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap7-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap7-artist"
  }, artist), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap7-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap7-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap7-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 16,
    className: "ml-05"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap7-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 18
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap7-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap7-bar-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap7-time"
  }, formatTime(currentTime)))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer8.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer8.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer8)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/volume-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer8({
  attributes
}) {
  const {
    title,
    artist,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8-head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap8-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap8-artist"
  }, artist)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8-icons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap8-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap8-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8-progress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8-thumb",
    style: {
      left: `calc(${currentTime / duration * 100}% - 8px)`,
      top: '50%'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8-time"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(currentTime)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formatTime(duration)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap8-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap8-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 28
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 28,
    className: "ml-1"
  }))));
}

/***/ }),

/***/ "./src/Components/Common/theme/AudioPlayer9.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/AudioPlayer9.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer9)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/music.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-back.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js");
/* harmony import */ var _hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAudio */ "./src/hooks/useAudio.js");



function AudioPlayer9({
  attributes
}) {
  const {
    title,
    artist,
    url
  } = attributes.item || {};
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    formatTime
  } = (0,_hooks_useAudio__WEBPACK_IMPORTED_MODULE_1__.useAudio)(url);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap9-head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap9-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ap9-title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ap9-artist"
  }, artist))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap9-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap9-bar-fill",
    style: {
      width: `${currentTime / duration * 100}%`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap9-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap9-time"
  }, formatTime(currentTime)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ap9-buttons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap9-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 18
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap9-play",
    onClick: togglePlay
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 16
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 16,
    className: "ml-05"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ap9-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 18
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ap9-time"
  }, formatTime(duration))));
}

/***/ }),

/***/ "./src/Components/Common/theme/theme.js":
/*!**********************************************!*\
  !*** ./src/Components/Common/theme/theme.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AudioPlayer1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayer1 */ "./src/Components/Common/theme/AudioPlayer1.js");
/* harmony import */ var _AudioPlayer2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer2 */ "./src/Components/Common/theme/AudioPlayer2.js");
/* harmony import */ var _AudioPlayer3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudioPlayer3 */ "./src/Components/Common/theme/AudioPlayer3.js");
/* harmony import */ var _AudioPlayer4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioPlayer4 */ "./src/Components/Common/theme/AudioPlayer4.js");
/* harmony import */ var _AudioPlayer5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudioPlayer5 */ "./src/Components/Common/theme/AudioPlayer5.js");
/* harmony import */ var _AudioPlayer6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AudioPlayer6 */ "./src/Components/Common/theme/AudioPlayer6.js");
/* harmony import */ var _AudioPlayer7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AudioPlayer7 */ "./src/Components/Common/theme/AudioPlayer7.js");
/* harmony import */ var _AudioPlayer8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AudioPlayer8 */ "./src/Components/Common/theme/AudioPlayer8.js");
/* harmony import */ var _AudioPlayer9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AudioPlayer9 */ "./src/Components/Common/theme/AudioPlayer9.js");
/* harmony import */ var _AudioPlayer10__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AudioPlayer10 */ "./src/Components/Common/theme/AudioPlayer10.js");
/* harmony import */ var _AudioPlayer11__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AudioPlayer11 */ "./src/Components/Common/theme/AudioPlayer11.js");
/* harmony import */ var _AudioPlayer12__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AudioPlayer12 */ "./src/Components/Common/theme/AudioPlayer12.js");
/* harmony import */ var _AudioPlayer13__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AudioPlayer13 */ "./src/Components/Common/theme/AudioPlayer13.js");
/* harmony import */ var _AudioPlayer14__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AudioPlayer14 */ "./src/Components/Common/theme/AudioPlayer14.js");
/* harmony import */ var _AudioPlayer15__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AudioPlayer15 */ "./src/Components/Common/theme/AudioPlayer15.js");
















const Theme = props => {
  const {
    attributes
  } = props;
  const {
    playerSl = 'one'
  } = attributes.options || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ThemeSwitch, {
    theme: playerSl,
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);
const ThemeSwitch = ({
  theme,
  ...props
}) => {
  switch (theme) {
    case 'two':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer2__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ...props
      });
    case 'three':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer3__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ...props
      });
    case 'four':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer4__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ...props
      });
    case 'five':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer5__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ...props
      });
    case 'six':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer6__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ...props
      });
    case 'seven':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer7__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ...props
      });
    case 'eight':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer8__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ...props
      });
    case 'nine':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer9__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ...props
      });
    case 'ten':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer10__WEBPACK_IMPORTED_MODULE_10__["default"], {
        ...props
      });
    case 'eleven':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer11__WEBPACK_IMPORTED_MODULE_11__["default"], {
        ...props
      });
    case 'twelve':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer12__WEBPACK_IMPORTED_MODULE_12__["default"], {
        ...props
      });
    case 'thirteen':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer13__WEBPACK_IMPORTED_MODULE_13__["default"], {
        ...props
      });
    case 'fourteen':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer14__WEBPACK_IMPORTED_MODULE_14__["default"], {
        ...props
      });
    case 'fifteen':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer15__WEBPACK_IMPORTED_MODULE_15__["default"], {
        ...props
      });
    default:
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudioPlayer1__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "2",
        ...props
      });
  }
};

/***/ }),

/***/ "./src/hooks/useAudio.js":
/*!*******************************!*\
  !*** ./src/hooks/useAudio.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAudio: () => (/* binding */ useAudio)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useAudio = url => {
  const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [volume, setVolume] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.7);
  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    audioRef.current = new Audio(url);
    const audio = audioRef.current;
    audio.volume = volume;
    const updateTime = () => setCurrentTime(Math.floor(audio.currentTime));
    const handleDurationChange = () => setDuration(Math.floor(audio.duration));
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [volume, url]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const seek = time => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  const adjustVolume = value => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };
  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    seek,
    adjustVolume,
    formatTime
  };
};

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/Icon.js":
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "svg",
    {
      ref,
      ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
      ...!children && !(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasA11yProp)(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(
        `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)((0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/heart.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/heart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Heart)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("heart", __iconNode);


//# sourceMappingURL=heart.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/music.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/music.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Music)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
];
const Music = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("music", __iconNode);


//# sourceMappingURL=music.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/pause.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/pause.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Pause)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
];
const Pause = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pause", __iconNode);


//# sourceMappingURL=pause.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/play.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/play.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Play)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("play", __iconNode);


//# sourceMappingURL=play.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/refresh-cw.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ RefreshCw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("refresh-cw", __iconNode);


//# sourceMappingURL=refresh-cw.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/skip-back.js":
/*!***************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/skip-back.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ SkipBack)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
];
const SkipBack = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("skip-back", __iconNode);


//# sourceMappingURL=skip-back.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/skip-forward.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/skip-forward.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ SkipForward)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
];
const SkipForward = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("skip-forward", __iconNode);


//# sourceMappingURL=skip-forward.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/volume-1.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/volume-1.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Volume1)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }]
];
const Volume1 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("volume-1", __iconNode);


//# sourceMappingURL=volume-1.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/volume-2.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/volume-2.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Volume2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
];
const Volume2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("volume-2", __iconNode);


//# sourceMappingURL=volume-2.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/volume-x.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/volume-x.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ VolumeX)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
];
const VolumeX = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("volume-x", __iconNode);


//# sourceMappingURL=volume-x.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasA11yProp: () => (/* binding */ hasA11yProp),
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase),
/* harmony export */   toPascalCase: () => (/* binding */ toPascalCase)
/* harmony export */ });
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Common_theme_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/theme/theme */ "./src/Components/Common/theme/theme.js");





document.addEventListener('DOMContentLoaded', () => {
  const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-audio-player-showcase');
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(blockNameEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: blockNameEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bBlocksAudioPlayer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_theme_theme__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes
    }))));
    blockNameEl?.removeAttribute('data-attributes');
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map