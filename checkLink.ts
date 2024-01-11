export async function checkLink(link: string): Promise<boolean> {
    const params = {
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", 
            "Accept-Encoding": "gzip, deflate, br", 
            "Accept-Language": "en-US,en;q=0.5", 
            "Sec-Fetch-Dest": "document", 
            "Sec-Fetch-Mode": "navigate", 
            "Sec-Fetch-Site": "cross-site", 
            "Sec-Fetch-User": "?1", 
            "Upgrade-Insecure-Requests": "1", 
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0", 
            "X-Amzn-Trace-Id": "Root=1-659f58c5-4de24ef7384486270161f185"
        }
    };

    try {
        const response = await fetch(link, params);

        if (response.ok) {
            console.log(link, "is valid");
            return false;
        }

        if (response.status === 429) {
            console.log(link, "is valid");
            return false;
        }

        console.log(link, "is invalid");
        return true;
    } catch (error: any) {
        if (error.cause.code === "EAI_AGAIN") {
            console.error("Error: No Internet Connection");
            return false;
        }

        if (error.cause.code === "ENOTFOUND") {
            console.log(link, "is invalid");
            return true;
        } 

        console.log(error);
        return false;
    }
}