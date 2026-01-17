import {
  CalendarIcon,
  CheckCircleIcon,
  HomeIcon,
  ShieldIcon,
  UsersIcon,
  WrenchIcon,
} from 'lucide-react'

export const SERVICES = [
  {
    id: 'property-inspections',
    icon: HomeIcon,
    title: 'Property Inspections',
    description:
      'Regular, thorough inspections to ensure your home is in perfect condition year-round.',
  },
  {
    id: 'security-monitoring',
    icon: ShieldIcon,
    title: 'Security Monitoring',
    description:
      'Comprehensive security checks and coordination with local authorities for complete protection.',
  },
  {
    id: 'maintenance-repairs',
    icon: WrenchIcon,
    title: 'Maintenance & Repairs',
    description:
      'Proactive maintenance and immediate response to any repair needs using trusted local contractors.',
  },
  {
    id: 'vendor-coordination',
    icon: UsersIcon,
    title: 'Vendor Coordination',
    description:
      'Management of landscaping, cleaning, pool service, and all property-related vendors.',
  },
  {
    id: 'seasonal-preparation',
    icon: CalendarIcon,
    title: 'Seasonal Preparation',
    description: 'Opening and closing services to ensure your home is ready whenever you need it.',
  },
  {
    id: 'concierge-services',
    icon: CheckCircleIcon,
    title: 'Concierge Services',
    description:
      'From stocking your home before arrival to handling special requests—we take care of everything.',
  },
]
