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
                <Translate id="home.subtitle">IIC BO 시스템 사용자 매뉴얼</Translate>
              </p>
            </div>
          </div>

          {/* 시스템 소개 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.overview.title">시스템 소개</Translate>
            </h2>
            <p className={styles.overviewLead}>
              <Translate id="home.overview.desc1a">IIC BO(Back Office)는 젠틀몬스터 · 탬버린즈 · 어티슈 · 누플랏 · 누데이크 — IICOMBINED의 모든 브랜드가 해외에서 만들어내는 비즈니스를 하나의 시스템으로 운영하기 위해 설계된 글로벌 리테일 운영 플랫폼입니다.</Translate>
            </p>
            <div className={styles.overviewCards}>
              <div className={styles.overviewCard}>
                <span className={styles.overviewIcon}>💰</span>
                <div>
                  <strong><Translate id="home.overview.card1.title">매출 통합</Translate></strong>
                  <p><Translate id="home.overview.card1.desc">각 국가의 Local POS 연동과 자체 BO POS를 통해 매출을 실시간으로 수집 · 관리합니다.</Translate></p>
                </div>
              </div>
              <div className={styles.overviewCard}>
                <span className={styles.overviewIcon}>📦</span>
                <div>
                  <strong><Translate id="home.overview.card2.title">재고 관리</Translate></strong>
                  <p><Translate id="home.overview.card2.desc">3PL · 법인 오피스 · 스토어 · 온라인까지 전 채널의 재고를 통합적으로 추적합니다.</Translate></p>
                </div>
              </div>
              <div className={styles.overviewCard}>
                <span className={styles.overviewIcon}>🔬</span>
                <div>
                  <strong><Translate id="home.overview.card3.title">렌즈(RX) 관리</Translate></strong>
                  <p><Translate id="home.overview.card3.desc">국가별 비즈니스 특성에 맞춘 작업 관리와 아웃소싱 프로세스를 지원합니다.</Translate></p>
                </div>
              </div>
              <div className={styles.overviewCard}>
                <span className={styles.overviewIcon}>🏪</span>
                <div>
                  <strong><Translate id="home.overview.card4.title">스토어 운영</Translate></strong>
                  <p><Translate id="home.overview.card4.desc">스토어 현장에서 필요로 하는 운영 기능들을 폭넓게 제공합니다.</Translate></p>
                </div>
              </div>
            </div>
          </section>

          {/* 주요 기능 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.features.title">주요 기능</Translate>
            </h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.orders">주문 관리</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.inventory">재고 관리</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.sales">매출 관리</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.rx">Rx 작업 관리</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.warranty">보증서 출력</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.membership">온/오프라인 멤버십</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.store">스토어 운영</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.report">글로벌 리포트</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.ps">PS 운영지원</Translate></div>
              <div className={styles.featureItem}><span className={styles.featureDot} /><Translate id="home.features.nametag">스토어 네임택</Translate></div>
            </div>
          </section>

          {/* 연동 시스템 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.integrations.title">연동 시스템</Translate>
            </h2>
            <div className={styles.features}>
              <span className={styles.featureTag}>Local ERP</span>
              <span className={styles.featureTag}>HQ ERP</span>
              <span className={styles.featureTag}>OMS</span>
              <span className={styles.featureTag}>TMS</span>
              <span className={styles.featureTag}>WMS</span>
              <span className={styles.featureTag}>ECOM Admin</span>
              <span className={styles.featureTag}>Local POS</span>
            </div>
          </section>

          {/* 서버 접속 정보 & 문의 안내 */}
          <div className={styles.infoGrid}>
            <section className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>
                <Translate id="home.server.title">서버 접속 정보</Translate>
              </h2>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.label}><Translate id="home.server.prod">운영</Translate></td>
                    <td><a href="https://bo.systemiic.com/en/signin" target="_blank" rel="noopener noreferrer">https://bo.systemiic.com/en/signin</a></td>
                  </tr>
                  <tr>
                    <td className={styles.label}><Translate id="home.server.dev">개발</Translate></td>
                    <td><a href="https://bo-dev.systemiic.com/en/signin" target="_blank" rel="noopener noreferrer">https://bo-dev.systemiic.com/en/signin</a></td>
                  </tr>
                </tbody>
              </table>
              <ul className={styles.infoNotes}>
                <li><Translate id="home.server.note1">계정 생성은 Operation 채널을 통해 문의해 주세요.</Translate></li>
                <li><Translate id="home.server.note2">발급 받은 계정의 초기 비밀번호는 변경하여 사용을 권장드립니다.</Translate></li>
                <li><Translate id="home.server.note3">계정 당 설정된 권한 변경 또한 관리자에게 문의해 주세요.</Translate></li>
              </ul>
            </section>

            <section className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>
                <Translate id="home.contact.title">시스템 운영 담당자</Translate>
              </h2>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.label}>PM</td>
                    <td>이우주</td>
                  </tr>
                  <tr>
                    <td className={styles.label}>Develop (BE)</td>
                    <td>이수빈, 김윤욱</td>
                  </tr>
                  <tr>
                    <td className={styles.label}>Develop (FE)</td>
                    <td>곽형규</td>
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
