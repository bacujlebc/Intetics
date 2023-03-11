export const SORT_ENUM = {
    ASC: 'ASC',
    DESC: 'DESC',
    POPULAR_FIRST: 'POPULAR_FIRST',
}

export const SORT_OPTIONS = [
    {
        id: SORT_ENUM.ASC,
        label: 'Price low to high'
    },
    {
        id: SORT_ENUM.DESC,
        label: 'Price high to low'
    },
    {
        id: SORT_ENUM.POPULAR_FIRST,
        label: 'Popular first'
    },
]