<script lang="ts">
	import SvgIcon from './SvgIcon.svelte';
    export let width: string | number | null | undefined = '24px';
    export let height: string | number | null | undefined = '24px';

    let className: string | null | undefined = undefined;
    export {className as class};
</script>

<SvgIcon
    {width}
    {height}
    class={['text-[#00A3FF]', className].join(' ')}
>
    <path
        fill="currentColor"
        d="M 1,2.9285711 C 5.3537218,3.3318715 8.5805264,4.8542419 8.3305334,5.7074663 8.2146134,6.1031063 7.8309088,6.1184513 6.4531461,6.7330999 -4.2678287,11.506119 9.630822,12.198632 10.838458,17.071429 H 19 C 14.101441,9.0877444 2.6701146,11.591983 9.337126,8.036565 16.870756,4.3127685 3.0006079,3.0332117 1.0000065,2.9286316 Z"
        id="path132"
    />
</SvgIcon>