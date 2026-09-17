import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  Search,
  Filter,
  Phone,
  MessageCircle,
  Calendar,
  GraduationCap,
  Plus,
  CheckCircle2,
  Clock,
  UserCheck,
  Building,
  DollarSign,
  Mail,
  ChevronRight,
  RefreshCw,
  X,
  Lock,
  Eye,
  EyeOff,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { MAKEUP_ENQUIRIES, COURSE_ENQUIRIES } from '../data/mockData';
import { GlitterBackground } from '../components/GlitterBackground';

export const Admin = ({ onOpenBooking }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('isAdminAuthenticated') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // Dashboard States
  const [activeTab, setActiveTab] = useState('makeup'); // 'makeup' | 'course'
  const [makeupList, setMakeupList] = useState(MAKEUP_ENQUIRIES);
  const [courseList, setCourseList] = useState(COURSE_ENQUIRIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Enquiry Form State
  const [newEnquiry, setNewEnquiry] = useState({
    type: 'makeup',
    name: '',
    phone: '',
    email: '',
    item: '',
    dateOrBatch: '',
    notes: ''
  });

  // Password submission handler
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      setAuthError('');
      setPasswordInput('');
    } else {
      setAuthError('Incorrect admin password. Access denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuthenticated');
  };

  // Filter makeup list
  const filteredMakeup = makeupList.filter((item) => {
    const matchesSearch =
      item.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.venue.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' ? true : item.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Filter course list
  const filteredCourse = courseList.filter((item) => {
    const matchesSearch =
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' ? true : item.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Toggle status handler
  const handleToggleMakeupStatus = (id) => {
    setMakeupList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStatus = item.status === 'Confirmed' ? 'Pending' : 'Confirmed';
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  const handleToggleCourseStatus = (id) => {
    setCourseList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStatus = item.status === 'Enrolled' ? 'Inquired' : 'Enrolled';
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  // Handle Add New Record
  const handleCreateEnquiry = (e) => {
    e.preventDefault();
    if (!newEnquiry.name || !newEnquiry.phone) return;

    if (newEnquiry.type === 'makeup') {
      const newItem = {
        id: `enq-m${Date.now()}`,
        clientName: newEnquiry.name,
        phone: newEnquiry.phone,
        email: newEnquiry.email || 'N/A',
        service: newEnquiry.item || 'Bridal Makeover',
        eventDate: newEnquiry.dateOrBatch || 'TBD',
        venue: 'Gurugram Studio',
        budget: '₹25,000',
        status: 'Pending',
        createdDate: 'Just Now',
        notes: newEnquiry.notes || 'Added manually via admin portal.'
      };
      setMakeupList([newItem, ...makeupList]);
    } else {
      const newItem = {
        id: `enq-c${Date.now()}`,
        studentName: newEnquiry.name,
        phone: newEnquiry.phone,
        email: newEnquiry.email || 'N/A',
        course: newEnquiry.item || 'Diploma in Bridal Artistry',
        preferredBatch: newEnquiry.dateOrBatch || 'Upcoming Batch',
        fee: '₹55,000',
        status: 'Inquired',
        createdDate: 'Just Now',
        notes: newEnquiry.notes || 'Added manually via admin portal.'
      };
      setCourseList([newItem, ...courseList]);
    }

    setIsAddModalOpen(false);
    setNewEnquiry({ type: 'makeup', name: '', phone: '', email: '', item: '', dateOrBatch: '', notes: '' });
  };

  // IF NOT AUTHENTICATED: RENDER PASSWORD LOGIN GATE
  if (!isAuthenticated) {
    return (
      <div className="mt-16 mb-4 pt-10 pb-16 min-h-[75vh] flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] to-white text-[#1A1615] rounded-3xl relative border-2 border-[#BE185D]/30 shadow-2xl">
        <GlitterBackground count={20} />

        <div className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#BE185D]/30 shadow-2xl space-y-6 text-center">
          {/* Logo & Lock Badge */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative mb-2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 to-pink-600 blur-xl opacity-40 animate-pulse" />
              <img
                src="/logo.png"
                alt="Stylist Makeup Studio"
                className="relative w-20 h-20 object-contain drop-shadow-md"
              />
            </div>
            <div className="px-3.5 py-1 rounded-full bg-[#FFF0F5] border border-[#BE185D]/30 text-[#BE185D] text-[11px] font-extrabold uppercase tracking-widest inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Restricted Studio Access</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1615]">
              Studio Admin Login
            </h2>
            <p className="text-xs text-[#2C221E]/80 font-medium">
              Enter your master security password to unlock client enquiries & academy management.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleAuthSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-[#1A1615] mb-1.5">
                Admin Security Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter admin password..."
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setAuthError('');
                  }}
                  className="w-full pl-4 pr-10 py-3 rounded-xl bg-[#FFFDF9] border-2 border-[#BE185D]/30 text-xs font-bold text-[#1A1615] placeholder-gray-400 focus:outline-none focus:border-[#BE185D]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#BE185D]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white font-extrabold text-xs uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>

          <p className="text-[10px] text-gray-400 font-semibold">
            Default Studio Password: <code className="text-[#BE185D] font-bold">admin123</code>
          </p>
        </div>
      </div>
    );
  }

  // IF AUTHENTICATED: RENDER FULL ADMIN DASHBOARD
  return (
    <div className="mt-16 mb-4 pt-6 sm:pt-8 pb-16 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] via-[#FFF8E7] to-white text-[#1A1615] rounded-3xl overflow-hidden relative border-2 border-[#BE185D]/30 shadow-2xl">
      
      {/* Background Particles */}
      <GlitterBackground count={30} />

      {/* Decorative Glow Flares */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#BE185D]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#BE185D]/20 pb-6 relative z-10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#BE185D]/30 text-[#BE185D] text-xs font-bold uppercase tracking-widest shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Studio Management & Operations Portal</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-serif italic text-[#1A1615]">
            Studio Admin <span className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] font-black">Dashboard</span>
          </h1>
          <p className="text-xs text-[#2C221E]/80 font-medium">
            Manage makeup client bookings, academy course inquiries, and instant WhatsApp responses.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="px-4 py-2.5 rounded-full bg-slate-200 hover:bg-slate-300 text-[#1A1615] font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
            title="Lock Portal"
          >
            <LogOut className="w-3.5 h-3.5 text-rose-600" />
            <span>Lock Portal</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Manual Entry</span>
          </button>
        </div>
      </div>

      {/* METRICS SUMMARY STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        <div className="p-5 rounded-2xl bg-white border-2 border-[#BE185D]/20 shadow-md space-y-1">
          <span className="text-[11px] font-bold text-[#BE185D] uppercase tracking-wider">Total Makeup Enquiries</span>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1615]">{makeupList.length}</span>
            <span className="text-xs font-bold text-emerald-600">₹91,000 Potential</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border-2 border-[#BE185D]/20 shadow-md space-y-1">
          <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider">Academy Course Enquiries</span>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1615]">{courseList.length}</span>
            <span className="text-xs font-bold text-[#D97706]">₹1,23,500 Potential</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border-2 border-[#BE185D]/20 shadow-md space-y-1">
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Confirmed / Enrolled</span>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-emerald-600">
              {makeupList.filter(m => m.status === 'Confirmed').length + courseList.filter(c => c.status === 'Enrolled').length}
            </span>
            <span className="text-xs font-bold text-emerald-700">Guaranteed</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border-2 border-[#BE185D]/20 shadow-md space-y-1">
          <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">Pending Action</span>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-rose-600">
              {makeupList.filter(m => m.status === 'Pending').length + courseList.filter(c => c.status === 'Inquired').length}
            </span>
            <span className="text-xs text-rose-600 font-bold">Requires Reply</span>
          </div>
        </div>
      </div>

      {/* SEARCH & TAB SWITCHER BAR */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border-2 border-[#BE185D]/20 shadow-md relative z-10">
        {/* Main Tab Pills */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab('makeup')}
            className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'makeup'
                ? 'bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white shadow-md'
                : 'text-[#1A1615] hover:text-[#BE185D] hover:bg-white'
            }`}
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Makeup Enquiries ({makeupList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('course')}
            className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'course'
                ? 'bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white shadow-md'
                : 'text-[#1A1615] hover:text-[#BE185D] hover:bg-white'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>Course Enquiries ({courseList.length})</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-[#BE185D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search name, phone, service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#FFFDF9] border-2 border-[#BE185D]/20 text-xs text-[#1A1615] font-semibold placeholder-gray-500 focus:outline-none focus:border-[#BE185D]"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-[#FFFDF9] border-2 border-[#BE185D]/20 text-xs text-[#BE185D] font-extrabold focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value={activeTab === 'makeup' ? 'Confirmed' : 'Enrolled'}>
              {activeTab === 'makeup' ? 'Confirmed Only' : 'Enrolled Only'}
            </option>
            <option value={activeTab === 'makeup' ? 'Pending' : 'Inquired'}>
              {activeTab === 'makeup' ? 'Pending Only' : 'Inquired Only'}
            </option>
          </select>
        </div>
      </div>

      {/* TAB CONTENT TABLES */}
      <div className="relative z-10">
        {activeTab === 'makeup' ? (
          /* MAKEUP ENQUIRIES TABLE */
          <div className="space-y-4">
            <h3 className="text-sm font-serif italic font-bold text-[#BE185D] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F59E0B]" /> Bridal & Glam Makeup Bookings Log
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {filteredMakeup.map((item) => {
                const whatsappMsg = `Hello ${item.clientName}! This is Anya Sharma from Stylist Makeup Artist regarding your enquiry for ${item.service} on ${item.eventDate}.`;
                const whatsappLink = `https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMsg)}`;

                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white border-2 border-[#BE185D]/20 hover:border-[#BE185D] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg text-[#1A1615]"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-base font-bold text-[#1A1615]">{item.clientName}</span>
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FFF0F5] text-[#BE185D] border border-[#BE185D]/30">
                          {item.service}
                        </span>
                        <span className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                          item.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-rose-100 text-rose-800 border border-rose-300'
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#2C221E] font-medium">
                        <div>📅 Event: <strong className="text-[#1A1615] font-bold">{item.eventDate}</strong></div>
                        <div>📍 Venue: <strong className="text-[#1A1615] font-bold">{item.venue}</strong></div>
                        <div>💰 Budget: <strong className="text-[#BE185D] font-extrabold">{item.budget}</strong></div>
                        <div>📱 Contact: <strong className="text-[#1A1615] font-bold font-mono">{item.phone}</strong></div>
                      </div>

                      <p className="text-xs text-[#4A3E3D] italic bg-[#FFFDF9] p-2.5 rounded-xl border border-[#BE185D]/15">
                        "{item.notes}"
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-end md:self-center">
                      <button
                        onClick={() => handleToggleMakeupStatus(item.id)}
                        className="px-3.5 py-2 rounded-xl bg-[#FFF0F5] hover:bg-[#FCE7F3] text-xs text-[#BE185D] font-bold border border-[#BE185D]/30 transition-colors flex items-center gap-1.5"
                        title="Toggle Status"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>Toggle Status</span>
                      </button>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>WhatsApp Reply</span>
                      </a>

                      <a
                        href={`tel:${item.phone}`}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Client</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* COURSE ENQUIRIES TABLE */
          <div className="space-y-4">
            <h3 className="text-sm font-serif italic font-bold text-[#BE185D] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#F59E0B]" /> Makeup Academy Student Enquiries Log
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {filteredCourse.map((item) => {
                const whatsappMsg = `Hello ${item.studentName}! This is Anya Sharma Academy regarding your enquiry for ${item.course}.`;
                const whatsappLink = `https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMsg)}`;

                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white border-2 border-[#BE185D]/20 hover:border-[#BE185D] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg text-[#1A1615]"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-base font-bold text-[#1A1615]">{item.studentName}</span>
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FFF0F5] text-[#BE185D] border border-[#BE185D]/30">
                          {item.course}
                        </span>
                        <span className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                          item.status === 'Enrolled'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-amber-100 text-amber-900 border border-amber-300'
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#2C221E] font-medium">
                        <div>🎓 Preferred Batch: <strong className="text-[#1A1615] font-bold">{item.preferredBatch}</strong></div>
                        <div>💳 Course Fee: <strong className="text-[#BE185D] font-extrabold">{item.fee}</strong></div>
                        <div>📱 Phone: <strong className="text-[#1A1615] font-bold font-mono">{item.phone}</strong></div>
                        <div>✉️ Email: <strong className="text-[#2C221E] font-medium">{item.email}</strong></div>
                      </div>

                      <p className="text-xs text-[#4A3E3D] italic bg-[#FFFDF9] p-2.5 rounded-xl border border-[#BE185D]/15">
                        "{item.notes}"
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-end md:self-center">
                      <button
                        onClick={() => handleToggleCourseStatus(item.id)}
                        className="px-3.5 py-2 rounded-xl bg-[#FFF0F5] hover:bg-[#FCE7F3] text-xs text-[#BE185D] font-bold border border-[#BE185D]/30 transition-colors flex items-center gap-1.5"
                        title="Toggle Status"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>Toggle Status</span>
                      </button>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>WhatsApp Reply</span>
                      </a>

                      <a
                        href={`tel:${item.phone}`}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Student</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* NEW MANUAL ENTRY MODAL */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-white border-2 border-[#BE185D]/30 rounded-3xl p-6 sm:p-8 space-y-5 text-[#1A1615] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#BE185D]/20 pb-3">
                <h3 className="font-serif text-xl font-bold text-[#BE185D]">Add Manual Studio Enquiry</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="p-1 text-gray-500 hover:text-[#BE185D]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateEnquiry} className="space-y-4 text-xs font-semibold">
                <div>
                  <label className="block font-bold text-[#1A1615] mb-1">Enquiry Type</label>
                  <select
                    value={newEnquiry.type}
                    onChange={(e) => setNewEnquiry({ ...newEnquiry, type: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#BE185D] font-extrabold focus:outline-none"
                  >
                    <option value="makeup">Bridal / Glam Makeup Enquiry</option>
                    <option value="course">Academy Course Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#1A1615] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshi Mehta"
                    value={newEnquiry.name}
                    onChange={(e) => setNewEnquiry({ ...newEnquiry, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#1A1615] mb-1">Phone / WhatsApp *</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98765 43210"
                      value={newEnquiry.phone}
                      onChange={(e) => setNewEnquiry({ ...newEnquiry, phone: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#1A1615] mb-1">Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="client@example.com"
                      value={newEnquiry.email}
                      onChange={(e) => setNewEnquiry({ ...newEnquiry, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1A1615] mb-1">
                    {newEnquiry.type === 'makeup' ? 'Requested Makeup Service' : 'Requested Academy Course'}
                  </label>
                  <input
                    type="text"
                    placeholder={newEnquiry.type === 'makeup' ? 'e.g. Royal HD Indian Bridal Makeover' : 'e.g. Diploma in Bridal Artistry'}
                    value={newEnquiry.item}
                    onChange={(e) => setNewEnquiry({ ...newEnquiry, item: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1A1615] mb-1">
                    {newEnquiry.type === 'makeup' ? 'Event Date & Venue' : 'Preferred Batch / Timing'}
                  </label>
                  <input
                    type="text"
                    placeholder={newEnquiry.type === 'makeup' ? 'e.g. 15 Nov 2026 - Gurugram' : 'e.g. October Batch'}
                    value={newEnquiry.dateOrBatch}
                    onChange={(e) => setNewEnquiry({ ...newEnquiry, dateOrBatch: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1A1615] mb-1">Notes / Instructions</label>
                  <textarea
                    rows={2}
                    placeholder="Add special requests..."
                    value={newEnquiry.notes}
                    onChange={(e) => setNewEnquiry({ ...newEnquiry, notes: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#FFFDF9] border border-[#BE185D]/30 text-[#1A1615] placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#BE185D] text-white font-extrabold uppercase tracking-wider shadow-md"
                  >
                    Save Entry
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;
