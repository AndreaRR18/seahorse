import React from 'react';
import { PRIVACY_INTRO, PRIVACY_LAST_UPDATED, PRIVACY_POLICY } from '../../utils/constants';
import styles from '../../styles/components/PrivacyPolicy.module.css';

/**
 * PrivacyPolicy component - Standalone page rendering the art. 13 GDPR notice
 * Mounted by the privacy.html entry point, not by the single-page app
 * @returns React component for the privacy policy page
 */
const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <a href="/" className={styles.backLink}>
            Torna al sito
          </a>
          <h1 className={styles.title}>Informativa sulla privacy</h1>
          <p className={styles.updated}>Ultimo aggiornamento: {PRIVACY_LAST_UPDATED}</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <p className={styles.intro}>{PRIVACY_INTRO}</p>

          {PRIVACY_POLICY.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <a href="/" className={styles.backLinkBottom}>
            Torna al sito
          </a>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
