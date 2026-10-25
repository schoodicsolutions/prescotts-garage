import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    PUBLIC_BASEURL: {
        public: true,
        static: true,
        description: 'Site origin used to build canonical URLs, e.g. https://example.com'
    },
    PUBLIC_MEDIA_URL: {
        public: true,
        static: true,
        schema: (value) => value || 'https://media.prescottsgarage.com',
        description: 'Origin of the R2 bucket serving large media such as the hero video'
    }
});
