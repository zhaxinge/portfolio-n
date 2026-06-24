/* @ds-bundle: {"format":3,"namespace":"EditorialPortfolioDesignSystem_7d4ee2","components":[{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SocialIcons","sourcePath":"components/navigation/SocialIcons.jsx"}],"sourceHashes":{"components/content/ProjectCard.jsx":"0a4dd5589b96","components/content/Tag.jsx":"5433cbfb358f","components/core/Button.jsx":"b86bec8f763c","components/forms/Checkbox.jsx":"621dcde446ee","components/forms/Input.jsx":"6385fff8bd39","components/forms/Select.jsx":"d2c829603168","components/navigation/SocialIcons.jsx":"9f82a27d6753","ui_kits/portfolio/AboutScreen.jsx":"86deb4e27c9d","ui_kits/portfolio/Header.jsx":"d1820310d043","ui_kits/portfolio/HomeScreen.jsx":"0af3d74b1a4f","ui_kits/portfolio/ProjectScreen.jsx":"b0bd24eec7d5","ui_kits/portfolio/Sidebar.jsx":"7e0e622ac2c6","ui_kits/portfolio/data.js":"15b3d3182783"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EditorialPortfolioDesignSystem_7d4ee2 = window.EditorialPortfolioDesignSystem_7d4ee2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small uppercase slab label for categories / techniques.
 * `solid` fills with accent; default is a hairline-outlined chip.
 */
function Tag({
  children,
  variant = 'outline',
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-heading)',
    fontWeight: 'var(--weight-heading)',
    fontSize: '0.6em',
    letterSpacing: 'var(--kerning-heading)',
    textTransform: 'uppercase',
    lineHeight: 1,
    padding: '0.5em 0.9em',
    borderRadius: 'var(--radius)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    outline: {
      background: 'transparent',
      boxShadow: 'inset 0 0 0 1px var(--border)',
      color: 'var(--fg)'
    },
    solid: {
      background: 'var(--accent)',
      color: 'var(--on-accent)'
    },
    muted: {
      background: 'var(--bg-alt)',
      color: 'var(--fg)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the Editorial action element.
 * Outlined by default (2px inset accent stroke, transparent fill); `primary`
 * fills with accent. Uppercase Roboto Slab with slab tracking.
 */
function Button({
  children,
  variant = 'default',
  // 'default' | 'primary'
  size = 'medium',
  // 'small' | 'medium' | 'large'
  fit = false,
  disabled = false,
  icon,
  // optional FontAwesome class, e.g. 'fa-solid fa-arrow-right'
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const heights = {
    small: '3.5em',
    medium: '3.5em',
    large: '3.65em'
  };
  const fontSizes = {
    small: '0.6em',
    medium: '0.8em',
    large: '1em'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5em',
    appearance: 'none',
    border: 0,
    cursor: disabled ? 'default' : 'pointer',
    fontFamily: 'var(--font-heading)',
    fontWeight: 'var(--weight-heading)',
    fontSize: fontSizes[size],
    letterSpacing: 'var(--kerning-heading)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    height: heights[size],
    lineHeight: heights[size],
    padding: '0 2.25em',
    width: fit ? '100%' : 'auto',
    borderRadius: 'var(--radius)',
    background: 'transparent',
    boxShadow: 'inset 0 0 0 2px var(--accent)',
    color: 'var(--accent)',
    opacity: disabled ? 0.25 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    transition: 'background-color var(--duration-transition) var(--ease), color var(--duration-transition) var(--ease)',
    boxSizing: 'border-box'
  };
  const primary = variant === 'primary' ? {
    background: 'var(--accent)',
    boxShadow: 'none',
    color: 'var(--on-accent)'
  } : {};
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  let interaction = {};
  if (!disabled) {
    if (variant === 'primary') {
      if (active) interaction = {
        background: 'var(--accent-active)'
      };else if (hover) interaction = {
        background: 'var(--accent-hover)'
      };
    } else {
      if (active) interaction = {
        background: 'var(--accent-wash-2)'
      };else if (hover) interaction = {
        background: 'var(--accent-wash)'
      };
    }
  }
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    style: {
      ...base,
      ...primary,
      ...interaction,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
/**
 * ProjectCard — the portfolio "post". Image on top, slab title, body, and an
 * outlined action button. Mirrors the .posts article from the Editorial grid.
 */
function ProjectCard({
  image,
  title,
  description,
  href = '#',
  actionLabel = 'More',
  imageHref,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: imageHref || href,
    style: {
      display: 'block',
      marginBottom: 'var(--element-margin)',
      borderBottom: 0,
      overflow: 'hidden',
      borderRadius: 'var(--radius)'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: '16 / 10',
      objectFit: 'cover',
      background: 'var(--bg-alt)',
      transition: 'opacity var(--duration-transition) var(--ease)',
      opacity: hover ? 0.85 : 1
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-heading)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--fg-bold)',
      margin: '0 0 1em 0',
      lineHeight: 'var(--leading-heading)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'inherit',
      borderBottom: 0
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--element-margin) 0',
      color: 'var(--fg)',
      lineHeight: 'var(--leading-body)',
      flexGrow: 1
    }
  }, description), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: href,
    size: "small"
  }, actionLabel)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox / Radio — Editorial form toggles. Square box (checkbox) or circle
 * (radio); checked state fills with fg-bold and shows a check / dot.
 */
