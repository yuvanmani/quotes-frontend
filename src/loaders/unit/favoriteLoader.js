import quoteService from "../../services/quoteService"

const favoriteLoader = async () => {
    try {
        const response = await quoteService.getFavorites();
        return response.data;
    }
    catch (error) {
        return null;
    }
}

export default favoriteLoader