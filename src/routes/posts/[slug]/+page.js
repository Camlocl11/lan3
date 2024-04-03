import { WP_SOURCE, DEST } from '../../../lib/config'
import { error } from '@sveltejs/kit';
import {decode} from 'html-entities';


export async function load({ params, fetch }) {
    let res = await fetch(WP_SOURCE + `posts?slug=${params.slug}&_embed`);
    let data = await res.json();
    let post = data[0];
    post.title.rendered = decode(post.title.rendered);

    if (post == null) {
        throw error(400, 'No post exists');
    }

    return {
        post
    };
}