function Checkbox({
  type = 'checkbox',
  // 'checkbox' | 'radio'
  label,
  checked,
  defaultChecked,
  onChange,
  name,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const box = {
    width: '1.65em',
    height: '1.65em',
    flex: 'none',
    borderRadius: type === 'radio' ? '100%' : 'var(--radius)',
    border: 'solid 1px',
    borderColor: on ? 'var(--fg-bold)' : 'var(--field-border)',
    background: on ? 'var(--fg-bold)' : 'var(--bg)',
    boxShadow: focus ? '0 0 0 1px var(--accent)' : 'none',
    color: 'var(--bg)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8em',
    transition: 'all var(--duration-transition) var(--ease)'
  };
  function handle(e) {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.65em',
      cursor: disabled ? 'default' : 'pointer',
      color: 'var(--fg)',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    name: name,
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: handle,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: box,
    "aria-hidden": "true"
  }, on && (type === 'radio' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.5em',
      height: '0.5em',
      borderRadius: '100%',
      background: 'var(--bg)'
    }
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input / Textarea — editorial text field. 1px border, accent focus ring.
 */
function Input({
  as = 'input',
  // 'input' | 'textarea'
  type = 'text',
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    appearance: 'none',
    background: 'var(--bg)',
    border: 'solid 1px var(--field-border)',
    borderColor: focus ? 'var(--accent)' : 'var(--field-border)',
    boxShadow: focus ? '0 0 0 1px var(--accent)' : 'none',
    borderRadius: 'var(--radius)',
    color: 'var(--fg)',
    display: 'block',
    outline: 0,
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: '1em',
    boxSizing: 'border-box',
    opacity: disabled ? 0.5 : 1,
    transition: 'border-color var(--duration-transition) var(--ease), box-shadow var(--duration-transition) var(--ease)',
    ...(as === 'textarea' ? {
      padding: '0.75em 1em',
      lineHeight: 'var(--leading-body)'
    } : {
      height: 'var(--element-height)',
      padding: '0 1em'
    })
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'var(--fg-bold)',
      display: 'block',
      fontSize: '0.9em',
      fontWeight: 'var(--weight-bold)',
      marginBottom: '0.5em'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({}, as === 'input' ? {
    type
  } : {
    rows
  }, {
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: field,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native dropdown styled to match Editorial fields, with the
 * template's custom chevron rendered as a background SVG.
 */
function Select({
  label,
  value,
  defaultValue,
  onChange,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const chevron = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23a0a8ab'/%3E%3C/svg%3E";
  const field = {
    appearance: 'none',
    WebkitAppearance: 'none',
    background: 'var(--bg)',
    backgroundImage: `url("${chevron}")`,
    backgroundSize: '1.25em',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'calc(100% - 1em) center',
    border: 'solid 1px var(--field-border)',
    borderColor: focus ? 'var(--accent)' : 'var(--field-border)',
    boxShadow: focus ? '0 0 0 1px var(--accent)' : 'none',
    borderRadius: 'var(--radius)',
    color: 'var(--fg)',
    display: 'block',
    outline: 0,
    width: '100%',
    height: 'var(--element-height)',
    padding: '0 var(--element-height) 0 1em',
    fontFamily: 'var(--font-body)',
    fontSize: '1em',
    textOverflow: 'ellipsis',
    boxSizing: 'border-box',
    cursor: 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'border-color var(--duration-transition) var(--ease), box-shadow var(--duration-transition) var(--ease)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'var(--fg-bold)',
      display: 'block',
      fontSize: '0.9em',
      fontWeight: 'var(--weight-bold)',
      marginBottom: '0.5em'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: field,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), children));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SocialIcons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SocialIcons — the header row of brand icon links (FontAwesome). Plain by
 * default; turns accent on hover. Pass a custom list or use the defaults.
 */
function SocialIcons({
  links,
  size = '1.25em',
  gap = '1em',
  style
}) {
  const items = links || [{
    icon: 'fa-brands fa-twitter',
    label: 'Twitter',
    href: '#'
  }, {
    icon: 'fa-brands fa-instagram',
    label: 'Instagram',
    href: '#'
  }, {
    icon: 'fa-brands fa-medium',
    label: 'Medium',
    href: '#'
  }, {
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    href: '#'
  }];
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, _extends({}, it, {
    size: size
  })))));
}
function Icon({
  icon,
  label,
  href,
  size
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '2.25em',
      height: '2.25em',
      fontSize: size,
      borderBottom: 0,
      color: hover ? 'var(--accent)' : 'var(--fg-light)',
      transition: 'color var(--duration-transition) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { SocialIcons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SocialIcons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
// AboutScreen — bio, focus areas (features), and a contact form.
function AboutScreen({
  onNavigate
}) {
  const {
    Button,
    Input,
    Tag
  } = window.EditorialPortfolioDesignSystem_7d4ee2;
  const P = window.PORTFOLIO;
  const [sent, setSent] = React.useState(false);
  const focus = [{
    icon: 'fa-solid fa-location-dot',
    title: 'Spatial Analysis',
    text: 'GIS, kernel density and change-detection across cities and transit systems.'
  }, {
    icon: 'fa-solid fa-chart-line',
    title: 'Machine Learning',
    text: 'Hedonic, time-series and classification models for housing, mobility and demand.'
  }, {
    icon: 'fa-solid fa-table-cells',
    title: 'Data Tools',
    text: 'Interactive review tools with charting, filtering and export for analysts.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.25em',
      lineHeight: 1.3,
      margin: '0 0 0.4em',
      color: 'var(--fg-bold)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700
    }
  }, "About Me"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.15em',
      color: 'var(--fg-bold)',
      lineHeight: 1.6,
      margin: '0 0 1.5em',
      maxWidth: '40em'
    }
  }, P.profile.blurb), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg)',
      lineHeight: 'var(--leading-body)',
      maxWidth: '40em',
      margin: '0 0 2.5em'
    }
  }, "I'm currently a graduate of Urban Spatial Analytics at Penn, very interested in demographics, cities, transportation and digital products. I was a finalist in the 2023 Metro Lab Student Cup, a winning artist at SMACH 2021, and earned second prize at the 2019 UIA-CBA Construction Workshop."), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderBottom: 'solid 1px var(--border)',
      margin: '0 0 3em'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.75em',
      margin: '0 0 1.5em',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      color: 'var(--fg-bold)'
    }
  }, "What I do"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2.5em',
      marginBottom: '3.5em'
    }
  }, focus.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '4em',
      height: '4em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1em',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: f.icon,
    style: {
      color: 'var(--accent)',
      fontSize: '1.8em',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0.4em',
      border: 'solid 2px var(--border)',
      borderRadius: '0.25rem',
      transform: 'rotate(45deg)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      color: 'var(--fg-bold)',
      fontSize: '1.2em',
      margin: '0 0 0.5em'
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg)',
      lineHeight: 'var(--leading-body)',
      margin: 0
    }
  }, f.text)))), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderBottom: 'solid 1px var(--border)',
      margin: '0 0 3em'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.75em',
      margin: '0 0 1.5em',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      color: 'var(--fg-bold)'
    }
  }, "Get in touch"), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--accent)',
      fontFamily: 'var(--font-heading)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check",
    style: {
      marginRight: '0.5em'
    }
  }), "Thanks \u2014 I'll be in touch soon.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      maxWidth: '40em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5em',
      marginBottom: '1.5em'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.5em'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    as: "textarea",
    rows: 4,
    placeholder: "Tell me about your project"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "button",
    type: "submit"
  }, "Send message")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Header.jsx
