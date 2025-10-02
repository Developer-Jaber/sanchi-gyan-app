'use client'
import { motion } from 'framer-motion'
import {
  User,
  Bell,
  Shield,
  Palette,
  Save,
  RotateCcw,
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Laptop,
  Smartphone,
  Sun
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import Button from '@/components/shared/Button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function StudentSettings () {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    // Profile
    firstName: 'Aarav',
    lastName: 'Sharma',
    email: 'aarav.sharma@sanchigyan.edu.np',
    phone: '+977 98XXXXXXX',
    address: 'Kathmandu, Nepal',
    bio: 'Class 10 student passionate about Mathematics and Science',

    // Preferences
    language: 'english',
    timezone: 'Asia/Kathmandu',
    theme: 'light',
    fontSize: 'medium',

    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    assignmentReminders: true,
    classReminders: true,
    gradeUpdates: true,
    announcementAlerts: true,

    // Privacy
    profileVisibility: 'public',
    showProgress: true,
    showAchievements: true,
    dataSharing: false
  })

  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Save logic would go here
  }

  const handleReset = () => {
    // Reset logic would go here
    setIsEditing(false)
  }

  const handleSignOut = async () => {
    await signOut({ 
        callbackUrl: '/',
        redirect: true 
    })
  }

  return (
    <div className='bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 py-8 min-h-screen'>
      <div className='mx-auto px-6 max-w-8xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex justify-between items-start mb-8'
        >
          <div>
            <h1 className='mb-2 font-bold text-gray-900 text-3xl md:text-4xl'>
              Account Settings
            </h1>
            <p className='text-gray-600 text-lg'>
              Manage your profile, preferences, and privacy settings
            </p>
          </div>
          <div className='flex gap-3'>
            <Button
              variant='secondary'
              onClick={handleReset}
              className='flex items-center gap-2 p-2 rounded-2xl'
            >
              <RotateCcw className='w-4 h-4' />
              Reset
            </Button>
            <Button
              onClick={handleSave}
              className='flex items-center gap-2 bg-gradient-to-r from-[#06a6ae] hover:from-[#059298] to-[#9AD0D3] hover:to-[#88c2c5]'
            >
              <Save className='w-4 h-4' />
              Save Changes
            </Button>
          </div>
        </motion.div>

        <div className='gap-8 grid lg:grid-cols-4'>
          {/* Settings Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-1'
          >
            <Card className='top-8 sticky bg-white/80 shadow-lg backdrop-blur-sm border-0'>
              <CardContent className='p-6'>
                <nav className='space-y-2'>
                  {[
                    { id: 'profile', label: 'Profile', icon: User },
                    { id: 'preferences', label: 'Preferences', icon: Palette },
                    { id: 'notifications', label: 'Notifications', icon: Bell },
                    {
                      id: 'privacy',
                      label: 'Privacy & Security',
                      icon: Shield
                    },
                    { id: 'devices', label: 'Connected Devices', icon: Laptop }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className='w-5 h-5' />
                      <span className='font-medium'>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </motion.div>

          {/* Settings Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-8 lg:col-span-3'
          >
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-3 font-bold text-2xl'>
                    <User className='w-6 h-6 text-[#06a6ae]' />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal information and how others see you on
                    the platform
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-8'>
                  {/* Avatar Section */}
                  <div className='flex items-center gap-6'>
                    <Avatar className='shadow-lg border-4 border-white w-20 h-20'>
                      <AvatarImage src='/avatar.jpg' />
                      <AvatarFallback className='bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] text-white text-xl'>
                        AS
                      </AvatarFallback>
                    </Avatar>
                    <div className='space-y-3'>
                      <div>
                        <h3 className='font-semibold text-gray-900'>
                          Profile Picture
                        </h3>
                        <p className='text-gray-600 text-sm'>
                          JPG, GIF or PNG. Max size 5MB
                        </p>
                      </div>
                      <div className='flex gap-3'>
                        <Button variant='secondary' className='p-2 rounded-2xl'>
                          Upload New
                        </Button>
                        <Button
                          variant='secondary'
                          className='text-red-600 hover:text-red-700'
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Personal Information */}
                  <div className='gap-6 grid md:grid-cols-2'>
                    <div className='space-y-2'>
                      <Label
                        htmlFor='firstName'
                        className='font-medium text-sm'
                      >
                        First Name
                      </Label>
                      <Input
                        id='firstName'
                        value={formData.firstName}
                        onChange={e =>
                          handleInputChange('firstName', e.target.value)
                        }
                        className='bg-white/50'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='lastName' className='font-medium text-sm'>
                        Last Name
                      </Label>
                      <Input
                        id='lastName'
                        value={formData.lastName}
                        onChange={e =>
                          handleInputChange('lastName', e.target.value)
                        }
                        className='bg-white/50'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label
                        htmlFor='email'
                        className='flex items-center gap-2 font-medium text-sm'
                      >
                        <Mail className='w-4 h-4' />
                        Email Address
                      </Label>
                      <Input
                        id='email'
                        type='email'
                        value={formData.email}
                        onChange={e =>
                          handleInputChange('email', e.target.value)
                        }
                        className='bg-white/50'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label
                        htmlFor='phone'
                        className='flex items-center gap-2 font-medium text-sm'
                      >
                        <Phone className='w-4 h-4' />
                        Phone Number
                      </Label>
                      <Input
                        id='phone'
                        value={formData.phone}
                        onChange={e =>
                          handleInputChange('phone', e.target.value)
                        }
                        className='bg-white/50'
                      />
                    </div>
                    <div className='space-y-2 md:col-span-2'>
                      <Label
                        htmlFor='address'
                        className='flex items-center gap-2 font-medium text-sm'
                      >
                        <MapPin className='w-4 h-4' />
                        Address
                      </Label>
                      <Input
                        id='address'
                        value={formData.address}
                        onChange={e =>
                          handleInputChange('address', e.target.value)
                        }
                        className='bg-white/50'
                      />
                    </div>
                    <div className='space-y-2 md:col-span-2'>
                      <Label htmlFor='bio' className='font-medium text-sm'>
                        Bio
                      </Label>
                      <textarea
                        placeholder='A short bio about yourself.'
                        id='bio'
                        value={formData.bio}
                        onChange={e => handleInputChange('bio', e.target.value)}
                        rows={3}
                        className='bg-white/50 px-3 py-2 border border-gray-200 focus:border-transparent rounded-lg focus:ring-[#06a6ae] focus:ring-2 w-full resize-none'
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Preferences Settings */}
            {activeTab === 'preferences' && (
              <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-3 font-bold text-2xl'>
                    <Palette className='w-6 h-6 text-[#06a6ae]' />
                    Preferences
                  </CardTitle>
                  <CardDescription>
                    Customize your learning experience and platform appearance
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-8'>
                  <div className='gap-8 grid md:grid-cols-2'>
                    <div className='space-y-2'>
                      <Label
                        htmlFor='language'
                        className='flex items-center gap-2 font-medium text-sm'
                      >
                        <Globe className='w-4 h-4' />
                        Language
                      </Label>
                      <Select
                        value={formData.language}
                        onValueChange={value =>
                          handleInputChange('language', value)
                        }
                      >
                        <SelectTrigger className='bg-white/50'>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='english'>English</SelectItem>
                          <SelectItem value='nepali'>Nepali</SelectItem>
                          <SelectItem value='hindi'>Hindi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className='space-y-2'>
                      <Label
                        htmlFor='timezone'
                        className='flex items-center gap-2 font-medium text-sm'
                      >
                        <Clock className='w-4 h-4' />
                        Timezone
                      </Label>
                      <Select
                        value={formData.timezone}
                        onValueChange={value =>
                          handleInputChange('timezone', value)
                        }
                      >
                        <SelectTrigger className='bg-white/50'>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Asia/Kathmandu'>
                            Kathmandu (GMT+5:45)
                          </SelectItem>
                          <SelectItem value='UTC'>UTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className='space-y-2'>
                      <Label
                        htmlFor='theme'
                        className='flex items-center gap-2 font-medium text-sm'
                      >
                        <Sun className='w-4 h-4' />
                        Theme
                      </Label>
                      <Select
                        value={formData.theme}
                        onValueChange={value =>
                          handleInputChange('theme', value)
                        }
                      >
                        <SelectTrigger className='bg-white/50'>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='light'>Light</SelectItem>
                          <SelectItem value='dark'>Dark</SelectItem>
                          <SelectItem value='auto'>Auto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='fontSize' className='font-medium text-sm'>
                        Font Size
                      </Label>
                      <Select
                        value={formData.fontSize}
                        onValueChange={value =>
                          handleInputChange('fontSize', value)
                        }
                      >
                        <SelectTrigger className='bg-white/50'>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='small'>Small</SelectItem>
                          <SelectItem value='medium'>Medium</SelectItem>
                          <SelectItem value='large'>Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Video Preferences */}
                  <div className='space-y-4'>
                    <h3 className='font-semibold text-gray-900 text-lg'>
                      Video Preferences
                    </h3>
                    <div className='gap-6 grid md:grid-cols-2'>
                      <div className='flex justify-between items-center bg-white/50 p-4 border border-gray-200 rounded-xl'>
                        <div className='space-y-1'>
                          <Label
                            htmlFor='autoPlay'
                            className='font-medium text-sm'
                          >
                            Auto-play Videos
                          </Label>
                          <p className='text-gray-600 text-xs'>
                            Videos play automatically when opened
                          </p>
                        </div>
                        <Switch id='autoPlay' defaultChecked />
                      </div>

                      <div className='flex justify-between items-center bg-white/50 p-4 border border-gray-200 rounded-xl'>
                        <div className='space-y-1'>
                          <Label
                            htmlFor='downloadQuality'
                            className='font-medium text-sm'
                          >
                            Download in HD
                          </Label>
                          <p className='text-gray-600 text-xs'>
                            Higher quality for offline viewing
                          </p>
                        </div>
                        <Switch id='downloadQuality' />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-3 font-bold text-2xl'>
                    <Bell className='w-6 h-6 text-[#06a6ae]' />
                    Notifications
                  </CardTitle>
                  <CardDescription>
                    Manage how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                  {[
                    {
                      id: 'emailNotifications',
                      label: 'Email Notifications',
                      description: 'Receive notifications via email'
                    },
                    {
                      id: 'pushNotifications',
                      label: 'Push Notifications',
                      description: 'Receive browser push notifications'
                    },
                    {
                      id: 'assignmentReminders',
                      label: 'Assignment Reminders',
                      description: 'Get reminded about upcoming assignments'
                    },
                    {
                      id: 'classReminders',
                      label: 'Class Reminders',
                      description: 'Notifications before classes start'
                    },
                    {
                      id: 'gradeUpdates',
                      label: 'Grade Updates',
                      description: 'When new grades are posted'
                    },
                    {
                      id: 'announcementAlerts',
                      label: 'Announcement Alerts',
                      description: 'Important platform announcements'
                    }
                  ].map(item => (
                    <div
                      key={item.id}
                      className='flex justify-between items-center bg-white/50 p-4 border border-gray-200 hover:border-[#06a6ae]/20 rounded-xl transition-all duration-200'
                    >
                      <div className='space-y-1'>
                        <Label
                          htmlFor={item.id}
                          className='font-medium text-sm'
                        >
                          {item.label}
                        </Label>
                        <p className='text-gray-600 text-xs'>
                          {item.description}
                        </p>
                      </div>
                      <Switch
                        id={item.id}
                        checked={
                          formData[item.id as keyof typeof formData] as boolean
                        }
                        onCheckedChange={checked =>
                          handleInputChange(item.id, checked)
                        }
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Privacy & Security Settings */}
            {activeTab === 'privacy' && (
              <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-3 font-bold text-2xl'>
                    <Shield className='w-6 h-6 text-[#06a6ae]' />
                    Privacy & Security
                  </CardTitle>
                  <CardDescription>
                    Control your privacy settings and secure your account
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-8'>
                  {/* Privacy Settings */}
                  <div className='space-y-6'>
                    <h3 className='font-semibold text-gray-900 text-lg'>
                      Privacy Settings
                    </h3>

                    <div className='space-y-2'>
                      <Label
                        htmlFor='profileVisibility'
                        className='font-medium text-sm'
                      >
                        Profile Visibility
                      </Label>
                      <Select
                        value={formData.profileVisibility}
                        onValueChange={value =>
                          handleInputChange('profileVisibility', value)
                        }
                      >
                        <SelectTrigger className='bg-white/50'>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='public'>Public</SelectItem>
                          <SelectItem value='classmates'>
                            Classmates Only
                          </SelectItem>
                          <SelectItem value='private'>Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className='space-y-4'>
                      {[
                        {
                          id: 'showProgress',
                          label: 'Show Learning Progress',
                          description:
                            'Allow others to see your course progress'
                        },
                        {
                          id: 'showAchievements',
                          label: 'Show Achievements',
                          description: 'Display your badges and achievements'
                        },
                        {
                          id: 'dataSharing',
                          label: 'Data Sharing for Research',
                          description:
                            'Help improve education through anonymous data'
                        }
                      ].map(item => (
                        <div
                          key={item.id}
                          className='flex justify-between items-center'
                        >
                          <div className='space-y-1'>
                            <Label
                              htmlFor={item.id}
                              className='font-medium text-sm'
                            >
                              {item.label}
                            </Label>
                            <p className='text-gray-600 text-xs'>
                              {item.description}
                            </p>
                          </div>
                          <Switch
                            id={item.id}
                            checked={
                              formData[
                                item.id as keyof typeof formData
                              ] as boolean
                            }
                            onCheckedChange={checked =>
                              handleInputChange(item.id, checked)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Security Settings */}
                  <div className='space-y-6'>
                    <h3 className='font-semibold text-gray-900 text-lg'>
                      Security
                    </h3>

                    <div className='space-y-4'>
                      <div className='flex justify-between items-center bg-white/50 p-4 border border-gray-200 rounded-xl'>
                        <div className='space-y-1'>
                          <Label
                            htmlFor='password'
                            className='font-medium text-sm'
                          >
                            Password
                          </Label>
                          <p className='text-gray-600 text-xs'>
                            Last changed 2 months ago
                          </p>
                        </div>
                        <Button variant='secondary' className='p-2 rounded-2xl'>
                          Change Password
                        </Button>
                      </div>

                      <div className='flex justify-between items-center bg-white/50 p-4 border border-gray-200 rounded-xl'>
                        <div className='space-y-1'>
                          <Label htmlFor='2fa' className='font-medium text-sm'>
                            Two-Factor Authentication
                          </Label>
                          <p className='text-gray-600 text-xs'>
                            Add an extra layer of security
                          </p>
                        </div>
                        <Button variant='secondary' className='p-2 rounded-2xl'>
                          Enable 2FA
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Connected Devices */}
            {activeTab === 'devices' && (
              <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-3 font-bold text-2xl'>
                    <Laptop className='w-6 h-6 text-[#06a6ae]' />
                    Connected Devices
                  </CardTitle>
                  <CardDescription>
                    Manage devices that have access to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                  {[
                    {
                      device: 'Windows PC',
                      browser: 'Chrome',
                      location: 'Kathmandu, Nepal',
                      lastActive: 'Currently active',
                      icon: Laptop
                    },
                    {
                      device: 'Android Phone',
                      browser: 'Chrome Mobile',
                      location: 'Kathmandu, Nepal',
                      lastActive: '2 hours ago',
                      icon: Smartphone
                    },
                    {
                      device: 'MacBook Pro',
                      browser: 'Safari',
                      location: 'Pokhara, Nepal',
                      lastActive: '1 week ago',
                      icon: Laptop
                    }
                  ].map((session, index) => (
                    <div
                      key={index}
                      className='flex justify-between items-center bg-white/50 p-4 border border-gray-200 rounded-xl'
                    >
                      <div className='flex items-center gap-4'>
                        <div className='bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] p-3 rounded-xl'>
                          <session.icon className='w-5 h-5 text-white' />
                        </div>
                        <div className='space-y-1'>
                          <h4 className='font-semibold text-gray-900'>
                            {session.device}
                          </h4>
                          <p className='text-gray-600 text-sm'>
                            {session.browser} • {session.location}
                          </p>
                          <p className='text-gray-500 text-xs'>
                            {session.lastActive}
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={handleSignOut}
                        className='p-2 rounded-2xl text-red-600 hover:text-red-700'
                      >
                        Logout
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
