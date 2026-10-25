import type { NavItem } from "#types/NavItem";

export const PHONE_DISPLAY = '(207) 259-3360';
export const PHONE_HREF = 'tel:+12072593360';
export const MESSENGER_HREF = 'https://m.me/100057455889767';
export const ADDRESS = '67 Main St, East Machias, ME 04630';
export const DIRECTIONS_HREF = 'https://maps.apple.com/?daddr=Prescott%27s+Garage,+67+Main+Street,+East+Machias,+ME';

// Indexed by Date.getDay(); open/close are 24h hours, in the shop's local time
export const HOURS: { day: string; open?: number; close?: number }[] = [
    { day: 'Sunday' },
    { day: 'Monday', open: 8, close: 17 },
    { day: 'Tuesday', open: 8, close: 17 },
    { day: 'Wednesday', open: 8, close: 17 },
    { day: 'Thursday', open: 8, close: 17 },
    { day: 'Friday', open: 8, close: 17 },
    { day: 'Saturday' },
];

export const SERVICES_DROPDOWN_ITEMS: NavItem[] = [
    { label: 'Customs', pathname: '/customs' },
    { label: 'Alignments', pathname: '/alignments' },
    { label: 'Rust Repair', pathname: '/rust' },
    { label: 'Air Conditioning', pathname: '/maintenance' },
    { label: 'Diagnostics', pathname: '/diagnostics' },
];

export const BOTTOM_NAV_ITEMS: NavItem[] = [
    { label: 'Home', pathname: '/', scrollTo: '+top' },
    { label: 'About Us', pathname: '/', scrollTo: 'about' },
    { label: 'Services', pathname: '/', scrollTo: 'services', dropdown: SERVICES_DROPDOWN_ITEMS },
    { label: 'Testimonials', pathname: '/', scrollTo: 'testimonials' },
    { label: 'Contact Us', pathname: '/', scrollTo: 'contact' },
];

export const ALL_NAV_ITEMS: NavItem[] = [
    ...BOTTOM_NAV_ITEMS,
    ...SERVICES_DROPDOWN_ITEMS
];
