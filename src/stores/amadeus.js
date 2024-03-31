import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { API_KEY, API_SECRET, BASE_URL } from "@/vars";

function _url(ep) {
    return BASE_URL + ep
}

export const useAmadeus = defineStore("amadeus", () => {
    async function generateToken() {
        fetch(_url("/v1/security/oauth2/token"), {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem('token', res.access_token)
            });
    }

    async function getToken() {
        var token = localStorage.getItem("token");
        if (!token) {
            await generateToken();
        }

        return localStorage.getItem('token')
    }

    async function getLocations(keyword) {
        const token = await getToken().then((t) => t);
        var result = []
        await fetch(_url(`/v1/reference-data/locations?keyword=${keyword}&subType=CITY,AIRPORT`), {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => res.json())
            .then((res) => {
                result = res.data
            });
        return result;
    }

    async function getResults(params) {
        const token = await getToken().then((t) => t);
        var result = []
        await fetch(_url(`/shopping/flight-offers`), {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                result = res.data
            });
        return result;
    }

    return { getToken, getLocations };
});
