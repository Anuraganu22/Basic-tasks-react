import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const YOUR_APP_KEY = '928e3059'
const YOUR_APP_ID = '3edfb1c57acec6669ba7236c3c6f6d18'

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.edamam.com/' }),
    endpoints: (builder) => ({
        getRecipes: builder.mutation({
            query: ({ query, health }) => {
                return {
                    url: `search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=${health}`,
                    method:'get'
                }
            }
        })
    })
})

export const { useGetRecipesMutation } = recipeApi