try { (() => {
// Header — wordmark logo + social row. Sits at top of the main column.
function Header({
  onNavigate
}) {
  const {
    SocialIcons
  } = window.EditorialPortfolioDesignSystem_7d4ee2;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: 'solid 1px var(--border)',
      paddingBottom: '2em',
      marginBottom: '3.5em'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate({
      view: 'home'
    }),
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '1.25em',
      color: 'var(--fg-bold)',
      cursor: 'pointer',
      borderBottom: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700,
      color: 'var(--fg-bold)'
    }
  }, "Xinge Zhang"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg)',
      fontWeight: 400
    }
  }, " | Portfolio")), /*#__PURE__*/React.createElement(SocialIcons, {
    links: [{
      icon: 'fa-brands fa-twitter',
      label: 'Twitter',
      href: '#'
    }, {
      icon: 'fa-brands fa-instagram',
      label: 'Instagram',
      href: 'https://instagram.com/ssee0132'
    }, {
      icon: 'fa-brands fa-medium',
      label: 'Medium',
      href: '#'
    }, {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      href: '#'
    }]
  }));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
// HomeScreen — banner intro + portrait, then the "Selected works" grid.
function HomeScreen({
  onNavigate,
  query
}) {
  const {
    Button,
    ProjectCard
  } = window.EditorialPortfolioDesignSystem_7d4ee2;
  const P = window.PORTFOLIO;
  const featured = ['traffic', 'precision-forecast', 'bikerisk', 'scooter', 'bikepre', 'price', 'parking', 'tod'];
  const q = (query || '').trim().toLowerCase();
  const ids = featured.filter(id => {
    if (!q) return true;
    const p = P.projects[id];
    return (p.title + ' ' + p.blurb + ' ' + p.tags.join(' ')).toLowerCase().includes(q);
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      gap: '4em',
      padding: '2em 0 4em',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.25em',
      lineHeight: 1.3,
      margin: '0 0 0.5em',
      color: 'var(--fg-bold)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700
    }
  }, "Hi, I'm Xinge Zhang"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 2em',
      color: 'var(--fg)',
      lineHeight: 'var(--leading-body)'
    }
  }, P.profile.blurb), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "large",
    onClick: () => onNavigate({
      view: 'about'
    })
  }, "Learn More"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 50%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/scooter.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      background: 'var(--bg-alt)',
      borderRadius: 'var(--radius)',
      minHeight: '18em'
    }
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: '2em'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.75em',
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      color: 'var(--fg-bold)'
    }
  }, "Selected works")), ids.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-light)'
    }
  }, "No projects match \u201C", query, "\u201D.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '4em 3em'
    }
  }, ids.map(id => {
    const p = P.projects[id];
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      onClick: e => {
        e.preventDefault();
        onNavigate({
          view: 'project',
          id
        });
      },
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      image: p.image,
      title: p.title,
      description: p.blurb,
      actionLabel: "More",
      href: "#",
      imageHref: "#"
    }));
  }))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectScreen.jsx
