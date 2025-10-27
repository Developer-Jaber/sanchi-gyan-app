'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'

export default function SubscriptionPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual')

  const plans = [
    {
      id: 'free',
      name: 'Free Trial',
      description: 'Get started with basic access',
      price: {
        monthly: 0,
        annual: 0
      },
      features: [
        'Access to 5 beginner courses',
        'Community support',
        'Limited learning resources',
        '7-day free trial of premium features',
        'Basic progress tracking'
      ],
      limitations: [
        'No certificate of completion',
        'Limited course access',
        'Ad-supported experience'
      ],
      ctaText: 'Start Free Trial',
      popular: false,
      color: 'gray'
    },
    {
      id: 'basic',
      name: 'Basic',
      description: 'For self-paced learners',
      price: {
        monthly: 799,
        annual: 7990 // 799 * 10 (2 months free)
      },
      features: [
        'Access to all courses',
        'Downloadable resources',
        'Ad-free experience',
        'Certificate of completion',
        'Progress tracking',
        'Email support'
      ],
      limitations: [
        'No live sessions',
        'Limited project feedback',
        'Standard video quality'
      ],
      ctaText: 'Get Started',
      popular: false,
      color: 'blue'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Most popular for serious learners',
      price: {
        monthly: 1299,
        annual: 12990 // 1299 * 10 (2 months free)
      },
      features: [
        'Everything in Basic',
        'Live Q&A sessions',
        'Priority support',
        'Personalized learning path',
        'HD video quality',
        'Offline viewing',
        'Monthly career webinars'
      ],
      limitations: ['No 1:1 mentorship', 'Limited project reviews'],
      ctaText: 'Choose Premium',
      popular: true,
      color: 'purple'
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For career advancement',
      price: {
        monthly: 1999,
        annual: 19990 // 1999 * 10 (2 months free)
      },
      features: [
        'Everything in Premium',
        '1:1 mentorship sessions',
        'Project reviews & feedback',
        'Career coaching',
        'Resume review',
        'Job placement assistance',
        'Exclusive workshops',
        'Early access to new courses'
      ],
      limitations: [],
      ctaText: 'Go Pro',
      popular: false,
      color: 'indigo'
    }
  ]

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')
  }

  const calculateAnnualSavings = (monthlyPrice: number) => {
    return monthlyPrice * 12 - monthlyPrice * 10
  }

  const handlePlanSelection = (planId: string) => {
    console.log('Selected plan:', planId)
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />

      <main className='pt-24 pb-16'>
        {/* Header Section */}
        <section className='mx-auto mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl text-center'>
          <h1 className='mb-4 font-bold text-gray-900 text-4xl'>
            Choose Your Learning Plan
          </h1>
          <p className='mx-auto max-w-3xl text-gray-600 text-xl'>
            Select the subscription that fits your learning goals. All plans
            include access to our core course library.
          </p>

          {/* Billing Toggle */}
          <div className='flex justify-center items-center mt-8'>
            <span
              className={`mr-4 font-medium ${
                billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              Monthly
            </span>
            <button
              title='Toggle Billing Period'
              onClick={toggleBillingPeriod}
              className='relative rounded-full w-14 h-7 transition duration-200 ease-linear'
            >
              <div
                className={`absolute left-0 top-0 w-14 h-7 rounded-full transition-all duration-300 ${
                  billingPeriod === 'annual' ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              ></div>
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${
                  billingPeriod === 'annual' ? 'translate-x-8' : 'translate-x-1'
                }`}
              ></div>
            </button>
            <span
              className={`ml-4 font-medium ${
                billingPeriod === 'annual' ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              Annual{' '}
              <span className='bg-indigo-100 ml-2 px-2 py-1 rounded-full text-indigo-800 text-sm'>
                Save up to 17%
              </span>
            </span>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md ${
                  plan.popular
                    ? 'ring-2 ring-indigo-500 transform scale-105'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className='-top-3 left-1/2 absolute -translate-x-1/2 transform'>
                    <span className='bg-indigo-500 px-4 py-1 rounded-full font-medium text-white text-sm'>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className='p-6'>
                  <h3 className='font-bold text-gray-900 text-2xl'>
                    {plan.name}
                  </h3>
                  <p className='mt-2 text-gray-600'>{plan.description}</p>

                  <div className='mt-6'>
                    <div className='flex items-baseline'>
                      <span className='font-extrabold text-gray-900 text-4xl'>
                        ₹
                        {billingPeriod === 'monthly'
                          ? plan.price.monthly
                          : plan.price.annual / 10}
                      </span>
                      {plan.id !== 'free' && (
                        <span className='ml-1 font-medium text-gray-500 text-lg'>
                          {billingPeriod === 'monthly' ? '/month' : '/year'}
                        </span>
                      )}
                    </div>

                    {plan.id !== 'free' && billingPeriod === 'annual' && (
                      <div className='mt-1'>
                        <p className='text-green-600 text-sm'>
                          Save ₹{calculateAnnualSavings(plan.price.monthly)}{' '}
                          annually
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handlePlanSelection(plan.id)}
                    className={`mt-6 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : plan.id === 'free'
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>

                <div className='px-6 pt-6 pb-8 border-gray-200 border-t'>
                  <h4 className='mb-4 font-bold text-gray-900 text-sm uppercase tracking-wide'>
                    What&apos;s included
                  </h4>
                  <ul className='space-y-3'>
                    {plan.features.map((feature, index) => (
                      <li key={index} className='flex items-start'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-green-500'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span className='text-gray-600'>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className='mt-6 mb-4 font-bold text-gray-900 text-sm uppercase tracking-wide'>
                        Limitations
                      </h4>
                      <ul className='space-y-3'>
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className='flex items-start'>
                            <svg
                              className='flex-shrink-0 mr-2 w-5 h-5 text-red-500'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                            <span className='text-gray-600'>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className='mx-auto mt-16 px-4 sm:px-6 lg:px-8 max-w-4xl'>
          <div className='mb-12 text-center'>
            <h2 className='font-bold text-gray-900 text-3xl'>
              Frequently Asked Questions
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='bg-white shadow-sm p-6 rounded-lg'>
              <h3 className='mb-2 font-medium text-gray-900 text-lg'>
                Can I change my plan later?
              </h3>
              <p className='text-gray-600'>
                Yes, you can upgrade or downgrade your plan at any time. When
                upgrading, you&apos;ll immediately get access to the new features.
                When downgrading, the changes will take effect at the end of
                your current billing cycle.
              </p>
            </div>

            <div className='bg-white shadow-sm p-6 rounded-lg'>
              <h3 className='mb-2 font-medium text-gray-900 text-lg'>
                Do you offer refunds?
              </h3>
              <p className='text-gray-600'>
                We offer a 14-day money-back guarantee for all annual plans. If
                you&apos;re not satisfied with your purchase, you can request a full
                refund within 14 days of signing up.
              </p>
            </div>

            <div className='bg-white shadow-sm p-6 rounded-lg'>
              <h3 className='mb-2 font-medium text-gray-900 text-lg'>
                Can I cancel my subscription?
              </h3>
              <p className='text-gray-600'>
                Yes, you can cancel your subscription at any time. After
                cancellation, you&apos;ll still have access until the end of your
                current billing period.
              </p>
            </div>

            <div className='bg-white shadow-sm p-6 rounded-lg'>
              <h3 className='mb-2 font-medium text-gray-900 text-lg'>
                Are there any hidden fees?
              </h3>
              <p className='text-gray-600'>
                No, the price you see is the price you pay. All taxes are
                included in the displayed price.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}