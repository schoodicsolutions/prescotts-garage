import type { NavItem } from "$types/NavItem";

export const LEFT_NAV_ITEMS: NavItem[] = [
    { label: 'Home', pathname: '/', scrollTo: '+top' },
    { label: 'About Us', pathname: '/', scrollTo: 'about' },
    { label: 'Services', pathname: '/', scrollTo: 'services' },
    { label: 'Testimonials', pathname: '/', scrollTo: 'testimonials' },
    { label: 'Contact Us', pathname: '/', scrollTo: 'contact' },
];

export const RIGHT_NAV_ITEMS: NavItem[] = [
    { label: 'Customs', pathname: '/customs' },
    { label: 'Alignments', pathname: '/alignments' },
    { label: 'Rust Repair', pathname: '/rust' },
    { label: 'Air Conditioning', pathname: '/maintenance' },
    { label: 'Diagnostics', pathname: '/diagnostics' },
];

export const ALL_NAV_ITEMS: NavItem[] = [
    ...LEFT_NAV_ITEMS,
    ...RIGHT_NAV_ITEMS,
];