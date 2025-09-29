"use client"
import { ReactNode, useState } from 'react'
import {
  BarChart3,
  FileText,
  Video,
  FileCheck,
  UserCheck,
  PlayCircle,
  HelpCircle,
  Library,
  Megaphone,
  Wallet,
  MessageSquare,
  MessagesSquare,
  Headphones,
  Bell,
  Settings,
  Database,
  Activity,
  BookOpen,
  ClipboardList,
  Store,
  GraduationCap,
  Users,
  Shield,
  KeyRound,
  CreditCard,
  Receipt,
  Award,
  Calendar,
  Clock,
  User,
  MessageCircle,
  TrendingUp,
  ClipboardCheck,
  PlusCircle,
  Upload,
  Trophy,
  ChevronDown,
  Menu
} from 'lucide-react'
import { MdAssignment } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'


type RouteGroupType = {
  group: string
  items: {
    href: string
    label: string
    icon: ReactNode
    permission?: string[]
  }[]
}

// Route groupe here
const ROUTE_GROUPS: RouteGroupType[] = [
  {
    group: 'Admin Dashboard',
    items: [
      {
        href: '/admin',
        label: 'Overview',
        icon: <Store className='mr-2 size-3' />
      },
      {
        href: '/admin/analytics',
        label: 'Analytics',
        icon: <BarChart3 className='mr-2 size-3' />
      },
      {
        href: '/admin/reports',
        label: 'Reports',
        icon: <FileText className='mr-2 size-3' />
      },
      {
        href: '/admin/academic/classes',
        label: 'Classes (2-10)',
        icon: <GraduationCap className='mr-2 size-3' />
      },
      {
        href: '/admin/academic/subjects',
        label: 'Subjects',
        icon: <BookOpen className='mr-2 size-3' />
      },
      {
        href: '/admin/academic/courses',
        label: 'Courses',
        icon: <BookOpen className='mr-2 size-3' />
      },
      {
        href: '/admin/academic/curriculum',
        label: 'Curriculum',
        icon: <ClipboardList className='mr-2 size-3' />
      },
      {
        href: '/admin/academic/lessons',
        label: 'Lessons & Content',
        icon: <Video className='mr-2 size-3' />
      },
      {
        href: '/admin/academic/assignments',
        label: 'Assignments',
        icon: <MdAssignment className='mr-2 size-3' />
      },
      {
        href: '/admin/academic/exams',
        label: 'Exams & Quizzes',
        icon: <FileCheck className='mr-2 size-3' />
      },
      {
        href: '/admin/users/students',
        label: 'Students',
        icon: <FaUserGraduate className='mr-2 size-3' />
      },
      {
        href: '/admin/users/teachers',
        label: 'Teachers',
        icon: <UserCheck className='mr-2 size-3' />
      },
      {
        href: '/admin/users/parents',
        label: 'Parents',
        icon: <Users className='mr-2 size-3' />
      },
      {
        href: '/admin/users/admins',
        label: 'Admins',
        icon: <Shield className='mr-2 size-3' />
      },
      {
        href: '/admin/users/roles',
        label: 'Roles & Permissions',
        icon: <KeyRound className='mr-2 size-3' />
      },
      {
        href: '/admin/content/videos',
        label: 'Video Lectures',
        icon: <PlayCircle className='mr-2 size-3' />
      },
      {
        href: '/admin/content/notes',
        label: 'Study Materials',
        icon: <FileText className='mr-2 size-3' />
      },
      {
        href: '/admin/content/quizzes',
        label: 'Interactive Quizzes',
        icon: <HelpCircle className='mr-2 size-3' />
      },
      {
        href: '/admin/content/library',
        label: 'Resource Library',
        icon: <Library className='mr-2 size-3' />
      },
      {
        href: '/admin/content/announcements',
        label: 'Announcements',
        icon: <Megaphone className='mr-2 size-3' />
      },
      {
        href: '/admin/finance/subscriptions',
        label: 'Subscriptions',
        icon: <CreditCard className='mr-2 size-3' />
      },
      {
        href: '/admin/finance/transactions',
        label: 'Transactions',
        icon: <Receipt className='mr-2 size-3' />
      },
      {
        href: '/admin/finance/invoices',
        label: 'Invoices',
        icon: <FileText className='mr-2 size-3' />
      },
      {
        href: '/admin/finance/payments',
        label: 'Payment Records',
        icon: <Wallet className='mr-2 size-3' />
      },
      {
        href: '/admin/finance/scholarships',
        label: 'Scholarships',
        icon: <Award className='mr-2 size-3' />
      },
      {
        href: '/admin/communication/messages',
        label: 'Messages',
        icon: <MessageSquare className='mr-2 size-3' />
      },
      {
        href: '/admin/communication/forums',
        label: 'Discussion Forums',
        icon: <MessagesSquare className='mr-2 size-3' />
      },
      {
        href: '/admin/communication/support',
        label: 'Support Tickets',
        icon: <Headphones className='mr-2 size-3' />
      },
      {
        href: '/admin/communication/notifications',
        label: 'Notifications',
        icon: <Bell className='mr-2 size-3' />
      },
      {
        href: '/admin/settings/general',
        label: 'General Settings',
        icon: <Settings className='mr-2 size-3' />
      },
      {
        href: '/admin/settings/academic-year',
        label: 'Academic Year',
        icon: <Calendar className='mr-2 size-3' />
      },
      {
        href: '/admin/settings/backup',
        label: 'Backup & Restore',
        icon: <Database className='mr-2 size-3' />
      },
      {
        href: '/admin/settings/logs',
        label: 'System Logs',
        icon: <Activity className='mr-2 size-3' />
      }
    ]
  },
  {
    group: 'Teacher Dashboard',
    items: [
      {
        href: '/teacher',
        label: 'Overview',
        icon: <Store className='mr-2 size-3' />
      },
      {
        href: '/teacher/analytics',
        label: 'Teaching Analytics',
        icon: <BarChart3 className='mr-2 size-3' />
      },
      {
        href: '/teacher/my-courses',
        label: 'My Courses',
        icon: <BookOpen className='mr-2 size-3' />
      },
      {
        href: '/teacher/course-builder',
        label: 'Course Builder',
        icon: <PlusCircle className='mr-2 size-3' />
      },
      {
        href: '/teacher/lesson-plan',
        label: 'Lesson Plans',
        icon: <ClipboardList className='mr-2 size-3' />
      },
      {
        href: '/teacher/schedule',
        label: 'Teaching Schedule',
        icon: <Calendar className='mr-2 size-3' />
      },
      {
        href: '/teacher/video-lectures',
        label: 'Video Lectures',
        icon: <PlayCircle className='mr-2 size-3' />
      },
      {
        href: '/teacher/study-materials',
        label: 'Study Materials',
        icon: <FileText className='mr-2 size-3' />
      },
      {
        href: '/teacher/assignments',
        label: 'Assignments',
        icon: <MdAssignment className='mr-2 size-3' />
      },
      {
        href: '/teacher/quizzes',
        label: 'Quizzes & Tests',
        icon: <HelpCircle className='mr-2 size-3' />
      },
      {
        href: '/teacher/resources',
        label: 'Teaching Resources',
        icon: <Library className='mr-2 size-3' />
      },
      {
        href: '/teacher/students',
        label: 'My Students',
        icon: <FaUserGraduate className='mr-2 size-3' />
      },
      {
        href: '/teacher/attendance',
        label: 'Attendance',
        icon: <ClipboardCheck className='mr-2 size-3' />
      },
      {
        href: '/teacher/grading',
        label: 'Grading & Assessment',
        icon: <FileCheck className='mr-2 size-3' />
      },
      {
        href: '/teacher/progress',
        label: 'Student Progress',
        icon: <TrendingUp className='mr-2 size-3' />
      },
      {
        href: '/teacher/performance',
        label: 'Performance Reports',
        icon: <BarChart3 className='mr-2 size-3' />
      },
      {
        href: '/teacher/messages',
        label: 'Messages',
        icon: <MessageSquare className='mr-2 size-3' />
      },
      {
        href: '/teacher/discussions',
        label: 'Class Discussions',
        icon: <MessagesSquare className='mr-2 size-3' />
      },
      {
        href: '/teacher/announcements',
        label: 'Announcements',
        icon: <Megaphone className='mr-2 size-3' />
      },
      {
        href: '/teacher/parents',
        label: 'Parent Communication',
        icon: <Users className='mr-2 size-3' />
      },
      {
        href: '/teacher/training',
        label: 'Teacher Training',
        icon: <GraduationCap className='mr-2 size-3' />
      },
      {
        href: '/teacher/resources',
        label: 'Teaching Resources',
        icon: <BookOpen className='mr-2 size-3' />
      },
      {
        href: '/teacher/community',
        label: 'Teacher Community',
        icon: <Users className='mr-2 size-3' />
      },
      {
        href: '/teacher/feedback',
        label: 'Student Feedback',
        icon: <MessageCircle className='mr-2 size-3' />
      },
      {
        href: '/teacher/profile',
        label: 'My Profile',
        icon: <User className='mr-2 size-3' />
      },
      {
        href: '/teacher/settings',
        label: 'Settings',
        icon: <Settings className='mr-2 size-3' />
      },
      {
        href: '/teacher/support',
        label: 'Support',
        icon: <Headphones className='mr-2 size-3' />
      },
      {
        href: '/teacher/availability',
        label: 'Availability',
        icon: <Clock className='mr-2 size-3' />
      }
    ]
  },
  {
    group: 'Student Dashboard',
    items: [
      {
        href: '/student',
        label: 'Overview',
        icon: <Store className='mr-2 size-3' />
      },
      {
        href: '/student/analytics',
        label: 'My Progress',
        icon: <BarChart3 className='mr-2 size-3' />
      },
      {
        href: '/student/my-courses',
        label: 'My Courses',
        icon: <BookOpen className='mr-2 size-3' />
      },
      {
        href: '/student/class-schedule',
        label: 'Class Schedule',
        icon: <Calendar className='mr-2 size-3' />
      },
      {
        href: '/student/video-lectures',
        label: 'Video Lectures',
        icon: <PlayCircle className='mr-2 size-3' />
      },
      {
        href: '/student/study-materials',
        label: 'Study Materials',
        icon: <FileText className='mr-2 size-3' />
      },
      {
        href: '/student/resource-library',
        label: 'Resource Library',
        icon: <Library className='mr-2 size-3' />
      },
      {
        href: '/student/assignments',
        label: 'Assignments',
        icon: <MdAssignment className='mr-2 size-3' />
      },
      {
        href: '/student/quizzes',
        label: 'Quizzes & Tests',
        icon: <HelpCircle className='mr-2 size-3' />
      },
      {
        href: '/student/exams',
        label: 'Exams',
        icon: <FileCheck className='mr-2 size-3' />
      },
      {
        href: '/student/submissions',
        label: 'My Submissions',
        icon: <Upload className='mr-2 size-3' />
      },
      {
        href: '/student/grades',
        label: 'Grades & Report Card',
        icon: <Award className='mr-2 size-3' />
      },
      {
        href: '/student/transcripts',
        label: 'Transcripts',
        icon: <FileText className='mr-2 size-3' />
      },
      {
        href: '/student/performance',
        label: 'Performance Analytics',
        icon: <TrendingUp className='mr-2 size-3' />
      },
      {
        href: '/student/achievements',
        label: 'Achievements',
        icon: <Trophy className='mr-2 size-3' />
      },
      {
        href: '/student/messages',
        label: 'Messages',
        icon: <MessageSquare className='mr-2 size-3' />
      },
      {
        href: '/student/discussions',
        label: 'Discussion Forums',
        icon: <MessagesSquare className='mr-2 size-3' />
      },
      {
        href: '/student/teachers',
        label: 'My Teachers',
        icon: <UserCheck className='mr-2 size-3' />
      },
      {
        href: '/student/announcements',
        label: 'Announcements',
        icon: <Megaphone className='mr-2 size-3' />
      },
      {
        href: '/student/profile',
        label: 'My Profile',
        icon: <User className='mr-2 size-3' />
      },
      {
        href: '/student/settings',
        label: 'Settings',
        icon: <Settings className='mr-2 size-3' />
      },
      {
        href: '/student/support',
        label: 'Help & Support',
        icon: <Headphones className='mr-2 size-3' />
      },
      {
        href: '/student/parent-access',
        label: 'Parent Access',
        icon: <Users className='mr-2 size-3' />
      }
    ]
  }
]

