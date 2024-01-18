import { createServer } from "miragejs";

const INITIAL_COUNTER = 10;

createServer({
    routes() {
        console.log("Setting up MirageJS server");
        this.namespace = "api";

        this.get("/counter", () => {
            return {
                counter: INITIAL_COUNTER,
            };
        });
    },
    logging: true,
});
