import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';
import { Link } from '@docusaurus/router';

type FeatureItem = {
  title: string;
  image: string;
  imageDark: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'GraphQL Cursor-Based Pagination',
    image: '/img/cursor-pagination.svg',
    imageDark: '/img/cursor-pagination-dark.svg',
    description: (
      <>
        The API uses cursor-based pagination conforming to the &nbsp;
        <a href="https://relay.dev/graphql/connections.htm">
          GraphQL Cursor Connections Specification.
        </a>
      </>
    ),
  },
  {
    title: 'Rate Limit',
    image: '/img/rate-limit.svg',
    imageDark: '/img/rate-limit.svg',
    description: (
      <>
        The API uses point-based <Link to="/docs/rate-limit">rate-limit</Link>{' '}
        to protect against malicious overuse of the service.
      </>
    ),
  },
];

function Feature({ title, image, imageDark, description }: FeatureItem) {
  const { isDarkTheme } = useThemeContext();
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={isDarkTheme ? imageDark : image}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="row" style={{ justifyContent: 'center' }}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