type RouteGroupProps = RouteGroupType

const RouteGroup = ({ group, items }: RouteGroupProps) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button
          className='flex justify-between w-full font-normal text-foreground/80'
          variant='ghost'
        >
          {group}
          <div className={`transition-transform ${open ? 'rotate-180' : ''}`}>
            <ChevronDown />
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent forceMount>
        <motion.div
          className={`flex flex-col gap-2 ${
            !open ? 'pointer-events-none' : ''
          }`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {items.map(item => (
            <Button
              className='justify-start w-full font-normal'
              variant='link'
              asChild
              key={item.href}
            >
              <Link
                className={`flex items-center rounded-md px-5 py-1 transition-all ${
                  pathname === item.href
                    ? 'bg-foreground/10 hover:bg-foreground/5'
                    : 'hover:bg-foreground/10'
                }`}
                href={item.href}
              >
                {item.icon}
                <span className='text-sm'>{item.label}</span>
              </Link>
            </Button>
          ))}
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  )
}

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <div className='flex w-full'>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <Button size='icon' variant='outline'>
              <Menu />
            </Button>
          </CollapsibleTrigger>
        </Collapsible>

        <Collapsible
          className='left-0 z-20 fixed to-0 h-dvh'
          open={open}
          onOpenChange={setOpen}
        >
          <CollapsibleContent forceMount>
            
              <div
                className={`bg-background fixed top-0 left-0 h-screen w-64 border p-4 transition-transform duration-300 ${
                  open ? 'translate-x-0' : '-translate-x-full'
                }`}
              >
                
                <Separator className='my-2' />
                <div className='mt-4'>
                  {ROUTE_GROUPS.map(routeGroup => (
                    <RouteGroup {...routeGroup} key={routeGroup.group} />
                  ))}
                </div>
               
              </div>
            
          </CollapsibleContent>
        </Collapsible>
        <main
          className={`transition-margin flex-1 p-4 duration-300 w-full ${
            open ? 'ml-64' : 'ml-0'
          }`}
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default DashboardLayout;