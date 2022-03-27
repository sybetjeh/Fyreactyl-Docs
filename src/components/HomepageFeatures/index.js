import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_trendy_interface_re_xsou.svg').default,
    description: (
      <>
        Fyreactyl was designed from the ground up to be easily installed and
        used to get your hosting business up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_diary_re_4jpc.svg').default,
    description: (
      <>
        Fyreactyl lets you focus on your users.
      </>
    ),
  },
  {
    title: 'Powered by JS',
    Svg: require('@site/static/img/undraw_static_assets_rpm6.svg').default,
    description: (
      <>
        Giving the dashboard a nice slique design.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
