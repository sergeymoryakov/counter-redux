import { createServer } from "miragejs";

const INITIAL_COUNTER = 10;

createServer({
    routes() {
        this.namespace = "api";

        this.get("/counter", () => {
            return {
                counter: INITIAL_COUNTER,
            };
        });
    },
});
