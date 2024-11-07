import "@std/dotenv/load";

export default {
	port: Deno.env.get("SERVER_PORT"),
};
