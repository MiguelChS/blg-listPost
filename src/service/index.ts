
export async function getListPost(): Promise<any> {
    let response = await fetch("/api/listPost");
    if (!response.ok || response.status != 200) return [];
    return await response.json();
}