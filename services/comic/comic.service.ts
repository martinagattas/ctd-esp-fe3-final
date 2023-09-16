export const getComicById = async (id: number): Promise<any> => {
    const response = await fetch(`/api/comics/${id}`);

    return await response.json();
};