declare module 'svelte-device-detector' {
    import type { SvelteComponentTyped } from 'svelte';

    import { default as DeviceDetector } from 'svelte-device-detector';

    interface DeviceDetectorProps {
        showInBrowser?: string | string[];
        showInDevice?: string | string[];
        showInOs?: string | string[];
    }

    class DeviceDetector extends SvelteComponentTyped<
        DeviceDetectorProps,
        {},
        {}
    > {};

    export default DeviceDetector;
}