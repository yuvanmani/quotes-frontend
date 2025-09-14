import instance from "./instance"

const quoteService = {
    getAllQuotes: async () => {
        return await instance.get("/quotes/generate");
    },
    getFavorites: async () => {
        return await instance.get("/quotes/getquotes");
    },
    saveFavorites: async (userData) => {
        return await instance.post("/quotes/save", userData);
    }
}

export default quoteService