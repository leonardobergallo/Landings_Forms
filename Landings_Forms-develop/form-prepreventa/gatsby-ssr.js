const React = require("react");

const PreBodyComponents = (
  <noscript>
    <iframe
      key={new Date().getSeconds()}
      src="https://www.googletagmanager.com/ns.html?id=GTM-5MJ5NS"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    ></iframe>
  </noscript>
);

exports.onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  setPreBodyComponents(PreBodyComponents);
};
