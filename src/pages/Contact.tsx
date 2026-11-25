import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, MapPin } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import ContactSection from '../components/sections/ContactSection';
import { submitEnquiry, validateEnquiry, type EnquiryErrors, type EnquiryPayload } from '../utils/enquiry';
import { useSeo } from '../hooks/useSeo';

const field =
  'w-full border bg-transparent px-4 py-3.5 placeholder:text-abyssal/40 focus:border-truffle focus:outline-none';

export default function Contact() {
  useSeo('Contact', 'Request a quote or discuss your component requirements with VR Precision Casting.');
  const [params] = useSearchParams();
  const [values, setValues] = useState<EnquiryPayload>({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: params.get('product') ?? '',
    message: '',
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const set = (k: keyof EnquiryPayload) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validateEnquiry(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('sending');
    await submitEnquiry(values);
    setStatus('done');
  };

  const renderField = (
    k: keyof EnquiryPayload,
    label: string,
    opts: { type?: string; required?: boolean; textarea?: boolean; placeholder?: string } = {},
  ) => {
    const id = `f-${k}`;
    const err = errors[k];
    const common = {
      id,
      value: values[k],
      onChange: set(k),
      placeholder: opts.placeholder,
      'aria-invalid': !!err,
      'aria-describedby': err ? `${id}-err` : undefined,
      className: `${field} ${err ? 'border-truffle' : 'border-abyssal/30'}`,
    };
    return (
      <div>
        <label htmlFor={id} className="tech-label mb-2 block text-abyssal/70">
          {label}
          {opts.required && <span className="text-truffle"> *</span>}
        </label>
        {opts.textarea ? (
          <textarea rows={5} {...common} />
        ) : (
          <input type={opts.type ?? 'text'} {...common} />
        )}
        {err && (
          <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-truffle">
            {err}
          </p>
        )}
      </div>
    );
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your requirements."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {status === 'done' ? (
              <div role="status" className="border border-abyssal/20 bg-oatmeal/40 p-8 sm:p-12">
                <CheckCircle2 size={36} className="text-truffle" aria-hidden />
                <h2 className="display-md mt-5 uppercase">Thank you — enquiry captured.</h2>
                <p className="mt-4 max-w-lg text-abyssal/75">
                  This is a frontend prototype: your enquiry has <strong>not</strong> been sent to a server.
                  To reach the team now, use WhatsApp or phone.
                </p>
                <div className="mt-8">
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    Submit another
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {renderField('name', 'Name', { required: true })}
                  {renderField('company', 'Company')}
                  {renderField('email', 'Email', { type: 'email', required: true })}
                  {renderField('phone', 'Phone', { type: 'tel' })}
                </div>
                {renderField('requirement', 'Product / component requirement', {
                  required: true,
                  placeholder: 'e.g. valve body, impeller, custom bracket',
                })}
                {renderField('message', 'Message', {
                  textarea: true,
                  required: true,
                  placeholder: 'Material, quantity, application, timeline…',
                })}
                <Button type="submit" variant="primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Submitting…' : 'Submit enquiry'}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6 lg:col-span-5">
            <ContactSection />
            <div className="image-ph flex aspect-[4/3] flex-col items-center justify-center gap-2 border border-abyssal/15 text-abyssal/60">
              <MapPin size={28} aria-hidden />
              <span className="tech-label">Map placeholder</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
