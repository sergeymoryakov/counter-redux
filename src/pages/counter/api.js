import { client } from "../../api/client";

export const API = {
    getCounter: function () {
        console.log("Making request to api/counter");
        return client.get("api/counter");
    },
};
