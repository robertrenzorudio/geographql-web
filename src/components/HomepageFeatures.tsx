import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { Link } from '@docusaurus/router';
import { IconContext } from 'react-icons';
import { GoBook } from 'react-icons/go';
import { IoSpeedometerOutline } from 'react-icons/io5';

type FeatureItem = {
  title: string;
  image: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'GraphQL Cursor-Based Pagination',
    image: (
      <IconContext.Provider value={{ size: '100px' }}>
        <GoBook />
      </IconContext.Provider>
    ),
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
    image: (
      <IconContext.Provider value={{ size: '100px' }}>
        <IoSpeedometerOutline />
      </IconContext.Provider>
    ),
    description: (
      <>
        The API uses point-based rate-limit to protect against malicious overuse
        of the service.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center"> {image} </div>
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
