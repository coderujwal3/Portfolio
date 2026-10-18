import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Github, Mail, MapPin, Send, ShieldCheck, Youtube } from 'lucide-react';
import { sendContactMessage } from '../../services/contactService.js';
import NeoCard from '../ui/NeoCard.jsx';

const emptyForm = { name: '', email: '', subject: '', message: '', website: '' };

export default function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  const updateForm = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setFormState({ status: 'sending', message: '' });
    try {
      await sendContactMessage(form);
      setFormState({ status: 'success', message: 'Message sent. Thanks for reaching out—I’ll get back to you as soon as I can.' });
      setForm(emptyForm);
    } catch (error) {
      setFormState({ status: 'error', message: error.message || 'Network error. Please check your connection and try again.' });
    }
  };

  return (
    <section className="section-wrap section-block contact-section">
      <div className="contact-intro">
        <p className="eyebrow"><span className="status-dot" /> OPEN TO GOOD CONVERSATIONS</p>
        <h2>Have a problem worth <span className="gradient-text">solving?</span></h2>
        <p>Whether it’s a product idea, an AI/ML experiment, a web project or a security-minded discussion, send a note. Include enough context and I’ll take it from there.</p>
        <div className="contact-detail"><span className="contact-detail-icon"><Mail size={18} /></span><span><small>DIRECT MESSAGE</small><strong>Resend-powered contact form</strong><em>Your email address is used only to reply to your message.</em></span></div>
        <div className="contact-detail"><span className="contact-detail-icon mint"><MapPin size={18} /></span><span><small>TIMEZONE</small><strong>India Standard Time (IST)</strong><em>Remote-friendly collaboration</em></span></div>
        <div className="contact-social-links">
          <a href="https://github.com/coderujwal3" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
          <a href="https://www.youtube.com/@Nthree3" target="_blank" rel="noreferrer"><Youtube size={17} /> YouTube <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <NeoCard className="contact-form-card">
        <div className="form-heading"><div><p className="eyebrow">SEND A MESSAGE</p><h3>Let’s make something useful.</h3></div><span className="form-icon"><Send size={18} /></span></div>
        <form onSubmit={submitForm}>
          <div className="form-row">
            <label>Your name<input name="name" value={form.name} onChange={updateForm} placeholder="Jane Smith" autoComplete="name" maxLength={100} required /></label>
            <label>Email address<input name="email" type="email" value={form.email} onChange={updateForm} placeholder="jane@example.com" autoComplete="email" maxLength={254} required /></label>
          </div>
          <label>Subject<input name="subject" value={form.subject} onChange={updateForm} placeholder="What would you like to discuss?" maxLength={140} required /></label>
          <label>Your message<textarea name="message" value={form.message} onChange={updateForm} placeholder="A little context helps me give you a useful reply…" rows={5} minLength={15} maxLength={5000} required /></label>
          <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" value={form.website} onChange={updateForm} tabIndex={-1} autoComplete="off" /></label>
          <div className="form-footnote"><span><ShieldCheck size={14} /> Server-side validation · No exposed API key</span><span>{form.message.length}/5000</span></div>
          <button className="button-primary send-button" type="submit" disabled={formState.status === 'sending'}>{formState.status === 'sending' ? 'Sending message…' : 'Send message'} <Send size={16} /></button>
          <AnimatePresence mode="wait">
            {formState.message && <motion.p key={formState.status} className={`form-feedback ${formState.status}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} role="status">{formState.status === 'success' && <CheckCircle2 size={16} />}{formState.message}</motion.p>}
          </AnimatePresence>
        </form>
      </NeoCard>
    </section>
  );
}
