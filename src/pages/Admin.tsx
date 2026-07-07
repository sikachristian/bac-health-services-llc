import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/providers/trpc";
import Navigation from "@/sections/Navigation";
import {
  Users,
  CalendarDays,
  Mail,
  ArrowLeft,
  Loader2,
} from "lucide-react";

function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E8EDE8] shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <p className="text-[28px] font-bold text-[#1C2D3A] font-heading">{value}</p>
      <p className="text-[13px] text-[#6B7B6B] font-medium">{title}</p>
    </div>
  );
}

export default function Admin() {
  const { isLoading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<"patients" | "appointments" | "messages">("patients");

  const { data: patients, isLoading: patientsLoading } = trpc.patient.list.useQuery();
  const { data: appointments, isLoading: appointmentsLoading } = trpc.appointment.list.useQuery();
  const { data: messages, isLoading: messagesLoading } = trpc.contact.list.useQuery();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#FEFEFB] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#5B7B6F]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFEFB]">
      <Navigation />
      <div className="pt-[72px]">
        {/* Header */}
        <div className="bg-[#1C2D3A] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.12em] text-[#5B7B6F] uppercase mb-1 font-heading">
                  Admin Dashboard
                </p>
                <h1 className="text-[28px] font-bold text-white font-heading">
                  BAC Health Services Admin
                </h1>
              </div>
              <Link
                to="/"
                className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Site
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <StatCard
              title="Total Patients"
              value={patients?.length || 0}
              icon={<Users className="w-5 h-5 text-[#5B7B6F]" />}
              color="bg-[#5B7B6F]/10"
            />
            <StatCard
              title="Appointments"
              value={appointments?.length || 0}
              icon={<CalendarDays className="w-5 h-5 text-[#5B7B6F]" />}
              color="bg-[#5B7B6F]/10"
            />
            <StatCard
              title="Contact Messages"
              value={messages?.length || 0}
              icon={<Mail className="w-5 h-5 text-[#5B7B6F]" />}
              color="bg-[#5B7B6F]/10"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {(["patients", "appointments", "messages"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 h-10 rounded-full text-[13px] font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? "bg-[#5B7B6F] text-white"
                    : "bg-white text-[#4A5D4A] border border-[#E8EDE8] hover:border-[#5B7B6F]/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-[#E8EDE8] shadow-card overflow-hidden">
            {activeTab === "patients" && (
              <div>
                <div className="px-6 py-4 border-b border-[#E8EDE8] flex items-center justify-between">
                  <h3 className="text-[16px] font-semibold text-[#1C2D3A] font-heading">Patient Submissions</h3>
                  {patientsLoading && <Loader2 className="w-4 h-4 animate-spin text-[#5B7B6F]" />}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F5F7F5]">
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Name</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Email</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Phone</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Reason</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients && patients.length > 0 ? (
                        patients.map((p: any) => (
                          <tr key={p.$id} className="border-t border-[#E8EDE8] hover:bg-[#F5F7F5]/50">
                            <td className="px-6 py-4 text-[13px] text-[#1C2D3A] font-medium">{p.firstName} {p.lastName}</td>
                            <td className="px-6 py-4 text-[13px] text-[#4A5D4A]">{p.email}</td>
                            <td className="px-6 py-4 text-[13px] text-[#4A5D4A]">{p.phone}</td>
                            <td className="px-6 py-4 text-[13px] text-[#4A5D4A]">{p.reasonForVisit}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize ${
                                p.status === "new" ? "bg-amber-50 text-amber-700" :
                                p.status === "reviewed" ? "bg-blue-50 text-blue-700" :
                                "bg-green-50 text-green-700"
                              }`}>
                                {p.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-[14px] text-[#6B7B6B]">
                            {patientsLoading ? "Loading..." : "No patient submissions yet"}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "appointments" && (
              <div>
                <div className="px-6 py-4 border-b border-[#E8EDE8] flex items-center justify-between">
                  <h3 className="text-[16px] font-semibold text-[#1C2D3A] font-heading">Appointment Bookings</h3>
                  {appointmentsLoading && <Loader2 className="w-4 h-4 animate-spin text-[#5B7B6F]" />}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F5F7F5]">
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Name</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Email</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Date</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Service</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments && appointments.length > 0 ? (
                        appointments.map((a: any) => (
                          <tr key={a.$id} className="border-t border-[#E8EDE8] hover:bg-[#F5F7F5]/50">
                            <td className="px-6 py-4 text-[13px] text-[#1C2D3A] font-medium">{a.firstName} {a.lastName}</td>
                            <td className="px-6 py-4 text-[13px] text-[#4A5D4A]">{a.email}</td>
                            <td className="px-6 py-4 text-[13px] text-[#4A5D4A]">{a.appointmentDate} at {a.appointmentTime}</td>
                            <td className="px-6 py-4 text-[13px] text-[#4A5D4A]">{a.serviceType}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize ${
                                a.status === "pending" ? "bg-amber-50 text-amber-700" :
                                a.status === "confirmed" ? "bg-green-50 text-green-700" :
                                "bg-red-50 text-red-700"
                              }`}>
                                {a.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-[14px] text-[#6B7B6B]">
                            {appointmentsLoading ? "Loading..." : "No appointments yet"}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div>
                <div className="px-6 py-4 border-b border-[#E8EDE8] flex items-center justify-between">
                  <h3 className="text-[16px] font-semibold text-[#1C2D3A] font-heading">Contact Messages</h3>
                  {messagesLoading && <Loader2 className="w-4 h-4 animate-spin text-[#5B7B6F]" />}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F5F7F5]">
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Name</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Email</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Message</th>
                        <th className="text-left px-6 py-3 text-[12px] font-semibold text-[#6B7B6B] uppercase tracking-wide">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages && messages.length > 0 ? (
                        messages.map((m: any) => (
                          <tr key={m.$id} className="border-t border-[#E8EDE8] hover:bg-[#F5F7F5]/50">
                            <td className="px-6 py-4 text-[13px] text-[#1C2D3A] font-medium">{m.firstName} {m.lastName}</td>
                            <td className="px-6 py-4 text-[13px] text-[#4A5D4A]">{m.email}</td>
                            <td className="px-6 py-4 text-[13px] text-[#4A5D4A] max-w-xs truncate">{m.message}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize ${
                                m.status === "new" ? "bg-amber-50 text-amber-700" :
                                m.status === "replied" ? "bg-green-50 text-green-700" :
                                "bg-blue-50 text-blue-700"
                              }`}>
                                {m.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="px-6 py-12 text-center text-[14px] text-[#6B7B6B]">
                            {messagesLoading ? "Loading..." : "No contact messages yet"}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
