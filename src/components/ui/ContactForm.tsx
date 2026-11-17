import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from './Button';
import { CONTACT_INFO } from '../../utils/constants';
import type { ContactFormData, FormErrors } from '../../types';
import styles from '../../styles/components/ContactForm.module.css';

/**
 * ContactForm component for user inquiries
 * Collects user information and sends it via WhatsApp
 * @returns React component for contact form
 */
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Il nome deve contenere almeno 2 caratteri';
    }

    // Email validation (optional field, checked only when filled)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }

    // Phone validation (optional field, checked only when filled)
    const phoneRegex = /^[\d\s+\-()]{8,}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Inserisci un numero di telefono valido';
    }

    // Message validation
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Il messaggio deve contenere almeno 10 caratteri';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      // Since no backend, create WhatsApp link with pre-filled message
      const contacts = [formData.email.trim(), formData.phone.trim()].filter(Boolean);
      const contactLine = contacts.length > 0 ? ` Puoi contattarmi a: ${contacts.join(' o ')}` : '';
      const message = `Ciao! Sono ${formData.name}. ${formData.message}.${contactLine}`;
      const whatsappUrl = `${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {submitted && (
        <div className={styles.successMessage}>
          Grazie per averci contattato! Ti reindirizzeremo a WhatsApp.
        </div>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Nome Completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          placeholder="Il tuo nome"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className={styles.error} role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="tua@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.error} role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder={CONTACT_INFO.phoneDisplay}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className={styles.error} role="alert">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Come possiamo aiutarti?"
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.error} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <p className={styles.privacyNote}>
        * Campi obbligatori. Premendo «Invia Messaggio» si apre WhatsApp con il messaggio
        già composto: i dati che inserisci saranno trattati da Serena Massarani per
        rispondere alla tua richiesta.{' '}
        <a href="/privacy.html" className={styles.privacyLink}>
          Informativa sulla privacy
        </a>
      </p>

      <Button type="submit" variant="primary" size="large">
        Invia Messaggio
      </Button>
    </form>
  );
};

export default ContactForm;
