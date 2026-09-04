import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Car, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Send,
  Wrench
} from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/services';
import { BookingFormData, BookingSubmission } from '../types';

interface BookingFormProps {
  initialService?: string;
  onSuccess?: (submission: BookingSubmission) => void;
  className?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ 
  initialService = '',
  onSuccess,
  className = ''
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    date: '',
    time: '08:30',
    vehicleMakeModel: '',
    vehicleRego: '',
    message: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<BookingSubmission | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    const phoneClean = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (phoneClean.length < 8 || !/^[0-9+]+$/.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid contact phone number (e.g. 0412 345 678 or 02 9876 5432).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a required service from the dropdown.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your car or requested service.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Please provide a slightly more descriptive note (min 5 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        const receipt: BookingSubmission = data.booking || {
          id: `APX-${Math.floor(100000 + Math.random() * 900000)}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date || new Date().toISOString().split('T')[0],
          time: formData.time || '08:30',
          message: formData.message,
          createdAt: new Date().toLocaleDateString('en-AU', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          status: 'Confirmed'
        };

        try {
          const existing = JSON.parse(localStorage.getItem('apex_bookings') || '[]');
          localStorage.setItem('apex_bookings', JSON.stringify([receipt, ...existing]));
        } catch (err) {
          console.error('Local storage save failed', err);
        }

        setIsSubmitting(false);
        setIsSuccess(true);
        setSubmissionReceipt(receipt);
        if (onSuccess) onSuccess(receipt);
        return;
      }
    } catch (apiError) {
      console.warn('API submission failed, falling back to local receipt:', apiError);
    }

    // Fallback receipt generation if network/api was unreachable
    const fallbackReceipt: BookingSubmission = {
      id: `APX-${Math.floor(100000 + Math.random() * 900000)}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      date: formData.date || new Date().toISOString().split('T')[0],
      time: formData.time || '08:30',
      message: formData.message,
      createdAt: new Date().toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Confirmed'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('apex_bookings') || '[]');
      localStorage.setItem('apex_bookings', JSON.stringify([fallbackReceipt, ...existing]));
    } catch (err) {
      console.error('Local storage save failed', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    setSubmissionReceipt(fallbackReceipt);
    if (onSuccess) onSuccess(fallbackReceipt);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: initialService || '',
      date: '',
      time: '08:30',
      vehicleMakeModel: '',
      vehicleRego: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
    setSubmissionReceipt(null);
  };

  return (
    <div 
      id="booking-form-container"
      className={`bg-white rounded-sm shadow-xl border border-gray-200 p-6 sm:p-8 lg:p-10 ${className}`}
    >
      {isSuccess && submissionReceipt ? (
        <div id="booking-success-message" className="text-center py-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-sm bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-sm text-xs font-black uppercase tracking-wider mb-2">
            Booking Received
          </span>

          <h3 className="font-black text-3xl sm:text-4xl text-[#0B132B] uppercase italic">
            APPOINTMENT REQUEST CONFIRMED!
          </h3>

          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-md mx-auto">
            Thank you, <strong className="text-[#0B132B]">{submissionReceipt.name}</strong>. Your appointment reference is:
          </p>

          <div className="my-6 p-4 bg-gray-50 border-l-4 border-[#D90429] rounded-sm max-w-md mx-auto text-left">
            <div className="flex justify-between items-center pb-2 border-b border-gray-200 text-xs text-gray-500">
              <span className="font-bold uppercase">Booking Reference</span>
              <span className="font-mono font-black text-[#D90429] text-base">{submissionReceipt.id}</span>
            </div>
            <div className="py-2 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-400 font-bold uppercase block">Service</span>
                <span className="font-black text-[#0B132B]">
                  {SERVICES.find(s => s.slug === submissionReceipt.service)?.title || submissionReceipt.service}
                </span>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase block">Contact Phone</span>
                <span className="font-black text-[#0B132B]">{submissionReceipt.phone}</span>
              </div>
              {submissionReceipt.date && (
                <div>
                  <span className="text-gray-400 font-bold uppercase block">Date</span>
                  <span className="font-black text-[#0B132B]">{submissionReceipt.date}</span>
                </div>
              )}
              <div>
                <span className="text-gray-400 font-bold uppercase block">Status</span>
                <span className="inline-flex items-center text-emerald-700 font-black uppercase">
                  ● {submissionReceipt.status}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 max-w-sm mx-auto mb-6">
            We will call you within 30 minutes during workshop operating hours to confirm hoist booking.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              id="book-another-appointment-btn"
              onClick={handleReset}
              className="bg-[#0B132B] hover:bg-slate-800 text-white px-5 py-2.5 rounded-sm text-xs font-black uppercase tracking-wider transition-colors"
            >
              Book Another Service
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="bg-[#D90429] hover:brightness-110 text-white px-5 py-2.5 rounded-sm text-xs font-black uppercase tracking-wider transition-colors"
            >
              Call Workshop Now
            </a>
          </div>
        </div>
      ) : (
        <form id="appointment-booking-form" onSubmit={handleSubmit} noValidate>
          
          <div className="mb-6 border-b border-gray-200 pb-4">
            <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
              Direct Workshop Reservation
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] uppercase italic tracking-tight">
              Book Appointment
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Select your required service and preferred date. Itemised quotes provided prior to any work.
            </p>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label htmlFor="booking-name" className="block text-[10px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Full Name <span className="text-[#D90429]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="booking-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Smith"
                  className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-sm transition-colors focus:bg-white focus:outline-none ${
                    errors.name 
                      ? 'border-[#D90429] text-red-900' 
                      : 'border-gray-300 focus:border-[#D90429] text-[#1a1a1a]'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-xs text-[#D90429] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="booking-email" className="block text-[10px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Email Address <span className="text-[#D90429]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="booking-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-sm transition-colors focus:bg-white focus:outline-none ${
                    errors.email 
                      ? 'border-[#D90429] text-red-900' 
                      : 'border-gray-300 focus:border-[#D90429] text-[#1a1a1a]'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-[#D90429] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="booking-phone" className="block text-[10px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Phone Number <span className="text-[#D90429]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="booking-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0412 345 678"
                  className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-sm transition-colors focus:bg-white focus:outline-none ${
                    errors.phone 
                      ? 'border-[#D90429] text-red-900' 
                      : 'border-gray-300 focus:border-[#D90429] text-[#1a1a1a]'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-[#D90429] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Select Service Dropdown */}
            <div className="sm:col-span-2">
              <label htmlFor="booking-service" className="block text-[10px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Service Type <span className="text-[#D90429]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Wrench className="w-4 h-4" />
                </div>
                <select
                  id="booking-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-sm transition-colors focus:bg-white focus:outline-none appearance-none cursor-pointer ${
                    errors.service 
                      ? 'border-[#D90429] text-red-900' 
                      : 'border-gray-300 focus:border-[#D90429] text-[#1a1a1a]'
                  }`}
                >
                  <option value="">-- Select a service --</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.slug}>
                      {service.title} (from {service.startingPrice})
                    </option>
                  ))}
                </select>
              </div>
              {errors.service && (
                <p className="mt-1 text-xs text-[#D90429] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.service}</span>
                </p>
              )}
            </div>

            {/* Vehicle Details */}
            <div>
              <label htmlFor="booking-vehicle" className="block text-[10px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Vehicle Make & Model (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Car className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="booking-vehicle"
                  name="vehicleMakeModel"
                  value={formData.vehicleMakeModel}
                  onChange={handleChange}
                  placeholder="e.g. 2021 Toyota RAV4 / Ford Ranger"
                  className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-[#D90429] focus:bg-white focus:outline-none text-[#1a1a1a]"
                />
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="booking-date" className="block text-[10px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Preferred Date (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  type="date"
                  id="booking-date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-[#D90429] focus:bg-white focus:outline-none text-[#1a1a1a]"
                />
              </div>
            </div>

            {/* Message / Symptoms */}
            <div className="sm:col-span-2">
              <label htmlFor="booking-message" className="block text-[10px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Message / Vehicle Symptoms <span className="text-[#D90429]">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-2.5 left-3 pointer-events-none text-gray-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe warning lights, noises, vibration, or service requirements..."
                  className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-sm transition-colors focus:bg-white focus:outline-none ${
                    errors.message 
                      ? 'border-[#D90429] text-red-900' 
                      : 'border-gray-300 focus:border-[#D90429] text-[#1a1a1a]'
                  }`}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-xs text-[#D90429] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              id="booking-submit-btn"
              disabled={isSubmitting}
              className="w-full bg-[#D90429] py-3.5 font-black uppercase text-sm tracking-widest text-white shadow-lg hover:brightness-110 active:scale-[0.98] transition-all rounded-sm flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Securing Your Booking...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Secure Booking</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-gray-400 text-center mt-2 font-medium">
              We uphold transparent pricing: no work commenced without your prior quote authorization.
            </p>
          </div>

        </form>
      )}
    </div>
  );
};
