declare module 'youtube-player' {
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

    export interface Options {
        videoId?: string;
        width?: number | string;
        height?: number | string;
        playerVars?: PlayerVars;
    }

    export interface YouTubePlayerInstance {
        on(event: string, listener: (event: { target: PlayerObject, data?: number }) => void): void;
        cueVideoById(videoId: string, startSeconds?: number): Promise<void>;
        loadVideoById(videoId: string, startSeconds?: number): Promise<void>;
        destroy(): Promise<void>;
    }

    export default function YouTubePlayer(
        elementId: HTMLElement | string,
        options?: Options,
        strictState?: boolean
    ): YouTubePlayerInstance;
}
