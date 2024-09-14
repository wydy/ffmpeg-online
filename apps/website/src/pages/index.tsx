import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ExternalLibraries from "@site/src/components/ExternalLibraries";

import styles from "./index.module.css";
import  { Redirect } from 'react-router-dom';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/playground"
          >
            Try it Now!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return <Redirect to='/playground' />;
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ffmpeg.wasm is a pure WebAssembly / JavaScript port of FFmpeg"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ExternalLibraries />
      </main>
    </Layout>
  );
}
