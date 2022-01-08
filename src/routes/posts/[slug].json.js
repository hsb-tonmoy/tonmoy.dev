import { client } from '$lib/graphql-client.js';
import { gql } from 'graphql-request';

export const get = async (req) => {
	const slug = req.params.slug;
	try {
		const query = gql`
			query Post($slug: String!) {
				post(where: { slug: $slug }) {
					title
					content {
						markdown
					}
					date
					publishedAt
					updatedAt
				}
			}
		`;
		const variables = { slug };
		const { post } = await client.request(query, variables);

		return {
			status: 200,
			body: { post }
		};
	} catch (error) {
		return {
			status: 500,
			body: error
		};
	}
};
