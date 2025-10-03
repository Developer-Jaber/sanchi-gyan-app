'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Search, Filter, Eye, Check, X } from 'lucide-react'
import Button from '@/components/shared/Button'

interface Application {
  _id: string
  fullName: string
  jobTitle: string
  email: string
  phone: string
  education: string
  address: string
  resumePath: string
  status: 'pending' | 'approved' | 'rejected'
  appliedAt: string
  coverLetter?: string
}

interface Props {
  initialApplications: Application[]
}

export default function ApplicationsClient ({ initialApplications }: Props) {
  const [applications, setApplications] = useState(initialApplications)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('')
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)
  const [loading, setLoading] = useState<string | null>(null)

  // Filter applications
  const filteredApplications = applications.filter(app => {
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === 'all' || app.status === statusFilter

    const matchesDate =
      !dateFilter ||
      new Date(app.appliedAt).toISOString().split('T')[0] === dateFilter

    return matchesSearch && matchesStatus && matchesDate
  })

  // Update status
  const updateStatus = async (
    applicationId: string,
    newStatus: 'approved' | 'rejected'
  ) => {
    setLoading(applicationId)
    try {
      const response = await fetch('/api/job-applications/status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId, status: newStatus })
      })

      if (!response.ok) throw new Error('Failed to update status')

      // Update local state
      setApplications(
        applications.map(app =>
          app._id === applicationId ? { ...app, status: newStatus } : app
        )
      )
    } catch (error) {
      alert('Failed to update status')
    } finally {
      setLoading(null)
    }
  }

  // Status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-yellow-100 text-yellow-800'
    }
  }

  return (
    <div className='p-6'>
      <div className='mb-8'>
        <h1 className='mb-2 font-bold text-gray-900 text-3xl'>
          Job Applications
        </h1>
        <p className='text-gray-600'>Manage and review all job applications</p>
      </div>

      {/* Filters */}
      <div className='bg-white shadow-sm mb-6 p-6 rounded-lg'>
        <div className='gap-4 grid grid-cols-1 md:grid-cols-3'>
          {/* Search */}
          <div className='relative'>
            <Search className='top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2' />
            <input
              type='text'
              placeholder='Search by name, job, or email...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='py-2 pr-4 pl-10 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full'
            />
          </div>

          {/* Status Filter */}
          <select
            title='Filter by application status'
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className='px-4 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500'
          >
            <option value='all'>All Status</option>
            <option value='pending'>Pending</option>
            <option value='approved'>Approved</option>
            <option value='rejected'>Rejected</option>
          </select>

          {/* Date Filter */}
          <input
            title='Filter by submittion date'
            type='date'
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
            className='px-4 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='mt-4 text-gray-600 text-sm'>
          Showing {filteredApplications.length} of {applications.length}{' '}
          applications
        </div>
      </div>

      {/* Applications Table */}
      <div className='bg-white shadow-sm rounded-lg overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-gray-200 border-b'>
              <tr>
                <th className='px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider'>
                  Applicant
                </th>
                <th className='px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider'>
                  Job Title
                </th>
                <th className='px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider'>
                  Submission Date
                </th>
                <th className='px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider'>
                  Status
                </th>
                <th className='px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {filteredApplications.map(app => (
                <tr key={app._id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div>
                      <div className='font-medium text-gray-900 text-sm'>
                        {app.fullName}
                      </div>
                      <div className='text-gray-500 text-sm'>{app.email}</div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='text-gray-900 text-sm'>{app.jobTitle}</div>
                    <div className='text-gray-500 text-sm'>{app.education}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-gray-900 text-sm'>
                      {new Date(app.appliedAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        app.status
                      )}`}
                    >
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap'>
                    <div className='flex items-center gap-2'>
                      {/* View Details */}
                      <button
                        onClick={() => setSelectedApp(app)}
                        className='text-blue-600 hover:text-blue-800'
                        title='View Details'
                      >
                        <Eye className='w-5 h-5' />
                      </button>

                      {/* Download Resume */}
                      <a
                        href={app.resumePath}
                        download
                        className='text-green-600 hover:text-green-800'
                        title='Download Resume'
                      >
                        <Download className='w-5 h-5' />
                      </a>

                      {/* Approve */}
                      {app.status !== 'approved' && (
                        <button
                          onClick={() => updateStatus(app._id, 'approved')}
                          disabled={loading === app._id}
                          className='disabled:opacity-50 text-green-600 hover:text-green-800'
                          title='Approve'
                        >
                          <Check className='w-5 h-5' />
                        </button>
                      )}

                      {/* Reject */}
                      {app.status !== 'rejected' && (
                        <button
                          onClick={() => updateStatus(app._id, 'rejected')}
                          disabled={loading === app._id}
                          className='disabled:opacity-50 text-red-600 hover:text-red-800'
                          title='Reject'
                        >
                          <X className='w-5 h-5' />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredApplications.length === 0 && (
          <div className='py-12 text-center'>
            <p className='text-gray-500'>No applications found</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedApp && (
        <div className='z-50 fixed inset-0 flex justify-center items-center bg-black/50 p-4'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className='bg-white shadow-xl rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto'
          >
            <div className='p-6'>
              <div className='flex justify-between items-start mb-6'>
                <h2 className='font-bold text-gray-900 text-2xl'>
                  Application Details
                </h2>
                <button
                  title='Close'
                  onClick={() => setSelectedApp(null)}
                  className='text-gray-400 hover:text-gray-600'
                >
                  <X className='w-6 h-6' />
                </button>
              </div>

              <div className='space-y-4'>
                <div>
                  <label className='font-medium text-gray-500 text-sm'>
                    Full Name
                  </label>
                  <p className='text-gray-900'>{selectedApp.fullName}</p>
                </div>
                <div>
                  <label className='font-medium text-gray-500 text-sm'>
                    Email
                  </label>
                  <p className='text-gray-900'>{selectedApp.email}</p>
                </div>
                <div>
                  <label className='font-medium text-gray-500 text-sm'>
                    Phone
                  </label>
                  <p className='text-gray-900'>{selectedApp.phone}</p>
                </div>
                <div>
                  <label className='font-medium text-gray-500 text-sm'>
                    Address
                  </label>
                  <p className='text-gray-900'>{selectedApp.address}</p>
                </div>
                <div>
                  <label className='font-medium text-gray-500 text-sm'>
                    Education
                  </label>
                  <p className='text-gray-900'>{selectedApp.education}</p>
                </div>
                <div>
                  <label className='font-medium text-gray-500 text-sm'>
                    Job Applied For
                  </label>
                  <p className='text-gray-900'>{selectedApp.jobTitle}</p>
                </div>
                {selectedApp.coverLetter && (
                  <div>
                    <label className='font-medium text-gray-500 text-sm'>
                      Cover Letter
                    </label>
                    <p className='text-gray-900 whitespace-pre-wrap'>
                      {selectedApp.coverLetter}
                    </p>
                  </div>
                )}
                <div className='pt-4 border-t'>
                  <a
                    href={selectedApp.resumePath}
                    download
                    className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-800'
                  >
                    <Download className='w-5 h-5' />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
