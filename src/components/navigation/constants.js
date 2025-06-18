import {
  MagnifyingGlassIcon,
  HeartIcon,
  BriefcaseIcon,
  ChatBubbleLeftEllipsisIcon,
  UserIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  HandRaisedIcon,
  BookOpenIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';
import {
  MagnifyingGlassIcon as MagnifyingGlassSolid,
  HeartIcon as HeartSolid,
  BriefcaseIcon as BriefcaseSolid,
  ChatBubbleLeftEllipsisIcon as ChatSolid,
  UserIcon as UserSolid,
} from '@heroicons/react/24/solid';

export const NAV_TABS = [
  { id: 'explore', label: 'Explore', href: '/explore', icon: MagnifyingGlassIcon, iconSolid: MagnifyingGlassSolid },
  { id: 'wishlist', label: 'Wishlist', href: '/wishlist', icon: HeartIcon, iconSolid: HeartSolid },
  { id: 'bookings', label: 'Bookings', href: '/bookings', icon: BriefcaseIcon, iconSolid: BriefcaseSolid },
  { id: 'messages', label: 'Messages', href: '/messages', icon: ChatBubbleLeftEllipsisIcon, iconSolid: ChatSolid },
  { id: 'profile', label: 'Profile', href: '#', icon: UserIcon, iconSolid: UserSolid }, // Profile is not a page, it opens a modal
];

export const PROFILE_MENU_ITEMS = [
  { id: 'settings', label: 'Account settings', icon: Cog6ToothIcon },
  { id: 'help', label: 'Get help', icon: QuestionMarkCircleIcon },
  { id: 'privacy', label: 'Privacy', icon: HandRaisedIcon },
  { id: 'legal', label: 'Legal', icon: BookOpenIcon },
  { id: 'listProperty', label: 'List your property', icon: BuildingStorefrontIcon },
];
