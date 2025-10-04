import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Welcome to GDI Documentation"
      description="Central hub for all GDI documentation guides"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Welcome to GDI Documentation</h1>
          <p className="hero__subtitle">Your central hub for all Genomic Data Infrastructure guides</p>
        </div>
      </header>
      <main className={styles.mainPaddingBottom}>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              
              <div className="col col--4">
                <div className={styles.homeCard}>
                  <img src="img/im-a-user-people.svg" alt="User icon" style={{ width: 100, height: 100, marginBottom: 12 }} />
                  <h3>
                    <Link to="http://localhost:3001">
                      GDI Data Requesters
                    </Link> 
                  </h3>
                  <p className={styles.homeSubtext}>I want to request genomic datasets for my research, analysis, and other projects.</p>
                </div>
              </div>
              
              <div className="col col--4">
                <div className={styles.homeCard}>
                  <img src="img/im-a-developer-puzzle.svg" alt="CMS icon" style={{ width: 100, height: 100, marginBottom: 12 }} />
                  <h3>
                    <Link to="http://localhost:3002">
                      Catalogue Managers
                    </Link>
                  </h3>
                  <p className={styles.homeSubtext}>I want to manage data applications and catalogue entries.</p>
                </div>
              </div>

              <div className="col col--4">
                <div className={styles.homeCard}>
                  <img src="img/im-a-system-admin-server.svg" alt="DAAMS icon" style={{ width: 100, height: 100, marginBottom: 12 }} />
                  <h3>
                    <Link to="http://localhost:3003">
                      Data Access Committee
                    </Link>
                  </h3>
                  <p className={styles.homeSubtext}>I want to access DAAMs to review and approve datasets.</p>
                </div>
              </div>

              <div className="col col--4">
                <div className={styles.homeCard}>
                  <img src="img/im-a-system-admin-server.svg" alt="System Admin icon" style={{ width: 100, height: 100, marginBottom: 12 }} />
                  <h3>
                    <Link to="http://localhost:3004">
                      System Administrators
                    </Link>
                  </h3>
                  <p className={styles.homeSubtext}>I want to deploy the GDI application in my organization.</p>
                </div>
              </div>

              <div className="col col--4">
                <div className={styles.homeCard}>
                  <img src="img/im-a-developer-puzzle.svg" alt="Developer icon" style={{ width: 100, height: 100, marginBottom: 12 }} />
                  <h3>
                    <Link to="http://localhost:3005">
                      Developers
                    </Link>
                  </h3>
                  <p className={styles.homeSubtext}>I want to develop and customise GDI features for my organization.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}