try { (() => {
// ProjectScreen — single project detail: hero image, slab title, tags, body,
// plus a related strip and a back action.
function ProjectScreen({
  id,
  onNavigate
}) {
  const {
    Button,
    Tag
  } = window.EditorialPortfolioDesignSystem_7d4ee2;
  const P = window.PORTFOLIO;
  const p = P.projects[id];
  if (!p) return null;
  const related = Object.keys(P.projects).filter(k => k !== id && P.projects[k].category === p.category).slice(0, 3);
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2.5em'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate({
      view: 'home'
    }),
    style: {
      color: 'var(--fg-light)',
      cursor: 'pointer',
      borderBottom: 0,
      fontFamily: 'var(--font-heading)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--kerning-heading)',
      fontSize: '0.7em'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-left",
    style: {
      marginRight: '0.6em'
    }
  }), "Back to works")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--kerning-heading)',
      color: 'var(--accent)',
      fontSize: '0.8em',
      marginBottom: '0.75em'
    }
  }, p.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.25em',
      lineHeight: 1.3,
      margin: '0 0 0.6em',
      color: 'var(--fg-bold)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6em',
      flexWrap: 'wrap',
      marginBottom: '2em'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: "",
    style: {
      width: '100%',
      maxHeight: '32em',
      objectFit: 'contain',
      background: 'var(--bg-alt)',
      borderRadius: 'var(--radius)',
      display: 'block',
      marginBottom: '2.5em'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.15em',
      color: 'var(--fg-bold)',
      lineHeight: 1.6,
      margin: '0 0 1.5em'
    }
  }, p.blurb), p.body.map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      color: 'var(--fg)',
      lineHeight: 'var(--leading-body)',
      margin: '0 0 1.5em'
    }
  }, para)), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderBottom: 'solid 1px var(--border)',
      margin: '3em 0'
    }
  }), related.length > 0 && /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      color: 'var(--fg-bold)',
      fontSize: '1.25em',
      margin: '0 0 1.5em'
    }
  }, "More in ", p.category), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2em'
    }
  }, related.map(rid => {
    const r = P.projects[rid];
    return /*#__PURE__*/React.createElement("a", {
      key: rid,
      onClick: () => onNavigate({
        view: 'project',
        id: rid
      }),
      style: {
        cursor: 'pointer',
        borderBottom: 0,
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: r.image,
      alt: "",
      style: {
        width: '100%',
        aspectRatio: '16 / 10',
        objectFit: 'cover',
        background: 'var(--bg-alt)',
        borderRadius: 'var(--radius)',
        marginBottom: '0.8em'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        color: 'var(--fg-bold)',
        fontSize: '0.95em',
        lineHeight: 1.4
      }
    }, r.title));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3em'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate({
      view: 'home'
    })
  }, "All projects")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Sidebar.jsx
