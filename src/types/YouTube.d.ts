declare module 'svelte-youtube' {
    import type { SvelteComponentTyped } from 'svelte';

    export interface PlayerVars {
        autoplay?: 0 | 1;
        cc_lang_pref?: string;
        cc_load_policy?: 0 | 1;
        color?: 'red' | 'white';
        controls?: 0 | 1;
        disablekb?: 0 | 1;
        enablejsapi?: 0 | 1;
        end?: number;
        fs?: 0 | 1;
        hl?: string;
        iv_load_policy?: 1 | 3;
        list?: string;
        listType?: 'playlist' | 'user_uploads';
        loop?: 0 | 1;
        modestbranding?: 1;
        origin?: string;
        playlist?: string;
        playsinline?: 0 | 1;
        rel?: 0 | 1;
        start?: number;
        widget_referrer?: string;
    };

    export interface YouTubeProps {
        videoId: string;
        id?: string;
        class?: string;
        options?: {
            height?: string,
            width?: string,
            playerVars?: PlayerVars
        }
    }

    export interface SphericalProperties {
        yaw: number;
        pitch: number;
        roll: number;
        fov: number;
    }

    export interface PlayerObject {
        loadVideoById(videoId: string, startSeconds: number): void;
        cueVideoByUrl(mediaContentUrl: string, startSeconds: number): void;
        loadVideoByUrl(mediaContentUrl: string, startSeconds: number): void;
        cuePlaylist(playlist: string | string[], index: number, startSeconds: number): void;
        loadPlaylist(playlist: string | string[], index: number, startSeconds: number): void;
        playVideo(): void;
        pauseVideo(): void;
        stopVideo(): void;
        seekTo(seconds: number, allowSeekAhead: boolean): void;
        getSphericalProperties(): SphericalProperties;
        setSphericalProperties(properties: SphericalProperties): void;
        nextVideo(): void;
        previousVideo(): void;
        playVideoAt(index: number): void;
        mute(): void;
        unMute(): void;
        isMuted(): boolean;
        setVolume(volume: number): void;
        getVolume(): number;
        setSize(width: number, height: number): void;
        getPlaybackRate(): number;
        setPlaybackRate(suggestedRate: number): void;
        getAvailablePlaybackRates(): number[];
        setLoop(loopPlaylists: boolean): void;
        setShuffle(shufflePlaylist: boolean): void;
        getVideoLoadedFraction(): number;
        getPlayerState(): number;
        getCurrentTime(): number;
        getVideoStartBytes(): number;
        getVideoBytesLoaded(): number;
        getVideoBytesTotal(): number;
        getDuration(): number;
        getVideoUrl(): string;
        getVideoEmbedCode(): string;
        getPlaylist(): string[];
        getPlaylistIndex(): number;
        addEventListener(event: string, listener: string): void;
        removeEventListener(event: string, listener: string): void;
        getIframe(): HTMLIFrameElement;
        destroy(): void;
    }

    import { default as YouTubeComponent } from 'svelte-youtube';

    class YouTubeComponent extends SvelteComponentTyped<
        YouTubeProps,
        { 
            ready: CustomEvent<{target: PlayerObject}>;
            error: CustomEvent<{target: PlayerObject}>;
            stateChange: CustomEvent<{target: PlayerObject, data?: number}>;
            playbackRateChange: CustomEvent<{target: PlayerObject}>;
            playbackQualityChange: CustomEvent<{target: PlayerObject}>;
        },
        {}
    > {};

    export default YouTubeComponent;
}