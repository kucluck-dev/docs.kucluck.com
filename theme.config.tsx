import React from "react";
import {DocsThemeConfig, useConfig} from "nextra-theme-docs";
import {useRouter} from "next/router";

function useHead() {
  const {asPath} = useRouter();
  const {frontMatter, title} = useConfig();
  const url = `https://docs.kucluck.com${asPath}`;
  const description = frontMatter.description || "Documentation for Kucluck resources for FiveM server";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/logo.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const {asPath} = useRouter();
  const arr = asPath.replace(/[-_]/g, " ").split("/");
  const category = (arr[1][0] !== "#" && arr[1]) || "Kucluck";
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

  return {
    titleTemplate: `${title} - ${rawTitle === category ? "Documentation" : category.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}`,
  };
}

const config: DocsThemeConfig = {
  navigation: true,
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
      Kucluck Docs
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
    text: "© 2024 Kucluck",
  },
  head: useHead,

  primaryHue: {dark: 200, light: 500},
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
