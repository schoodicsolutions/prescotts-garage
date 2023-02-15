import type { NavItem } from "$types/NavItem";

export const LEFT_NAV_ITEMS: NavItem[] = [
    { label: 'Home', pathname: '/what-we-do' },
    { label: 'About Us', pathname: '/what-we-do' },
    { label: 'Portfolio', pathname: '/what-we-do' },
    { label: 'Testimonials', pathname: '/what-we-do' },
    { label: 'Contact Us', pathname: '/what-we-do' },
];

export const RIGHT_NAV_ITEMS: NavItem[] = [
    { label: 'Customs', pathname: '/what-we-do' },
    { label: 'Alignments', pathname: '/what-we-do' },
    { label: 'Rust Repair', pathname: '/what-we-do' },
    { label: 'Maintenance', pathname: '/what-we-do' },
    { label: 'Diagnostics', pathname: '/what-we-do' },
];

export const ALL_NAV_ITEMS: NavItem[] = [
    ...LEFT_NAV_ITEMS,
    ...RIGHT_NAV_ITEMS,
];