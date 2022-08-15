/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */

const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
	try {
		const response = await fetch(url, options);

		if (response.status === 204) {
			return null;
		}

		const payload = await response.json();

		if (payload.error) {
			return Promise.reject({ message: payload.error });
		}
		return payload.data;
	} catch (error) {
		if (error.name !== "AbortError") {
			console.error(error.stack);
			throw error;
		}
		return Promise.resolve(onCancel);
	}
}

export async function listResources(signal) {
	const url = new URL(`${API_BASE_URL}/resources`);
	return await fetchJson(url, { headers, signal }, []);
}

export async function listContacts(signal) {
	const url = new URL(`${API_BASE_URL}/contacts`);
	return await fetchJson(url, { headers, signal }, []);
}

export async function listPosts(signal) {
	const url = new URL(`${API_BASE_URL}/posts`);
	return await fetchJson(url, { headers, signal }, []);
}