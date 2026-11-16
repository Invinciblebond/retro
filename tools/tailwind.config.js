module.exports = {
  darkMode: "class",
  content: ["./calorie_tracker.html","./cycletracker.html","./History.html"],
  theme: { extend: {
    colors: {"on-primary-fixed":"#002114","primary-fixed":"#6afcbf","background":"#0e1511","inverse-surface":"#dde4dd","outline":"#86948b","on-background":"#dde4dd","tertiary-container":"#ff996e","on-secondary-fixed":"#2b1700","surface-container-lowest":"#09100c","on-primary":"#003825","on-surface":"#dde4dd","error":"#ffb4ab","on-tertiary-fixed-variant":"#79310e","on-error-container":"#ffdad6","inverse-primary":"#006c4a","on-error":"#690005","secondary-container":"#fa9b00","on-tertiary":"#591d00","tertiary":"#ffc1a8","inverse-on-surface":"#2b322e","on-secondary-container":"#623a00","on-tertiary-fixed":"#370e00","error-container":"#93000a","secondary":"#ffc07a","on-primary-container":"#005036","on-secondary-fixed-variant":"#673d00","surface-variant":"#2f3632","primary-container":"#2ccb92","tertiary-fixed-dim":"#ffb598","surface-bright":"#333b36","on-primary-fixed-variant":"#005137","tertiary-fixed":"#ffdbce","surface-dim":"#0e1511","secondary-fixed":"#ffddbb","primary":"#54e8ac","on-surface-variant":"#bbcac0","primary-fixed-dim":"#48dfa4","outline-variant":"#3c4a42","on-secondary":"#482900","surface":"#0e1511","secondary-fixed-dim":"#ffb868","surface-container-highest":"#2f3632","surface-container":"#1a211d","on-tertiary-container":"#772f0c","surface-container-high":"#242c27","surface-container-low":"#161d19","surface-tint":"#48dfa4"},
    borderRadius: { DEFAULT:"0.25rem", lg:"0.5rem", xl:"0.75rem", full:"9999px" },
    spacing: { lg:"24px","container-padding":"20px",unit:"4px",gutter:"16px",sm:"8px",xs:"4px",md:"16px",xl:"32px" },
    fontFamily: {"data-mono":["Inter"],"metric-xl":["Inter"],"body-md":["Inter"],"headline-lg":["Inter"],"label-sm":["Inter"]},
    fontSize: {
      "data-mono":["14px",{lineHeight:"20px",letterSpacing:"0.05em",fontWeight:"600"}],
      "metric-xl":["36px",{lineHeight:"44px",letterSpacing:"-0.03em",fontWeight:"700"}],
      "body-md":["16px",{lineHeight:"24px",letterSpacing:"0em",fontWeight:"400"}],
      "headline-lg":["24px",{lineHeight:"32px",letterSpacing:"-0.02em",fontWeight:"600"}],
      "label-sm":["13px",{lineHeight:"18px",letterSpacing:"0.01em",fontWeight:"500"}]
    }
  } },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
