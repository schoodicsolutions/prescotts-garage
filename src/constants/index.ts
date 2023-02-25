import type { NavItem } from "$types/NavItem";

export const LEFT_NAV_ITEMS: NavItem[] = [
    { label: 'Home', pathname: '/', scrollTo: '+top' },
    { label: 'About Us', pathname: '/', scrollTo: 'about' },
    { label: 'Services', pathname: '/', scrollTo: 'services' },
    { label: 'Testimonials', pathname: '/', scrollTo: 'testimonials' },
    { label: 'Contact Us', pathname: '/', scrollTo: 'contact' },
];

export const RIGHT_NAV_ITEMS: NavItem[] = [
    { label: 'Customs', pathname: '/', scrollTo: 'customs' },
    { label: 'Alignments', pathname: '/', scrollTo: 'alignments' },
    { label: 'Rust Repair', pathname: '/', scrollTo: 'rust' },
    { label: 'Air Conditioning', pathname: '/', scrollTo: 'maintenance' },
    { label: 'Diagnostics', pathname: '/', scrollTo: 'diagnostics' },
];

export const ALL_NAV_ITEMS: NavItem[] = [
    ...LEFT_NAV_ITEMS,
    ...RIGHT_NAV_ITEMS,
];