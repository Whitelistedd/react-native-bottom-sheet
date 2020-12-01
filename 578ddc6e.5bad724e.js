(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),a=(t(0),t(83)),i={id:"custom-handle",title:"Custom Handle",slug:"/custom-handle",hide_table_of_contents:!0},d={unversionedId:"custom-handle",id:"custom-handle",isDocsHomePage:!1,title:"Custom Handle",description:"To override the default handle, you will need to pass the prop handleComponent to the BottomSheet component.",source:"@site/docs/custom-handle.md",slug:"/custom-handle",permalink:"/react-native-bottom-sheet/custom-handle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/custom-handle.md",version:"current",sidebar:"packages",previous:{title:"React Navigation Integration",permalink:"/react-native-bottom-sheet/react-navigation-integration"},next:{title:"Custom Background",permalink:"/react-native-bottom-sheet/custom-background"}},c=[{value:"Example",id:"example",children:[]}],l={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To override the default handle, you will need to pass the prop ",Object(a.b)("inlineCode",{parentName:"p"},"handleComponent")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"BottomSheet")," component."),Object(a.b)("p",null,"When you provide your own handle component, it will receive an animated prop ",Object(a.b)("inlineCode",{parentName:"p"},"animatedIndex")," & ",Object(a.b)("inlineCode",{parentName:"p"},"animatedPosition")," that indicates the index of the current position of the sheet."),Object(a.b)("p",null,"You can extend your custom handle props interface with the provided ",Object(a.b)("inlineCode",{parentName:"p"},"BottomSheetHandleProps")," interface to expose ",Object(a.b)("inlineCode",{parentName:"p"},"animatedIndex")," & ",Object(a.b)("inlineCode",{parentName:"p"},"animatedPosition")," into your props."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"Here is an example of a custom handle component, but first you will need to install ",Object(a.b)("inlineCode",{parentName:"p"},"Redash"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-redash\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/wcandillon/react-native-redash"}),"Redash"),": The React Native Reanimated and Gesture Handler Toolbelt.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { useMemo } from 'react';\nimport { StyleProp, StyleSheet, ViewStyle } from 'react-native';\nimport { BottomSheetHandleProps } from '@gorhom/bottom-sheet';\nimport Animated, { interpolate, Extrapolate } from 'react-native-reanimated';\nimport { transformOrigin, toRad } from 'react-native-redash';\n\ninterface HandleProps extends BottomSheetHandleProps {}\n\nconst Handle: React.FC<HandleProps> = ({ animatedIndex }) => {\n  //#region animations\n  const borderTopRadius = useMemo(\n    () =>\n      interpolate(animatedIndex, {\n        inputRange: [1, 2],\n        outputRange: [20, 0],\n        extrapolate: Extrapolate.CLAMP,\n      }),\n    [animatedIndex]\n  );\n  const indicatorTransformOriginY = useMemo(\n    () =>\n      interpolate(animatedIndex, {\n        inputRange: [0, 1, 2],\n        outputRange: [-1, 0, 1],\n        extrapolate: Extrapolate.CLAMP,\n      }),\n    [animatedIndex]\n  );\n  const leftIndicatorRotate = useMemo(\n    () =>\n      interpolate(animatedIndex, {\n        inputRange: [0, 1, 2],\n        outputRange: [toRad(-30), 0, toRad(30)],\n        extrapolate: Extrapolate.CLAMP,\n      }),\n    [animatedIndex]\n  );\n  const rightIndicatorRotate = interpolate(animatedIndex, {\n    inputRange: [0, 1, 2],\n    outputRange: [toRad(30), 0, toRad(-30)],\n    extrapolate: Extrapolate.CLAMP,\n  });\n  //#endregion\n\n  //#region styles\n  const containerStyle = useMemo(\n    () => [\n      styles.header,\n      {\n        borderTopLeftRadius: borderTopRadius,\n        borderTopRightRadius: borderTopRadius,\n      },\n    ],\n    [borderTopRadius]\n  );\n  const leftIndicatorStyle = useMemo(\n    () => ({\n      ...styles.indicator,\n      ...styles.leftIndicator,\n      transform: transformOrigin(\n        { x: 0, y: indicatorTransformOriginY },\n        {\n          rotate: leftIndicatorRotate,\n          translateX: -5,\n        }\n      ),\n    }),\n    [indicatorTransformOriginY, leftIndicatorRotate]\n  );\n  const rightIndicatorStyle = useMemo(\n    () => ({\n      ...styles.indicator,\n      ...styles.rightIndicator,\n      transform: transformOrigin(\n        { x: 0, y: indicatorTransformOriginY },\n        {\n          rotate: rightIndicatorRotate,\n          translateX: 5,\n        }\n      ),\n    }),\n    [indicatorTransformOriginY, rightIndicatorRotate]\n  );\n  //#endregion\n\n  // render\n  return (\n    <Animated.View style={containerStyle}>\n      <Animated.View style={leftIndicatorStyle} />\n      <Animated.View style={rightIndicatorStyle} />\n    </Animated.View>\n  );\n};\n\nexport default Handle;\n\nconst styles = StyleSheet.create({\n  header: {\n    alignContent: 'center',\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: 'white',\n    paddingVertical: 14,\n    shadowColor: 'black',\n    shadowOffset: {\n      width: 0,\n      height: -20,\n    },\n    shadowOpacity: 0.1,\n    shadowRadius: 10,\n    elevation: 16,\n    borderBottomWidth: 1,\n    borderBottomColor: '#fff',\n  },\n  indicator: {\n    position: 'absolute',\n    width: 10,\n    height: 4,\n    backgroundColor: '#999',\n  },\n  leftIndicator: {\n    borderTopStartRadius: 2,\n    borderBottomStartRadius: 2,\n  },\n  rightIndicator: {\n    borderTopEndRadius: 2,\n    borderBottomEndRadius: 2,\n  },\n});\n")))}s.isMDXComponent=!0},83:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return t?r.a.createElement(b,d(d({ref:n},l),{},{components:t})):r.a.createElement(b,d({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);