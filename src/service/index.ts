
export async function getListPost(category: string): Promise<any> {
    category = category ? category : "all";
    let response;
    try {
        response = await fetch(`/api/listPost/${category}`);
    }
    catch (err) {
        console.log(err);
    }
    if (!response || !response.ok || response.status != 200) return [];
    return await response.json();
}