try { (() => {
// Sidebar — search, collapsible menu, contact, footer. Editorial layout.
function Sidebar({
  onNavigate,
  current,
  query,
  setQuery
}) {
  const {
    SocialIcons
  } = window.EditorialPortfolioDesignSystem_7d4ee2;
  const P = window.PORTFOLIO;
  const [open, setOpen] = React.useState(() => {
    const o = {};
    P.groups.forEach(g => {
      o[g.name] = true;
    });
    return o;
  });
  const sectionStyle = {
    borderBottom: 'solid 2px var(--border)',
    margin: '0 0 3.5em 0',
    padding: '0 0 3.5em 0'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-alt)',
      width: '24em',
      flex: 'none',
      padding: '2.2em 2.2em 0',
      boxSizing: 'border-box',
      fontSize: '0.9em',
      minHeight: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-alt-2)',
      margin: '-2.2em -2.2em 2.2em',
      padding: '2.2em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search",
    style: {
      appearance: 'none',
      background: 'var(--bg)',
      border: 'solid 1px var(--border)',
      borderRadius: 'var(--radius)',
      height: 'var(--element-height)',
      width: '100%',
      padding: '0 var(--element-height) 0 1em',
      color: 'var(--fg)',
      fontFamily: 'var(--font-body)',
      fontSize: '1em',
      outline: 0,
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass",
    style: {
      position: 'absolute',
      right: '1em',
      top: '50%',
      transform: 'translateY(-50%) scaleX(-1)',
      color: 'var(--fg)',
      opacity: 0.325,
      fontSize: '1.1em'
    }
  }))), /*#__PURE__*/React.createElement("nav", {
    style: sectionStyle
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '1.4em',
      color: 'var(--fg-bold)',
      margin: '0 0 1em'
    }
  }, "Menu"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: menuTopLi(true)
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate({
      view: 'home'
    }),
    style: menuLink(current.view === 'home')
  }, "Homepage")), P.groups.map(g => /*#__PURE__*/React.createElement("li", {
    key: g.name,
    style: menuTopLi(false)
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => ({
      ...o,
      [g.name]: !o[g.name]
    })),
    style: {
      ...menuLink(false),
      position: 'relative',
      cursor: 'pointer'
    }
  }, g.name, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-down",
    style: {
      position: 'absolute',
      right: 0,
      top: '0.7em',
      fontSize: '0.8em',
      color: 'var(--fg-light)',
      transform: open[g.name] ? 'rotate(-180deg)' : 'none',
      transition: 'transform var(--duration-transition) var(--ease)'
    }
  })), open[g.name] && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      color: 'var(--fg-light)',
      margin: '0.5em 0 1.5em',
      padding: '0 0 0 1em'
    }
  }, g.items.map(id => {
    const p = P.projects[id];
    const active = current.view === 'project' && current.id === id;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      style: {
        margin: '0.125em 0 0',
        padding: '0.125em 0 0'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => onNavigate({
        view: 'project',
        id
      }),
      style: {
        ...menuLink(active),
        fontSize: '0.8em'
      }
    }, p.title));
  })))), /*#__PURE__*/React.createElement("li", {
    style: menuTopLi(false)
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate({
      view: 'about'
    }),
    style: menuLink(current.view === 'about')
  }, "About Me")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sectionStyle,
      borderBottom: 0,
      marginBottom: 0,
      paddingBottom: '2.2em'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '1.4em',
      color: 'var(--fg-bold)',
      margin: '0 0 1em'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 1.5em',
      color: 'var(--fg)'
    }
  }, "If you're interested in my work, I'd be glad to hear from you."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      paddingLeft: '2em',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope",
    style: contactIcon
  }), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + P.profile.email,
    style: {
      color: 'var(--accent)',
      borderBottom: 'dotted 1px'
    }
  }, P.profile.email)), /*#__PURE__*/React.createElement("li", {
    style: {
      paddingLeft: '2em',
      position: 'relative',
      color: 'var(--fg)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: contactIcon
  }), P.profile.phone)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.5em'
    }
  }, /*#__PURE__*/React.createElement(SocialIcons, {
    links: [{
      icon: 'fa-brands fa-instagram',
      label: 'Instagram',
      href: '#'
    }, {
      icon: 'fa-brands fa-medium',
      label: 'Medium',
      href: '#'
    }, {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      href: '#'
    }, {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      href: 'mailto:' + P.profile.email
    }],
    style: {
      marginLeft: '-0.5em'
    }
  }))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '2em 0 3em',
      color: 'var(--fg-light)',
      fontSize: '0.85em'
    }
  }, "\xA9 ", P.profile.name, "'s Portfolio. Built on Editorial by HTML5 UP."));
}
const contactIcon = {
  position: 'absolute',
  left: 0,
  top: '0.45em',
  color: 'var(--fg-light)'
};
function menuTopLi(first) {
  return {
    borderTop: first ? 0 : 'solid 1px var(--border)',
    margin: first ? 0 : '0.5em 0 0',
    padding: first ? 0 : '0.5em 0 0'
  };
}
function menuLink(active) {
  return {
    display: 'block',
    cursor: 'pointer',
    borderBottom: 0,
    fontFamily: 'var(--font-heading)',
    fontWeight: 400,
    letterSpacing: 'var(--kerning-heading)',
    textTransform: 'uppercase',
    fontSize: '0.9em',
    padding: '0.625em 0',
    color: active ? 'var(--accent)' : 'var(--fg-bold)',
    transition: 'color var(--duration-transition) var(--ease)'
  };
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Portfolio content — lifted from Xinge Zhang's real Editorial portfolio.
window.PORTFOLIO = {
  profile: {
    name: 'Xinge Zhang',
    role: 'Data Analyst · Urban Spatial Analytics',
    blurb: "I'm a data analyst with a Master's in Urban Spatial Analytics from the University of Pennsylvania. Finalist in the 2023 Metro Lab Student Cup and a winning artist at SMACH 2021, I work at the intersection of demographics, cities, transportation and digital products.",
    email: 'zhaxinge@alumni.upenn.edu',
    phone: '(267) 303-6766'
  },
  groups: [{
    name: 'Spatial Analysis',
    items: ['precision-forecast', 'tod', 'bikerisk']
  }, {
    name: 'Machine Learning',
    items: ['parking', 'bikepre', 'price']
  }, {
    name: 'Planning & Strategy',
    items: ['house']
  }, {
    name: 'Data Tools',
    items: ['traffic']
  }, {
    name: 'Design & Arts',
    items: ['scooter']
  }],
  projects: {
    bikerisk: {
      title: 'Geospatial Risk Prediction',
      category: 'Spatial Analysis',
      image: '../../assets/img/risk.png',
      tags: ['GIS', 'Risk Model', 'R'],
      blurb: "From 2021–2022 alone, Chicago's bike-share stations grew from 828 to 1,481. Divvy claims its siting accounts for equity and safety; this study tests how reasonable that siting really is.",
      body: ["Using a geospatial risk-prediction framework, I model the relationship between bike-share station placement and a basket of equity and safety indicators across Chicago census tracts.", "Kernel-density surfaces reveal where demand concentrates versus where stations actually land, surfacing gaps between stated siting principles and observed coverage."]
    },
    scooter: {
      title: 'E-scooter Usage in Chicago & Austin',
      category: 'Design & Arts',
      image: '../../assets/img/scooter.jpg',
      tags: ['Network', 'Census Tract', 'Python'],
      blurb: "Exploratory and census-tract analysis of 2019 e-scooter trips in Austin and Chicago, helping decision-makers identify high-value investment areas and understand rider behavior.",
      body: ["Origin–destination network graphs expose the dominant travel corridors in each city and how trip structure differs between a sprawling Austin and a denser Chicago.", "A tract-based model links usage intensity to land use, demographics and transit access to guide where shared-mobility investment pays off."]
    },
    bikepre: {
      title: 'Ride Share Prediction in New York',
      category: 'Machine Learning',
      image: '../../assets/img/bike.jpg',
      tags: ['Time Series', 'Rebalancing'],
      blurb: "Using Citi Bike usage data for April 2021 to build a predictive model of shared-bike demand that can guide rebalancing operations.",
      body: ["Hourly demand is modeled per station with weather, time-of-day and spatial lag features to anticipate where bikes will run short.", "The forecast feeds a rebalancing heuristic that moves bikes ahead of demand rather than reacting after stations empty out."]
    },
    price: {
      title: 'Predicting Housing Prices in Charlotte',
      category: 'Machine Learning',
      image: '../../assets/img/houseprice.jpg',
      tags: ['Hedonic Model', 'Zillow Tiers'],
      blurb: "A hedonic home-price model with Zillow-style tier classification, built to help newcomers find suitable homes across Charlotte.",
      body: ["Property, neighborhood and amenity features feed a regression that predicts sale price and flags over/under-valued listings.", "Tier classification segments the market so buyers can compare like-for-like rather than across the whole city."]
    },
    tod: {
      title: 'Transit-Oriented Development in Queens',
      category: 'Spatial Analysis',
      image: '../../assets/img/tod.jpg',
      tags: ['TOD', 'Change Detection'],
      blurb: "Observing how TOD and non-TOD areas in Queens changed from 2009–2020 following PlaNYC 2030, and why identifying TOD areas matters for city development.",
      body: ["Indicators for density, rent, and ridership are tracked over a decade to separate transit-driven change from background growth.", "Mapped side by side, TOD and non-TOD tracts show measurably different trajectories after the plan took effect."]
    },
    'precision-forecast': {
      title: 'Precision Forecasts of Land Cover Change',
      category: 'Spatial Analysis',
      image: '../../assets/img/mapsample.png',
      tags: ['Land Cover', 'Forecast', 'Chesapeake'],
      blurb: "Using high-resolution longitudinal land-cover data from the Chesapeake Conservancy to predict pervious-to-impervious conversions and guide green-infrastructure planning.",
      body: ["Landcover features are extracted on a 1000m × 1000m moving frame, then fed to a model that forecasts where impervious surface will expand.", "Outputs help planners pre-position green infrastructure and prioritize land for protection before development arrives."]
    },
    parking: {
      title: 'Parking Occupancy Prediction — Super Finder',
      category: 'Machine Learning',
      image: '../../assets/img/app.png',
      tags: ['Regression', 'Product', 'San Francisco'],
      blurb: "A multiple-linear-regression app — Super Finder — that helps San Francisco residents find real-time open parking spots.",
      body: ["The model predicts block-level occupancy and probability of a spot opening within the hour, surfaced through a simple mobile flow: search, filter, navigate.", "Pricing, time limits and payment details are pulled into a single card so drivers decide before they arrive."]
    },
    house: {
      title: 'Targeting a Housing Subsidy',
      category: 'Planning & Strategy',
      image: '../../assets/img/cover.jpg',
      tags: ['Cost-Benefit', 'Classification'],
      blurb: "Modeling HCD subsidy uptake from prior-year claims so the department can better target eligible households and avoid wasted spend.",
      body: ["A classification model scores households by likelihood of taking up the credit, weighed against the revenue impact of false positives and negatives.", "A cost-benefit threshold analysis picks the operating point that maximizes net program value rather than raw accuracy."]
    },
    traffic: {
      title: 'Bulk Traffic Review Tool',
      category: 'Data Tools',
      image: '../../assets/img/predict.png',
      tags: ['Web Tool', 'Chart.js', 'Export'],
      blurb: "An interactive web tool for analyzing intersection traffic by day type — upload counts, visualize patterns, and review bulk data with filtering and export.",
      body: ["Counts are grouped by weekday, Saturday and Sunday so reviewers can spot anomalies across day types at a glance.", "Bulk filtering and CSV export turn a tedious manual review into a few minutes of guided checking."]
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SocialIcons = __ds_scope.SocialIcons;

})();
