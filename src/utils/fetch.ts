export default function siteFetch(url: string) {
    return fetch(new URL(url, process.env.NEXT_PUBLIC_HOST));
}