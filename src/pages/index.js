import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description="IIC BO User Manual">
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <img src="/img/logo.png" alt="IIC BO" className={styles.logo} />
            <div>
              <h1 className={styles.title}>{siteConfig.title}</h1>
              <p className={styles.subtitle}>
                <Translate id="home.subtitle">IIC BO System User Manual</Translate>
              </p>
            </div>
          </div>

          {/* 시스템 소개 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.overview.title">System Overview</Translate>
            </h2>
            <p className={`${styles.overviewLead} ${styles.overviewLeadTight}`}>
              <Translate id="home.overview.desc1a">IIC BO (Back Office) is a global retail operations platform designed to run the overseas business of IICOMBINED brands on a single system.</Translate>
            </p>
            <p className={styles.overviewLead}>
              <Translate id="home.overview.desc1b">It is currently used by Gentle Monster, with plans to expand to other brands including Tamburins, Atiissu, Nuflaat, and Nudake.</Translate>
            </p>
            <div className={styles.overviewCards}>
              <div className={styles.overviewCard}>
                <span className={styles.overviewIcon}>💰</span>
                <div>
                  <strong><Translate id="home.overview.card1.title">Unified Sales</Translate></strong>
                  <p><Translate id="home.overview.card1.desc">Collects and manages sales in real time through integration with each country's local POS and the in-house BO POS.</Translate></p>
                </div>
              </div>
              <div className={styles.overviewCard}>
                <span className={styles.overviewIcon}>📦</span>
                <div>
                  <strong><Translate id="home.overview.card2.title">Inventory Management</Translate></strong>
                  <p><Translate id="home.overview.card2.desc">Tracks inventory across every channel — 3PL, corporate offices, stores, and online — in one place.</Translate></p>
                </div>
              </div>
              <div className={styles.overviewCard}>
                <span className={styles.overviewIcon}>🔬</span>
                <div>
                  <strong><Translate id="home.overview.card3.title">Lens (Rx) Management</Translate></strong>
                  <p><Translate id="home.overview.card3.desc">Supports lens work management and outsourcing processes tailored to each country's business.</Translate></p>
                </div>
              </div>
              <div className={styles.overviewCard}>
                <span className={styles.overviewIcon}>🏪</span>
                <div>
                  <strong><Translate id="home.overview.card4.title">Store Operations</Translate></strong>
                  <p><Translate id="home.overview.card4.desc">Provides a wide range of operational features needed on the store floor.</Translate></p>
                </div>
              </div>
            </div>
          </section>

          {/* 주요 기능 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.features.title">Key Features</Translate>
            </h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}><span className={styles.featureDot} /><span><Translate id="home.features.master">Master</Translate><span className={styles.featureSub}><Translate id="home.features.master.sub">(Store / Product / Price)</Translate></span></span></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.orders">Order</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.sales">Sales</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.inventory">Inventory</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.inventoryTx">Inventory Transactions</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.rx">RX</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.membership">Online/Offline Membership</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.store">Store Operations</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.report">Global Report</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.pos">POS</Translate></div>
            </div>
          </section>

          {/* 연동 시스템 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.integrations.title">Integrated Systems</Translate>
            </h2>
            <div className={styles.features}>
              <span className={styles.featureTag}>.com Admin</span>
              <span className={styles.featureTag}>OMS</span>
              <span className={styles.featureTag}>TMS</span>
              <span className={styles.featureTag}>PS</span>
              <span className={styles.featureTag}>LOCAL WMS (LXP, Maersk)</span>
              <span className={styles.featureTag}>LOCAL ERP (NetSuite, Bluebell ERP)</span>
              <span className={styles.featureTag}>LOCAL POS (Shopify, Bluebell POS, Smaregi)</span>
              <span className={styles.featureTag}>LOCAL LMS (Optivision)</span>
            </div>
          </section>

          {/* 서버 접속 정보 & 문의 안내 */}
          <div className={styles.infoGrid}>
            <section className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>
                <Translate id="home.server.title">Server Access</Translate>
              </h2>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.label}><Translate id="home.server.prod">Production</Translate></td>
                    <td><a href="https://bo.systemiic.com/en/signin" target="_blank" rel="noopener noreferrer">https://bo.systemiic.com/en/signin</a></td>
                  </tr>
                  <tr>
                    <td className={styles.label}><Translate id="home.server.dev">Development</Translate></td>
                    <td><a href="https://bo-dev.systemiic.com/en/signin" target="_blank" rel="noopener noreferrer">https://bo-dev.systemiic.com/en/signin</a></td>
                  </tr>
                </tbody>
              </table>
              <ul className={styles.infoNotes}>
                <li><Translate id="home.server.note1">To request an account, please contact the Operation channel.</Translate></li>
                <li><Translate id="home.server.note2">We recommend changing the initial password of your issued account.</Translate></li>
                <li><Translate id="home.server.note3">For permission changes on your account, please contact the administrator.</Translate></li>
              </ul>
            </section>

            <section className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>
                <Translate id="home.contact.title">IIC BO : IT</Translate>
              </h2>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.label}>PM</td>
                    <td>Wooju Lee</td>
                  </tr>
                  <tr>
                    <td className={styles.label}>Develop (BE)</td>
                    <td>Subin Lee, Yoonuk Kim</td>
                  </tr>
                  <tr>
                    <td className={styles.label}>Develop (FE)</td>
                    <td>Hyunggyu Kwak</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

        </div>
      </main>
    </Layout>
  );
}
