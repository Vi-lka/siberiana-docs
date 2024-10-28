import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const tw = `
body {
  overscroll-behavior: auto none;
}

.-ml-1 {
  margin-left: -0.25rem;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.items-baseline {
  align-items: baseline;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.hover\:cursor-pointer:hover {
  cursor: pointer;
}

.ml-1 {
  margin-left: 0.25rem;
}

.font-semibold {
  font-weight: 600;
}
`;

const Head = () => {
  // const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://docs.siberiana.online"
    // (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  return (
    <>
      <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || "Документация"} />
      <style>{tw}</style>
      <meta
        property="og:description"
        content={frontMatter.description || "Документация"}
      />
      <meta name="twitter:image" content="https://docs.siberiana.com/og.jpg" />
    </>
  );
};

export const Logo = () => {
  return (
    <h1 className="flex flex-row items-baseline text-2xl font-bold">
      <span className="tracking-tight hover:cursor-pointer dark:text-white">
        Документация
      </span>
    </h1>
  );
};


const config: DocsThemeConfig = {
  darkMode: true,
  editLink: {
    component: () => null,
  },
  feedback: {
    content: () => null,
  },
  footer: { component: () => null },
  head: Head,
  logo: Logo,
  logoLink: "og.jpg",
  nextThemes: {
    defaultTheme: "system",
  },
  primaryHue: 200,
  project: {
    link: "https://github.com/dhri-code/siberiana",
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Сибириана',
        description: "Документация",
      }
    }
  }
}

export default config
