import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    PUBLIC_BASEURL: {
        public: true,
        static: true,
        description: 'Site origin used to build canonical URLs, e.g. https://example.com'
    }
});
