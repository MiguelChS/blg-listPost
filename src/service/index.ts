
export async function getListPost(category: string): Promise<any> {
    category = category ? category : "all";
    let response = await fetch(`/api/listPost/${category}`);
    if (!response.ok || response.status != 200) return [];
    return await response.json();
}