import type { NavItem } from "$types/NavItem";

export const LEFT_NAV_ITEMS: NavItem[] = [
    { label: 'Home', pathname: '/' },
    { label: 'About Us', pathname: '/' },
    { label: 'Portfolio', pathname: '/' },
    { label: 'Testimonials', pathname: '/' },
    { label: 'Contact Us', pathname: '/' },
];

export const RIGHT_NAV_ITEMS: NavItem[] = [
    { label: 'Customs', pathname: '/' },
    { label: 'Alignments', pathname: '/' },
    { label: 'Rust Repair', pathname: '/' },
    { label: 'Maintenance', pathname: '/' },
    { label: 'Diagnostics', pathname: '/' },
];

export const ALL_NAV_ITEMS: NavItem[] = [
    ...LEFT_NAV_ITEMS,
    ...RIGHT_NAV_ITEMS,
];