import React from "react";
import {DocsThemeConfig} from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: "50px",
        lineHeight: "38px",
        background: "url('https://r2.fivemanage.com/1HmlXP8c0itFbXHi4ACgz/KC.png') no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      Kucluck Documentation
    </div>
  ),
  project: {
    link: "https://github.com/lukman-nov/docs.kucluck.com",
  },
  chat: {
    link: "https://discord.gg/BuACxn4XUw",
  },
  docsRepositoryBase: "https://github.com/lukman-nov/docs.kucluck.com",
  footer: {
    text: "Kucluck",
  },
};

export default config;
