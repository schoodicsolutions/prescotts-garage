import type { NavItem } from "$types/NavItem";

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

export const BOTTOM_NAV_ITEMS_WITHOUT_DROPDOWN: NavItem[] = [
    { label: 'Home', pathname: '/', scrollTo: '+top' },
    { label: 'About Us', pathname: '/', scrollTo: 'about' },
    { label: 'Services', pathname: '/', scrollTo: 'services'},
    { label: 'Testimonials', pathname: '/', scrollTo: 'testimonials' },
    { label: 'Contact Us', pathname: '/', scrollTo: 'contact' },  
]

export const ALL_NAV_ITEMS: NavItem[] = [
    ...BOTTOM_NAV_ITEMS,
    ...SERVICES_DROPDOWN_ITEMS
];