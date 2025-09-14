import quoteService from "../../services/quoteService"

const quoteLoader = async () => {
    try {
        const response = await quoteService.getAllQuotes();
        return response.data;
    }
    catch (error) {
        return null;
    }
}

export default quoteLoader