import npmfetch from '@/utils/npmfetch';

export const NpmService = {
    search({ query, page, perPage }) {
        return npmfetch.$search(query, page || 0, perPage || 10);
    },

    popular(period = 'month') {
        return npmfetch.$get(`/stats/packages/${period}`);
    },
};
